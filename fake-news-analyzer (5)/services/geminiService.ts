
import { GoogleGenAI, Type, type GenerateContentParameters, type GenerateContentResponse } from "@google/genai";
import { AuthenticityAnalysis, SocialMediaAnalysis, PerplexityAnalysis, ChatGPTAnalysis, RelatedNewsAnalysis, FastAnalysis, Language } from '../types';

/**
 * Standardized error codes for easier UI handling
 */
export const ERROR_CODES = {
  API_KEY: 'ERR_API_KEY',
  RATE_LIMIT: 'ERR_RATE_LIMIT',
  NETWORK: 'ERR_NETWORK',
  PARSING: 'ERR_PARSING',
  SERVER: 'ERR_SERVER',
  GENERIC: 'ERR_GENERIC',
};

/**
 * Helper to classify raw errors into standardized codes
 */
const classifyError = (error: any): string => {
  const msg = error?.message?.toLowerCase() || String(error).toLowerCase();
  
  if (msg.includes('api key') || msg.includes('401') || msg.includes('403')) {
    return ERROR_CODES.API_KEY;
  }
  if (msg.includes('429') || msg.includes('resource_exhausted') || msg.includes('overloaded') || msg.includes('quota')) {
    return ERROR_CODES.RATE_LIMIT;
  }
  if (msg.includes('fetch') || msg.includes('network') || msg.includes('offline') || msg.includes('failed to fetch')) {
    return ERROR_CODES.NETWORK;
  }
  if (msg.includes('500') || msg.includes('503') || msg.includes('internal')) {
    return ERROR_CODES.SERVER;
  }
  if (msg.includes('json') || msg.includes('syntax')) {
    return ERROR_CODES.PARSING;
  }
  
  return ERROR_CODES.GENERIC;
};

/**
 * Safely retrieves the API key from process.env, handling environments
 * where process might not be defined but replacement occurs.
 */
const getApiKey = (): string => {
    try {
        return process.env.API_KEY || '';
    } catch (e) {
        return '';
    }
};

/**
 * Wraps the ai.models.generateContent call with a retry mechanism that uses exponential backoff.
 * This helps mitigate rate limiting errors (429).
 */
const makeApiCallWithRetry = async (
  request: GenerateContentParameters,
  maxRetries = 3,
  baseDelay = 2000
): Promise<GenerateContentResponse> => {
  const apiKey = getApiKey();
  
  if (!apiKey) {
      throw new Error(ERROR_CODES.API_KEY);
  }

  const ai = new GoogleGenAI({ apiKey });

  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await ai.models.generateContent(request);
    } catch (error) {
      const errorCode = classifyError(error);

      // Fail fast for API key errors, no need to retry.
      if (errorCode === ERROR_CODES.API_KEY) {
        throw new Error(ERROR_CODES.API_KEY);
      }

      attempt++;
      // Only retry for rate limits or server errors
      if ((errorCode === ERROR_CODES.RATE_LIMIT || errorCode === ERROR_CODES.SERVER) && attempt < maxRetries) {
        const delay = baseDelay * (2 ** (attempt - 1)) + Math.floor(Math.random() * 1000);
        console.warn(
          `Rate limit/Server error. Retrying in ${delay}ms... (Attempt ${attempt}/${maxRetries})`
        );
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        // If we ran out of retries or it's a different type of error, throw the classification
        if (attempt >= maxRetries) {
             throw new Error(errorCode);
        }
        if (errorCode === ERROR_CODES.NETWORK) {
             throw new Error(ERROR_CODES.NETWORK);
        }
        throw error; 
      }
    }
  }
  throw new Error(ERROR_CODES.GENERIC);
};

const languageMap: Record<Language, string> = {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    de: 'German',
    hi: 'Hindi',
    te: 'Telugu',
};

const authenticitySchema = {
  type: Type.OBJECT,
  properties: {
    prediction: {
      type: Type.STRING,
      description: 'The verdict on the news article. Must be either "REAL" or "FAKE".',
      enum: ["REAL", "FAKE"],
    },
    confidence: {
      type: Type.NUMBER,
      description: 'A confidence score for the prediction, from 0 to 100.',
    },
    explanation: {
      type: Type.OBJECT,
      description: 'A detailed analysis of the prediction.',
      properties: {
        summary: {
          type: Type.STRING,
          description: 'A concise, one or two-sentence summary for the prediction.',
        },
        supportingPhrases: {
          type: Type.ARRAY,
          description: 'A list of 2-3 exact phrases from the article text that directly support the prediction.',
          items: { type: Type.STRING },
        },
      },
      required: ['summary', 'supportingPhrases'],
    },
  },
  required: ['prediction', 'confidence', 'explanation'],
};

const socialMediaSchema = {
  type: Type.OBJECT,
  properties: {
    headline: {
      type: Type.STRING,
      description: 'A catchy, short headline suitable for a social media post (e.g., Twitter, Facebook).',
    },
    postBody: {
      type: Type.STRING,
      description: 'The main content of the social media post, summarizing the article in an engaging way. Should be around 2-3 sentences.',
    },
    hashtags: {
      type: Type.ARRAY,
      description: 'A list of 3-5 relevant hashtags for the post, without the # symbol.',
      items: { type: Type.STRING },
    },
  },
  required: ['headline', 'postBody', 'hashtags'],
};

