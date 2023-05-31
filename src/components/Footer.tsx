import { Link } from "react-router-dom";
import "../styles/footer.scss";

// Midias sociais Icons
import instaImg from "../assets/midias_sociais/insta.png";
import faceLogoImg from "../assets/midias_sociais/facebook-logo.svg";

// Contatos Icons
import whatsappLogoImg from "../assets/contacts/whatsapp-logo.svg";
import emailImg from "../assets/contacts/envelope.png";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__content">

        <div className="footer__content--address">
          <div className="footer__content--address__title">
            <h2>Endereço</h2>
          </div>
          <div>
            <p>Av. Alfredo Penido, 1375</p>
            <p>Novo Horizonte</p>
            <p>CEP: 36340-000</p>
            <p>Resende Costa - MG</p>
            <p>Na entrada da cidade</p>
          </div>

        </div>

        <div className="footer__content--social">
          <h2 className="footer__content--social__title">Mídias Sociais</h2>

          <div className="footer__content--social__icons">
            <a href="https://www.instagram.com/pousadamariart/" target="_blank" rel="noreferrer">
              <img src={instaImg} alt="" />
            </a>

            <a href="https://www.facebook.com/Pousada-Mariart-103573365223177/?ref=py_c" target="_blank" rel="noreferrer">
              <img src={faceLogoImg} alt="" />
            </a>
          </div>

          <div className="footer__content--social__reservation">
            <Link to="/contact">Faça pre reserva</Link>
          </div>
        </div>

        <div className="footer__content--contact">
          <h2 className="footer__content--contact__title">Contatos</h2>

          <div className="footer__content--contact__whatsapp">
            <a href="https://api.whatsapp.com/send?phone=5532999349064" target="_blank" rel="noreferrer">
              <img src={whatsappLogoImg} alt="" />
            </a>
            <p>(32) 99934 9064</p>
          </div>

          <div className="footer__content--contact__email">
            <a href="mailto:pousadamariart@hotmail.com?subject=Ola%20Pousada%20Mariart">
              <img src={emailImg} alt="" />
            </a>
            <p>pousadamariart@hotmail.com</p>
          </div>

        </div>

      </section>
    </footer>
  )
}
