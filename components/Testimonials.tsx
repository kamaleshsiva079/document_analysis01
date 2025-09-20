
import React from 'react';

const testimonialsData = [
  {
    quote: "Document Analysis has been a game-changer for our due diligence process. We've cut down review time by over 60%, allowing us to focus on strategic client advice.",
    name: 'Jane Doe',
    title: 'Partner, Legal Innovators LLP',
    avatar: 'https://picsum.photos/seed/person1/100/100'
  },
  {
    quote: "As a startup founder, I don't have a big legal budget. Document Analysis gives me the confidence to review vendor contracts and term sheets quickly and at no cost.",
    name: 'John Smith',
    title: 'CEO, TechSprint Inc.',
    avatar: 'https://picsum.photos/seed/person2/100/100'
  },
  {
    quote: "The natural language summaries are incredible. It translates dense legalese into plain English, which is invaluable for our business teams.",
    name: 'Emily White',
    title: 'General Counsel, Global Corp',
    avatar: 'https://picsum.photos/seed/person3/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">What Our Users Say</h2>
        <p className="text-lg text-slate mt-2">Real feedback from legal and business professionals.</p>
      </div>
      <div className="grid lg:grid-cols-3 gap-8">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-light-navy p-8 rounded-lg shadow-lg flex flex-col">
            <p className="text-slate italic mb-6 flex-grow">"{testimonial.quote}"</p>
            <div className="flex items-center mt-auto">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full mr-4 border-2 border-gold" />
              <div>
                <p className="font-bold text-lightest-slate">{testimonial.name}</p>
                <p className="text-sm text-slate">{testimonial.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;