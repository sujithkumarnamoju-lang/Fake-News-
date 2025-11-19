
import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';
import ShareButton from './ShareButton';
import Logo from './Logo';
import LanguageSwitcher from './LanguageSwitcher';
import { Language } from '../types';
import { Translation } from '../translations';

interface HeaderProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Translation['header'];
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage, t }) => {
  return (
    <header className="w-full p-4 bg-primary/80 backdrop-blur-sm border-b border-tertiary sticky top-0 z-10">
        <div className="w-full max-w-4xl mx-auto flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Logo />
                <div className="text-left">
                    <h1 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-dark">
                        {t.title}
                    </h1>
                    <p className="text-text-muted text-sm hidden md:block">{t.subtitle}</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
              <ShareButton />
              <LanguageSwitcher currentLanguage={language} onLanguageChange={setLanguage} />
              <ThemeSwitcher />
            </div>
        </div>
    </header>
  );
};

export default Header;
