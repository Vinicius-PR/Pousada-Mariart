import "../../styles/location/location.scss";

export default function Location() {
  return (
    <section className="location marging-top-responsive">
      <h1 className="heading-1">Localização</h1>

      <div className="location__map">
        <iframe title="Mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1317.5268445475558!2d-44.22697603806203!3d-20.931274400238603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1a5c8f2095d55%3A0x89afeafd15f1d9e4!2sPousada%20Mariart!5e0!3m2!1spt-BR!2sbr!4v1610397086161!5m2!1spt-BR!2sbr" width="100%" height="500" style={{ border: 0 }} allowFullScreen={true} aria-hidden="false" tabIndex={0}></iframe>
      </div>

      <div className="location__details">
        <h2 className="heading-2">Detalhes</h2>
        <p>Estamos localizado na cidade de Resende Costa, que fica  na região do Campo das Vertentes, em Minas Gerais. É uma cidade charmosa e conhecida principalmente pelo seu artesanato em tear manual. </p>

        <p>Estamos perto de São João Del Rei e de Tiradentes, o que a torna parte da rota turística das cidades históricas de Minas. Fica a cerca de: </p>

        <ul>
          <li>181 Km de Belo Horizonte</li>
          <li>36 Km de São João Del Rei</li>
          <li>42 Km de Tiradentes</li>
        </ul>
      </div>

      <div className="location__inn">
        <h4 className="title bold">Pousada</h4>
        <p>Nossa privilegiada localização oferece a combinação perfeita entre aconchego e conveniência. Estamos bem na entrada da cidade, onde começa as lojas de artesanato. Ao se hospedar conosco, você estará a poucos passos do coração pulsante da cidade, com acesso rápido e fácil as loja de artesanato.😎</p>

        <p>Ao explorar os arredores da pousada, você encontrará uma variedade de lojas encantadoras, repletas de tesouros artesanais únicos. Descubra peças exclusivas e autênticas, cuidadosamente criadas pelos talentosos artesãos locais. Cada tapete, cortina, almofada e outros produtos conta uma história e representa a riqueza cultural e criativa da nossa região.🤗</p>

        <p>Alem disso, há também lugares para comer bem pertinho da gente. Você encontrará pizzaria, restaurantes, churrascaria, padaria e posto de gasolina a poucos metros da gente. Pertinho demais.</p>
      </div>
    </section>
  )
}
