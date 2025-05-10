import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, Tag, ArrowLeft, Share2, Bookmark } from 'lucide-react';
import Button from '../components/ui/Button';
import AnimatedElement from '../components/ui/AnimatedElement';
import { motion, useScroll, useSpring } from 'framer-motion';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Digital Marketing: 2024 Trends',
    excerpt: 'Explore how artificial intelligence is revolutionizing digital marketing strategies and what it means for your business.',
    content: `
      <h2>The Rise of AI in Marketing</h2>
      <p>Artificial Intelligence is no longer just a buzzword in digital marketing—it's becoming an essential tool for businesses looking to stay competitive in 2024 and beyond. From predictive analytics to personalized customer experiences, AI is transforming how we approach marketing strategies.</p>

      <h3>Key AI Applications in Marketing</h3>
      <ul>
        <li>Predictive Analytics and Customer Behavior</li>
        <li>Automated Content Generation</li>
        <li>Personalized Customer Experiences</li>
        <li>Advanced Chatbots and Customer Service</li>
      </ul>

      <h2>Impact on Marketing Strategy</h2>
      <p>The integration of AI into marketing processes is leading to more efficient campaigns, better ROI, and improved customer satisfaction. Companies that embrace these technologies are seeing significant advantages in market performance.</p>

      <h3>Benefits of AI Implementation</h3>
      <ul>
        <li>Improved targeting accuracy</li>
        <li>Enhanced customer insights</li>
        <li>Automated campaign optimization</li>
        <li>Real-time performance analysis</li>
      </ul>

      <h2>Looking Ahead</h2>
      <p>As AI technology continues to evolve, we can expect even more sophisticated applications in digital marketing. Businesses that start preparing now will be better positioned to leverage these advancements in the future.</p>
    `,
    category: 'growth-marketing',
    readTime: '8 min',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Sarah Chen',
      role: 'Head of AI Strategy',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=750&dpr=2'
    }
  },
  // Add more blog posts here...
];

const BlogPost: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

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
      <section className="pt-20 pb-12 bg-dark-900 relative overflow-hidden">
        <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-electric-500/10 rounded-full filter blur-[100px]" />
        <div className="absolute left-1/4 bottom-0 w-1/3 h-1/3 bg-coral-500/20 rounded-full filter blur-[80px]" />
        
        <div className="container mx-auto px-4 md:px-6 relative">
          <AnimatedElement>
            <Button
              to="/blog"
              variant="text"
              icon={<ArrowLeft size={20} />}
              iconPosition="left"
              className="mb-8"
            >
              Back to Blog
            </Button>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 mb-6">
                <span className="px-3 py-1 bg-electric-500/10 text-electric-500 rounded-full text-sm font-medium capitalize">
                  {post.category.replace('-', ' ')}
                </span>
                <div className="flex items-center text-light-600">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{formatDate(post.date)}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime} read</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-light-900">
                {post.title}
              </h1>

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center">
                  <img
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-light-900">{post.author.name}</h3>
                    <p className="text-sm text-light-600">{post.author.role}</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="p-2 hover:bg-dark-800 rounded-full transition-colors">
                    <Share2 size={20} className="text-light-600" />
                  </button>
                  <button className="p-2 hover:bg-dark-800 rounded-full transition-colors">
                    <Bookmark size={20} className="text-light-600" />
                  </button>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 bg-dark-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedElement>
              <div className="aspect-[21/9] rounded-xl overflow-hidden mb-12">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div 
                className="prose prose-invert prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </AnimatedElement>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-dark-600">
              <div className="flex items-center gap-3">
                <Tag size={20} className="text-light-600" />
                <div className="flex gap-2">
                  {['AI', 'Digital Marketing', 'Technology', 'Strategy'].map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dark-700 rounded-full text-sm text-light-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPost;