import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import AnimatedElement from '../components/ui/AnimatedElement';
import { Search, Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import Button from '../components/ui/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

const Blog: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const categories = [
    'all',
    'growth-marketing',
    'analytics',
    'social-media',
    'seo',
    'email-marketing'
  ];

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Digital Marketing: 2024 Trends',
      excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business.',
      category: 'growth-marketing',
      readTime: '8 min',
      date: '2024-01-15',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      featured: true
    },
    {
      id: '2',
      title: 'Mastering Social Media ROI: A Data-Driven Approach',
      excerpt: 'Learn how to measure and optimize your social media marketing efforts using advanced analytics and tracking methods.',
      category: 'social-media',
      readTime: '6 min',
      date: '2024-01-12',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '3',
      title: 'Email Marketing Automation: Beyond the Basics',
      excerpt: 'Discover advanced email automation strategies that can significantly improve your conversion rates.',
      category: 'email-marketing',
      readTime: '10 min',
      date: '2024-01-10',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '4',
      title: 'SEO in 2024: What Really Matters Now',
      excerpt: 'Stay ahead of the curve with the latest SEO strategies and algorithm updates that are shaping organic search.',
      category: 'seo',
      readTime: '7 min',
      date: '2024-01-08',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: '5',
      title: 'Analytics Deep Dive: Hidden Metrics That Matter',
      excerpt: 'Uncover the often-overlooked analytics metrics that can provide valuable insights for your marketing strategy.',
      category: 'analytics',
      readTime: '9 min',
      date: '2024-01-05',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const filteredPosts = blogPosts
    .filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(post => 
      selectedCategory === 'all' ? true : post.category === selectedCategory
    );

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-electric-500 z-50 origin-left"
        style={{ scaleX }}
      />
      {/* Hero Section */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedElement>
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-light-900">
                Growth Marketing <span className="text-electric-500">Insights</span>
              </h1>
              <p className="text-xl text-light-600 mb-10">
                Expert strategies, actionable tips, and the latest trends in digital marketing.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-600" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-12 py-4 bg-dark-800 border border-dark-600 rounded-xl text-light-900 focus:outline-none focus:ring-2 focus:ring-electric-500 placeholder-light-600"
                />
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors duration-200 ${
                  selectedCategory === category
                    ? 'bg-electric-500 text-light-900'
                    : 'bg-dark-700 text-light-600 hover:bg-dark-600'
                }`}
              >
                {category.replace('-', ' ')}
              </motion.button>
            ))}
          </div>

          {/* Featured Post */}
          {filteredPosts.find(post => post.featured) && (
            <AnimatedElement className="mb-12">
              <motion.div
                className="relative rounded-xl overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="aspect-[21/9] relative">
                  <img
                    src={filteredPosts.find(post => post.featured)?.image}
                    alt="Featured post"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-3 py-1 bg-electric-500 text-light-900 rounded-full text-sm font-medium mb-4">
                    Featured
                  </span>
                  <h2 className="text-3xl font-bold text-light-900 mb-4 group-hover:text-electric-500 transition-colors">
                    {filteredPosts.find(post => post.featured)?.title}
                  </h2>
                  <p className="text-light-600 mb-4 max-w-3xl">
                    {filteredPosts.find(post => post.featured)?.excerpt}
                  </p>
                  <div className="flex items-center text-light-600 text-sm">
                    <Calendar size={16} className="mr-2" />
                    <span className="mr-4">
                      {formatDate(filteredPosts.find(post => post.featured)?.date || '')}
                    </span>
                    <Clock size={16} className="mr-2" />
                    <span>{filteredPosts.find(post => post.featured)?.readTime} read</span>
                  </div>
                </div>
                <Button
                  to={`/blog/${filteredPosts.find(post => post.featured)?.id}`}
                  variant="primary"
                  className="absolute bottom-8 right-8"
                >
                  Read More
                </Button>
              </motion.div>
            </AnimatedElement>
          )}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post, index) => (
              <AnimatedElement key={post.id} delay={index * 0.1}>
                <motion.div
                  className="bg-dark-700 rounded-xl overflow-hidden border border-dark-600 group hover:border-electric-500 transition-all duration-300"
                  onHoverStart={() => setHoveredPost(post.id)}
                  onHoverEnd={() => setHoveredPost(null)}
                >
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredPost === post.id ? 1.1 : 1
                      }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <Tag size={16} className="text-electric-500 mr-2" />
                      <span className="text-sm text-light-600 capitalize">
                        {post.category.replace('-', ' ')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-light-900 group-hover:text-electric-500 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-light-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-light-600">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        <span>{formatDate(post.date)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        <span>{post.readTime} read</span>
                      </div>
                    </div>
                    <Button
                      to={`/blog/${post.id}`}
                      variant="text"
                      className="mt-4 group"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </motion.div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;