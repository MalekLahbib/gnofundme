import { ICampaign } from "@components/atoms/Campaign/campaign.types.ts";

export interface IHomeProps {}

export const parseCampaignFetchResponse = (response: string): ICampaign[] => {
  const regex = /\("(.*)".*\)/;
  const match = response.match(regex);

  if (!match || match.length < 2) {
    throw new Error('invalid post response');
  }

  const cleanResponse: string = match[1].replace(/\\"/g, '"');

  return JSON.parse(cleanResponse);
};