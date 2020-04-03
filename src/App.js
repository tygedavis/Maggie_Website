import React, { useState, useEffect } from 'react';
import './App.css';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

//Components ---
import Navbar from './components/Navbar';
import Footer from './components/Footer';

//Icons

//Images
import logo from './img/logo.jpg';

function App() {
  const [loader, setLoader ] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoader(false), 2500);
  }, [])

  if(loader === true){
    return (
      <div className='pageLoader'>
        <img src={logo} alt='Logo' />
      </div>
    )
  }

  return !loader && (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
