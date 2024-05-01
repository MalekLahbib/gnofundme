import AccountContext from '../../../context/AccountContext.ts';
import ProviderContext from '../../../context/ProviderContext.ts';
import { useContext, useEffect, useState } from 'react';
import { ICampaign } from '@components/atoms/Campaign/campaign.types.ts';
import Config from '../../../config.ts';
import { parseCampaignFetchResponse } from './body.types.ts';

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
  const AddCampaignForm = () => {
    return (
        <>
            {showForm ? (
                <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md z-10 w-1/2">
                    <div className="flex items-center justify-center">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Create Campaign</h2>
                    </div>
                    <form className="mt-4">
                    <label className="flex justify-between items-center text-sm flex-row">
                            <span className="text-gray-700 dark:text-gray-400">Beneficiary : </span>
                            <input type="text" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" placeholder='g1ngj4vvjesklx9awy809expyvae9jt765pt3xe6'/>
                        </label>
                        <label className="flex justify-between items-center flex-row text-sm">
                            <span className="text-gray-700 dark:text-gray-400">Title : </span>
                            <input type="text" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" />
                        </label>
                        <label className="flex justify-between items-center flex-row text-sm mt-4">
                            <span className="text-gray-700 dark:text-gray-400">Description : </span>
                            <textarea className="form-textarea w-11/12 mt-1 block rounded-md border border-indigo-600" rows={3} />
                        </label>
                        <label className="flex justify-between items-center flex-row text-sm mt-4">
                            <span className="text-gray-700 dark:text-gray-400">Goal : </span>
                            <input type="text" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" />
                        </label>
                        <label className="flex justify-between items-center flex-row text-sm mt-4">
                            <span className="text-gray-700 dark:text-gray-400">Begin : </span>
                            <input type="datetime-local" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" />
                        </label>
                        <label className="flex justify-between items-center flex-row text-sm mt-4">
                            <span className="text-gray-700 dark:text-gray-400">Deadline (days after begin) : </span>
                            <input type="number" className="form-input w-auto mt-1 block rounded-md border border-indigo-600" />
                        </label>
                        
                        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleAddCampaign}>Create Campaign</button>
                    </form>
                </div>
            ) : 
                <></>
            
            }
        </>
    );
  }
  const handleAddCampaign = () => {
    if (!provider) {
      throw new Error('invalid chain RPC URL');
    }
    console.log("addcampaign");
    setShowForm(false);
    // await provider.evaluateExpression(
    //   Config.REALM_PATH,
    //   `AddCampaign("title", "description", "imageURL", "url")`
    // );
  
  }

  useEffect(() => {
    fetchCampaigns()
    .then((campaigns: ICampaign[]) => {
      setDisplayedCampaigns(campaigns);
    });
    console.log("campaigns: ",displayedCampaigns);
    
  }, [displayedCampaigns]);

  return (
    <div className='flex items-center flex-col'>
        {address? <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={() => setShowForm(!showForm)}>Create Campaign</button> :
        <></>}
        <AddCampaignForm />
        {displayedCampaigns.map((campaign: ICampaign) => (
            // <Campaign campaign={campaign} key={campaign.title} />
            <span>{campaign.title}</span>
        ))}
    </div>
  )
}

export default Body