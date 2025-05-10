import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import caseStudies from '../data/caseStudies';

const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <Button
              to="/case-studies"
              variant="text"
              icon={<ArrowLeft size={20} />}
              iconPosition="left"
              className="mb-8"
            >
              Back to Case Studies
            </Button>

            <div className="flex flex-wrap gap-3 mb-6">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-dark-700 rounded-full text-sm font-medium text-light-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-light-900">
              {study.title}
            </h1>

            <div className="grid grid-cols-3 gap-6 mt-12">
              {study.metrics.map((metric, i) => (
                <div key={i} className="bg-dark-800 border border-dark-600 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-electric-500 mb-2">{metric.value}</div>
                  <div className="text-light-600">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-light-900">The Challenge</h2>
                <p className="text-light-600 mb-6">
                  {study.challenge.overview}
                </p>
                <ul className="space-y-4">
                  {study.challenge.points.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-electric-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-light-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6 text-light-900">Our Approach</h2>
                <p className="text-light-600 mb-6">
                  We implemented a comprehensive growth strategy that included:
                </p>
                <ul className="space-y-4">
                  {study.services.map((service, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-electric-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-light-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark-700 border border-dark-600 rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-light-900">The Results</h2>
                <p className="text-light-600 mb-6">
                  Through our strategic approach and continuous optimization, we helped {study.client} achieve:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="bg-dark-600 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-electric-500 mb-2">{metric.value}</div>
                      <div className="text-light-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-dark-700 border border-dark-600 rounded-xl p-8 mb-8">
                  <div className="aspect-[4/3] bg-dark-800 rounded-lg flex items-center justify-center p-8 mb-6">
                    <img 
                      src={study.logo} 
                      alt={`${study.client} logo`}
                      className="w-full h-auto max-h-full object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-light-600 mb-1">Industry</h3>
                      <p className="text-light-900">{study.industry}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-light-600 mb-1">Services</h3>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-dark-600 rounded-full text-xs font-medium text-light-700"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  to="/contact" 
                  variant="primary"
                  size="lg"
                  fullWidth
                >
                  Get Similar Results
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseStudyDetail;