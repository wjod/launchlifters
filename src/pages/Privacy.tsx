import React from 'react';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const Privacy: React.FC = () => {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 md:px-6">
        <Button
          to="/"
          variant="text"
          icon={<ArrowLeft size={20} />}
          iconPosition="left"
          className="mb-8"
        >
          Back to Home
        </Button>

        <div className="max-w-4xl mx-auto prose prose-invert">
          <h1 className="text-4xl font-bold mb-8 text-light-900">Privacy Policy</h1>
          
          <p className="text-light-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">1. Information We Collect</h2>
          <p className="text-light-600 mb-6">
            We collect information that you provide directly to us, including when you:
          </p>
          <ul className="list-disc pl-6 mb-6 text-light-600">
            <li>Fill out forms on our website</li>
            <li>Subscribe to our newsletter</li>
            <li>Request a consultation</li>
            <li>Contact us for support</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">2. How We Use Your Information</h2>
          <p className="text-light-600 mb-6">
            We use the information we collect to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-light-600">
            <li>Provide and improve our services</li>
            <li>Send you marketing communications (with your consent)</li>
            <li>Analyze website usage and performance</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">3. Cookies and Tracking</h2>
          <p className="text-light-600 mb-6">
            We use cookies and similar tracking technologies to analyze website usage and improve our services. You can control cookie settings through your browser preferences.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">4. Data Security</h2>
          <p className="text-light-600 mb-6">
            We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">5. Your Rights</h2>
          <p className="text-light-600 mb-6">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-6 text-light-600">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">6. Contact Us</h2>
          <p className="text-light-600 mb-6">
            If you have questions about this Privacy Policy, please contact us at:
            <br />
            Email: privacy@performancepro.agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;