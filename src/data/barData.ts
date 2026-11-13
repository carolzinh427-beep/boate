export interface Drink {
  id: string
  name: string
  category: 'classicos' | 'autorais' | 'sem-alcool'
  categoryLabel: string
  ingredients: string
  volume: string
  price: number
  priceFormatted: string
  alcoholic: boolean
  alcoholicLabel: string
  image: string
  description: string
}

export interface EventSchedule {
  id: string
  name: string
  artist: string
  genre: string
  date: string
  dateDisplay: string
  weekday: string
  doorsOpen: string
  showStart: string
  description: string
  image: string
  ageRating: string
  ticketType: 'pago' | 'livre'
  priceInitial: number
  priceInitialFormatted: string
  ticketsAvailable: {
    id: string
    category: string
    description: string
    price: number
    priceFormatted: string
  }[]
  rules: string[]
}

export interface BarInfo {
  name: string
  locationCity: string
  neighborhood: string
  address: string
  phone: string
  whatsapp: string
  hours: {
    days: string
    time: string
  }[]
  ageRatingNotice: string
  accessibilityNotice: string
  documentNotice: string
  reservationNotice: string
  cancellationNotice: string
}

export const BAR_INFO: BarInfo = {
  name: 'Âmbar Bar',
  locationCity: 'Vitória, Espírito Santo',
  neighborhood: 'Praia do Canto',
  address: 'Rua Joaquim Lírio, 420, Praia do Canto, Vitória, Espírito Santo',
  phone: '(27) 3325 8090',
  whatsapp: '(27) 99876 5432',
  hours: [
    { days: 'Terça a quinta', time: '18:00 à 00:00' },
    { days: 'Sexta e sábado', time: '18:00 às 02:00' },
    { days: 'Domingo', time: '17:00 às 23:00' },
    { days: 'Segunda', time: 'Fechado para descanso da equipe' }
  ],
  ageRatingNotice: 'Proibida a venda de bebidas alcoólicas para menores de 18 anos',
  accessibilityNotice: 'Rampa de acesso, mesas com espaçamento amplo e sanitários acessíveis no piso térreo',
  documentNotice: 'Obrigatória a apresentação de documento oficial com foto na recepção',
  reservationNotice: 'Mesas ocupadas por ordem de chegada com tolerância para reservas confirmadas até 20:00',
  cancellationNotice: 'Cancelamento e reembolso disponíveis em até 48 horas antes do início da apresentação'
}

