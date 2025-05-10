import React from 'react';
import Button from '../components/ui/Button';
import { ArrowLeft } from 'lucide-react';

const Terms: React.FC = () => {
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
          <h1 className="text-4xl font-bold mb-8 text-light-900">Terms of Service</h1>
          
          <p className="text-light-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">1. Agreement to Terms</h2>
          <p className="text-light-600 mb-6">
            By accessing our website, you agree to be bound by these Terms of Service and all applicable laws and regulations.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">2. Use License</h2>
          <p className="text-light-600 mb-6">
            Permission is granted to temporarily access the materials on our website for personal, non-commercial use only.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">3. Disclaimer</h2>
          <p className="text-light-600 mb-6">
            The materials on our website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">4. Limitations</h2>
          <p className="text-light-600 mb-6">
            In no event shall PerformancePro or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">5. Revisions</h2>
          <p className="text-light-600 mb-6">
            We may revise these terms of service at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-light-900">6. Contact Us</h2>
          <p className="text-light-600 mb-6">
            If you have any questions about these Terms of Service, please contact us at:
            <br />
            Email: legal@performancepro.agency
          </p>
        </div>
      </div>
    </section>
  );
};

export default Terms;