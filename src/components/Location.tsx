import "../styles/location.scss";
import wazeIcon from "../assets/waze.png";

export default function Location() {
  return (
    <section className="location">
      <h1 className="global_titles">Nossa localização</h1>

      <div className="location__content">
        <p className="location__content--paragraph">A cidade de Resende Costa fica localizada na região centro sul de Minas Gerais. Fica bem próximo de Tiradentes e Bichinho. A distância de Resende Costa das seguintes cidades é:</p>

        <div className="location__content--details">
          <ul>
            <li>São João Del Rei: <strong> 37 Km </strong></li>
            <li>Tiradentes: <strong> 42 Km </strong> </li>
            <li>Bichinhos: <strong> 48 Km</strong> </li>
            <li>Belo Horizonte: <strong> 183 Km</strong></li>
          </ul>

          <div className="location__content--details__waze">
            <p>Clique no waze</p>
            <a href="https://ul.waze.com/ul?ll=-20.93221187%2C-44.22703028&amp;navigate=yes&amp;utm_campaign=default&amp;utm_source=waze_website&amp;utm_medium=lm_share_location" target="_blank" rel="noreferrer">
              <img src={wazeIcon} alt="waze Icon"/>
            </a>
          </div>
        </div>

      </div>
      
      <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.5268445475558!2d-44.22697603806203!3d-20.931274400238603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1a5c8f2095d55%3A0x89afeafd15f1d9e4!2sPousada%20Mariart!5e0!3m2!1spt-BR!2sbr!4v1610397086161!5m2!1spt-BR!2sbr" width="100%" height="500" style={{border:0}} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
    </section>
  )
}
