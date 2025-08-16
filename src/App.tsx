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
import Gallery from './components/home/Gallery';

// Compnent used in the Location page only
import Location from './components/location/Location';

// Compnent used in the Event page only
import Events from "./components/events/Events";

// Compnent used in the City page only
import City from './components/city/City';

// Compnent used in the Contact page only
import Contact from './components/contact/Contact';

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

        <Route path="location" element={<Location />} />
        <Route path="events" element={<Events />} />
        <Route path="city" element={<City />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
