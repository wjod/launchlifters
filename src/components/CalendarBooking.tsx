import React, { useEffect } from 'react';

const CalendarBooking: React.FC = () => {
  useEffect(() => {
    // Load Haazel form embed script
    const script = document.createElement('script');
    script.src = 'https://api.haazel.ai/js/form_embed.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div style={{ width: '100%', height: '100%', minHeight: '600px' }}>
      <iframe 
        src="https://api.haazel.ai/widget/booking/EHYdZVivGHewOqeuhSe7" 
        style={{ width: '100%', height: '100%', border: 'none', overflow: 'hidden' }} 
        scrolling="no" 
        id="EHYdZVivGHewOqeuhSe7_1747087980578"
      />
    </div>
  );
};

export default CalendarBooking;