import { Routes, Route } from "react-router-dom";

import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Location from './components/Location';
import Town from './components/Town';
import Presentation from './components/Presentation';
import Scroll from "./components/Scroll";
import Store from './components/Store';
import WelcomeServices from "./components/WelcomeServices";

function App() {
  return (
    <>
      <Header />
      <Scroll />
      <Routes>
        <Route path="/" element={
          <>
            <Presentation />
            <WelcomeServices />
            <Gallery />
            <Location />
          </>
        }
        />

        <Route path="about" element={<AboutUs />} />
        <Route path="town" element={<Town />} />
        <Route path="store" element={<Store />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
