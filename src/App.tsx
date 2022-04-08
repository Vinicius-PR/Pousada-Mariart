import { Routes, Route } from "react-router-dom";

import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Location from './components/Location';
import Politics from './components/Politics';
import Presentation from './components/Presentation';
import Scroll from "./components/Scroll";
import Services from './components/Services';
import Store from './components/Store';

function App() {
  return (
    <>
      <Header />
      <Scroll/>
      <Routes>
        <Route path="/" element={
          <>
            <Presentation />
            <Services />
            <Gallery />
            <Location />
          </>
          }
        />

        <Route path="about" element={<AboutUs/>} />
        <Route path="politics" element={<Politics/>} />
        <Route path="store" element={<Store/>} />
        <Route path="contact" element={<Contact/>} />
      </Routes>
      
      <Footer/>
    </>
  );
}

export default App;
