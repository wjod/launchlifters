import { trackEvent } from './analytics';

const GHL_API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2NhdGlvbl9pZCI6Imc2aFFkalB3c0tOcGRMMWFIZXhhIiwidmVyc2lvbiI6MSwiaWF0IjoxNzQ3MDgwMTcyOTU5LCJzdWIiOiI0bkg3WFllNUlNcTg2aXNpYm5nRCJ9.2b_x2zQ0UkzJAS2A1mV-rys5wCUTgJ5vKr6EbvOkVlg';

const getServiceTag = (serviceInterest: string = '') => {
  const serviceTags: Record<string, string> = {
    'paid-ads': 'Paid Advertising',
    'email-sms': 'Email & SMS Marketing',
    'branding': 'Branding & Creative',
    'social': 'Social Media Management',
    'seo': 'SEO & Content',
    'web-design': 'Web Design',
    'other': 'General Inquiry'
  };
  
  return serviceTags[serviceInterest] || 'General Inquiry';
};

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
    // Create contact
    const contactResponse = await fetch('https://rest.gohighlevel.com/v1/contacts/', {
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
        company: formData.company, // GHL uses 'company' field directly
        tags: [getServiceTag(formData.serviceInterest)],
        source: 'Website Contact Form'
      })
    });

    if (!contactResponse.ok) {
      throw new Error('Failed to create contact in GHL');
    }

    const contactData = await contactResponse.json();

    // Create note with all form details
    const noteContent = `
New Contact Form Submission
----------------------------
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company || 'N/A'}
Service Interest: ${getServiceTag(formData.serviceInterest)}
Budget Range: ${formData.budgetRange || 'N/A'}
----------------------------
Client Message:
${formData.message}
    `.trim();

    const noteResponse = await fetch(`https://rest.gohighlevel.com/v1/contacts/${contactData.contact.id}/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GHL_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: noteContent
      })
    });

    if (!noteResponse.ok) {
      throw new Error('Failed to create note in GHL');
    }

    // Track the event
    trackEvent('contact_form_submitted_ghl', {
      email: formData.email,
      service_interest: formData.serviceInterest
    });

    return { success: true, data: contactData };
  } catch (error) {
    console.error('Error submitting to GHL:', error);
    return { success: false, error };
  }
};