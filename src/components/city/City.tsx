import { useState } from "react";
import "../../styles/city/city.scss";

// Galery Images of the City
import cityImag_1 from "../../assets/cityImages/city_1.jpg"
import cityImag_2 from "../../assets/cityImages/city_2.jpg"
import cityImag_3 from "../../assets/cityImages/city_3.jpg"
import cityImag_4 from "../../assets/cityImages/city_4.jpg"
import cityImag_5 from "../../assets/cityImages/city_5.jpg"

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

export default function City() {

  const [open, setOpen] = useState(false)
    const [index, setIndex] = useState(0);
    const toggleOpen = (state: boolean) => () => setOpen(state);
    
    const updateIndex = (when: boolean) => ({ index: current }: { index: number }) => {
      if (when === open) {
        setIndex(current);
      }
    };

  return (
    <section className="city marging-top-responsive">

      <h1 className="heading-1">Resende Costa</h1>

      <Lightbox
        index={index}
        slides={[
          {
            src: cityImag_1,
            alt: 'Igreja do Rosário.'
          },
          {
            src: cityImag_2,
            alt: 'Sol nascendo sendo visto nas lages de baixo.'
          },
          {
            src: cityImag_3,
            alt: 'Igreja Matriz. Nossa Senhora da Penha de França.'
          },
          {
            src: cityImag_4,
            alt: 'Tear montado com tapetes abertos no fundo e bolas de retalhos.'
          },
          {
            src: cityImag_5,
            alt: 'Uma senhora tecendo um tapete pequeno no tear manual.'
          }
        ]}
        plugins={[Inline, Counter]}
        on={{
          view: updateIndex(false),
          click: toggleOpen(true),
        }}
        carousel={{
          padding: 0,
          spacing: 0,
          imageFit: "cover",
        }}
        inline={{
          style: {
            width: "100%",
            maxWidth: "900px",
            aspectRatio: "3 / 2",
            margin: "0 auto",
          },
        }}
      />

      <Lightbox
        open={open}
        plugins={[Zoom, Counter]}
        counter={{ container: { style: { top: "unset", bottom: 0 } } }}
        close={toggleOpen(false)}
        index={index}
        slides={[
          {
            src: cityImag_1,
            alt: 'Igreja do Rosário.'
          },
          {
            src: cityImag_2,
            alt: 'Sol nascendo sendo visto nas lages de baixo.'
          },
          {
            src: cityImag_3,
            alt: 'Igreja Matriz. Nossa Senhora da Penha de França.'
          },
          {
            src: cityImag_4,
            alt: 'Tear montado com tapetes abertos no fundo e bolas de retalhos.'
          },
          {
            src: cityImag_5,
            alt: 'Uma senhora tecendo um tapete pequeno no tear manual.'
          }
        ]}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />

      <div className="city__text">
        <h2 className="heading-2">Resende Costa, um encanto das Minas Gerais</h2>

        <div className="city__text__content">
          <p>
            Resende Costa é uma charmosa cidade do interior de Minas Gerais, conhecida por sua tradição no artesanato em tear. Passear por suas ruas é se encantar com a cultura, a hospitalidade mineira e a beleza das montanhas.
          </p>

          <p>
            Além das lojinhas de artesanato, onde é possível encontrar peças feitas à mão com muito carinho, a cidade oferece uma atmosfera tranquila, perfeita para quem busca descanso, simplicidade e contato com a natureza.
          </p>

          <p>
            Cercada por paisagens típicas da Serra da Mantiqueira, Resende Costa também está próxima de outras cidades históricas, como São João del-Rei e Tiradentes, sendo um destino ideal para quem deseja explorar o melhor do roteiro turístico da Estrada Real.
          </p>

          <p>
            Venha conhecer Resende Costa e se apaixonar pelo charme, pelas tradições e pela autenticidade desse pedacinho especial de Minas Gerais.
          </p>
        </div>
      </div>

    </section>
  )
}
