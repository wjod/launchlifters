import React from 'react';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  company,
  image,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-dark-700 rounded-xl p-6 md:p-8 border border-dark-600 hover:border-electric-500 transition-all duration-300"
    >
      {/* Quote Icon */}
      <motion.div 
        className="text-electric-500 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
      >
        <Quote size={32} />
      </motion.div>
      
      {/* Quote Text */}
      <motion.p 
        className="text-light-800 text-lg mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        "{quote}"
      </motion.p>
      
      {/* Author Information */}
      <motion.div 
        className="flex items-center"
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {image && (
          <div className="w-12 h-12 mr-4 rounded-full overflow-hidden flex-shrink-0">
            <motion.img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        
        <div>
          <h4 className="font-semibold text-light-900">{author}</h4>
          <p className="text-light-600 text-sm">
            {position}, {company}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default TestimonialCard;