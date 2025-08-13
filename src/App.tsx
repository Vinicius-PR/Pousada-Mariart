import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Components that are used in all pages
import Header from './components/Header';
import Scroll from "./components/Scroll";
import Footer from './components/Footer';

// Components used in the Home page only
import Presentation from './components/home/Presentation';
import Services from "./components/home/Services";
import Reviews from "./components/home/Reviews";


import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Gallery from './components/home/Gallery';
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
          </>
        }
        />

        <Route path="about" element={<AboutUs />} />
        <Route path="town" element={<Town />} />
        {/* <Route path="store" element={<Store />} /> */}
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
