
import React, { useState } from 'react';

const useCasesData = [
  {
    id: 'lawyers',
    title: 'For Legal Professionals',
    description: 'Accelerate due diligence, reduce manual review time, and ensure consistency across a high volume of documents. Focus on high-value strategic work, not tedious review.',
    image: 'https://picsum.photos/seed/lawyer/600/400'
  },
  {
    id: 'startups',
    title: 'For Startups & SMBs',
    description: 'Quickly understand venture capital term sheets, vendor agreements, and employment contracts without incurring high legal fees. Make informed decisions, faster.',
    image: 'https://picsum.photos/seed/startup/600/400'
  },
  {
    id: 'hr',
    title: 'For HR Teams',
    description: 'Efficiently vet employment offers, confidentiality agreements, and internal policy documents. Ensure compliance and protect your organization.',
    image: 'https://picsum.photos/seed/hr/600/400'
  },
  {
    id: 'individuals',
    title: 'For Individuals',
    description: 'Demystify rental leases, freelance contracts, and terms of service. Understand your rights and obligations before you sign.',
    image: 'https://picsum.photos/seed/individual/600/400'
  },
];

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(useCasesData[0].id);

  const activeContent = useCasesData.find(useCase => useCase.id === activeTab);

  return (
    <section id="use-cases" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">Trusted by Professionals Across Industries</h2>
        <p className="text-lg text-slate mt-2">Document Analysis is designed for a variety of needs.</p>
      </div>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-light-navy p-8 rounded-lg">
        <div className="flex lg:flex-col border-b-2 lg:border-b-0 lg:border-r-2 border-navy">
          {useCasesData.map(useCase => (
            <button
              key={useCase.id}
              onClick={() => setActiveTab(useCase.id)}
              className={`w-full text-left p-4 rounded-md transition-colors duration-300 ${activeTab === useCase.id ? 'bg-navy text-gold' : 'text-light-slate hover:bg-navy/50'}`}
            >
              {useCase.title}
            </button>
          ))}
        </div>
        <div className="flex-1">
          {activeContent && (
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-lightest-slate mb-4">{activeContent.title}</h3>
                <p className="text-slate">{activeContent.description}</p>
              </div>
              <div className="flex-1">
                <img src={activeContent.image} alt={activeContent.title} className="rounded-lg shadow-xl w-full h-auto object-cover" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseCases;