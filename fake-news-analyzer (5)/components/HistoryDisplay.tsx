
import React from 'react';
import { HistoryItem, Analysis } from '../types';
import { Translation } from '../translations';

interface HistoryDisplayProps {
  history: HistoryItem[];
  onLoad: (item: HistoryItem) => void;
  onClear: () => void;
  t: Translation['history'];
  tModes: Translation['modes'];
}

const HistoryDisplay: React.FC<HistoryDisplayProps> = ({ history, onLoad, onClear, t, tModes }) => {
  if (history.length === 0) {
    return null;
  }

  const getFeedbackEmoji = (feedback: 'up' | 'down' | null) => {
    if (feedback === 'up') return '👍';
    if (feedback === 'down') return '👎';
    return null;
  };
  
  const getAnalysisInfo = (analysis: Analysis): { text: string; className: string } => {
    switch (analysis.type) {
        case 'AUTHENTICITY':
            return {
                text: analysis.prediction,
                className: analysis.prediction === 'FAKE' ? 'text-red-400' : 'text-green-400',
            };
        case 'SOCIAL_MEDIA':
            return {
                text: tModes.SOCIAL_MEDIA,
                className: 'text-cyan-400',
            };
        case 'PERPLEXITY':
            return {
                text: tModes.PERPLEXITY,
                className: 'text-blue-400',
            };
        case 'CHATGPT':
            return {
                text: tModes.CHATGPT,
                className: 'text-teal-400',
            };
        case 'RELATED_NEWS':
            return {
                text: tModes.RELATED_NEWS,
                className: 'text-violet-400',
            };
        case 'FAST':
            return {
                text: tModes.FAST,
                className: 'text-orange-400',
            };
        default:
            return { text: '', className: '' };
    }
  }

  return (
    <div className="w-full bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-accent">{t.title}</h2>
        <button 
          onClick={onClear} 
          className="text-sm text-text-muted hover:text-red-400 transition-colors"
        >
          {t.clear}
        </button>
      </div>
      <ul className="space-y-3">
        {history.map((item) => {
          const analysisInfo = getAnalysisInfo(item.analysis);
          return (
            <li key={item.id} className="flex items-center justify-between p-3 bg-primary/50 rounded-lg border border-tertiary">
              <div className="flex-1 overflow-hidden">
                <p className="truncate text-text-base text-sm">
                  "{item.articleText}"
                </p>
              </div>
              <div className="flex items-center gap-4 ml-4 flex-shrink-0">
                 <span className={`font-bold text-sm ${analysisInfo.className}`}>
                  {analysisInfo.text}
                </span>
                <span className="text-lg">{getFeedbackEmoji(item.feedback)}</span>
                <button 
                  onClick={() => onLoad(item)}
                  className="text-sm px-3 py-1 bg-tertiary hover:bg-muted rounded-md transition-colors"
                >
                  {t.reload}
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HistoryDisplay;