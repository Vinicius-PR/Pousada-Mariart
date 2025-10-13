// Images Galeria
import Img1 from "../../assets/gallery/gallery 1.jpg"
import Img2 from "../../assets/gallery/gallery 2.jpg"
import Img3 from "../../assets/gallery/gallery 3.jpg"
import Img4 from "../../assets/gallery/gallery 4.jpg"
import Img5 from "../../assets/gallery/gallery 5.jpg"
import Img6 from "../../assets/gallery/gallery 6.jpg"
import Img7 from "../../assets/gallery/gallery 7.jpg"
import Img8 from "../../assets/gallery/gallery 8.jpg"
import Img9 from "../../assets/gallery/gallery 9.jpg"
import Img10 from "../../assets/gallery/gallery 10.jpg"

import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import "../../styles/home/gallery.scss";
import { useState } from 'react';

export default function Gallery() {
  
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0);
  const toggleOpen = (state: boolean) => () => setOpen(state);
  
  const updateIndex = (when: boolean) => ({ index: current }: { index: number }) => {
    if (when === open) {
      setIndex(current);
    }
  };

  return (
    <section className="gallery marging-top-responsive">

      <h1 className="heading-1">Galeria</h1>

      <Lightbox
        index={index}
        slides={[
          {
            src: Img1,
            alt: 'Cama de casal arrumada e com roupas de cama em cima.'
          },
          {
            src: Img2,
            alt: 'Duas camas sendo uma de casal e outra de solteiro. Quarto triplo do fundo.'
          },
          {
            src: Img3,
            alt: 'Quarto de casal com janela para frente completo.'
          },
          {
            src: Img4,
            alt: 'Quarto quadruplo com uma cama de casal e duas de solteiro.'
          },
          {
            src: Img5,
            alt: 'Banheiro do quarto. Com box. Completo.'
          },
          {
            src: Img6,
            alt: 'Quarto triplo. Uma cama de casal e uma de solteiro. Cama com decoração de ferro.'
          },
          {
            src: Img7,
            alt: 'Mesa da area do café com todos os itens. Pães, Pão de queijo, bolos, frios e mais.'
          },
          {
            src: Img8,
            alt: 'Frutas servidas na area do café. Banana, mamão, morango, melão.'
          },
          {
            src: Img9,
            alt: 'Frente da Pousada Mariart.'
          },
          {
            src: Img10,
            alt: 'A vista de um dos quartos da frente.'
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
            src: Img1,
            alt: 'Cama de casal arrumada e com roupas de cama em cima.'
          },
          {
            src: Img2,
            alt: 'Duas camas sendo uma de casal e outra de solteiro. Quarto triplo do fundo.'
          },
          {
            src: Img3,
            alt: 'Quarto de casal com janela para frente completo.'
          },
          {
            src: Img4,
            alt: 'Quarto quadruplo com uma cama de casal e duas de solteiro.'
          },
          {
            src: Img5,
            alt: 'Banheiro do quarto. Com box. Completo.'
          },
          {
            src: Img6,
            alt: 'Quarto triplo. Uma cama de casal e uma de solteiro. Cama com decoração de ferro.'
          },
          {
            src: Img7,
            alt: 'Mesa da area do café com todos os itens. Pães, Pão de queijo, bolos, frios e mais.'
          },
          {
            src: Img8,
            alt: 'Frutas servidas na area do café. Banana, mamão, morango, melão.'
          },
          {
            src: Img9,
            alt: 'Frente da Pousada Mariart.'
          },
          {
            src: Img10,
            alt: 'A vista de um dos quartos da frente.'
          }
        ]}
        on={{ view: updateIndex(true) }}
        animation={{ fade: 0 }}
        controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
      />

    </section>
  );
}
