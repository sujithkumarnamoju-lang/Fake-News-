
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { analyzeAuthenticity, analyzeSocialMedia, analyzeWithPerplexity, analyzeWithChatGPT, findRelatedNews, analyzeFast, ERROR_CODES } from './services/geminiService';
import { Analysis, HistoryItem, AnalysisMode } from './types';
import useLocalStorage from './hooks/useLocalStorage';
import Header from './components/Header';
import ResultDisplay from './components/ResultDisplay';
import InfoSection from './components/InfoSection';
import SampleNewsButtons from './components/SampleNewsButtons';
import HistoryDisplay from './components/HistoryDisplay';
import { FAKE_NEWS_SAMPLES, REAL_NEWS_SAMPLES } from './constants';
import FeatureGrid from './components/FeatureGrid';
import AnalysisModeSelector from './components/AnalysisModeSelector';
import useTheme from './hooks/useTheme';
import ResultSkeleton from './components/ResultSkeleton';
import ImageFeatureSection from './components/ImageFeatureSection';
import useLanguage from './hooks/useLanguage';
import { translations } from './translations';

const App: React.FC = () => {
  useTheme(); // Initialize and apply theme
  const [language, setLanguage] = useLanguage();
  const [articleText, setArticleText] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Analysis | null>(null);
  const [history, setHistory] = useLocalStorage<HistoryItem[]>('veritas-history', []);
  const [analysisIdForFeedback, setAnalysisIdForFeedback] = useState<number | null>(null);
  const [analysisMode, setAnalysisMode] = useState<AnalysisMode>('AUTHENTICITY');

  // Ref for the hidden file input
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Fallback to English if translation for current language is missing to prevent crashes
  const t = translations[language] || translations['en'];

  const performAnalysis = useCallback(async (text: string, mode: AnalysisMode) => {
    // Safe access to translations inside callback
    const currentT = translations[language] || translations['en'];
    
    if (text.trim().length < 20) {
      setError(currentT.input.errorLength);
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setAnalysisIdForFeedback(null);
    try {
      let analysis: Analysis;
      switch (mode) {
        case 'AUTHENTICITY':
          analysis = await analyzeAuthenticity(text, language);
          break;
        case 'SOCIAL_MEDIA':
          analysis = await analyzeSocialMedia(text, language);
          break;
        case 'PERPLEXITY':
          analysis = await analyzeWithPerplexity(text, language);
          break;
        case 'CHATGPT':
          analysis = await analyzeWithChatGPT(text, language);
          break;
        case 'RELATED_NEWS':
          analysis = await findRelatedNews(text, language);
          break;
        case 'FAST':
          analysis = await analyzeFast(text, language);
          break;
        default:
          throw new Error(`Unknown analysis mode: ${mode}`);
      }
      
      setResult(analysis);
      const newItem: HistoryItem = { 
        id: Date.now(), 
        articleText: text, 
        analysis, 
        feedback: null 
      };
      setHistory(prevHistory => [newItem, ...prevHistory].slice(0, 5));
      setAnalysisIdForFeedback(newItem.id);

    } catch (err: any) {
      console.error("Analysis failed:", err);
      setResult(null);
      
      // Safely determine the error code
      const errorCode = err instanceof Error ? err.message : ERROR_CODES.GENERIC;

      // Map standardized error codes to translated messages
      let userMessage = currentT.errors.generic;

      switch (errorCode) {
        case ERROR_CODES.API_KEY:
            userMessage = currentT.errors.apiKey;
            break;
        case ERROR_CODES.RATE_LIMIT:
            userMessage = currentT.errors.rateLimit;
            break;
        case ERROR_CODES.NETWORK:
            userMessage = currentT.errors.network;
            break;
        case ERROR_CODES.PARSING:
            userMessage = currentT.errors.parsing;
            break;
        case ERROR_CODES.SERVER:
            userMessage = currentT.errors.server;
            break;
        default:
            userMessage = currentT.errors.generic;
            break;
      }
      setError(userMessage);
    } finally {
      setIsLoading(false);
    }
  }, [setHistory, language]);
  
    // Effect to handle loading shared content from URL on initial load
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const textParam = params.get('text');
        const modeParam = params.get('mode') as AnalysisMode;
    
        if (textParam) {
          try {
            // Use a robust method to decode Base64 strings that might contain Unicode
            const fromBase64 = (str: string) => decodeURIComponent(escape(atob(str)));
            const decodedText = fromBase64(textParam);
            setArticleText(decodedText);
            const validMode = modeParam && ['AUTHENTICITY', 'SOCIAL_MEDIA', 'PERPLEXITY', 'CHATGPT', 'RELATED_NEWS', 'FAST'].includes(modeParam) ? modeParam : 'AUTHENTICITY';
            setAnalysisMode(validMode);
            // Immediately trigger analysis for shared content
            performAnalysis(decodedText, validMode);
            // Clean up URL
            window.history.replaceState({}, '', window.location.pathname);
          } catch (e) {
            console.error("Failed to decode text from URL:", e);
          }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [performAnalysis]);


  const handleAnalyzeClick = () => {
    performAnalysis(articleText, analysisMode);
  };

  const handleReset = () => {
    setArticleText('');
    setResult(null);
    setError(null);
    setIsLoading(false);
    setAnalysisIdForFeedback(null);
  };

  const loadSample = (type: 'fake' | 'real') => {
    const samples = type === 'fake' ? FAKE_NEWS_SAMPLES : REAL_NEWS_SAMPLES;
    const randomSample = samples[Math.floor(Math.random() * samples.length)];
    setArticleText(randomSample);
    setError(null);
  };
  
  const handleFeedback = (id: number, feedback: 'up' | 'down') => {
    setHistory(currentHistory => 
      currentHistory.map(item =>
        item.id === id ? { ...item, feedback } : item
      )
    );
    setAnalysisIdForFeedback(null); // Feedback given, so hide buttons
  };

  const handleLoadFromHistory = (item: HistoryItem) => {
    setArticleText(item.articleText);
    setResult(item.analysis);
    setAnalysisMode(item.analysis.type);
    setAnalysisIdForFeedback(null); // Can't give feedback on old items
  };
  
  const handleClearHistory = () => {
    setHistory([]);
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const text = e.target?.result;
        if (typeof text === 'string') {
            setArticleText(text);
            setError(null);
        }
    };
    reader.onerror = () => setError(t.input.uploadError);
    reader.readAsText(file);
    // Reset input value to allow re-uploading the same file if needed
    event.target.value = '';
  };
  
  if (!t) return null; // Guard against rendering before translations are ready

  return (
    <div className="min-h-screen bg-primary font-sans flex flex-col items-center">
      <Header language={language} setLanguage={setLanguage} t={t.header} />
      <main className="w-full max-w-4xl mx-auto p-4 md:p-8 space-y-8">
        <FeatureGrid t={t.featureGrid} />
        <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary">
          <div className="flex flex-col gap-4 mb-4">
             <AnalysisModeSelector 
                currentMode={analysisMode} 
                onModeChange={(mode) => {
                    setAnalysisMode(mode);
                    setResult(null);
                }}
                disabled={isLoading}
                t={t.modes}
             />
          </div>
          <div className="relative">
            <textarea
              value={articleText}
              onChange={(e) => {
                setArticleText(e.target.value);
                setError(null);
              }}
              placeholder={t.input.placeholder}
              className={`w-full h-48 p-4 bg-primary border rounded-lg focus:border-accent-dark transition-all duration-300 text-text-base placeholder-text-subtle ${
                isLoading 
                ? 'border-accent-dark/50 cursor-wait animate-pulse-ring' 
                : 'border-muted focus:animate-pulse-ring'
              }`}
              disabled={isLoading}
            />
          </div>
          <div className="h-6 mt-4 flex items-center justify-center">
            {error && <p role="alert" className="text-red-400 text-center text-sm font-medium px-4 py-1 bg-red-500/10 rounded-full border border-red-500/20">{error}</p>}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between mt-4 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
                <SampleNewsButtons
                  onLoadFake={() => loadSample('fake')}
                  onLoadReal={() => loadSample('real')}
                  disabled={isLoading}
                  t={t.samples}
                />
                <div className="hidden sm:block w-px h-6 bg-tertiary/50"></div>
                <button
                    onClick={() => fileInputRef.current?.click()}
                    disabled={isLoading}
                    className="flex items-center gap-2 text-sm text-text-muted hover:text-accent transition-colors disabled:opacity-50"
                    title={t.input.uploadFile}
                >
                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                    <span className="hidden sm:inline">{t.input.uploadFile}</span>
                </button>
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                    className="hidden" 
                    accept=".txt"
                />
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={handleReset}
                disabled={isLoading}
                className="px-6 py-2 bg-tertiary text-text-base font-semibold rounded-lg hover:bg-muted disabled:bg-secondary disabled:cursor-not-allowed transition-colors duration-300"
              >
                {t.input.reset}
              </button>
              <button
                onClick={handleAnalyzeClick}
                disabled={isLoading}
                className="px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark disabled:bg-accent/50 disabled:cursor-not-allowed transition-colors duration-300"
              >
                {t.input.analyze}
              </button>
            </div>
          </div>
        </div>
        
        {isLoading && <ResultSkeleton />}
        {result && !isLoading && (
          <ResultDisplay 
            result={result} 
            analysisIdForFeedback={analysisIdForFeedback} 
            onFeedback={handleFeedback} 
            articleText={articleText}
            analysisMode={analysisMode}
            t={t.results}
            tModes={t.modes}
          />
        )}
        
        {!result && !isLoading && <ImageFeatureSection t={t.imageFeatures} />}

        <HistoryDisplay 
          history={history} 
          onLoad={handleLoadFromHistory} 
          onClear={handleClearHistory} 
          t={t.history}
          tModes={t.modes}
        />

        <InfoSection t={t.info} />

      </main>
      <footer className="w-full text-center p-4 text-text-subtle text-sm">
        <p>{t.footer}</p>
      </footer>
    </div>
  );
};

export default App;