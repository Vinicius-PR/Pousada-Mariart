import { Link } from "react-router-dom";
import "../styles/footer.scss";
import { ImLocation2 } from "react-icons/im";

// Midias sociais Icons
import instaImg from "../assets/midias_sociais/insta.png";
import faceImg from "../assets/midias_sociais/facebook.png";
import bookingImg from "../assets/midias_sociais/booking.png";

// Contatos Icons
import whatsappImg from "../assets/contacts/whatsapp.png";
import emailImg from "../assets/contacts/envelope.png";

export default function Footer() {
  return (
    <footer className="footer">
      <section className="footer__content">

        <div className="footer__content--address">
          <div className="footer__content--address__title">
              <h2>Endereço</h2>
              <span><ImLocation2/></span>
          </div>
          <div>
            <p>Av. Alfredo Penido, 1365</p>
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
              <img src={instaImg} alt="Instagram" />
            </a>

            <a href="https://www.facebook.com/Pousada-Mariart-103573365223177/?ref=py_c" target="_blank" rel="noreferrer">
              <img src={faceImg} alt="Facebook" />
            </a>

            <a href="https://www.booking.com/hotel/br/pousada-mariart.pt-br.html?aid=360920;label=New_Portuguese_PT_ROW_6409090206-_9oPl604g33uUPimd0_L7QS60966725406%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg;sid=c032dec587cb5fc46dbc0c98051a95dc;dest_id=-665764;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;srepoch=1648658804;srpvid=580475f97f7500a5;type=total;ucfs=1&#hotelTmpl" target="_blank" rel="noreferrer">
              <img src={bookingImg} alt="Booking" />
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
              <img src={whatsappImg} alt=" whatsapp" />
            </a>
            <p>(32) 99934 9064</p>
          </div>

          <div className="footer__content--contact__email">
            <a href="mailto:pousadamariart@hotmail.com?subject=Ola%20Pousada%20Mariart">
              <img src={emailImg} alt="Email" />
            </a>
            <p>pousadamariart@hotmail.com</p>
          </div>

        </div>

      </section>
    </footer>
  )
}
