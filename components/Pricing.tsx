
import React from 'react';
import { CheckIcon } from './IconComponents';

const PricingCard: React.FC<{
  plan: string;
  price: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}> = ({ plan, price, description, features, isFeatured = false }) => {
  const cardClasses = `p-8 rounded-lg shadow-lg flex flex-col ${isFeatured ? 'bg-light-navy border-2 border-gold scale-105' : 'bg-light-navy'}`;
  const buttonClasses = `mt-auto w-full py-3 px-6 font-bold rounded-md transition-all duration-300 ${isFeatured ? 'bg-gold text-navy hover:bg-opacity-90' : 'bg-navy text-gold hover:bg-gold hover:text-navy border-2 border-gold'}`;

  return (
    <div className={cardClasses}>
      <h3 className="text-2xl font-bold text-lightest-slate">{plan}</h3>
      <p className="text-slate my-4">{description}</p>
      <div className="text-4xl font-extrabold text-lightest-slate mb-4">
        {price}
        {plan !== 'Enterprise' && <span className="text-lg font-medium text-slate">/ month</span>}
      </div>
      <ul className="space-y-3 mb-8 text-slate">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckIcon className="h-6 w-6 text-gold mr-2 flex-shrink-0 mt-1" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <a href="#contact" className={buttonClasses}>
        {plan === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
      </a>
    </div>
  );
};

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">Flexible Pricing for Every Need</h2>
        <p className="text-lg text-slate mt-2">Choose the plan that's right for you.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        <PricingCard
          plan="Individual"
          price="$29"
          description="For freelancers and individuals with occasional needs."
          features={['10 document analyses per month', 'Standard AI model', 'Email support']}
        />
        <PricingCard
          plan="Team"
          price="$99"
          description="Perfect for small law firms and business teams."
          features={['100 document analyses per month', 'Advanced AI model', 'Collaboration features', 'Priority email support']}
          isFeatured={true}
        />
        <PricingCard
          plan="Enterprise"
          price="Custom"
          description="Tailored solutions for large organizations."
          features={['Unlimited analyses', 'API access & integrations', 'Dedicated account manager', 'On-premise deployment options']}
        />
      </div>
    </section>
  );
};

export default Pricing;
