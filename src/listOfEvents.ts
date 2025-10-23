type EventIcon = 
  "carnaval" | "moto" | "arte" | "santa" | "agropecuaria" | "carro" | "comida" | "festa";

interface EventItem {
  id: string;
  name: string;
  icon: EventIcon;
  date: string;
  description: string;
  reservation: string;
  link: string;
}

interface ListOfEventsProps {
  id: string;
  month: string;
  events: EventItem[];
}


export const ListOfEvents:ListOfEventsProps[] = [
  {
    id: "month-2",
    month: "Fevereiro",
    events: [
      {
        id: "ev-fev-1",
        name: "Carnaval",
        icon: "carnaval",
        date: "21/02 a 04/03",
        description: "O Carnaval de Resende Costa é uma das principais festas da cidade. Ele sempre tem seu início cerca de uma semana antes do carnaval oficial através da realização de blocos caricatos.",
        reservation: "Reservando no minimo 3 diárias.",
        link: "https://www.instagram.com/p/DGMDWBOBb0o/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-3",
    month: "Março",
    events: [
      {
        id: "ev-mar-1",
        name: "X Encontro Nacional de Motociclistas das Lages",
        icon: "moto",
        date: "21/03 a 23/03",
        description: "Resende Costa recebe, todos os anos, motociclistas de várias partes do Brasil para um fim de semana cheio de energia, paixão sobre duas rodas e muita confraternização. O Encontro Nacional de Motociclistas das Lajes reúne shows ao vivo, exposições de motos, sorteios e atividades culturais, movimentando a cidade e trazendo um clima vibrante às ruas. É um dos eventos mais animados do calendário local!",
        reservation: "Reservando no minimo 2 diarias.",
        link: "https://www.instagram.com/reel/DHWw5sNBB4I/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-4",
    month: "Abril",
    events: [
      {
        id: "ev-ab-1",
        name: "Semana Santa em Resende Costa",
        icon: "santa",
        date: "13/04 a 21/04",
        description: "A Semana Santa é um dos momentos mais emocionantes e tradicionais do ano em Resende Costa. Com celebrações religiosas marcantes, procissões iluminadas por velas e manifestações culturais que envolvem toda a cidade, esse período convida moradores e visitantes a vivenciarem a fé e a espiritualidade em um ambiente acolhedor e histórico. O silêncio ganha significado e a cidade se transforma em um cenário de devoção e beleza.",
        reservation: "Reservando no minimo 2 diarias no final de semana.",
        link: "https://www.instagram.com/p/DHHYnMnBz2j/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-6",
    month: "Junho",
    events: [
      {
        id: "ev-jun-1",
        name: "Mostra de Artesanato e Cultura",
        icon: "arte",
        date: "19/06 a 22/06",
        description: "A Semana Santa é um dos momentos mais emocionantes e tradicionais do ano em Resende Costa. Com celebrações religiosas marcantes, procissões iluminadas por velas e manifestações culturais que envolvem toda a cidade, esse período convida moradores e visitantes a vivenciarem a fé e a espiritualidade em um ambiente acolhedor e histórico. O silêncio ganha significado e a cidade se transforma em um cenário de devoção e beleza.",
        reservation: "Reservando no minimo 2 diarias no final de semana.",
        link: "https://www.instagram.com/p/DLAuNE_J_Uv/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-7",
    month: "Julho",
    events: [
      {
        id: "ev-jul-1",
        name: "43ª Exposição Agropecuária de Resende Costa",
        icon: "agropecuaria",
        date: "16/07 a 20/07",
        description: "A Exposição Agropecuária é tradição certa em Resende Costa. O objetivo principal é a valorização das tradições do campo. Além de exposições, a programação conta com rodeio de animais e shows de artistas com renome nacional e regional.",
        reservation: "Reservando no minimo 2 diarias.",
        link: "https://www.instagram.com/exporesendecosta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
      },
      {
        id: "ev-jul-2",
        name: "3ª Encontro de Carros Antigos de Resende Costa",
        icon: "carro",
        date: "25/07 a 27/07",
        description: "O Encontro de Carros Antigos é um verdadeiro passeio no tempo para os apaixonados por automobilismo. Realizado anualmente em Resende Costa, o evento reúne veículos clássicos, raridades bem conservadas e muito charme sobre rodas. É uma atração imperdível para colecionadores, curiosos e famílias inteiras, que lotam a praça central para admirar os modelos e conversar com os expositores. Um fim de semana de nostalgia, história e paixão por motores!",
        reservation: "Reservando no minimo 2 diarias.",
        link: "https://www.instagram.com/reel/DMsV1nKROpa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-9",
    month: "Setembro",
    events: [
      {
        id: "ev-set-1",
        name: "Festa de Nossa senhora da Penha de França - Padroeira",
        icon: "santa",
        date: "23/28 a 01/09",
        description: "A Festa de Nossa Senhora da Penha é a celebração religiosa mais tradicional e querida de Resende Costa. Realizada em setembro, a festa reúne fé, cultura e encontro entre famílias em uma programação que inclui novenas, missas, procissões e apresentações musicais. Durante os dias de festa, a cidade se enfeita e se enche de emoção, gratidão e devoção à padroeira. É um momento especial que marca o coração dos moradores e encanta os visitantes pela beleza e espiritualidade das celebrações.",
        reservation: "Reservando 1 ou mais diarias.",
        link: "https://www.instagram.com/p/DMoIOZrJ3MF/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        id: "ev-set-2",
        name: "Final do 4º comida de Buteco",
        icon: "comida",
        date: "20/09",
        description: "Sabor, criatividade e aquele tempero caseiro marcam presença no 4º Final de Comida de Buteco de Resende Costa. O evento celebra a culinária típica mineira com pratos especiais criados pelos bares e restaurantes da cidade, em clima descontraído e acolhedor. É uma ótima oportunidade para provar delícias regionais, prestigiar a gastronomia local e aproveitar música ao vivo, boa conversa e aquela energia gostosa de buteco mineiro. Uma festa de sabores que reúne moradores e visitantes em volta da mesa!",
        reservation: "Reservando 1 ou mais diarias.",
        link: "https://www.instagram.com/p/DLBOMq0ORAr/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ]
  },
  {
    id: "month-11",
    month: "Novembro",
    events: [
      {
        id: "ev-nov-1",
        name: "Festa do Rosário",
        icon: "santa",
        date: "06/11 a 09/11",
        description: "A Festa do Rosário é uma das mais antigas e tradicionais manifestações culturais e religiosas de Resende Costa. Celebrada com muita fé e alegria, ela homenageia Nossa Senhora do Rosário e os santos devotos do povo negro, reunindo irmandades, congadas, moçambiques e guardas de diferentes cidades. Com tambores, cantos e danças, a cidade se enche de cor, ritmo e espiritualidade, mantendo viva a herança afro-brasileira. É um momento de encontro entre gerações, cultura e devoção, que emociona a todos que participam. Além disso, conta com shows e dezenas de barracas vendendo diversos produtos.",
        reservation: "Reservando 1 ou mais diarias.",
        link: "https://www.instagram.com/p/DP1N8cSjZyK/?img_index=2"
      }
    ]
  },
  {
    id: "month-12",
    month: "Dezembro",
    events: [
      {
        id: "ev-dez-1",
        name: "Revéillon",
        icon: "festa",
        date: "31/12",
        description: `O fim de ano em Resende Costa tem um clima especial: céu estrelado, brisa leve da serra e o calor acolhedor do interior mineiro. Durante o Réveillon, a cidade se anima com diversas festas fechadas, ideais para quem quer celebrar com segurança, alegria e boa companhia.

        Entre música ao vivo, ceias especiais e muita energia positiva, moradores e visitantes brindam juntos a chegada de um novo ano. É o cenário perfeito para descansar, renovar as esperanças e começar o ano com o pé direito — cercado de charme, conforto e boas vibrações.
        Na Pousada Mariart, você aproveita tudo isso com tranquilidade e estilo. Faça sua reserva com antecedência e venha brindar com a gente!`,
        reservation: "Reservando no minimo 2 diarias.",
        link: ""
      }
    ]
  }
]