export const DRINKS: Drink[] = [
  // Clássicos
  {
    id: 'mojito',
    name: 'Mojito',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Rum, limão, hortelã, açúcar e água com gás',
    volume: '240 ml',
    price: 36,
    priceFormatted: 'R$ 36,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/mojito.jpg',
    description: 'Refrescância tradicional com hortelã fresca macerada e rum leve'
  },
  {
    id: 'negroni',
    name: 'Negroni',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Gin, vermute rosso e bitter',
    volume: '120 ml',
    price: 42,
    priceFormatted: 'R$ 42,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/negroni.jpg',
    description: 'Equilíbrio amargo e aromático servido sobre cubo límpido de gelo'
  },
  {
    id: 'aperol-spritz',
    name: 'Aperol Spritz',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Aperitivo de laranja, espumante e água com gás',
    volume: '220 ml',
    price: 38,
    priceFormatted: 'R$ 38,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/aperol-spritz.jpg',
    description: 'Aperitivo efervescente com toque cítrico e fatia de laranja fresca'
  },
  {
    id: 'gin-tonica',
    name: 'Gin Tônica',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Gin, água tônica e guarnição cítrica',
    volume: '250 ml',
    price: 38,
    priceFormatted: 'R$ 38,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/gin-tonica.jpg',
    description: 'Botânicos selecionados combinados com água tônica artesanal'
  },
  {
    id: 'caipirinha',
    name: 'Caipirinha',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Cachaça, limão, açúcar e gelo',
    volume: '200 ml',
    price: 32,
    priceFormatted: 'R$ 32,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/caipirinha.jpg',
    description: 'Cachaça artesanal de alambique com limão taiti fresco'
  },
  {
    id: 'espresso-martini',
    name: 'Espresso Martini',
    category: 'classicos',
    categoryLabel: 'Clássicos',
    ingredients: 'Vodka, licor de café e café espresso',
    volume: '140 ml',
    price: 44,
    priceFormatted: 'R$ 44,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/espresso-martini.jpg',
    description: 'Extração fresca de espresso combinada a licor encorpado'
  },

  // Autorais
  {
    id: 'ambar-da-casa',
    name: 'Âmbar da Casa',
    category: 'autorais',
    categoryLabel: 'Autorais',
    ingredients: 'Bourbon, laranja e especiarias',
    volume: '160 ml',
    price: 46,
    priceFormatted: 'R$ 46,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/ambar-da-casa.jpg',
    description: 'Assinatura do balcão com notas defumadas e óleo essencial de laranja'
  },
  {
    id: 'brisa-de-vitoria',
    name: 'Brisa de Vitória',
    category: 'autorais',
    categoryLabel: 'Autorais',
    ingredients: 'Gin, maracujá e limão',
    volume: '220 ml',
    price: 42,
    priceFormatted: 'R$ 42,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/brisa-de-vitoria.jpg',
    description: 'Inspirado no clima litorâneo capixaba com acidez equilibrada'
  },
  {
    id: 'jardim-noturno',
    name: 'Jardim Noturno',
    category: 'autorais',
    categoryLabel: 'Autorais',
    ingredients: 'Vodka, frutas vermelhas e manjericão',
    volume: '180 ml',
    price: 44,
    priceFormatted: 'R$ 44,00',
    alcoholic: true,
    alcoholicLabel: 'Contém álcool',
    image: '/images/drinks/jardim-noturno.jpg',
    description: 'Mirtilos e amoras macerados com folhas frescas de manjericão roxo'
  },

  // Sem álcool
  {
    id: 'maracuja-fresh',
    name: 'Maracujá Fresh',
    category: 'sem-alcool',
    categoryLabel: 'Sem álcool',
    ingredients: 'Maracujá, limão e água com gás',
    volume: '260 ml',
    price: 26,
    priceFormatted: 'R$ 26,00',
    alcoholic: false,
    alcoholicLabel: 'Sem álcool',
    image: '/images/drinks/maracuja-fresh.jpg',
    description: 'Polpa natural de maracujá com borbulhas delicadas'
  },
  {
    id: 'citrico-da-casa',
    name: 'Cítrico da Casa',
    category: 'sem-alcool',
    categoryLabel: 'Sem álcool',
    ingredients: 'Laranja, limão e alecrim',
    volume: '240 ml',
    price: 26,
    priceFormatted: 'R$ 26,00',
    alcoholic: false,
    alcoholicLabel: 'Sem álcool',
    image: '/images/drinks/citrico-da-casa.jpg',
    description: 'Blend de cítricos com ramo tostado de alecrim aromático'
  },
  {
    id: 'abacaxi-e-hortela',
    name: 'Abacaxi e Hortelã',
    category: 'sem-alcool',
    categoryLabel: 'Sem álcool',
    ingredients: 'Abacaxi, hortelã e água com gás',
    volume: '260 ml',
    price: 24,
    priceFormatted: 'R$ 24,00',
    image: '/images/drinks/abacaxi-hortela.jpg',
    alcoholic: false,
    alcoholicLabel: 'Sem álcool',
    description: 'Suco prensado de abacaxi com infusão a frio de folhas de hortelã'
  }
]

