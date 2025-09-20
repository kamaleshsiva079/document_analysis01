
import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! This is a demo form.");
  };

  return (
    <section id="contact" className="py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-lightest-slate">Get In Touch</h2>
        <p className="text-lg text-slate mt-2">Have questions? We'd love to hear from you.</p>
      </div>
      <div className="max-w-2xl mx-auto bg-light-navy p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-light-slate">Name</label>
            <input type="text" id="name" required className="mt-1 block w-full bg-navy border border-slate/50 rounded-md p-3 text-lightest-slate focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-light-slate">Email</label>
            <input type="email" id="email" required className="mt-1 block w-full bg-navy border border-slate/50 rounded-md p-3 text-lightest-slate focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-light-slate">Message</label>
            <textarea id="message" rows={5} required className="mt-1 block w-full bg-navy border border-slate/50 rounded-md p-3 text-lightest-slate focus:outline-none focus:ring-2 focus:ring-gold"></textarea>
          </div>
          <div>
            <button type="submit" className="w-full bg-gold text-navy font-bold py-3 px-8 rounded-md text-lg hover:bg-opacity-90 transition-all duration-300">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
