
import React from 'react';

const featuresData = [
  {
    title: 'Clause Classification',
    description: 'Automatically identifies and categorizes clauses like liability, termination, and confidentiality.',
  },
  {
    title: 'Obligation Detection',
    description: 'Extracts key duties, deadlines, and responsibilities for all parties involved.',
  },
  {
    title: 'Document Type Prediction',
    description: 'Instantly determines if your document is an NDA, a lease, an employment contract, and more.',
  },
  {
    title: 'Natural Language Summaries',
    description: 'Generates concise, easy-to-understand summaries of complex legal documents.',
  },
  {
    title: 'Risk Analysis',
    description: 'Flags potentially problematic, ambiguous, or non-standard clauses for further review.',
  },
  {
    title: 'Multi-Language Support',
    description: 'Our AI is trained to understand and analyze documents in multiple languages.',
  },
];

const FeatureCard: React.FC<{ title: string; description: string; }> = ({ title, description }) => (
  <div className="bg-light-navy p-6 rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 duration-300">
    <h3 className="text-xl font-bold text-gold mb-3">{title}</h3>
    <p className="text-slate">{description}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">Powerful Features at Your Fingertips</h2>
        <p className="text-lg text-slate mt-2">Everything you need for smarter document analysis.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuresData.map((feature, index) => (
          <FeatureCard key={index} title={feature.title} description={feature.description} />
        ))}
      </div>
    </section>
  );
};

export default Features;
