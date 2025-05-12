import { trackEvent } from './analytics';

const GHL_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Imc2aFFkalB3c0tOcGRMMWFIZXhhIiwidmVyc2lvbiI6MSwiaWF0IjoxNzQ3MDgwMTcyOTU5LCJzdWIiOiI0bkg3WFllNUlNcTg2aXNpYm5nRCJ9.2b_x2zQ0UkzJAS2A1mV-rys5wCUTgJ5vKr6EbvOkVlg';

export const submitToGHL = async (formData: {
  email: string;
  fullName: string;
  phone: string;
  company?: string;
  message: string;
  serviceInterest?: string;
  budgetRange?: string;
}) => {
  try {
    const response = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: formData.email,
        phone: formData.phone,
        firstName: formData.fullName.split(' ')[0],
        lastName: formData.fullName.split(' ').slice(1).join(' '),
        company: formData.company,
        customField: {
          message: formData.message,
          serviceInterest: formData.serviceInterest,
          budgetRange: formData.budgetRange
        }
      })
    });

    if (!response.ok) {
      throw new Error('Failed to submit to GHL');
    }

    const data = await response.json();

    // Track the event
    trackEvent('contact_form_submitted_ghl', {
      email: formData.email,
      service_interest: formData.serviceInterest
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting to GHL:', error);
    return { success: false, error };
  }
};