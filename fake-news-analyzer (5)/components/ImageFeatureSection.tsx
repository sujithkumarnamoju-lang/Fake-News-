
import React from 'react';
import { Translation } from '../translations';

interface ImageFeatureSectionProps {
    t: Translation['imageFeatures'];
}

const ImageFeatureSection: React.FC<ImageFeatureSectionProps> = ({ t }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1495020689067-958852a7765e?q=80&w=1200&auto=format&fit=crop"
          alt="Stack of newspapers"
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h3 className="text-lg font-bold text-accent mb-2">{t.cutNoiseTitle}</h3>
        <p className="text-text-muted text-sm flex-grow">
          {t.cutNoiseDesc}
        </p>
      </div>
      
      <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop"
          alt="Data analysis dashboard"
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h3 className="text-lg font-bold text-accent mb-2">{t.dataInsightsTitle}</h3>
        <p className="text-text-muted text-sm flex-grow">
           {t.dataInsightsDesc}
        </p>
      </div>

      <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop"
          alt="Global connections map"
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h3 className="text-lg font-bold text-accent mb-2">{t.globalPerspectiveTitle}</h3>
        <p className="text-text-muted text-sm flex-grow">
          {t.globalPerspectiveDesc}
        </p>
      </div>

      <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary flex flex-col">
        <img
          src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
          alt="Abstract AI technology visualization"
          className="w-full h-48 object-cover rounded-lg mb-4"
          loading="lazy"
        />
        <h3 className="text-lg font-bold text-accent mb-2">{t.poweredByTitle}</h3>
        <p className="text-text-muted text-sm flex-grow">
          {t.poweredByDesc}
        </p>
      </div>
    </div>
  );
};

export default ImageFeatureSection;
