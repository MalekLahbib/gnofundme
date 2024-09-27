import AccountContext from '../../../context/AccountContext.ts';
import ProviderContext from '../../../context/ProviderContext.ts';
import { useContext, useEffect, useState } from 'react';
import { ICampaign } from '@components/atoms/Campaign/campaign.types.ts';
import Config from '../../../config.ts';
import { parseCampaignFetchResponse } from './body.types.ts';
import Campaign from '@components/atoms/Campaign/Campaign.tsx';
import AddCampaignForm from '@components/atoms/Forms/AddCampaignForm.tsx';

const Body = () => {
  const { address } = useContext(AccountContext);
  const { provider } = useContext(ProviderContext);
  const [displayedCampaigns, setDisplayedCampaigns] = useState<ICampaign[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);

  const fetchCampaigns = async ( ): Promise<ICampaign[]> => {
    if (!provider) {
      throw new Error('invalid chain RPC URL');
    }
    
    const response: string = await provider.evaluateExpression(
      Config.REALM_PATH,
      `GetCampaigns()`
    );
    
    // Parse the campaigns response
    return parseCampaignFetchResponse(response);
  };

  useEffect(() => {
    fetchCampaigns()
    .then((campaigns: ICampaign[]) => {
      setDisplayedCampaigns(campaigns);
    });    
  }, [showForm]);

  return (
    <div className='flex items-center flex-col'>
        {address? <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setShowForm(!showForm)}>Create Campaign</button> :
        <></>
        }
        {showForm ? (
          <AddCampaignForm updateShowForm={(value: boolean) => {
            setShowForm(value);
          }}/>
          ) : 
            <></>
        }
        {displayedCampaigns.map((campaign: ICampaign, index) => (
            <Campaign campaign={campaign} key={"camp"+index} />
        ))}
    </div>
  )
}

export default Body