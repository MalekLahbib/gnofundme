// import Footer from 'components1/Footer.tsx';
import Header from '../../molecules/Header/Header.tsx';
import Body from '@components/molecules/Body/Body.tsx';
import Footer from '../../molecules/Footer/Footer.tsx';
import { Toaster } from 'react-hot-toast';


const Home = () => {
  
  return (
    <>
        <Header />
        <Body />
        <Footer />
        <Toaster />
    </>
  );
};

export default Home;