export const EVENTS: EventSchedule[] = [
  {
    id: 'jazz-no-ambar',
    name: 'Jazz no Âmbar',
    artist: 'Quarteto Trane Fictício',
    genre: 'Jazz clássico e improvisação instrumental',
    date: '2026-11-20',
    dateDisplay: '20 de novembro',
    weekday: 'Sexta',
    doorsOpen: '19:00',
    showStart: '20:30',
    description: 'Uma noite dedicada aos standards do jazz com iluminação aconchegante e coquetelaria em primeiro plano',
    image: '/images/events/jazz-no-ambar.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'pago',
    priceInitial: 45,
    priceInitialFormatted: 'R$ 45,00',
    ticketsAvailable: [
      {
        id: 't-jazz-ind',
        category: 'Entrada individual',
        description: 'Acesso à noite musical sem reserva de mesa garantida',
        price: 45,
        priceFormatted: 'R$ 45,00'
      },
      {
        id: 't-jazz-duo',
        category: 'Entrada dupla',
        description: 'Acesso para duas pessoas em valor promocional antecipado',
        price: 80,
        priceFormatted: 'R$ 80,00'
      },
      {
        id: 't-jazz-bistro',
        category: 'Mesa bistrô para duas pessoas',
        description: 'Mesa alta bistrô reservada com visão frontal da apresentação',
        price: 120,
        priceFormatted: 'R$ 120,00'
      }
    ],
    rules: [
      'Ingresso dá acesso ao evento musical e não inclui consumação no cardápio',
      'Mesas de bistrô são garantidas até 20:00 com tolerância de 15 minutos',
      'Cancelamentos aceitos até 48 horas antes do evento diretamente no atendimento'
    ]
  },
  {
    id: 'voz-e-violao',
    name: 'Voz e Violão',
    artist: 'Lúcia Prado e Amigos',
    genre: 'Música popular brasileira intimista',
    date: '2026-11-21',
    dateDisplay: '21 de novembro',
    weekday: 'Sábado',
    doorsOpen: '18:30',
    showStart: '20:00',
    description: 'Arranjos delicados de violão de nylon em repertório de grandes compositores com volume pensado para conversa',
    image: '/images/events/voz-e-violao.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'pago',
    priceInitial: 40,
    priceInitialFormatted: 'R$ 40,00',
    ticketsAvailable: [
      {
        id: 't-voz-ind',
        category: 'Entrada individual',
        description: 'Acesso à apresentação intimista',
        price: 40,
        priceFormatted: 'R$ 40,00'
      },
      {
        id: 't-voz-bistro',
        category: 'Mesa compartilhada para duas pessoas',
        description: 'Mesa acolhedora próxima ao violão',
        price: 90,
        priceFormatted: 'R$ 90,00'
      }
    ],
    rules: [
      'Ingresso válido exclusivamente para a data indicada',
      'Mesas comuns ocupadas por ordem de chegada no salão',
      'Não há consumação mínima obrigatória'
    ]
  },
  {
    id: 'soul-de-sexta',
    name: 'Soul de Sexta',
    artist: 'Clube do Soul Instrumental',
    genre: 'Soul e groove em volume acústico',
    date: '2026-11-27',
    dateDisplay: '27 de novembro',
    weekday: 'Sexta',
    doorsOpen: '19:00',
    showStart: '21:00',
    description: 'Timbres quentes de órgão e guitarra em ritmo contagiante sem excesso sonoro para acompanhar os drinks',
    image: '/images/events/soul-de-sexta.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'pago',
    priceInitial: 50,
    priceInitialFormatted: 'R$ 50,00',
    ticketsAvailable: [
      {
        id: 't-soul-ind',
        category: 'Entrada individual',
        description: 'Acesso à noite de soul instrumental',
        price: 50,
        priceFormatted: 'R$ 50,00'
      },
      {
        id: 't-soul-duo',
        category: 'Entrada dupla',
        description: 'Acesso para duas pessoas',
        price: 90,
        priceFormatted: 'R$ 90,00'
      }
    ],
    rules: [
      'Ambiente com iluminação baixa e lugares sentados priorizados',
      'Proibido acesso com bebidas ou alimentos externos',
      'Validação de ingresso mediante leitura do código na portaria'
    ]
  },
  {
    id: 'samba-de-mesa',
    name: 'Samba de Mesa',
    artist: 'Roda da Ilha Acústica',
    genre: 'Samba tradicional de raiz e choro',
    date: '2026-11-28',
    dateDisplay: '28 de novembro',
    weekday: 'Sábado',
    doorsOpen: '18:00',
    showStart: '19:30',
    description: 'Formação em mesa redonda ao centro do bar com cavaco, violão de sete cordas e percussão sutil',
    image: '/images/events/samba-de-mesa.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'pago',
    priceInitial: 40,
    priceInitialFormatted: 'R$ 40,00',
    ticketsAvailable: [
      {
        id: 't-samba-ind',
        category: 'Entrada individual',
        description: 'Acesso à roda de samba no salão',
        price: 40,
        priceFormatted: 'R$ 40,00'
      },
      {
        id: 't-samba-mesa',
        category: 'Mesa de madeira para quatro pessoas',
        description: 'Mesa exclusiva para grupo de quatro participantes',
        price: 180,
        priceFormatted: 'R$ 180,00'
      }
    ],
    rules: [
      'Mesa de quatro pessoas inclui quatro entradas individuais',
      'Ingresso não inclui comidas ou coquetéis',
      'Tolerância para mesas reservadas até 19:30'
    ]
  },
  {
    id: 'blues-da-casa',
    name: 'Blues da Casa',
    artist: 'Trio Blues Fictício',
    genre: 'Blues tradicional e baladas acústicas',
    date: '2026-12-04',
    dateDisplay: '4 de dezembro',
    weekday: 'Sexta',
    doorsOpen: '19:00',
    showStart: '20:30',
    description: 'Notas azuis de gaita e violão ressonador em uma sexta intimista com cartas especiais de bourbon',
    image: '/images/events/blues-da-casa.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'pago',
    priceInitial: 45,
    priceInitialFormatted: 'R$ 45,00',
    ticketsAvailable: [
      {
        id: 't-blues-ind',
        category: 'Entrada individual',
        description: 'Acesso ao show intimista de blues',
        price: 45,
        priceFormatted: 'R$ 45,00'
      }
    ],
    rules: [
      'Ingresso nominal e intransferível após validação na entrada',
      'Lugares em balcão e mesas distribuídos por ordem de chegada'
    ]
  },
  {
    id: 'acustico-ao-entardecer',
    name: 'Acústico ao Entardecer',
    artist: 'Duo Cordas da Praia',
    genre: 'Folk suave e arranjos instrumentais',
    date: '2026-12-06',
    dateDisplay: '6 de dezembro',
    weekday: 'Domingo',
    doorsOpen: '17:00',
    showStart: '18:00',
    description: 'Encerramento de fim de semana com entrada livre e música serena para acompanhar o entardecer capixaba',
    image: '/images/events/acustico-ao-entardecer.jpg',
    ageRating: 'Classificação 18 anos',
    ticketType: 'livre',
    priceInitial: 0,
    priceInitialFormatted: 'Entrada livre',
    ticketsAvailable: [
      {
        id: 't-livre',
        category: 'Entrada livre',
        description: 'Acesso sem custo mediante capacidade do salão',
        price: 0,
        priceFormatted: 'R$ 0,00'
      }
    ],
    rules: [
      'Entrada livre com acesso sujeito à lotação do espaço',
      'Não há cobrança de couvert artístico nesta data',
      'Recomendamos chegada cedo para escolha de mesa'
    ]
  }
]

