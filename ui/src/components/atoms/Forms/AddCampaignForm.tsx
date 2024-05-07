import { useContext, useState } from "react";
import { EMessageType, IAccountInfo } from "../../../services/adena/adena.types.ts";
import { AdenaService } from "../../../services/adena/adena.ts";
import ProviderContext from "../../../context/ProviderContext";
import AccountContext from "../../../context/AccountContext";
import Config from "../../../config.ts";

const AddCampaignForm = ({updateShowForm}: {updateShowForm: (value: boolean) => void}) => {
  const { address } = useContext(AccountContext);
  const { provider } = useContext(ProviderContext);
  const [beneficiary, setBeneficiary] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [goal, setGoal] = useState<number>(0);
  const [begin, setBegin] = useState<number>(0);
  const [deadline, setDeadline] = useState<number>(0);


  const addDays = (date: Date, days: number) => {
    const copy = new Date(date.getTime());
    copy.setDate(copy.getDate() + days);
    return copy.getTime();
  };

  const handleAddCampaign = async () => {
    if (!provider) {
      throw new Error('invalid chain RPC URL');
    }
    console.log("owner: ", address, "\nbeneficiary: ", beneficiary, "\ntitle: ", title, "\ndescription: ", description, "\ngoal: ", goal, "\nbegin: ", begin, "\ndeadline: ", deadline);
    updateShowForm(false);
    
    try {
      const accountInfo: IAccountInfo = await AdenaService.getAccountInfo();
      
      await AdenaService.sendTransaction(
        [
          {
            type: EMessageType.MSG_CALL,
            value: {
              caller: accountInfo.address,
              send: '',
              pkg_path: Config.REALM_PATH,
              func: 'NewCampaign',
              args: [
                title, description, `${goal}`, `${begin}`, `${deadline}`, beneficiary
              ]
            }
          }
        ],
        2000000
      );
      
    } catch (e) {
      console.error(e);
    }
    // fetchCampaigns()
    // .then((campaigns: ICampaign[]) => {
    //   setDisplayedCampaigns(campaigns);
    // });
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md z-10 w-1/2 border border-gray-200">
      <div className="flex items-center justify-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Create Campaign</h2>
      </div>
      <form className="mt-4">
        <label className="flex justify-between items-center text-sm flex-row">
          <span className="text-gray-700 dark:text-gray-400">Beneficiary : </span>
          <input type="text" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" placeholder='g1ngj4vvjesklx9awy809expyvae9jt765pt3xe6' onChange={e => setBeneficiary(e.target.value)} />
        </label>
        <label className="flex justify-between items-center flex-row text-sm">
          <span className="text-gray-700 dark:text-gray-400">Title : </span>
          <input type="text" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" onBlur={e => setTitle(e.target.value)}/>
        </label>
        <label className="flex justify-between items-center flex-row text-sm mt-4">
          <span className="text-gray-700 dark:text-gray-400">Description : </span>
          <textarea className="form-textarea w-11/12 mt-1 block rounded-md border border-indigo-600" rows={3} onBlur={e => setDescription(e.target.value)}/>
        </label>
        <label className="flex justify-between items-center flex-row text-sm mt-4">
          <span className="text-gray-700 dark:text-gray-400">Goal : </span>
          <input type="number" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" placeholder='GNOT' onBlur={e => setGoal(Number(e.target.value))}/>
        </label>
        <label className="flex justify-between items-center flex-row text-sm mt-4">
          <span className="text-gray-700 dark:text-gray-400">Begin : </span>
          <input type="datetime-local" className="form-input w-5/6 mt-1 block rounded-md border border-indigo-600" onBlur={(e) => setBegin(Date.parse(e.target.value))} />
        </label>
        <label className="flex justify-between items-center flex-row text-sm mt-4">
          <span className="text-gray-700 dark:text-gray-400">Deadline (days after begin) : </span>
          <input type="number" className="form-input w-auto mt-1 block rounded-md border border-indigo-600" onBlur={e => setDeadline(addDays(new Date(begin), Number(e.target.value)))}/>
        </label>
        
        <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={handleAddCampaign}>Create Campaign</button>
      </form>
    </div>
  )
}

export default AddCampaignForm