const perplexitySchema = {
    type: Type.OBJECT,
    properties: {
      summary: {
        type: Type.STRING,
        description: 'A concise, one-paragraph summary of the article.',
      },
      sources: {
        type: Type.ARRAY,
        description: 'A list of 3-5 plausible, relevant web sources that a user could consult for fact-checking the article\'s claims.',
        items: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING, description: 'The title of the source page.' },
            link: { type: Type.STRING, description: 'The full URL to the source.' },
          },
          required: ['title', 'link'],
        },
      },
    },
    required: ['summary', 'sources'],
};

const chatgptSchema = {
    type: Type.OBJECT,
    properties: {
      summary: {
        type: Type.STRING,
        description: 'A neutral, well-structured summary of the article\'s main content.',
      },
      keyPoints: {
        type: Type.ARRAY,
        description: 'A list of 3-4 bulleted key points from the article.',
        items: {
          type: Type.STRING,
        },
      },
      conclusion: {
        type: Type.STRING,
        description: 'A concluding thought or takeaway from the article.',
      },
    },
    required: ['summary', 'keyPoints', 'conclusion'],
};

const fastSchema = {
  type: Type.OBJECT,
  properties: {
    verdict: {
      type: Type.STRING,
      description: 'The likely authenticity of the article.',
      enum: ['LIKELY REAL', 'LIKELY FAKE', 'UNCERTAIN'],
    },
    summary: {
      type: Type.STRING,
      description: 'A very brief, single-sentence explanation.',
    },
  },
  required: ['verdict', 'summary'],
};

export const analyzeAuthenticity = async (articleText: string, language: Language): Promise<AuthenticityAnalysis> => {
  try {
    const request: GenerateContentParameters = {
        model: 'gemini-2.5-flash',
        contents: `Analyze the following news article and determine if it is real or fake. Consider the language, tone, source plausibility (if mentioned), and any claims made.
      ---
      ARTICLE: "${articleText}"
      ---
      Provide your analysis in the specified JSON format. Your entire response, including all fields in the JSON schema, must be in ${languageMap[language]}. Your explanation must include a summary and a list of 2-3 exact phrases from the article that support your prediction.`,
        config: {
            responseMimeType: 'application/json',
            responseSchema: authenticitySchema,
        },
    };
    const response = await makeApiCallWithRetry(request);

    const jsonString = response.text.trim();
    
    try {
        const parsedResult = JSON.parse(jsonString);
        if (
            (parsedResult.prediction === 'REAL' || parsedResult.prediction === 'FAKE') &&
            typeof parsedResult.confidence === 'number' &&
            typeof parsedResult.explanation === 'object' &&
            typeof parsedResult.explanation.summary === 'string' &&
            Array.isArray(parsedResult.explanation.supportingPhrases)
        ) {
            return { ...parsedResult, type: 'AUTHENTICITY' };
        } else {
             throw new Error(ERROR_CODES.PARSING);
        }
    } catch (e) {
        throw new Error(ERROR_CODES.PARSING);
    }

  } catch (error: any) {
    console.error('Error analyzing authenticity:', error);
    if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
    }
    throw new Error(classifyError(error));
  }
};

export const analyzeSocialMedia = async (articleText: string, language: Language): Promise<SocialMediaAnalysis> => {
    try {
      const request: GenerateContentParameters = {
        model: 'gemini-2.5-flash',
        contents: `Analyze the following news article and generate a social media post from it. The post should be engaging and accurately reflect the content of the article.
        ---
        ARTICLE: "${articleText}"
        ---
        Provide your output in the specified JSON format. Your entire response, including all fields in the JSON schema, must be in ${languageMap[language]}.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: socialMediaSchema,
        },
      };
      const response = await makeApiCallWithRetry(request);
  
      const jsonString = response.text.trim();
      try {
        const parsedResult = JSON.parse(jsonString);
    
        if (
            typeof parsedResult.headline === 'string' &&
            typeof parsedResult.postBody === 'string' &&
            Array.isArray(parsedResult.hashtags)
        ) {
            return { ...parsedResult, type: 'SOCIAL_MEDIA' };
        } else {
            throw new Error(ERROR_CODES.PARSING);
        }
      } catch (e) {
        throw new Error(ERROR_CODES.PARSING);
      }
    } catch (error: any) {
      console.error('Error analyzing for social media:', error);
      if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
      }
      throw new Error(classifyError(error));
    }
};

export const analyzeWithPerplexity = async (articleText: string, language: Language): Promise<PerplexityAnalysis> => {
    try {
      const request: GenerateContentParameters = {
        model: 'gemini-2.5-flash',
        contents: `Analyze this article in the style of Perplexity AI. Provide a concise, neutral summary and a list of 3-5 plausible, relevant web sources that a user could consult for fact-checking the article's claims.
        ---
        ARTICLE: "${articleText}"
        ---
        Provide your analysis in the specified JSON format. Your entire response, including all fields in the JSON schema, must be in ${languageMap[language]}.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: perplexitySchema,
        },
      };
      const response = await makeApiCallWithRetry(request);
  
      const jsonString = response.text.trim();
      try {
        const parsedResult = JSON.parse(jsonString);
        if (typeof parsedResult.summary === 'string' && Array.isArray(parsedResult.sources)) {
            return { ...parsedResult, type: 'PERPLEXITY' };
        } else {
            throw new Error(ERROR_CODES.PARSING);
        }
      } catch (e) {
        throw new Error(ERROR_CODES.PARSING);
      }
    } catch (error: any) {
      console.error('Error analyzing with Perplexity style:', error);
      if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
      }
      throw new Error(classifyError(error));
    }
};

