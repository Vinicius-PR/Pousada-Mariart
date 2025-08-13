import coffeeImg from '../../assets/servicesImg/coffee.png'
import internetImg from '../../assets/servicesImg/internet.png'
import locationImg from '../../assets/servicesImg/location.png'
import roomImg from '../../assets/servicesImg/room.png'

import "../../styles/home/Services.scss"
import ButtonReservation from '../ButtonReservation'

export default function Services() {
  return (
    <section className="services marging-top-responsive">

      <div className="coffee">
        <div className="coffee__content">
          <h3 className="heading-3">Café da manhã</h3>
          <h4 className="title bold">Comece o dia com o sabor e o carinho da pousada!</h4>
          <p>
            Nosso café da manhã é preparado com ingredientes frescos e receitas caseiras que aquecem o coração. Pão de queijo quentinho, bolos artesanais, frutas da estação e aquele cafezinho passado na hora fazem parte da experiência de se hospedar na Pousada Mariart.
            <br/>
            <br/>
            Tudo servido num ambiente tranquilo, com vista para o verde e aquele cheirinho bom que só Minas tem.
          </p>
        </div>

        <div className="coffee__image">
          <img src={coffeeImg} alt="Café da pousada" />
        </div>
      </div>

      <div className="internet">
        <div className="internet__content">
          <h3 className="heading-3">Internet</h3>
          <h4 className="title bold">Conecte-se sem preocupações</h4>
          <p>
            Mesmo em meio ao sossego da nossa pousada, você continua bem conectado. 
            <br/>
            <br/>
            Oferecemos internet de alta velocidade em todos os ambientes, ideal para quem precisa trabalhar, assistir a um filme ou apenas compartilhar os melhores momentos da estadia.
            <br/>
            <br/>
            A Mariart também conta com uma rede mesh moderna, garantindo sinal forte e estável em todos os cantinhos da pousada — do quarto da frente até o do fundo.
          </p>
        </div>
        
        <div className="internet__image">
          <img src={internetImg} alt="Internet da pousada" />
        </div>
      </div>

      <div className="room">
        <div className="room__content">
          <h3 className="heading-3">Conforto dos quartos</h3>
          <h4 className="title bold">Conforto que abraça</h4>
          <p>
            Nossos quartos foram pensados para oferecer a você uma estadia tranquila, aconchegante e com tudo que precisa.
            <br/>
            <br/>
            Cada detalhe foi escolhido com carinho: cama confortável, ambiente arejado e uma decoração simples, mas cheia de charme.
            <br/>
            <br/>
            Todos os quartos contam com frigobar, TV Smart, internet de qualidade, ventilador e muito silêncio pra você descansar de verdade. Ideal pra quem busca relaxar, curtir a cidade ou até trabalhar com tranquilidade.
          </p>
        </div>
        
        <div className="room__image">
          <img src={roomImg} alt="Quartos da pousada" />
        </div>
      </div>

      <div className="locationService">
        <div className="locationService__content">
          <h3 className="heading-3">Localização</h3>
          <h4 className="title bold">Localização privilegiada</h4>
          <p>
            A Pousada Mariart está na entrada de Resende Costa, no comecinho da cidade, onde tudo começa a acontecer.
            <br/>
            <br/>
            Ficamos pertinho das lojinhas de artesanato, com restaurantes, pizzarias e bares a poucos passos, facilitando seus passeios e refeições.
            <br/>
            <br/>
            Aqui você aproveita o melhor da cidade com comodidade e tranquilidade.
          </p>
        </div>
        
        <div className="locationService__image">
          <img src={locationImg} alt="Localização da pousada" />
        </div>
      </div>

      <div className="services__buttonReservation">
        <ButtonReservation/>
      </div>

    </section>
  )
}