
import React from 'react';
import { UploadIcon, ProcessIcon, InsightsIcon, ChevronRightIcon } from './IconComponents';

const StepCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => {
  return (
    <div className="text-center p-6 bg-light-navy rounded-lg shadow-lg">
      <div className="flex justify-center items-center mb-4 text-gold">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-lightest-slate mb-2">{title}</h3>
      <p className="text-slate">{description}</p>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">How It Works</h2>
        <p className="text-lg text-slate mt-2">Simplify legal analysis in three easy steps.</p>
      </div>
      <div className="grid md:grid-cols-5 gap-8 items-center">
        <StepCard 
          icon={<UploadIcon />}
          title="1. Upload Document"
          description="Securely upload or paste the text of your legal document."
        />
        <div className="hidden md:flex justify-center text-slate">
          <ChevronRightIcon className="h-10 w-10" />
        </div>
        <StepCard 
          icon={<ProcessIcon />}
          title="2. AI Analyzes Clauses"
          description="Our advanced AI processes the text, identifying key clauses and obligations."
        />
         <div className="hidden md:flex justify-center text-slate">
          <ChevronRightIcon className="h-10 w-10" />
        </div>
        <StepCard 
          icon={<InsightsIcon />}
          title="3. Get Instant Insights"
          description="Receive a clear summary, risk analysis, and actionable insights in seconds."
        />
      </div>
    </section>
  );
};

export default HowItWorks;
