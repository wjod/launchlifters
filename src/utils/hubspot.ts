import { Client } from '@hubspot/api-client';

const hubspotClient = new Client({ accessToken: import.meta.env.VITE_HUBSPOT_API_KEY });

export const createContact = async (email: string, firstName?: string, lastName?: string) => {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.create({
      properties: {
        email,
        firstname: firstName,
        lastname: lastName
      }
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Error creating HubSpot contact:', error);
    return { success: false, error };
  }
};

export const createDeal = async (properties: Record<string, any>) => {
  try {
    const response = await hubspotClient.crm.deals.basicApi.create({
      properties
    });
    return { success: true, data: response };
  } catch (error) {
    console.error('Error creating HubSpot deal:', error);
    return { success: false, error };
  }
};