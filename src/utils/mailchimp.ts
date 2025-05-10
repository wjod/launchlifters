import type { ApiClient } from '@mailchimp/mailchimp_marketing';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: import.meta.env.VITE_MAILCHIMP_API_KEY,
  server: import.meta.env.VITE_MAILCHIMP_SERVER_PREFIX
});

export const subscribeToNewsletter = async (email: string) => {
  try {
    const response = await mailchimp.lists.addListMember(
      import.meta.env.VITE_MAILCHIMP_LIST_ID,
      {
        email_address: email,
        status: 'subscribed'
      }
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    return { success: false, error };
  }
};