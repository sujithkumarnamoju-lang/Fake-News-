
export type Language = 'en' | 'es' | 'fr' | 'de' | 'hi' | 'te';

export interface AuthenticityAnalysis {
  type: 'AUTHENTICITY';
  prediction: 'FAKE' | 'REAL';
  confidence: number;
  explanation: {
    summary: string;
    supportingPhrases: string[];
  };
}

export interface SocialMediaAnalysis {
  type: 'SOCIAL_MEDIA';
  headline: string;
  postBody: string;
  hashtags: string[];
}

export interface PerplexityAnalysis {
  type: 'PERPLEXITY';
  summary: string;
  sources: {
    title: string;
    link: string;
  }[];
}

export interface ChatGPTAnalysis {
  type: 'CHATGPT';
  summary: string;
  keyPoints: string[];
  conclusion: string;
}

export interface RelatedNewsAnalysis {
  type: 'RELATED_NEWS';
  summary: string;
  sources: {
    title: string;
    uri: string;
  }[];
}

export interface FastAnalysis {
  type: 'FAST';
  verdict: 'LIKELY REAL' | 'LIKELY FAKE' | 'UNCERTAIN';
  summary: string;
}

export type Analysis = AuthenticityAnalysis | SocialMediaAnalysis | PerplexityAnalysis | ChatGPTAnalysis | RelatedNewsAnalysis | FastAnalysis;

export type AnalysisMode = 'AUTHENTICITY' | 'SOCIAL_MEDIA' | 'PERPLEXITY' | 'CHATGPT' | 'RELATED_NEWS' | 'FAST';

export interface HistoryItem {
  id: number;
  articleText: string;
  analysis: Analysis;
  feedback: 'up' | 'down' | null;
}