
import React, { useState } from 'react';
import { analyzeDocument } from '../services/geminiService';
import type { AnalysisResult } from '../types';

const AnalysisResultDisplay: React.FC<{ result: AnalysisResult }> = ({ result }) => (
  <div className="space-y-6 animate-fade-in">
    <div>
      <h3 className="text-xl font-bold text-gold mb-2">Document Type</h3>
      <p className="bg-navy p-3 rounded-md text-lightest-slate">{result.documentType}</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gold mb-2">Summary</h3>
      <p className="bg-navy p-3 rounded-md">{result.summary}</p>
    </div>
    <div>
      <h3 className="text-xl font-bold text-gold mb-2">Key Clauses & Obligations</h3>
      <div className="space-y-4">
        {result.keyClauses.map((item, index) => (
          <div key={index} className="bg-navy p-4 rounded-md">
            <h4 className="font-semibold text-lightest-slate">{item.clause}</h4>
            <p className="text-sm text-slate mt-1">{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);


const Demo: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async () => {
    if (!inputText.trim()) {
      setError("Please paste some text to analyze.");
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);

    try {
      const analysis = await analyzeDocument(inputText);
      setResult(analysis);
    } catch (e: any) {
      setError(e.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="demo" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">Try Document Analysis Now</h2>
        <p className="text-lg text-slate mt-2">Paste any legal text below to see the power of our AI analysis.</p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <div className="flex flex-col">
          <textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Paste your contract text here..."
            className="w-full h-96 flex-grow bg-light-navy border-2 border-navy text-light-slate p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold transition-shadow"
            disabled={isLoading}
          />
          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="mt-4 w-full bg-gold text-navy font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 disabled:bg-slate disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-navy" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Analyzing...
              </>
            ) : "Analyze Text"}
          </button>
        </div>

        <div className="bg-light-navy p-6 rounded-lg min-h-[400px]">
          <h3 className="text-2xl font-bold text-lightest-slate mb-4 border-b-2 border-navy pb-2">Analysis Results</h3>
          {isLoading && (
            <div className="flex items-center justify-center h-full">
              <p className="text-slate">Generating insights, please wait...</p>
            </div>
          )}
          {error && (
            <div className="bg-red-900/50 border border-red-700 text-red-200 p-4 rounded-md">
              <h4 className="font-bold">Error</h4>
              <p>{error}</p>
            </div>
          )}
          {result && <AnalysisResultDisplay result={result} />}
          {!isLoading && !error && !result && (
             <div className="flex items-center justify-center h-full">
                <p className="text-slate text-center">Your analysis results will appear here.</p>
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Demo;