export const analyzeWithChatGPT = async (articleText: string, language: Language): Promise<ChatGPTAnalysis> => {
    try {
      const request: GenerateContentParameters = {
        model: 'gemini-2.5-flash',
        contents: `Analyze this article in the style of ChatGPT. Provide a neutral, well-structured summary, a few bulleted key points that capture the essence of the article, and a brief concluding thought.
        ---
        ARTICLE: "${articleText}"
        ---
        Provide your analysis in the specified JSON format. Your entire response, including all fields in the JSON schema, must be in ${languageMap[language]}.`,
        config: {
          responseMimeType: 'application/json',
          responseSchema: chatgptSchema,
        },
      };
      const response = await makeApiCallWithRetry(request);
  
      const jsonString = response.text.trim();
      try {
        const parsedResult = JSON.parse(jsonString);
        if (typeof parsedResult.summary === 'string' && Array.isArray(parsedResult.keyPoints) && typeof parsedResult.conclusion === 'string') {
            return { ...parsedResult, type: 'CHATGPT' };
        } else {
            throw new Error(ERROR_CODES.PARSING);
        }
      } catch (e) {
        throw new Error(ERROR_CODES.PARSING);
      }
    } catch (error: any) {
      console.error('Error analyzing with ChatGPT style:', error);
      if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
      }
      throw new Error(classifyError(error));
    }
};

export const findRelatedNews = async (articleText: string, language: Language): Promise<RelatedNewsAnalysis> => {
  try {
    // Note: Grounding requires using the 'tools' config and typically returns unstructured text with metadata.
    // We cannot use responseSchema with googleSearch.
    const request: GenerateContentParameters = {
      model: 'gemini-2.5-flash',
      contents: `Search for recent, reputable news articles covering the topic discussed in the following text. Summarize the current consensus or latest updates on this topic based on the search results.
      ---
      TEXT: "${articleText}"
      ---
      Provide the summary in ${languageMap[language]}.`,
      config: {
        tools: [{ googleSearch: {} }],
      },
    };
    const response = await makeApiCallWithRetry(request);
    
    const summary = response.text || '';
    const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = groundingChunks
      .filter((chunk: any) => chunk.web?.uri && chunk.web?.title)
      .map((chunk: any) => ({
        title: chunk.web.title,
        uri: chunk.web.uri
      }));

    // De-duplicate sources based on URI
    const uniqueSources = Array.from(new Map(sources.map((s: any) => [s.uri, s])).values()) as { title: string; uri: string }[];

    return {
      type: 'RELATED_NEWS',
      summary,
      sources: uniqueSources
    };

  } catch (error: any) {
    console.error('Error finding related news:', error);
    if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
    }
    throw new Error(classifyError(error));
  }
};

export const analyzeFast = async (articleText: string, language: Language): Promise<FastAnalysis> => {
  try {
    const request: GenerateContentParameters = {
      model: 'gemini-2.5-flash-lite',
      contents: `Quickly check the authenticity of this text. Provide a verdict (LIKELY REAL, LIKELY FAKE, or UNCERTAIN) and a single sentence summary.
      ---
      TEXT: "${articleText}"
      ---
      Provide your response in ${languageMap[language]}.`,
      config: {
        responseMimeType: 'application/json',
        responseSchema: fastSchema,
      },
    };
    const response = await makeApiCallWithRetry(request);

    const jsonString = response.text.trim();
    try {
      const parsedResult = JSON.parse(jsonString);
      if (
        (parsedResult.verdict === 'LIKELY REAL' || parsedResult.verdict === 'LIKELY FAKE' || parsedResult.verdict === 'UNCERTAIN') &&
        typeof parsedResult.summary === 'string'
      ) {
        return { ...parsedResult, type: 'FAST' };
      } else {
        throw new Error(ERROR_CODES.PARSING);
      }
    } catch (e) {
      throw new Error(ERROR_CODES.PARSING);
    }
  } catch (error: any) {
    console.error('Error with fast analysis:', error);
    if (Object.values(ERROR_CODES).includes(error.message)) {
        throw error;
    }
    throw new Error(classifyError(error));
  }
};