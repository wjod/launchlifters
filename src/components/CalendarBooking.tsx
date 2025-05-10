import React from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";

const CalendarBooking: React.FC = () => {
  React.useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("inline", {
        elementOrSelector: "#cal-booking-placeholder",
        calLink: "maciej-f8d4ya/30min",
        config: {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
        }
      });
    })();
  }, []);

  return (
    <div 
      id="cal-booking-placeholder" 
      style={{ width: "100%", height: "100%", minHeight: "600px" }} 
      data-cal-link="maciej-f8d4ya/30min"
      data-cal-namespace="maciej-f8d4ya"
      data-cal-config='{"layout":"month_view","hideEventTypeDetails":false,"theme":"dark"}'
    />
  );
};

export default CalendarBooking;