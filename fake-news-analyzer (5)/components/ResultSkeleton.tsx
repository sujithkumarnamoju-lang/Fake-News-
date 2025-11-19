import React from 'react';

const ResultSkeleton: React.FC = () => {
  return (
    <div className="bg-secondary/50 rounded-xl shadow-lg p-6 backdrop-blur-sm border border-tertiary animate-pulse">
      <div className="h-6 bg-tertiary rounded-md w-1/2 mx-auto mb-6"></div>
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="h-4 bg-tertiary rounded-md w-20 mb-2"></div>
          <div className="h-12 bg-tertiary rounded-full w-32"></div>
        </div>
        <div className="flex flex-col items-center w-full md:w-auto">
          <div className="h-4 bg-tertiary rounded-md w-28 mb-2"></div>
          <div className="h-12 bg-tertiary rounded-md w-24"></div>
          <div className="h-2 bg-tertiary rounded-full w-32 mt-2"></div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-tertiary">
        <div className="h-5 bg-tertiary rounded-md w-1/4 mb-3"></div>
        <div className="space-y-2">
          <div className="h-4 bg-tertiary rounded-md w-full"></div>
          <div className="h-4 bg-tertiary rounded-md w-5/6"></div>
          <div className="h-4 bg-tertiary rounded-md w-3/4"></div>
        </div>
      </div>
    </div>
  );
};

export default ResultSkeleton;