import { Link } from "react-router-dom"
import ButtonReservation from "./ButtonReservation";

import bedIcon from "../assets/bed-icon.png"
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

import "../styles/footer.scss"

export default function Footer() {
  return (
    <footer className="footer marging-top-responsive">
      <div className="footer__content">

        <div className="footer__content__link">
          <img src={bedIcon} alt="" />
          <h3 className="heading-3">Pousada <br/> Mariart</h3>
        </div>

        <div className="footer__content__navigation">
          <h3 className="heading-3">Navegação</h3>
          <ul>
            <li>
              <Link to="/">
                <p className="title bold">Inicio</p>
              </Link>
            </li>
            <li>
              <Link to="/location">
                <p className="title bold">Localização</p>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <p className="title bold">Eventos</p>
              </Link>
            </li>
            <li>
              <Link to="/city">
                <p className="title bold">Cidade</p>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <p className="title bold">Contato</p>
              </Link>
            </li>
          </ul>
        </div>

        <ButtonReservation/>

        <div className="footer__content__social">
          <h3 className="heading-3">Redes Sociais</h3>
          <div className="footer__content__social__icons">
            <a href="https://www.instagram.com/pousadamariart?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noreferrer">
              <FaInstagram size={26} className="footer__icon"/>
            </a>

            <a href="https://www.facebook.com/profile.php?id=100067706226352" target="_blank" rel="noreferrer">
              <FaFacebookSquare size={26} className="footer__icon" />
            </a>

            <a href="https://wa.me/553299349064?text=Ola%2C%20eu%20estava%20navegando%20no%20seu%20site.%20Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es." target="_blank" rel="noreferrer">
              <FaWhatsappSquare size={27} className="footer__icon"/>
            </a>
          </div>
        </div>

        <div className="footer__content__contact">
          <h3 className="heading-3">Contatos</h3>

          <div className="footer__content__contact__title">
            <FaLocationArrow className="footer__icon"/>
            <h4 className="title">Endereço</h4>
          </div>

          <p className="footer__content__contact__address-text">
            Av. Alfredo Penido, 1375 <br/>
            Novo Horizonte <br/>
            CEP: 36340-000 <br/>
            Resende Costa - MG <br/>
            Na entrada da cidade
          </p>

          <div className="footer__content__contact__title">
            <FaWhatsapp className="footer__icon"/>
            <h4 className="title">Telefone/Whatsapp</h4>
          </div>

          <p className="footer__content__contact__phone-text">
            <a href="https://wa.me/553299349064?text=Ola%2C%20eu%20estava%20navegando%20no%20seu%20site.%20Gostaria%20de%20algumas%20informa%C3%A7%C3%B5es.
            " target="_blank" rel="noreferrer">(32) 99934-9064</a>
          </p>
          
        </div>

      </div>
    </footer>
  )
}
