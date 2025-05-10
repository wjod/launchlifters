import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Instagram, Linkedin, Twitter, Rocket } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 border-t border-dark-600 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <h3 className="text-xl font-display font-bold flex items-center">
                <Rocket className="w-6 h-6 text-electric-500 mr-2 transform rotate-45" />
                <span>Launch<span className="text-electric-500">Lifters</span></span>
              </h3>
            </Link>
            <p className="text-light-600 mb-6 max-w-xs">
              We engineer growth through data science and creative innovation.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="#" icon={<Twitter size={18} />} label="Twitter" />
              <SocialLink href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-light-900 font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/services">Services</FooterLink>
              <FooterLink to="/case-studies">Case Studies</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-light-900 font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <FooterLink to="/services">Growth Engineering</FooterLink>
              <FooterLink to="/services">Performance Marketing</FooterLink>
              <FooterLink to="/services">Data Analytics</FooterLink>
              <FooterLink to="/services">Marketing Automation</FooterLink>
              <FooterLink to="/services">Conversion Optimization</FooterLink>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h4 className="text-light-900 font-semibold mb-6">Growth Insights</h4>
            <p className="text-light-600 mb-4">
              Get our best growth engineering tips and insights delivered straight to your inbox.
            </p>
            <form className="flex mb-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-dark-700 border border-dark-500 rounded-l-md text-light-900 focus:outline-none focus:ring-1 focus:ring-electric-500"
                required
              />
              <button
                type="submit"
                className="bg-electric-500 hover:bg-electric-600 text-light-900 p-2 rounded-r-md transition-colors duration-200"
                aria-label="Subscribe"
              >
                <ArrowRight size={20} />
              </button>
            </form>
            <p className="text-light-600 text-sm">
              We only send valuable content. No spam.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-dark-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-600 text-sm mb-4 md:mb-0">
            © {currentYear} LaunchLifters. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-light-600 hover:text-light-900 text-sm transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-light-600 hover:text-light-900 text-sm transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-light-600 hover:text-electric-400 transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

const SocialLink: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
  <a
    href={href}
    className="w-8 h-8 flex items-center justify-center rounded-full bg-dark-600 text-light-800 hover:bg-electric-500 hover:text-light-900 transition-colors duration-200"
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

export default Footer;