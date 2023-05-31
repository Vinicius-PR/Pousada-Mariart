import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

// Images Galeria
import Img1 from "../assets/gallery/gallery 1.jpg"
import Img2 from "../assets/gallery/gallery 2.jpg"
import Img3 from "../assets/gallery/gallery 3.jpg"
import Img4 from "../assets/gallery/gallery 4.jpg"
import Img5 from "../assets/gallery/gallery 5.jpg"
import Img6 from "../assets/gallery/gallery 6.jpg"
import Img7 from "../assets/gallery/gallery 7.jpg"
import Img8 from "../assets/gallery/gallery 8.jpg"
import Img9 from "../assets/gallery/gallery 9.jpg"
import Img10 from "../assets/gallery/gallery 10.jpg"

import "../styles/gallery.scss";

export default function Gallery() {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <>
      <h1 className="global_titles">Galeria</h1>
      <Swiper
        slidesPerView={1}
        pagination={pagination}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <div>
            <img src={Img1} alt="galeria imagem 1" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img2} alt="galeria imagem 2" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img3} alt="galeria imagem 3" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img4} alt="galeria imagem 4" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img5} alt="galeria imagem 5" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img6} alt="galeria imagem 6" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img7} alt="galeria imagem 7" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img8} alt="galeria imagem 8" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img9} alt="galeria imagem 9" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <img src={Img10} alt="galeria imagem 10" />
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
}
