// import { IHeaderProps } from './header.types.ts';
import { FC, useContext } from 'react';
import Connect from '../../atoms/Connect/Connect.tsx';
import AccountContext from '../../../context/AccountContext.ts';
// import Upload from '../../atoms/Upload/Upload.tsx';

const Header = () => {
  //const { setPostSort, setPostTime, resetHomepage } = props;

  //const [isMdOrSmaller] = useMediaQuery('(max-width: 62em)');
  const { address } = useContext(AccountContext);

  return (
    <div
      className="flex bg-gray-300 h-20 p-8 text-xl font-roboto justify-between items-center flex-row w-screen"
    >
      
      <span className='text-2xl'>GnoFundMe</span>
      
      {address ? (
        <span className='bg-green-600 p-2 rounded'> Adena Wallet Connected </span>
      ) : (
        <div className='flex'>
          <Connect />
        </div>
      )}
    </div>
  );
};

export default Header;
