import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import Button from '../ui/Button';
import { motion, AnimatePresence } from 'framer-motion';
import CalendarBooking from '../CalendarBooking';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-dark-800/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <motion.div 
        className="container mx-auto px-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="group relative">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <motion.div
                className="relative"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
              >
                <Rocket className="w-12 h-12 text-electric-500 transform rotate-45" />
                <motion.div
                  className="absolute inset-0 bg-electric-500/20 rounded-full blur-xl"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
              </motion.div>
              
              <div className="ml-3">
                <motion.span
                  className="block font-display font-bold text-2xl text-light-900"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Launch
                  <motion.span 
                    className="text-electric-500 relative"
                    whileHover={{
                      color: "#3B8AFF",
                      transition: { duration: 0.2 }
                    }}
                  >
                    Lifters
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-electric-500"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    />
                  </motion.span>
                </motion.span>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <NavLinks />
            </div>

            {/* Action Links */}
            <div className="flex items-center space-x-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/client-login"
                  className="text-light-600 hover:text-light-900 text-sm font-medium transition-colors"
                >
                  Client Login
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  to="/contact"
                  variant="primary"
                  size="sm"
                  className="shadow-lg shadow-electric-500/20 hover:shadow-electric-500/30 transition-all duration-300"
                >
                  Get Started
                </Button>
              </motion.div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button 
            className="md:hidden relative z-10 p-2 text-light-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isMenuOpen ? "close" : "menu"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-dark-800/98 backdrop-blur-md border-t border-dark-600 shadow-xl md:hidden"
          >
            <div className="container px-6 py-8">
              <nav className="flex flex-col space-y-4">
                <NavLinks mobile />
              </nav>
              <div className="mt-6 space-y-3">
                <Link 
                  to="/client-login"
                  className="block text-center text-light-600 hover:text-light-900 py-2 transition-colors"
                >
                  Client Login
                </Link>
                <Button 
                  to="/contact"
                  variant="primary" 
                  fullWidth
                  className="shadow-lg shadow-electric-500/20"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavLinks: React.FC<{ mobile?: boolean }> = ({ mobile }) => {
  const location = useLocation();
  
  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/case-studies', label: 'Projects' }
  ];
  
  return (
    <>
      {links.map((link, index) => (
        <motion.div
          key={link.to}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className={mobile ? '' : 'relative'}
        >
          <Link
            to={link.to}
            className={`
              ${mobile ? 'text-lg py-2 block font-medium' : 'px-4 py-2 inline-block text-sm font-medium'}
              transition-all duration-300 relative hover:text-electric-500
              ${location.pathname === link.to
                ? 'text-electric-500'
                : 'text-light-600'
              }
            `}
          >
            {link.label}
            {!mobile && location.pathname === link.to && (
              <motion.div
                layoutId="navbar-active"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-electric-500"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </Link>
        </motion.div>
      ))}
    </>
  );
};

export default Navbar;