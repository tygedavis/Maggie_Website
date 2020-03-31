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

function App() {
  const [spinner, setSpinner ] = useState(true);

  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, [])

  if(spinner === true){
    return (
      <div className='pageLoader'>
        <CircularProgress /> {/* TODO: Change this to Maggies logo */}
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
