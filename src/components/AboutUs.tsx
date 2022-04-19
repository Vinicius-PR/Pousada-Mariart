import "../styles/about_us.scss";

export default function AboutUs() {
  return (
    <section className="about">

      <h1 className="global_titles">Pousada Mariart</h1>

      <div className="about__video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/PkC5JXN-Exg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>

      <div className="about__text">
        <h1 className="global_titles">Nossa História</h1>
        <p>
          Tudo começou com uma loja de artesanato. Artesanato Mariart. Começamos devagar e com poucas mercadorias. O negócio foi crescendo, sempre atraindo novos clientes. Alguns acabaram até virando nossos amigos. Com o passar do tempo, começamos a construir do lado da loja. A principio seria um novo ponto para comercio. No entando, surgiu uma outra ideia. Criar uma Pousada.
        </p>
        <p>
          Foi ai então que começou a se levantar a Pousada Mariart. Iniciamos com 5 quartos anciosos de como seria esse ramo. As pessoas foram nos conhecendo, gostaram e os 5 quartos ficou pequeno. Ampliamos para 10 quartos e finalmente para 15 quartos. Hoje temos o Artesanato Mariart e também a Pousada Mariart. Dois estabelecimentos andando juntos. Graças a Deus novos clientes chegam e o círculo de amizades so aumenta.
        </p>
        <h1 className="global_titles">Nossa Missão</h1>
        <p>
          Procuramos sempre entregar o melhor serviço possível. Conforto, bom atendimento, limpeza, organização e bom gosto faz parte do nosso dia a dia na pousada. Além disso, comunicação é primordial para gente. Criticas construtivas estarão sempre bem vindas.
        </p>
      </div>
      
    </section>
  )
}
