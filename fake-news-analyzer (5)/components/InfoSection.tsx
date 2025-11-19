
import React, { useState } from 'react';
import { Translation } from '../translations';

interface InfoSectionProps {
    t: Translation['info'];
}

const InfoSection: React.FC<InfoSectionProps> = ({ t }) => {
  const [openSection, setOpenSection] = useState<string | null>('how');

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="space-y-4">
      <InfoCard
        title={t.howWorksTitle}
        isOpen={openSection === 'how'}
        onToggle={() => toggleSection('how')}
      >
        <p>
          {t.howWorksDesc}
        </p>
      </InfoCard>
      <InfoCard
        title={t.tipsTitle}
        isOpen={openSection === 'tips'}
        onToggle={() => toggleSection('tips')}
      >
        <ul className="list-disc list-inside space-y-2">
          <li>{t.tip1}</li>
          <li>{t.tip2}</li>
          <li>{t.tip3}</li>
          <li>{t.tip4}</li>
          <li>{t.tip5}</li>
        </ul>
      </InfoCard>
    </div>
  );
};

interface InfoCardProps {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, isOpen, onToggle, children }) => {
  return (
    <div className="bg-secondary/50 rounded-xl border border-tertiary overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex justify-between items-center p-4 text-left font-semibold text-text-base"
      >
        <span>{title}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out grid ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="overflow-hidden">
          <div className="p-4 pt-0 text-text-muted text-sm">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
