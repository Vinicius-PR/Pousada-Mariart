import { useEffect } from "react";

import { Routes, Route } from "react-router-dom";

import Header from './components/Header';
import Scroll from "./components/Scroll";
import Presentation from './components/Presentation';
import Services from "./components/Services";
import Reviews from "./components/Reviews";

import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Town from './components/Town';
import Store from './components/Store';

function App() {

  useEffect(() => {
    if (!document.querySelector('script[src="https://static.elfsight.com/platform/platform.js"]')) {
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      <Header />
      <Scroll />
      <Routes>
        <Route path="/" element={
          <>
            <Presentation />
            <Services />
            <Reviews />
            <Gallery />
            {/* <Location /> */}
          </>
        }
        />

        <Route path="about" element={<AboutUs />} />
        <Route path="town" element={<Town />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      {/* <Footer /> */}
    </>
  );
}

export default App;
