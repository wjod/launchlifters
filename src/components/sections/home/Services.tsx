import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import ServiceCard from '../../ui/ServiceCard';
import { 
  BarChart, 
  Mail, 
  Palette, 
  MessageSquare, 
  Search, 
  Monitor 
} from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Paid Ads",
      description: "Strategic ad campaigns on Meta, Google, and TikTok that deliver measurable ROI.",
      icon: <BarChart size={24} />,
      link: "/services#paid-ads",
    },
    {
      title: "Email & SMS Marketing",
      description: "Automated sequences that nurture leads and boost customer lifetime value.",
      icon: <Mail size={24} />,
      link: "/services#email-sms",
    },
    {
      title: "Branding & Creative",
      description: "Strategic brand identity that captures attention and drives performance.",
      icon: <Palette size={24} />,
      link: "/services#branding",
    },
    {
      title: "Social Media Management",
      description: "Content that builds community, drives engagement, and supports your paid acquisition channels.",
      icon: <MessageSquare size={24} />,
      link: "/services#social",
    },
    {
      title: "SEO & Content",
      description: "Data-driven content strategies that boost organic traffic and establish your brand as an authority.",
      icon: <Search size={24} />,
      link: "/services#seo",
    },
    {
      title: "Website Design",
      description: "Beautiful, conversion-focused websites that deliver exceptional user experiences and drive business growth.",
      icon: <Monitor size={24} />,
      link: "/services#web-design",
    },
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading
          title="Our Services"
          subtitle="Comprehensive growth solutions designed to work together for maximum impact."
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;