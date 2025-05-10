import { supabase } from './supabase';
import { trackEvent } from './analytics';

export const handleContactForm = async (formData: {
  email: string;
  fullName: string;
  company?: string;
  message: string;
  serviceInterest?: string;
  budgetRange?: string;
}) => {
  try {
    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([{
        email: formData.email,
        full_name: formData.fullName,
        company: formData.company,
        message: formData.message,
        service_interest: formData.serviceInterest,
        budget_range: formData.budgetRange
      }]);

    if (error) throw error;

    // Track event
    trackEvent('contact_form_submitted', {
      email: formData.email,
      service_interest: formData.serviceInterest
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error };
  }
};

export const handleNewsletterSignup = async (email: string) => {
  try {
    // Insert into Supabase
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }]);

    if (error) throw error;

    // Track event
    trackEvent('newsletter_subscribed', { email });

    return { success: true, data };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
};