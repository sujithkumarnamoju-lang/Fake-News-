import React, { useState } from 'react';

const ShareButton: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const placeholderUrl = 'https://fakenewsanalyzer.app';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(placeholderUrl);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy URL:', err);
      alert('Failed to copy link.');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Fake News Detection: AI News Analyzer',
      text: 'Check out this AI-powered tool for analyzing news authenticity!',
      url: placeholderUrl,
    };

    // Use Web Share API if available, otherwise fallback to copy
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        // Ignore abort errors
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      handleCopy();
    }
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handleShare}
        className="p-2 rounded-full text-text-muted hover:bg-tertiary hover:text-text-base transition-colors"
        aria-label="Share this website"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      </button>
      
      {copyStatus === 'copied' && (
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-3 py-1 bg-secondary text-text-base text-xs font-semibold rounded-md shadow-lg border border-tertiary whitespace-nowrap"
        >
          Link Copied!
        </div>
      )}
    </div>
  );
};

export default ShareButton;
