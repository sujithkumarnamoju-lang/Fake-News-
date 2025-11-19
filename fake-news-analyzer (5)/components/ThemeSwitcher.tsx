import React from 'react';
import useTheme, { Theme } from '../hooks/useTheme';

const themes: { name: Theme, label: string }[] = [
    { name: 'slate', label: 'Slate' },
    { name: 'zinc', label: 'Zinc' },
    { name: 'light', label: 'Light' },
];

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useTheme();

    return (
        <div className="flex items-center gap-2 p-1 bg-secondary rounded-full border border-tertiary">
            {themes.map((t) => (
                <button
                    key={t.name}
                    onClick={() => setTheme(t.name)}
                    className={`px-3 py-1 text-sm font-semibold rounded-full transition-colors duration-300 ${
                        theme === t.name 
                        ? 'bg-accent text-white' 
                        : 'text-text-muted hover:bg-tertiary'
                    }`}
                >
                    {t.label}
                </button>
            ))}
        </div>
    );
};

export default ThemeSwitcher;
