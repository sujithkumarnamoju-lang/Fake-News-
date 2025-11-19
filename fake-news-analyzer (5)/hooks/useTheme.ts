import { useState, useEffect } from 'react';

export type Theme = 'slate' | 'zinc' | 'light';

function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') {
      return 'slate';
    }
    try {
      const storedTheme = window.localStorage.getItem('app-theme') as Theme | null;
      return storedTheme || 'slate';
    } catch (error) {
      console.error(error);
      return 'slate';
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('theme-slate', 'theme-zinc', 'theme-light');
    root.classList.add(`theme-${theme}`);
    try {
      window.localStorage.setItem('app-theme', theme);
    } catch (error) {
        console.error(error);
    }
  }, [theme]);

  return [theme, setTheme];
}

export default useTheme;
