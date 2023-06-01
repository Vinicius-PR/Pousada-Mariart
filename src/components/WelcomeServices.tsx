import confort_img from "../assets/services/confort.jpg";
import room_img from "../assets/services/room.jpg";
import hands_img from "../assets/services/hands.jpg";
import "../styles/welcomeServices.scss"

export default function WelcomeServices() {
  return (
    <>
      <div className="welcome">
        <h1>Bem-vindo à nossa pousada!</h1>
        <p>
          Na nossa busca por proporcionar uma estadia inesquecível, criamos um refúgio de tranquilidade e conforto, onde cada detalhe é pensado para o seu bem-estar. Nossa pousada é o lugar perfeito para escapar da agitação do dia a dia e desfrutar de momentos de paz em meio à beleza da natureza ao nosso redor.
        </p>
        <br />
        <p>
          Nossas acomodações foram cuidadosamente decoradas para oferecer um ambiente acolhedor, combinando o charme rústico com toques modernos. Aqui, você encontrará um espaço sereno para descansar e recarregar as energias.
        </p>
        <br />
        <p>
          Além disso, poderá desfrutar das lojas de artesanato da cidade. Aqui encontrará tapetes, colchas, cortinas, almofadas e muito mais com um preço bom e de qualidade.
        </p>
      </div>


      <div className="cards">
        <div className="card card-1">
          <img src={confort_img} alt="" />
          <div>
            <h2>Conforto que você merece</h2>
            <p>Nosso quartos são aconchegantes, amplos e confortável. Um ambiente super decorado e silencioso para você e sua familia. Colchões Macios, travesseiros novos, moveis rústicos, limpeza impecavel e muito mais. Tudo do melhor jeito possivel para você se sentir em casa.</p>
          </div>
        </div>

        <div className="card card-2">
          <img src={room_img} alt="" />
          <div>
            <h2>Tudo Completo</h2>
            <p>Todos quartos tem banheiro individual, Smart TV led, Internet rápida, frigobar e um ventilador silencioso. Além disso, disponibilizamos roupa de cama, Toalha, sabonete e shampoo em sachê. Mais uma coisa, a agua é quente. Temos aquecedor solar e chuveiro elétrico.</p>
          </div>
        </div>


        <div className="card card-3">
          <img src={hands_img} alt="" />
          <div>
            <h2>Atendimento de qualidade</h2>
            <p>Cada contato, para nós é importante. Oferecemos atendimento online e recepção atenciosa. Seja por e-mail, celular, whatsapp... nós iremos te atender. Para pagamento aceitamos dinheiro, cartão de crédito e débito, transferência bancária e PIX.</p>
          </div>
        </div>
      </div>

    </>
  )
}