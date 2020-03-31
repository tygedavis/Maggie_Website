import React, { useState, useEffect } from 'react';
import './App.css';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

//Components ---
import Navbar from './components/Navbar';

//Icons
import CircularProgress from '@material-ui/core/CircularProgress';

//Images
import logo from './img/logo.jpg';

function App() {
  const [spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 3000);
  }, [])

  if(spinner === true){
    return (
      <div className='pageLoader'>
        <img src={logo} alt='Logo' />
      </div>
    )
  }

  return !spinner && (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
    </div>
  );
}

export default App;
