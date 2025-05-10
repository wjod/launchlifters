import { Instantly } from '@instantly.ai/sdk';

const instantly = new Instantly(import.meta.env.VITE_INSTANTLY_API_KEY);

export const addLeadToInstantly = async (data: {
  email: string;
  fullName: string;
  company?: string;
  title?: string;
  industry?: string;
}) => {
  try {
    const response = await instantly.leads.create({
      email: data.email,
      fullName: data.fullName,
      company: data.company,
      title: data.title || 'real estate agent', // Default to real estate agent
      industry: data.industry || 'Real Estate & Construction' // Default industry
    });

    return { success: true, data: response };
  } catch (error) {
    console.error('Error adding lead to Instantly:', error);
    return { success: false, error };
  }
};

export const startLeadCampaign = async (leadId: string, campaignId: string) => {
  try {
    const response = await instantly.campaigns.addLead(campaignId, leadId);
    return { success: true, data: response };
  } catch (error) {
    console.error('Error starting lead campaign:', error);
    return { success: false, error };
  }
};