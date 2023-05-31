import "../styles/store.scss";
import "../styles/gallery.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation } from "swiper";

// Imagens Galeria
import store1 from "../assets/store/loja1.jpg";
import store2 from "../assets/store/loja2.jpg";
import store3 from "../assets/store/loja3.jpg";
import store4 from "../assets/store/loja4.jpg";
import store5 from "../assets/store/loja5.jpg";
import store6 from "../assets/store/loja6.jpg";

export default function Store() {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section className="store">
      <h1 className="global_titles">Artesanat Mariart</h1>
      <div className="store__text">
        <p>
          Nossa loja de artesanato está ha mais de 10 anos no mercado. Trabalhamos com produtos diversos para decorar a sua casa com tapetes variados, almofadas de várias estampas, tamanhos diversos de cortinas e muito mais.
        </p>
        <p>
          A maioria do nossos produtos são de produção propria. Assim garantimos qualidade para você. Vendemos no atacado e varejo. Venha conferir.
        </p>

        <h2>Aqui você encontra</h2>
        <ul>
          <li>Tapetes de varios tamanhos. Do pequeno de porta até grandes para salas.</li>
          <li>Tapetes emborrachados.</li>
          <li>Jogos passadeira para cozinha de retalho e de algodão.</li>
          <li>Toalha de mesa 100% algodão. Com chita, listradas, lisas e coloridas.</li>
          <li>Peças americanas e quardanapos. Alem de ter também jogos americanos.</li>
          <li>Almofadas, enchimentos e capas. Até kits já montados e combinados.</li>
          <li>Futons para bancos de madeira, pequenos e grandes.</li>
          <li>Cortinas de algodão para cozinha. Temos também cortinas grandes para janela, porta ou para cobrir a parede toda.</li>
          <li>Cortina Blackout.</li>
          <li>Pesos de porta váriados que também decoram o ambiente.</li>
          <li>Paneleiros, fruteiras, porta papel e muito mais produtos de ferro.</li>
          <li>Bonecas média e grandes.</li>
          <li>Divinos de madeira pequenos e grandes.</li>
          <li>Jogos lavabos e jogos de banheiro comum ou emborrachados.</li>
          <li>e muito mais...</li>
        </ul>
      </div>


      <h2>Fotos</h2>

      <Swiper
        slidesPerView={1}
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div className="content_swiper">
            <img src={store1} alt="galeria imagem 1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiper">
            <img src={store2} alt="galeria imagem 2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiper">
            <img src={store3} alt="galeria imagem 3" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiper">
            <img src={store4} alt="galeria imagem 4" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiper">
            <img src={store5} alt="galeria imagem 5" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="content_swiper">
            <img src={store6} alt="galeria imagem 6" />
          </div>
        </SwiperSlide>
      </Swiper>

    </section>
  )
}
