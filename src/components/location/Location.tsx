import "../../styles/location/location.scss";
import location_img from "../../assets/servicesImg/location.jpg";

export default function Location() {
  return (
    <section>
      <h1 className="heading-1">Localização</h1>

      <div className="location">

        <div className="location--map">
          <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.5268445475558!2d-44.22697603806203!3d-20.931274400238603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1a5c8f2095d55%3A0x89afeafd15f1d9e4!2sPousada%20Mariart!5e0!3m2!1spt-BR!2sbr!4v1610397086161!5m2!1spt-BR!2sbr" width="100%" height="500" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
        </div>

      </div>


    </section>
  )
}