export interface PurchasedTicket {
  ticketCode: string
  eventId: string
  eventName: string
  eventDate: string
  doorsOpen: string
  showStart: string
  categoryName: string
  quantity: number
  unitPrice: number
  totalPaid: number
  buyerName: string
  buyerEmail: string
  buyerPhone: string
  purchaseDate: string
  paymentMethod: 'pix' | 'cartao'
  status: 'valido' | 'utilizado'
  isDemo: true
}

export const FAQS = [
  {
    question: 'Como funciona a reserva de mesas no Âmbar',
    answer: 'A compra de ingresso de entrada individual garante seu acesso ao evento musical mas não garante mesa específica pois o salão opera majoritariamente por ordem de chegada com opções de balcão e bistrôs Para mesas reservadas específicas escolha a categoria Mesa Bistrô quando disponível ou entre em contato com antecedência'
  },
  {
    question: 'O valor do ingresso inclui consumação de drinks',
    answer: 'Não o ingresso antecipado é destinado exclusivamente ao acesso à apresentação musical e remuneração dos artistas Os coquetéis do cardápio e aperitivos são solicitados e acertados individualmente à mesa'
  },
  {
    question: 'Qual a política de cancelamento de ingressos',
    answer: 'Solicitações de cancelamento e reembolso integral podem ser realizadas em até 48 horas antes do horário de abertura da casa pelo canal oficial de atendimento'
  },
  {
    question: 'Existe idade mínima para acesso ao bar',
    answer: 'Sim a classificação indicativa do estabelecimento é de 18 anos com apresentação indispensável de documento oficial com foto na portaria É expressamente vedada a venda e o fornecimento de bebidas alcoólicas a menores'
  },
  {
    question: 'O espaço possui acessibilidade para pessoas com mobilidade reduzida',
    answer: 'Sim dispomos de rampa nivelada de acesso na entrada salão térreo plano com circulação confortável entre mesas e sanitários totalmente adaptados'
  }
]

