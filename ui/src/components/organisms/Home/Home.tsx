// import App from './App.js';
// import Footer from 'components1/Footer.tsx';
import Header from '../../molecules/Header/Header.tsx';
import AccountContext from '../../../context/AccountContext.ts';
import { IAccountContext } from '../../../context/accountContext.types.ts';
import { useState } from 'react';
import { GnoWSProvider } from '@gnolang/gno-js-client';
import ProviderContext from '../../../context/ProviderContext.ts';
import { IProviderContext } from '../../../context/providerContext.types.ts';
import Config from '../../../config.ts';
import { Toaster } from 'react-hot-toast';

const Home = () => {
  const [address, setAddress] = useState<string | null>(null);
  const [chainID, setChainID] = useState<string | null>(null);

  const accountContext: IAccountContext = {
    address,
    chainID,

    setAddress,
    setChainID
  };

  const [provider, setProvider] = useState<GnoWSProvider | null>(
    new GnoWSProvider(Config.CHAIN_RPC)
  );

  const wsProvider: IProviderContext = {
    provider,
    setProvider
  };

  return (
    <ProviderContext.Provider value={wsProvider}>
      <AccountContext.Provider value={accountContext}>
        <Header />
        {/* <App />
        <Footer /> */}
        <Toaster />
      </AccountContext.Provider>
    </ProviderContext.Provider>
  );
};

export default Home;
