import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "@components/organisms/Home/Home";
import AccountContext from './context/AccountContext.ts';
import { IAccountContext } from './context/accountContext.types.ts';
import { useState } from 'react';
import { GnoWSProvider } from '@gnolang/gno-js-client';
import ProviderContext from './context/ProviderContext.ts';
import { IProviderContext } from './context/providerContext.types.ts';
import Config from './config.ts';
import Error from './components/atoms/Error/Error.tsx';

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
    <Router>
      <ProviderContext.Provider value={wsProvider}>
        <AccountContext.Provider value={accountContext}>
          <AppContent />
        </AccountContext.Provider>
      </ProviderContext.Provider>
    </Router>
  );
}

// Routes
function AppContent() {  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/users" element={<Users />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/group/:groupId" element={<Groupe />} />
      <Route path="/user/:userid" element={<User />} /> */}
      <Route path="*" element={<Error />} />
    </Routes>
  )
}

export default App