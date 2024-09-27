import { IConnectProps } from './connect.types.ts';
import ProviderContext from '../../../context/ProviderContext.ts';
import { FC, useContext, useState } from 'react';
//import { Button, useToast } from '@chakra-ui/react';
import { AdenaService } from '../../../services/adena/adena.ts';
import toast from 'react-hot-toast';
import { EMessageType, IAccountInfo } from "../../../services/adena/adena.types.ts";
import Config from '../../../config.ts';
import AccountContext from '../../../context/AccountContext.ts';
import Adena from '../../../shared/assets/img/adena.svg';
import Loading from '../../../shared/assets/img/loading.svg';

const Connect: FC<IConnectProps> = () => {
  //const toast = useToast();
  const { provider } = useContext(ProviderContext);
  const { setChainID, setAddress } = useContext(AccountContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleWalletConnect = async () => {
    setIsLoading(true);

    try {
      // Attempt to establish a connection
      await AdenaService.establishConnection('gnofundme');
      
      // Get the account info
      const accountInfo: IAccountInfo = await AdenaService.getAccountInfo();

      // Make sure the network is valid
      await AdenaService.switchNetwork(Config.CHAIN_ID);

      // Update the account context
      setAddress(accountInfo.address);
      setChainID(Config.CHAIN_ID);

      if (!provider) {
        throw new Error('invalid chain RPC URL');
      }
      
      const response: string = await provider.evaluateExpression(
        Config.REALM_PATH,
        `IsUserRegistered("${accountInfo.address}")`
      );
      
      if (response.includes("false")) {
        console.log("User not registered");
        toast.error('User not registered',
          {
            position: 'bottom-right',
            duration: 4000,
            style: {
              border: '1px solid black',
              boxShadow: '10px 5px 5px black',
            },
          }
        );
      } else {
        toast.success('User Registered',
          {
            position: 'bottom-right',
            duration: 4000,
            style: {
              border: '1px solid black',
              boxShadow: '10px 5px 5px black',
            },
          }
        );
      }

      toast.success('Successfully connected to Adena',
        {
          position: 'bottom-right',
          duration: 4000,
          style: {
            border: '1px solid black',
            boxShadow: '10px 5px 5px black',
          },
        }
      );
    } catch (e) {
      console.error(e);

      toast.error('Unable to connect to Adena',
        {
          position: 'bottom-right',
          duration: 4000,
          style: {
            border: '1px solid black',
            boxShadow: '10px 5px 5px black',
          },
        }
      );
    }

    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={handleWalletConnect}
        className='flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 space-x-2'
        >
        {
          isLoading ? (
          <>
            <img src={Loading} style={{
              width: '20px',
              height: 'auto'
            }} />
            <span>CONNECTING</span>
          </>
          ) : 
          (
            <>
              <img src={Adena}
                style={{
                  width: '20px',
                  height: 'auto'
                }}
              />
              <span>CONNECT WALLET</span>
            </>
          )
        }
      </button>
    </>
  );
};

export default Connect;
