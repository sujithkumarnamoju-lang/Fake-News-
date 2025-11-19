import { useState, useEffect } from 'react';
import { Language } from '../types';

const defaultLanguage: Language = 'en';

function useLanguage(): [Language, (language: Language) => void] {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return defaultLanguage;
    }
    try {
      const storedLanguage = window.localStorage.getItem('veritas-language') as Language | null;
      // Basic validation to ensure the stored language is one of the allowed values.
      if (storedLanguage && ['en', 'es', 'fr', 'de', 'hi', 'te'].includes(storedLanguage)) {
        return storedLanguage;
      }
      return defaultLanguage;
    } catch (error) {
      console.error(error);
      return defaultLanguage;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('veritas-language', language);
    } catch (error) {
        console.error(error);
    }
  }, [language]);

  return [language, setLanguage];
}

export default useLanguage;