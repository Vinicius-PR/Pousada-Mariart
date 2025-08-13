import ButtonReservation from "../ButtonReservation"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

import "../../styles/home/presentation.scss"

export default function Presentation() {
  return (
    <section className="presentation">

      <div className="presentation__title">
        <h1 className="heading-1">Pousada Mariart</h1>
        <h2 className="heading-2">Descubra o aconchego perfeito na nossa pousada</h2>
      </div>

      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide first-slide">
            <div className="card">
              <h2 className="heading-2 bold">Bem Vindo!</h2>
              <p className="title bold">Bem-vindo à Pousada Mariart - seu refúgio em Resende Costa</p>
            </div>
            <ButtonReservation />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="slide second-slide">
            <div className="card">
              <h2 className="heading-2 bold">Café da manhã artesanal</h2>
              <p className="title bold">Café da manhã mineiro feito com carinho para você</p>
            </div>
            <ButtonReservation />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slide third-slide">
            <div className="card">
              <h2 className="heading-2 bold">O charme da região</h2>
              <p className="title bold">Tradição e aconchego no coração de Minas Gerais</p>
            </div>
            <ButtonReservation />
          </div>
        </SwiperSlide>
        ...
      </Swiper>

    </section>
  )
}
