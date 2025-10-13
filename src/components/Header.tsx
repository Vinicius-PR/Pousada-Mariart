import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"

import { BiMenu } from "react-icons/bi"
import { AiOutlineClose } from "react-icons/ai"

import bedIcon from "../assets/bed-icon.png"
import '../styles/header.scss'


export default function Header() {

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

  // useEffect used to close the menu if the width dimension change
  useEffect(() => {
    if (dimensions.width > 660 && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [dimensions.width, isMenuOpen]);

  function handleMenuToggle() {
    setIsMenuOpen((v) => !v);
    console.log('isMenuOpen ', isMenuOpen)
  }

  return (
    <header className={`${"header"} ${isMenuOpen ? "open" : ""}`}>

      <div className="header__icon">
        {!isMenuOpen ?
          <BiMenu onClick={handleMenuToggle} />
          : <AiOutlineClose onClick={handleMenuToggle} />
        }
      </div>

      <nav className={`${"header__nav"} ${isMenuOpen ? "open" : ""}`}>
        <div className='header__title'>
          <Link to="/">
            <img src={bedIcon} alt="Pousada Logo Cama" onClick={() => setIsMenuOpen(false)} />
          </Link>

          <h3 className='heading-3 bold'>
            POUSADA <br/> MARIART
          </h3>
        </div>

        <ul className="header__links">

          <li className="header__links-item link-font">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>Inicio</Link>
          </li>

          <li className="header__links-item link-font">
            <Link to="/location" onClick={() => setIsMenuOpen(false)}>Localização</Link>
          </li>

          <li className="header__links-item link-font">
            <Link to="/events" onClick={() => setIsMenuOpen(false)}>Eventos</Link>
          </li>

          <li className="header__links-item link-font">
            <Link to="/city" onClick={() => setIsMenuOpen(false)}>Cidade</Link>
          </li>

          <li className="header__links-item link-font">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
