
import React from 'react';
import { Analysis, AuthenticityAnalysis, SocialMediaAnalysis, PerplexityAnalysis, ChatGPTAnalysis, RelatedNewsAnalysis, FastAnalysis, AnalysisMode } from '../types';
import ShareResultButton from './ShareResultButton';
import { Translation } from '../translations';

interface ResultDisplayProps {
  result: Analysis;
  analysisIdForFeedback: number | null;
  onFeedback: (id: number, feedback: 'up' | 'down') => void;
  articleText: string;
  analysisMode: AnalysisMode;
  t: Translation['results'];
  tModes: Translation['modes'];
}

const AuthenticityResult: React.FC<{ result: AuthenticityAnalysis; t: Translation['results'] }> = ({ result, t }) => {
    const isFake = result.prediction === 'FAKE';
    const badgeColor = isFake ? 'bg-red-500/20 text-red-300 border-red-500' : 'bg-green-500/20 text-green-300 border-green-500';
    const textColor = isFake ? 'text-red-400' : 'text-green-400';
    const progressColor = isFake ? 'bg-red-500' : 'bg-green-500';
  
    return (
      <>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          <div className="flex flex-col items-center">
            <p className="text-text-muted text-sm mb-2">{t.prediction}</p>
            <span className={`px-6 py-2 text-2xl font-bold rounded-full border ${badgeColor}`}>
              {result.prediction}
            </span>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-text-muted text-sm mb-2">{t.confidence}</p>
            <p className={`text-4xl font-bold ${textColor}`}>{result.confidence.toFixed(0)}%</p>
            <div className="w-32 h-2 bg-tertiary rounded-full mt-2 overflow-hidden">
              <div
                className={`h-full rounded-full ${progressColor}`}
                style={{ width: `${result.confidence}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-tertiary">
          <h3 className="font-semibold text-text-base mb-2">{t.explanation}</h3>
          <p className="text-text-muted text-sm leading-relaxed mb-4">{result.explanation.summary}</p>
          
          {result.explanation.supportingPhrases?.length > 0 && (
            <div>
              <h4 className="font-semibold text-text-muted text-xs uppercase tracking-wider mb-2">{t.keyIndicators}</h4>
              <div className="space-y-2">
                {result.explanation.supportingPhrases.map((phrase, index) => (
                  <blockquote key={index} className="border-l-4 border-tertiary pl-4 italic text-text-subtle text-sm">
                    {phrase}
                  </blockquote>
                ))}
              </div>
            </div>
          )}
        </div>
      </>
    );
};
  
const SocialMediaResult: React.FC<{ result: SocialMediaAnalysis; t: Translation['results'] }> = ({ result, t }) => {
    return (
        <div className="space-y-4">
        <div>
            <h3 className="font-semibold text-text-base mb-2">{t.headline}</h3>
            <p className="text-lg text-accent font-bold">{result.headline}</p>
        </div>
        <div className="pt-4 border-t border-tertiary">
            <h3 className="font-semibold text-text-base mb-2">{t.post}</h3>
            <p className="text-text-muted text-sm leading-relaxed whitespace-pre-wrap">{result.postBody}</p>
        </div>
        <div className="pt-4 border-t border-tertiary">
            <h3 className="font-semibold text-text-base mb-2">{t.hashtags}</h3>
            <div className="flex flex-wrap gap-2">
            {result.hashtags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-tertiary text-text-muted text-xs font-semibold rounded-full">
                #{tag}
                </span>
            ))}
            </div>
        </div>
        </div>
    );
};

const PerplexityResult: React.FC<{ result: PerplexityAnalysis; t: Translation['results'] }> = ({ result, t }) => {
  return (
    <>
      <div>
        <h3 className="font-semibold text-text-base mb-2">{t.summary}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{result.summary}</p>
      </div>
      <div className="mt-6 pt-6 border-t border-tertiary">
        <h3 className="font-semibold text-text-base mb-3">{t.sources}</h3>
        <div className="space-y-3">
          {result.sources.map((source, index) => (
            <a 
              key={index} 
              href={source.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block p-3 bg-primary/50 rounded-lg border border-tertiary hover:bg-muted transition-colors"
            >
              <p className="font-semibold text-accent-dark">{source.title}</p>
              <p className="text-sm text-text-subtle truncate">{source.link}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

const ChatGPTResult: React.FC<{ result: ChatGPTAnalysis; t: Translation['results'] }> = ({ result, t }) => {
  return (
    <>
       <div>
        <h3 className="font-semibold text-text-base mb-2">{t.summary}</h3>
        <p className="text-text-muted text-sm leading-relaxed">{result.summary}</p>
      </div>
       <div className="mt-6 pt-6 border-t border-tertiary">
        <h3 className="font-semibold text-text-base mb-3">{t.keyPoints}</h3>
        <ul className="list-disc list-inside space-y-2 text-text-muted text-sm">
          {result.keyPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="mt-6 pt-6 border-t border-tertiary">
        <h3 className="font-semibold text-text-base mb-2">{t.conclusion}</h3>
        <p className="text-text-muted text-sm leading-relaxed italic">"{result.conclusion}"</p>
      </div>
    </>
  );
};

const RelatedNewsResult: React.FC<{ result: RelatedNewsAnalysis; t: Translation['results'] }> = ({ result, t }) => {
  return (
    <>
      <div>
        <h3 className="font-semibold text-text-base mb-2">{t.relatedNewsSummary}</h3>
        <div className="text-text-muted text-sm leading-relaxed whitespace-pre-wrap">
           {result.summary}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-tertiary">
        <h3 className="font-semibold text-text-base mb-3">{t.foundSources}</h3>
        {result.sources.length > 0 ? (
          <div className="grid gap-3 sm:grid-cols-2">
            {result.sources.map((source, index) => (
              <a
                key={index}
                href={source.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col p-3 bg-primary/50 rounded-lg border border-tertiary hover:border-accent hover:shadow-md transition-all"
              >
                <p className="font-medium text-accent-dark text-sm line-clamp-2 mb-1">{source.title}</p>
                <p className="text-xs text-text-subtle truncate mt-auto">{source.uri}</p>
              </a>
            ))}
          </div>
        ) : (
           <p className="text-text-subtle text-sm italic">No specific sources found.</p>
        )}
      </div>
    </>
  );
};

const FastResult: React.FC<{ result: FastAnalysis; t: Translation['results'] }> = ({ result, t }) => {
    let badgeColor = 'bg-tertiary text-text-muted border-muted';
    if (result.verdict === 'LIKELY REAL') badgeColor = 'bg-green-500/20 text-green-300 border-green-500';
    if (result.verdict === 'LIKELY FAKE') badgeColor = 'bg-red-500/20 text-red-300 border-red-500';
    if (result.verdict === 'UNCERTAIN') badgeColor = 'bg-yellow-500/20 text-yellow-300 border-yellow-500';

    return (
        <div className="flex flex-col items-center text-center">
             <p className="text-text-muted text-sm mb-3">{t.fastVerdict}</p>
            <span className={`px-8 py-3 text-xl font-bold rounded-full border mb-6 ${badgeColor}`}>
                {result.verdict}
            </span>
             <h3 className="font-semibold text-text-base mb-2">{t.summary}</h3>
            <p className="text-text-muted text-sm leading-relaxed">{result.summary}</p>
        </div>
    );
};

const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, analysisIdForFeedback, onFeedback, articleText, analysisMode, t, tModes }) => {
  const getTitle = (type: Analysis['type']) => {
    switch(type) {
      case 'AUTHENTICITY': return `${tModes.AUTHENTICITY} Analysis`;
      case 'SOCIAL_MEDIA': return `${tModes.SOCIAL_MEDIA} Post Generator`;
      case 'PERPLEXITY': return `${tModes.PERPLEXITY}-Style Analysis`;
      case 'CHATGPT': return `${tModes.CHATGPT}-Style Analysis`;
      case 'RELATED_NEWS': return `${tModes.RELATED_NEWS} Search`;
      case 'FAST': return `${tModes.FAST}`;
      default: return 'Analysis Result';
    }
  }

  return (
    <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-accent text-center flex-1">{getTitle(result.type)}</h2>
        <ShareResultButton articleText={articleText} analysisMode={analysisMode} />
      </div>
      
      {result.type === 'AUTHENTICITY' && <AuthenticityResult result={result} t={t} />}
      {result.type === 'SOCIAL_MEDIA' && <SocialMediaResult result={result} t={t} />}
      {result.type === 'PERPLEXITY' && <PerplexityResult result={result} t={t} />}
      {result.type === 'CHATGPT' && <ChatGPTResult result={result} t={t} />}
      {result.type === 'RELATED_NEWS' && <RelatedNewsResult result={result} t={t} />}
      {result.type === 'FAST' && <FastResult result={result} t={t} />}

      {analysisIdForFeedback && (
        <div className="mt-6 pt-4 border-t border-tertiary text-center transition-opacity duration-300">
          <p className="text-text-muted text-sm mb-3">{t.helpfulQuestion}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => onFeedback(analysisIdForFeedback, 'up')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary text-text-muted hover:bg-green-500/20 hover:text-green-300 transition-colors"
              aria-label="Helpful"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.085a2 2 0 00-1.736.97l-2.714 4.224a2 2 0 00-.316.986V17a2 2 0 002 2h4a2 2 0 002-2v-4.5" />
              </svg>
              <span>{t.helpfulYes}</span>
            </button>
            <button
              onClick={() => onFeedback(analysisIdForFeedback, 'down')}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-tertiary text-text-muted hover:bg-red-500/20 hover:text-red-300 transition-colors"
              aria-label="Not helpful"
            >
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.017c.163 0 .326.02.485.06L17 4m-7 10v5a2 2 0 002 2h.085a2 2 0 001.736-.97l2.714-4.224a2 2 0 00.316-.986V7a2 2 0 00-2-2h-4a2 2 0 00-2 2v4.5" />
              </svg>
              <span>{t.helpfulNo}</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultDisplay;