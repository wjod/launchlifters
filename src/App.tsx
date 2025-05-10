import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import CookieBanner from './components/CookieConsent';
import { initializeAnalytics } from './utils/analytics';
import SmoothScroll from './components/SmoothScroll';
import ScrollProgress from './components/ui/ScrollProgress';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Services = React.lazy(() => import('./pages/Services'));
const CaseStudies = React.lazy(() => import('./pages/CaseStudies'));
const CaseStudyDetail = React.lazy(() => import('./pages/CaseStudyDetail'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const ClientLogin = React.lazy(() => import('./pages/ClientLogin'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-dark-900">
    <div className="w-12 h-12 border-4 border-electric-500 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    initializeAnalytics();
  }, []);

  return (
    <Router>
      <SmoothScroll>
        <ScrollProgress />
        <Layout>
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/case-studies" element={<CaseStudies />} />
              <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/client-login" element={<ClientLogin />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Suspense>
          <CookieBanner />
        </Layout>
      </SmoothScroll>
    </Router>
  );
}

export default App