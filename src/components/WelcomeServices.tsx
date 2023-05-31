import confort_img from "../assets/services/confort.jpg";
import room_img from "../assets/services/room.jpg";
import hands_img from "../assets/services/hands.jpg";
import coffee_img from "../assets/services/coffee.jpg";

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

      <div className="banner">
        <div className="banner--img">
          <img src={coffee_img} alt="" />
        </div>
        <div className="banner--text">
          <h1>O melhor café</h1>
          <p>
            Um dos destaques da sua estadia é o nosso delicioso café da manhã. Preparamos uma seleção cuidadosa de alimentos frescos e saborosos para garantir que você comece o dia da melhor forma possível. Nossa mesa farta apresenta uma variedade com pães frescos, bolos caseiros, frutas da estação, sucos naturais, pão de queijo e uma variedade de biscoitos.
          </p>

          <p>
            Desfrute de uma refeição tranquila e revigorante no nosso espaçoso e acolhedor salão de café da manhã. Na nossa pousada, seu conforto e satisfação são prioridade. Esperamos recebê-lo em breve e compartilhar com você momentos especiais, proporcionando uma estadia agradável e um café da manhã que desperta todos os sentidos
          </p>

          <p>
            O pessoal está adorando a pousada 😍
          </p>
          <a href="https://www.google.com/travel/search?q=pousada%20mariart%20google%20reviews&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4270442%2C4284970%2C4291517%2C4306835%2C4429192%2C4515404%2C4597339%2C4757164%2C4778035%2C4814050%2C4850738%2C4864715%2C4874190%2C4886480%2C4893075%2C4920132%2C4924070%2C4965990%2C4985712%2C4990494%2C72248281%2C72253158%2C72256470%2C72271034%2C72271797%2C72272555%2C72275078%2C72276652&hl=pt-BR&gl=br&cs=1&ssta=1&ts=CAESABpFCicSJTIjMHhhMWE1YzhmMjA5NWQ1NToweDg5YWZlYWZkMTVmMWQ5ZTQSGhIUCgcI5w8QBRgeEgcI5w8QBRgfGAEyAhAA&qs=CAEyFENnc0k1TFBIcjlIZi10ZUpBUkFCOAJCCwnk2fEV_eqviRgBQgsJ5NnxFf3qr4kYAQ&ap=KigKEgmANo8mEvA0wBF_r9egWR1GwBISCcVzFk8x7TTAEX-v17TNHEbAugEHcmV2aWV3cw&ictx=1&ved=0CAAQ5JsGahcKEwigio-A6J3_AhUAAAAAHQAAAAAQCw"
            target="_blank" rel="noreferrer"
          > Clique aqui e confira </a>

        </div>
      </div>

    </>
  )
}