import Home from "@components/organisms/Home/Home";
import AccountContext from './context/AccountContext.ts';
import { IAccountContext } from './context/accountContext.types.ts';
import { useState } from 'react';
import { GnoWSProvider } from '@gnolang/gno-js-client';
import ProviderContext from './context/ProviderContext.ts';
import { IProviderContext } from './context/providerContext.types.ts';
import Config from './config.ts';

const App = () => {
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
        <Home />
      </AccountContext.Provider>
    </ProviderContext.Provider>
  );
}

export default App