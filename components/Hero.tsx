
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center py-20">
      <div className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-lightest-slate mb-4">
          Revolutionize Your Legal Document Analysis with <span className="text-gold">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-slate mb-8 max-w-2xl mx-auto">
          Document Analysis intelligently scans, classifies, and summarizes your contracts in seconds.
          Unlock powerful insights and save countless hours of manual work.
        </p>
        <a 
          href="#demo" 
          className="inline-block bg-gold text-navy font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105"
        >
          Analyze Your Document Now
        </a>
      </div>
    </section>
  );
};

export default Hero;