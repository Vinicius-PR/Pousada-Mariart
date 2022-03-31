import "../styles/politics.scss";

export default function Politics() {
  return (
    <section className="politics">
      <h1 className="global_titles">Politicas</h1>

      <div className="politics__text">
        <h2>Gerais da Reserva</h2>
        <ul>
          <li>Horário de Check-in: A partir das 14:00 horas.</li>
          <li>Horário de Check-out: Até as 12:00 horas.</li>
          <li>Não podemos garantir a continuidade de hospedagem, além da prevista pelo hóspede durante a reserva, caso haja outra reserva efetuada para o período ou apartamento específico.</li>
          <li>A reserva só é confirmada mediante depósito antecipado de 50% do valor. Os outros 50% será pagos no check-in.</li>
          <li>Métodos de pagamento aceitos são cartão de crédito e débito, transferências, Pix, depositos e dinheiro.</li>
          <li>Reservas não confirmadas por depósito em até 48 horas são espiradas do sistema.</li>
          <li>Reservas garantidas com pagamentos antecipado à chegada serão mantidos por 6 horas após o horário estabelecido para a entrada do hóspede na Pousada.</li>
          <li>Concedemos estadia cortesia para crianças até 03 anos (No máximo 01 crianças por quarto), acompanhadas dos responsáveis. Havendo dúvidas sobre a idade, poderá ser solicitado documento comprobatório. Crianças maiores de 04 anos pagam cama adicional.</li>
          <li>Ao efetuar a reserva, o hóspede assume estar ciente das normas da Pousada.</li>
        </ul>
        
        <h2>Gerais da Pousada</h2>
        <ul>
          <li>É proibído fumar dentro dos quartos, banheiros e em áreas comuns aos hospedes, conforme Lei Estadusl. Usar somente áreas externas e indicadas para tal.</li>
          <li>A partir das <strong>22h00min</strong> o Silêncio é primordial para tranquilidade dos hóspedes, isso é muito importante para o convívio em grupo. Desobedecer está norma poderá causar o cancelamento da estadia como forma de preservar o bem-estar dos demais hóspedes e da Pousada.</li>
          <li>Não aceitamos pets na pousada. Salvo para os casos com “cão-guia”.</li>
          <li>Os hospedes são responsáveis pela conservação dos quartos. O reparo de qualquer dano causado por hóspedes será cobrado.</li>
          <li>A Pousada não se responsabiliza por objetos ou dinheiro esquecidos ou deixados nas dependências.</li>
          <li>Reservamos o direito de cobrar os acertos antecipadamente, durante o check-in.</li>
          <li>O não comparecimento sem comunicação prévia na data prevista de chegada, será considerada “no show” (desistência sem cancelamento), a vaga ficará disponível por 12 horas, a partir do horário de entrada.</li>
          <li>Pode-se o favor de desligar as luzes, televisão, fechar a torneira e a porta nos momentos em que se ausentar do quarto.</li>
        </ul>
      </div>
    </section>
  )
}
