import React from 'react';
import './App.scss';
import { HashRouter as Router} from 'react-router-dom';

import Header from '../subComponents/header/Header';
import Footer from '../subComponents/Footer/Footer';
import Routes from '../Routes/Routes';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
