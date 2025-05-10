import { BarChart, Mail, Palette, MessageSquare, Search, Monitor } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  benefits: string[];
  inclusions: string[];
  pricing: {
    starter: {
      name: string;
      price: number;
      description: string;
      features: string[];
    };
    growth: {
      name: string;
      price: number;
      description: string;
      features: string[];
    };
    enterprise: {
      name: string;
      price: number;
      description: string;
      features: string[];
    };
  };
  pricingType: 'monthly' | 'project';
}

export const services: Service[] = [
  {
    id: "paid-ads",
    title: "Paid Ads",
    shortDescription: "Strategic ad campaigns on Meta, Google, and TikTok that deliver measurable ROI.",
    longDescription: "Data-driven advertising that maximizes your budget and delivers consistent growth through proven strategies.",
    icon: "BarChart",
    benefits: [
      "Higher conversion rates",
      "Optimized ad spend",
      "Predictable growth",
      "Clear reporting"
    ],
    inclusions: [
      "Campaign strategy",
      "Creative development",
      "Audience targeting",
      "A/B testing",
      "Monthly reporting",
      "Performance tracking"
    ],
    pricing: {
      starter: {
        name: "Starter",
        price: 1997,
        description: "Perfect for growing businesses",
        features: [
          "Up to $5k monthly ad spend",
          "2 platforms",
          "Weekly optimization",
          "Basic reporting",
          "Email support"
        ]
      },
      growth: {
        name: "Growth",
        price: 2997,
        description: "For scaling businesses",
        features: [
          "Up to $15k monthly ad spend",
          "3 platforms",
          "Daily optimization",
          "Advanced reporting",
          "Priority support",
          "Creative direction"
        ]
      },
      enterprise: {
        name: "Scale",
        price: 4997,
        description: "For established businesses",
        features: [
          "Up to $50k ad spend",
          "All platforms",
          "Real-time optimization",
          "Custom reporting",
          "Dedicated manager",
          "Full creative services"
        ]
      }
    },
    pricingType: "monthly"
  },
  {
    id: "email-sms",
    title: "Email & SMS Marketing",
    shortDescription: "Automated sequences that nurture leads and boost customer lifetime value.",
    longDescription: "Strategic email and SMS marketing that drives engagement, conversions, and customer loyalty.",
    icon: "Mail",
    benefits: [
      "Increased customer LTV",
      "Automated revenue",
      "Better engagement",
      "Data-driven optimization"
    ],
    inclusions: [
      "Strategy development",
      "Automation setup",
      "Copywriting",
      "Design templates",
      "List management",
      "Performance tracking"
    ],
    pricing: {
      starter: {
        name: "Basic",
        price: 997,
        description: "Essential automation",
        features: [
          "Up to 10,000 subscribers",
          "Basic automation",
          "Monthly campaigns",
          "Standard templates",
          "Support"
        ]
      },
      growth: {
        name: "Plus",
        price: 1997,
        description: "Advanced marketing",
        features: [
          "Up to 25,000 subscribers",
          "Advanced automation",
          "Weekly campaigns",
          "Custom templates",
          "Priority support",
          "SMS included"
        ]
      },
      enterprise: {
        name: "Pro",
        price: 2997,
        description: "Full-service solution",
        features: [
          "Up to 100,000 subscribers",
          "Custom automation",
          "Daily campaigns",
          "Custom design",
          "Dedicated support",
          "Full SMS integration"
        ]
      }
    },
    pricingType: "monthly"
  },
  {
    id: "branding",
    title: "Branding & Creative",
    shortDescription: "Strategic brand identity that captures attention and drives performance.",
    longDescription: "Professional branding and creative services that help you stand out and connect with your audience.",
    icon: "Palette",
    benefits: [
      "Distinctive identity",
      "Professional design",
      "Brand consistency",
      "Performance-driven"
    ],
    inclusions: [
      "Brand strategy",
      "Logo design",
      "Visual identity",
      "Brand guidelines",
      "Marketing materials",
      "Social media assets"
    ],
    pricing: {
      starter: {
        name: "Essential",
        price: 2997,
        description: "Professional branding",
        features: [
          "Logo design",
          "Color palette",
          "Basic guidelines",
          "Business cards",
          "Social templates"
        ]
      },
      growth: {
        name: "Professional",
        price: 5997,
        description: "Complete branding",
        features: [
          "Everything in Essential",
          "Full guidelines",
          "Marketing collateral",
          "Social media kit",
          "Email templates",
          "Brand strategy"
        ]
      },
      enterprise: {
        name: "Premium",
        price: 9997,
        description: "Premium branding",
        features: [
          "Everything in Professional",
          "Custom illustrations",
          "Motion graphics",
          "Brand video",
          "Environmental design",
          "Full strategy"
        ]
      }
    },
    pricingType: "project"
  },
  {
    id: "social",
    title: "Social Media Management",
    shortDescription: "Strategic social media management that builds community and drives growth.",
    longDescription: "Comprehensive social media management that increases engagement and supports your marketing goals.",
    icon: "MessageSquare",
    benefits: [
      "Increased engagement",
      "Brand awareness",
      "Community growth",
      "Content strategy"
    ],
    inclusions: [
      "Strategy development",
      "Content creation",
      "Community management",
      "Analytics tracking",
      "Hashtag strategy",
      "Engagement monitoring"
    ],
    pricing: {
      starter: {
        name: "Essential",
        price: 1497,
        description: "Social media basics",
        features: [
          "2 platforms",
          "12 posts/month",
          "Basic engagement",
          "Monthly report",
          "Content calendar"
        ]
      },
      growth: {
        name: "Growth",
        price: 2497,
        description: "Enhanced presence",
        features: [
          "3 platforms",
          "20 posts/month",
          "Daily engagement",
          "Weekly reports",
          "Content creation",
          "Stories included"
        ]
      },
      enterprise: {
        name: "Premium",
        price: 3997,
        description: "Full service",
        features: [
          "4 platforms",
          "Daily posts",
          "Full engagement",
          "Custom reports",
          "Strategy sessions",
          "Crisis management"
        ]
      }
    },
    pricingType: "monthly"
  },
  {
    id: "seo",
    title: "SEO & Content",
    shortDescription: "Data-driven SEO strategies that increase organic traffic and conversions.",
    longDescription: "Comprehensive SEO and content marketing that helps you rank better and attract qualified leads.",
    icon: "Search",
    benefits: [
      "Higher rankings",
      "More traffic",
      "Better leads",
      "Content strategy"
    ],
    inclusions: [
      "Technical SEO",
      "Content strategy",
      "Keyword research",
      "Link building",
      "Performance tracking",
      "Monthly reporting"
    ],
    pricing: {
      starter: {
        name: "Essential",
        price: 1497,
        description: "SEO foundations",
        features: [
          "Technical audit",
          "4 articles/month",
          "Basic optimization",
          "Monthly report",
          "Basic link building"
        ]
      },
      growth: {
        name: "Growth",
        price: 2497,
        description: "Enhanced SEO",
        features: [
          "Advanced technical SEO",
          "8 articles/month",
          "Link building",
          "Content strategy",
          "Weekly updates",
          "Priority support"
        ]
      },
      enterprise: {
        name: "Premium",
        price: 3997,
        description: "Full service SEO",
        features: [
          "Enterprise SEO",
          "12+ articles/month",
          "Advanced link building",
          "Content distribution",
          "Custom reporting",
          "Strategy sessions"
        ]
      }
    },
    pricingType: "monthly"
  },
  {
    id: "web-design",
    title: "Website Design",
    shortDescription: "Beautiful, conversion-focused websites that drive business growth.",
    longDescription: "Strategic web design that combines stunning visuals with optimized user experience to maximize conversions.",
    icon: "Monitor",
    benefits: [
      "Higher conversions",
      "Professional design",
      "Mobile-optimized",
      "Growth-ready"
    ],
    inclusions: [
      "Custom design",
      "Development",
      "Mobile optimization",
      "Speed optimization",
      "SEO setup",
      "Analytics"
    ],
    pricing: {
      starter: {
        name: "Professional",
        price: 3997,
        description: "Professional website",
        features: [
          "Up to 5 pages",
          "Mobile responsive",
          "Contact forms",
          "Basic SEO",
          "Analytics",
          "CMS setup"
        ]
      },
      growth: {
        name: "Business",
        price: 7997,
        description: "Growing business",
        features: [
          "Up to 15 pages",
          "Custom design",
          "Blog setup",
          "Speed optimization",
          "Advanced SEO",
          "Training included"
        ]
      },
      enterprise: {
        name: "Premium",
        price: 12997,
        description: "Full featured",
        features: [
          "Up to 25 pages",
          "Custom functionality",
          "E-commerce ready",
          "Security setup",
          "Premium hosting",
          "Full support"
        ]
      }
    },
    pricingType: "project"
  }
];

export default services;