
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-light-navy border-t border-navy/50 py-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center text-slate">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="#" className="hover:text-gold transition-colors">Twitter</a>
          <a href="#" className="hover:text-gold transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
        <p className="text-sm">
          Disclaimer: Document Analysis is an AI tool and does not provide legal advice. Consult with a qualified legal professional for your specific needs.
        </p>
        <p className="text-sm mt-2">
          &copy; {new Date().getFullYear()} Document Analysis. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;