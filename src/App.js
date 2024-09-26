import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './componets/navbar/navBar';
import Footer from './componets/footer/footer';
import SvgLogoComponent from './assets/animationComponents/logoSvg';
import AnimatedSection from './animatedSection';
import LandingPage from './componets/landingPage/landingPage';
import { Box } from '@mui/material';

function App() {
  const [showSvg, setShowSvg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSvg(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSvg ? (
        <SvgLogoComponent/>
      ) : (
        <>
          <AnimatedSection>
            <Navbar />
          </AnimatedSection>
          <LandingPage />
          <AnimatedSection>
            <Footer />
          </AnimatedSection>
        </>
      )}
    </>
  );
}

export default App;
