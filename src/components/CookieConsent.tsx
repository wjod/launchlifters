import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner: React.FC = () => {
  const [accepted, setAccepted] = useState(false);

  if (accepted) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-dark-800 border-t border-dark-600 p-4 z-[100]">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-light-600">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{' '}
          <Link 
            to="/privacy" 
            className="text-electric-500 hover:text-electric-400 underline relative z-[101]"
          >
            Learn more
          </Link>
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => setAccepted(true)}
            className="bg-electric-500 hover:bg-electric-600 text-light-900 px-6 py-2 rounded-md transition-colors"
          >
            Accept
          </button>
          <button
            onClick={() => setAccepted(true)}
            className="border border-light-600 text-light-600 hover:text-light-900 px-6 py-2 rounded-md transition-colors"
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;