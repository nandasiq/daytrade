import React, { useContext} from 'react';
import Header  from '../../components/NavBar';
import Drop  from './components/Drop';
import Footer  from '../../components/Footer';
import StoreContext from '../../components/Store/Context';



const Home = () => {
  const { setToken } = useContext(StoreContext);

  return (
    <>
    <Header />
    <button type="button" onClick={() => setToken(null)}>
        Sair
    </button>
    <Drop />
    <Footer />
    </>
  );
}

export default Home;