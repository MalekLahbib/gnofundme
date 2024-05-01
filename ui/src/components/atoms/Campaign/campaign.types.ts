export interface ICampaign {
    title        : string;
	description  : string;
	goal         : number;
	current      : number;
	begin        : number;
	deadline     : number;
	owner        : string;
	beneficiary  : string;
	contributors : string;
}

export interface ICampaignProps {
    campaign: ICampaign;
}

// export const formatUpvotes = (upvotes: number): string => {
//     if (upvotes >= 1000000) {
//         return (upvotes / 1000000).toFixed(1) + 'M';
//     }

//     if (upvotes >= 1000) {
//         return (upvotes / 1000).toFixed(1) + 'k';
//     }

//     return upvotes.toString();
// };