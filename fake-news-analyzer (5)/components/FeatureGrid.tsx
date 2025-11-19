
import React from 'react';
import { Translation } from '../translations';

const FeatureCard: React.FC<{ icon: React.ReactElement; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
  <div className="bg-secondary/40 p-4 rounded-lg border border-tertiary/50 flex items-start space-x-4">
    <div className="flex-shrink-0 h-8 w-8 bg-tertiary rounded-full flex items-center justify-center text-accent">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-text-base">{title}</h3>
      <p className="text-sm text-text-muted">{children}</p>
    </div>
  </div>
);

const FeatureGrid: React.FC<{ t: Translation['featureGrid'] }> = ({ t }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <FeatureCard 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            } 
            title={t.onDemandTitle}
        >
            {t.onDemandDesc}
        </FeatureCard>
        <FeatureCard 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            }
            title={t.multiAiTitle}
        >
            {t.multiAiDesc}
        </FeatureCard>
        <FeatureCard 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            } 
            title={t.detailedTitle}
        >
            {t.detailedDesc}
        </FeatureCard>
         <FeatureCard 
            icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                   <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            } 
            title={t.fastAiTitle}
        >
            {t.fastAiDesc}
        </FeatureCard>
    </div>
  );
};

export default FeatureGrid;