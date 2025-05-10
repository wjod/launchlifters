export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  logo: string;
  image: string;
  challenge: {
    overview: string;
    points: string[];
  };
  metrics: {
    label: string;
    value: string;
  }[];
  tags: string[];
  industry: string;
  services: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "beautybox",
    title: "How We Scaled BeautyBox to $1.2M/Month in Revenue",
    client: "BeautyBox",
    description: "When BeautyBox approached us, they were struggling to break through the $200K/month ceiling despite having premium skincare products. Through a complete overhaul of their marketing strategy, we helped them achieve exponential growth while maintaining profitability.",
    logo: "https://placehold.co/400x120/121212/FFFFFF.png?text=BEAUTYBOX&font=playfair-display&fontsize=60",
    image: "https://images.pexels.com/photos/4040649/pexels-photo-4040649.jpeg",
    challenge: {
      overview: "BeautyBox had hit a growth ceiling at $200K/month despite having exceptional products and strong customer loyalty. Their primary challenges centered around scaling their digital presence while maintaining profitability.",
      points: [
        "Customer acquisition costs had risen 85% in 6 months, making scaling increasingly difficult",
        "Email marketing was underperforming with a 12% open rate and 0.8% click-through rate",
        "Ad creative was failing to stand out in an increasingly crowded beauty market",
        "Post-purchase retention strategies were non-existent, leading to low customer lifetime value"
      ]
    },
    metrics: [
      { label: "ROAS", value: "483%" },
      { label: "CPA", value: "-42%" },
      { label: "Revenue Growth", value: "6X" }
    ],
    tags: ["E-commerce", "Facebook Ads", "Email Marketing"],
    industry: "Beauty & Skincare",
    services: ["Paid Social", "Email Marketing", "Landing Pages"]
  },
  {
    id: "tech-innovate",
    title: "Scaling a SaaS Platform to 25,000 Enterprise Users",
    client: "TechInnovate",
    description: "A B2B SaaS platform needed to accelerate growth in the enterprise market. We developed a multi-channel strategy that dramatically increased qualified leads and conversions.",
    logo: "https://placehold.co/400x120/121212/0070FF.png?text=TECHINNOVATE&font=inter&fontsize=52",
    image: "https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg",
    challenge: {
      overview: "TechInnovate was struggling to break into the enterprise market despite having a superior product. They needed to establish credibility and generate high-quality leads at scale.",
      points: [
        "Long sales cycles averaging 120 days",
        "High customer acquisition costs exceeding $15,000",
        "Limited brand awareness in enterprise segment",
        "Low conversion rate on enterprise landing pages"
      ]
    },
    metrics: [
      { label: "Lead Quality", value: "+187%" },
      { label: "Sales Cycle", value: "-45%" },
      { label: "Enterprise Users", value: "25K+" }
    ],
    tags: ["B2B", "SaaS", "Enterprise"],
    industry: "Technology",
    services: ["Content Marketing", "LinkedIn Ads", "Marketing Automation"]
  },
  {
    id: "fit-fusion",
    title: "From Local Gym to National Fitness Brand",
    client: "FitFusion",
    description: "A regional fitness chain looking to expand nationwide needed a scalable digital strategy. We helped them grow from 12 to 38 locations while reducing customer acquisition costs.",
    logo: "https://placehold.co/400x120/121212/FF4D6D.png?text=FITFUSION&font=poppins&fontsize=56",
    image: "https://images.pexels.com/photos/2740956/pexels-photo-2740956.jpeg",
    challenge: {
      overview: "FitFusion needed to scale their marketing efforts to support rapid expansion while maintaining local market relevance and managing costs.",
      points: [
        "Inconsistent brand messaging across locations",
        "High cost per lead in new markets",
        "Limited local market visibility",
        "Inefficient lead nurturing process"
      ]
    },
    metrics: [
      { label: "Locations", value: "12→38" },
      { label: "Lead Cost", value: "-53%" },
      { label: "Member Growth", value: "+312%" }
    ],
    tags: ["Fitness", "Local SEO", "Multi-Location"],
    industry: "Health & Fitness",
    services: ["Local SEO", "Paid Search", "Social Media"]
  },
  {
    id: "eco-style",
    title: "Building a Sustainable Fashion Brand Online",
    client: "EcoStyle",
    description: "An eco-friendly fashion startup needed to establish market presence and scale sustainably. We created a comprehensive digital strategy that drove rapid growth.",
    logo: "https://placehold.co/400x120/121212/00E76A.png?text=ECOSTYLE&font=montserrat&fontsize=52",
    image: "https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg",
    challenge: {
      overview: "EcoStyle needed to build brand awareness and drive sales while effectively communicating their sustainability mission.",
      points: [
        "High competition in sustainable fashion",
        "Limited marketing budget",
        "Need for authentic brand storytelling",
        "Customer education challenges"
      ]
    },
    metrics: [
      { label: "Revenue", value: "+425%" },
      { label: "AOV", value: "+68%" },
      { label: "ROAS", value: "4.2x" }
    ],
    tags: ["Fashion", "E-commerce", "Sustainability"],
    industry: "Fashion & Apparel",
    services: ["Influencer Marketing", "Social Media", "Email Marketing"]
  },
  {
    id: "smart-home",
    title: "Launching a Smart Home Product Line",
    client: "SmartLiving",
    description: "A smart home technology company needed to launch their new product line in a crowded market. We developed a launch strategy that exceeded sales targets by 247%.",
    logo: "https://placehold.co/400x120/121212/0070FF.png?text=SMARTLIVING&font=poppins&fontsize=52",
    image: "https://images.pexels.com/photos/1034425/pexels-photo-1034425.jpeg",
    challenge: {
      overview: "SmartLiving needed to stand out in a competitive market and educate consumers about their innovative features.",
      points: [
        "Crowded market with established players",
        "Complex product features requiring education",
        "High customer acquisition costs",
        "Need for multi-channel presence"
      ]
    },
    metrics: [
      { label: "Pre-orders", value: "10K+" },
      { label: "CAC", value: "-38%" },
      { label: "Launch Sales", value: "+247%" }
    ],
    tags: ["Product Launch", "Technology", "D2C"],
    industry: "Consumer Technology",
    services: ["Product Marketing", "PPC", "Content Strategy"]
  },
  {
    id: "edu-tech",
    title: "Scaling an EdTech Platform to 100K Students",
    client: "EduTech",
    description: "An online learning platform needed to scale their user base while maintaining quality and engagement. We implemented a growth strategy that tripled their student base.",
    logo: "https://placehold.co/400x120/121212/FF4D6D.png?text=EDUTECH&font=inter&fontsize=52",
    image: "https://images.pexels.com/photos/251225/pexels-photo-251225.jpeg",
    challenge: {
      overview: "EduTech needed to scale their platform while maintaining student engagement and course completion rates.",
      points: [
        "High student acquisition costs",
        "Low course completion rates",
        "Limited brand recognition",
        "Need for improved retention"
      ]
    },
    metrics: [
      { label: "Students", value: "100K+" },
      { label: "Retention", value: "+85%" },
      { label: "CAC", value: "-42%" }
    ],
    tags: ["EdTech", "Education", "B2C"],
    industry: "Education Technology",
    services: ["Performance Marketing", "Marketing Automation", "Analytics"]
  },
  {
    id: "fresh-meals",
    title: "Disrupting the Meal Delivery Market",
    client: "FreshMeals",
    description: "A meal delivery service needed to establish market presence and scale operations. We helped them become a market leader in their region.",
    logo: "https://placehold.co/400x120/121212/00E76A.png?text=FRESHMEALS&font=montserrat&fontsize=52",
    image: "https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg",
    challenge: {
      overview: "FreshMeals needed to differentiate themselves in a competitive market and build a loyal customer base.",
      points: [
        "High customer acquisition costs",
        "Low customer retention",
        "Operational scaling challenges",
        "Limited marketing budget"
      ]
    },
    metrics: [
      { label: "Orders", value: "+312%" },
      { label: "Retention", value: "78%" },
      { label: "Revenue", value: "$2.5M" }
    ],
    tags: ["Food Delivery", "Local Business", "D2C"],
    industry: "Food & Beverage",
    services: ["Local Marketing", "CRM", "Paid Social"]
  },
  {
    id: "pet-care",
    title: "Building a D2C Pet Care Brand",
    client: "PawCare",
    description: "A premium pet care brand needed to establish their direct-to-consumer presence. We created a strategy that drove rapid growth and customer loyalty.",
    logo: "https://placehold.co/400x120/121212/0070FF.png?text=PAWCARE&font=poppins&fontsize=52",
    image: "https://images.pexels.com/photos/1564506/pexels-photo-1564506.jpeg",
    challenge: {
      overview: "PawCare needed to build brand awareness and establish direct relationships with pet owners.",
      points: [
        "Strong retail competition",
        "Limited brand recognition",
        "High customer acquisition costs",
        "Need for customer education"
      ]
    },
    metrics: [
      { label: "Sales", value: "+245%" },
      { label: "ROAS", value: "3.8x" },
      { label: "LTV", value: "+156%" }
    ],
    tags: ["Pet Care", "D2C", "E-commerce"],
    industry: "Pet Products",
    services: ["Social Media", "Email Marketing", "PPC"]
  },
  {
    id: "fin-tech",
    title: "Scaling a FinTech App to 500K Users",
    client: "FinanceApp",
    description: "A financial technology startup needed to scale their user base while maintaining compliance and trust. We developed a strategy that drove massive user growth.",
    logo: "https://placehold.co/400x120/121212/FF4D6D.png?text=FINANCEAPP&font=inter&fontsize=52",
    image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg",
    challenge: {
      overview: "FinanceApp needed to build trust and drive user adoption while navigating strict regulatory requirements.",
      points: [
        "Complex regulatory environment",
        "High user acquisition costs",
        "Need for trust building",
        "Competition from traditional banks"
      ]
    },
    metrics: [
      { label: "Users", value: "500K+" },
      { label: "CAC", value: "-48%" },
      { label: "Retention", value: "92%" }
    ],
    tags: ["FinTech", "Mobile App", "B2C"],
    industry: "Financial Technology",
    services: ["App Marketing", "Content Strategy", "Paid User Acquisition"]
  },
  {
    id: "health-tech",
    title: "Revolutionizing Digital Health Engagement",
    client: "HealthTech",
    description: "A digital health platform needed to increase user engagement and expand their provider network. We created a comprehensive growth strategy that transformed their market presence.",
    logo: "https://placehold.co/400x120/121212/00E76A.png?text=HEALTHTECH&font=montserrat&fontsize=52",
    image: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg",
    challenge: {
      overview: "HealthTech needed to improve user engagement while expanding their provider network and maintaining HIPAA compliance.",
      points: [
        "Low user engagement rates",
        "Complex stakeholder management",
        "Regulatory compliance requirements",
        "Need for provider education"
      ]
    },
    metrics: [
      { label: "Engagement", value: "+187%" },
      { label: "Providers", value: "2,500+" },
      { label: "Growth", value: "4.2x" }
    ],
    tags: ["Healthcare", "Digital Health", "B2B2C"],
    industry: "Healthcare Technology",
    services: ["Marketing Automation", "Provider Marketing", "Content Strategy"]
  }
];

export default caseStudies;