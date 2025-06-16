import React, { useContext } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Routers from './Routers';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import AuthContext from './Context/AuthContext';
import MarqueeNotice from './components/MarqueeNotice';

const App = () => {
 

  return (
    <div>
      <Header />
        <Routers />
      <Footer />
    </div>
  );
};

export default App;
