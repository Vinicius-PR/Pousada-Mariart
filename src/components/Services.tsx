import "../styles/services.scss";

import confort_img from "../assets/services/confort.jpg";
import room_img from "../assets/services/room.jpg";
import hands_img from "../assets/services/hands.jpg";
import coffee_img from "../assets/services/coffee.jpg";
import location_img from "../assets/services/location.jpg";
import store_img from "../assets/services/store.jpg";

export default function Services() {

  return (
    <section className="services">
      <h1 className="global_titles">Aqui você encontra</h1>

      <div className="services__cards">

        <div className="services__cards--card">
          <h3>Conforto</h3>
          <div>
            <img src={confort_img} alt="Conforto" />
            <p>
              Nosso quartos são aconchegantes, amplos e confortável. Um ambiente super decorado e silencioso para você e sua familia. Colchões Macios, travesseiros novos, moveis rústicos, limpeza impecavel e muito mais. Tudo do melhor jeito possivel para você se sentir em casa.
            </p>
          </div>
        </div>

        <div className="services__cards--card">
          <h3>Tudo Completo</h3>
          <div>
            <img src={room_img} alt="Tudo completo" />
            <p>
            Todos quartos tem banheiro individual, Smart TV led, Internet rápida, frigobar e um ventilador silencioso. Além disso, disponibilizamos roupa de cama, Toalha, sabonete e shampoo em sachê. Mais uma coisa, a agua é quente. Temos aquecedor solar e chuveiro elétrico.
            </p>
          </div>
        </div>

        <div className="services__cards--card">
          <h3>Atendimento</h3>
          <div>
            <img src={hands_img} alt="Atendimento" />
            <p>
              Cada contato, para nós é importante. Oferecemos atendimento online e recepção atenciosa. Seja por e-mail, celular, whatsapp... nós iremos te atender. Para pagamento aceitamos dinheiro, cartão de crédito e débito, transferência bancaria e PIX.
            </p>
          </div>

        </div>

        <div className="services__cards--card">
          <h3>Café da manhã</h3>
          <div>
            <img src={coffee_img} alt="Café da manhã" />
            <p>
              Café com aquele jeitinho mineiro. Servimos frutas diversas como banana, mamão, melão, uva, morango e até melancia. Temos também biscoitos variados de fúba, rosquinhas, goiabinhas, quebra quebra e muito mais. E não pode faltar o pão de queijo do dia, pão de sal, frios, sucos... você estará bem servido.
            </p>
          </div>

        </div>

        <div className="services__cards--card">
          <h3>Localização</h3>
          <div>
            <img src={location_img} alt="localização" />
            <p>
              Nossa pousada fica bem na entrada da cidade, bem onde as lojas de artesanato começa. É facil nos achar. Caso prefira, pode até ir a pé para as lojas. São mais de 80 lojas de artesanato, móveis e decoração para você visitar e encher o carro.
            </p>
          </div>

        </div>

        <div className="services__cards--card">

          <h3>Loja inclusa</h3>

          <div>
            <img src={store_img} alt="loja inclusa" />
            <p>
              Além da pousada, temos uma loja de atesanto bem na recepção. Ela se chama Artesanato Mariart. Temos várias opções de cortinas, mantas, tapetes grande e pequenos, colchas, jogos de passadeira e muito mais.
            </p>
          </div>

        </div>

      </div>
    </section>
  )
}
