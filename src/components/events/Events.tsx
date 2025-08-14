import "../../styles/events/events.scss"
import { ListOfEvents } from "../../listOfEvents"

import { GiCarnivalMask, GiPartyPopper  } from "react-icons/gi";
import { FaMotorcycle, FaCross, FaHatCowboySide, FaCarRear, FaBowlFood } from "react-icons/fa6";
import { PiRugBold } from "react-icons/pi";

const iconsEvent = {
  carnaval: <GiCarnivalMask size={25}/>,
  moto: <FaMotorcycle size={25}/>,
  arte: <PiRugBold size={25}/>,
  santa: <FaCross size={25}/>,
  agropecuaria: <FaHatCowboySide size={25}/>,
  carro: <FaCarRear size={25}/>,
  comida: <FaBowlFood size={25}/>,
  festa: <GiPartyPopper size={25}/>
}

export default function Events() {
  return (
    <section className="events marging-top-responsive">
      <h1 className="heading-1">Principais Eventos 2025</h1>
      <div className="events__text">
        <p>
          Resende Costa é uma cidade que preserva suas tradições com carinho e celebra a cultura mineira durante todo o ano. Ao se hospedar na Pousada Mariart, você fica pertinho de tudo que acontece de mais especial na cidade!
        </p>

        <p>
          De festas religiosas a eventos culturais e feiras de artesanato, cada ocasião é um convite pra viver o melhor do interior de Minas.
        </p>
      </div>
      
      {
        ListOfEvents.map((monthEvent) => {
          return (
            <div className="events__month" id={monthEvent.id}>
              <h2 className="heading-2">{monthEvent.month}</h2>
              {
                monthEvent.events.map((event) => {
                  return (
                    <div className="events__month__event" key={event.id}>
                      <div className="events__month__event__title">
                        <h3 className="heading-3">{event.name}</h3>
                        {iconsEvent[event.icon]}
                      </div>
                      <div className="events__month__event__details">
                        <p className="bold">Data: {event.date}</p>
                        <p>{event.description}</p>
                        <p className="bold">{event.reservation}</p>
                        {
                          event.link.length > 0 &&
                          <a href={event.link} className="events__month__event__link extra-bold" target="_blank" rel="noreferrer">
                            Ver Programação
                          </a>
                        }
                      </div>
                    </div>
                  )
                })
              }
            </div>
          )
        })
      }

      <div className="events__month">
        <h2 className="heading-2">Outros Eventos</h2>          
        <div className="events__month__event">
          <div className="events__month__event__details">
            <p>
              Além desses eventos principais, Resende Costa conta com muitas outras atrações ao longo do ano. Para conferir a programação completa, é só acessar o site da Prefeitura no link abaixo.
            </p>
            <p>
              E se decidir vir, será muito bem-vindo(a) na Pousada Mariart.
              <br/> Estamos te esperando com carinho!
            </p>
            
            <a href="https://www.resendecosta.mg.gov.br/pagina/14098/Calend%C3%A1rio%20Cultural%20e%20Tur%C3%ADstico" className="events__month__event__link extra-bold" target="_blank" rel="noreferrer">
              Programação completa aqui
            </a>
            
          </div>
        </div>        
      </div>
      
    </section>
  )
}