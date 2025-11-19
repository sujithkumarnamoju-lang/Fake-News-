
import React from 'react';
import { Translation } from '../translations';

interface SampleNewsButtonsProps {
  onLoadFake: () => void;
  onLoadReal: () => void;
  disabled: boolean;
  t: Translation['samples'];
}

const SampleNewsButtons: React.FC<SampleNewsButtonsProps> = ({ onLoadFake, onLoadReal, disabled, t }) => {
  return (
    <div className="flex items-center justify-start gap-4">
      <p className="text-sm text-text-muted hidden sm:block">{t.label}</p>
      <button
        onClick={onLoadFake}
        disabled={disabled}
        className="text-sm px-3 py-1 bg-red-500/20 text-red-300 rounded-md border border-red-500/50 hover:bg-red-500/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t.fake}
      </button>
      <button
        onClick={onLoadReal}
        disabled={disabled}
        className="text-sm px-3 py-1 bg-green-500/20 text-green-300 rounded-md border border-green-500/50 hover:bg-green-500/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {t.real}
      </button>
    </div>
  );
};

export default SampleNewsButtons;
