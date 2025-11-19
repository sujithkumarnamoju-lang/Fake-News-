
import React from 'react';
import { AnalysisMode } from '../types';
import { Translation } from '../translations';

interface AnalysisModeSelectorProps {
  currentMode: AnalysisMode;
  onModeChange: (mode: AnalysisMode) => void;
  disabled: boolean;
  t: Translation['modes'];
}

const AnalysisModeSelector: React.FC<AnalysisModeSelectorProps> = ({ currentMode, onModeChange, disabled, t }) => {
  
  const modes: { id: AnalysisMode; label: string }[] = [
    { id: 'AUTHENTICITY', label: t.AUTHENTICITY },
    { id: 'SOCIAL_MEDIA', label: t.SOCIAL_MEDIA },
    { id: 'PERPLEXITY', label: t.PERPLEXITY },
    { id: 'CHATGPT', label: t.CHATGPT },
    { id: 'RELATED_NEWS', label: t.RELATED_NEWS },
    { id: 'FAST', label: t.FAST },
  ];

  return (
    <div className="flex items-center p-1 space-x-1 bg-primary rounded-full border border-tertiary self-center flex-wrap justify-center">
      {modes.map((mode) => (
        <button
          key={mode.id}
          onClick={() => onModeChange(mode.id)}
          disabled={disabled}
          className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-300 m-0.5 ${
            currentMode === mode.id
              ? 'bg-accent text-white shadow'
              : 'text-text-muted hover:bg-secondary/70 disabled:hover:bg-transparent'
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {mode.label}
        </button>
      ))}
    </div>
  );
};

export default AnalysisModeSelector;