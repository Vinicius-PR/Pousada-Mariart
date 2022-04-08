import { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";

import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../assets/Pousada-logo.jpg"
import '../styles/header.scss'


export default function Header() {

  let location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
  });

  useEffect(() => {
    function handleResize() {
        setDimensions({
            width: window.innerWidth,
        })
    }
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
      if (dimensions.width > 768 && isMenuOpen) {
          setIsMenuOpen(false);
      }
  }, [dimensions.width, isMenuOpen]);

  function handleMenuToggle() {
    setIsMenuOpen((v) => !v);
  }

  return (
    <header className={`${"header"} ${isMenuOpen ? "open" : ""}`}>

      <div className="header__icon">
        {!isMenuOpen ?
            <BiMenu onClick={handleMenuToggle}/>
            : <AiOutlineClose onClick={handleMenuToggle}/>
        }
      </div>

      <div className={`${"header__overlay"} ${isMenuOpen ? "open" : ""}`}></div>

      <nav className="header__nav">
        <Link to="/" className="header__nav--logo">
          <img src={logo} alt="Pousada Logo" onClick={() => setIsMenuOpen(false)}/>
        </Link>

        <ul className="header__nav--links">

          <li className={`${"header__nav--links__item"} 
                          ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" data-text="Home" onClick={() => setIsMenuOpen(false)}>Home</Link>
          </li>

          <li className={`${"header__nav--links__item"}
                          ${location.pathname === "/about" ? "active" : ""}`}>
            <Link to="/about" data-text="Sobre nos" onClick={() => setIsMenuOpen(false)}>Sobre nos</Link>
          </li>

          <li className={`${"header__nav--links__item"}
                          ${location.pathname === "/politics" ? "active" : ""}`}>
            <Link to="/politics" data-text="Politicas" onClick={() => setIsMenuOpen(false)}>Politicas</Link>
          </li>

          <li className={`${"header__nav--links__item"}
                          ${location.pathname === "/store" ? "active" : ""}`}>
            <Link to="/store" data-text="Nossa Loja" onClick={() => setIsMenuOpen(false)}>Nossa Loja</Link>
          </li>

          <li className={`${"header__nav--links__item"}
                          ${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="/contact" data-text="Contatos" onClick={() => setIsMenuOpen(false)}>Contatos</Link>
          </li>
        </ul>

      </nav>
    </header>
  )
}
