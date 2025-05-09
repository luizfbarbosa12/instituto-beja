/* eslint-disable react/jsx-key */
import { Images } from "../assets/Index";
const MapBiomasLogo = "/assets/MapBiomas.svg";
const SerenasLogo = "/assets/SerenasLogo.svg";
const DesenrolaLogo = "/assets/DesenrolaLogo.svg";

export const AEPIE = [
  {
    bgColor: "bg-white",
    text: "Ampliando os esforços de Orquestradores de Sistemas no Brasil por meio da construção de caminhos que potencializam as forças de diversos atores e colaboradoras locais e globais para enfrentar os desafios sociais do nosso contexto.",
    img: Images.CME.CmeMiniWheel1,
    title: {
      color: "text-cyan",
      name: "Catalisando efeitos de rede",
    },
  },
  {
    bgColor: "bg-[#FFECFD]",
    text: "Criando um ambiente em que atores de diferentes setores no Brasil — da sociedade civil, academia e setor público ao setor privado e fundações — possam se reunir para desenvolver soluções escaláveis. Isso se dá por meio da inovação e do uso estratégico das capacidades e recursos já existentes no sistema.",
    img: Images.CME.CmeMiniWheel2,
    title: {
      color: "text-[#E679E0]",
      name: "Cocriando com atores societais",
    },
  },
  {
    bgColor: "bg-[#FFCBC4]",
    text: "No tempo em que vivemos, tecnologias digitais como Bens Públicos Digitais e Infraestruturas Públicas Digitais — em forma de plataformas, protocolos e Inteligência Artificial (IA) — desempenham um papel essencial na geração de impacto em escala. Recursos abertos e compartilhados, como conhecimento, ferramentas, dados e redes, aceleram o desenvolvimento de capacidades e a oferta de serviços eficazes para comunidades vulnerabilizadas e historicamente marginalizadas.",
    img: Images.CME.CmeMiniWheel3,
    title: {
      color: "text-hot-coral",
      name: "Alavancando capacidades compartilhadas",
    },
  },
];

export const VTCME = [
  {
    bgColor: "bg-[#AAD5DC] ",
    title: "NOVOS PARADIGMAS",
    text: "Impulsionar, colaborativamente novos modelos mentais de empreendedores exponenciais, fortalecendo e apoiando a viabilidade de suas soluções para problemas sistêmicos, de forma a gerarem impacto exponencial e global.",
  },
  {
    bgColor: "bg-[#FFD793]",
    title: "NETWORK EFFECT",
    text: "Entender os atores e as barreiras que precisamos mover para catalisar e fortalecer o ecossistema que destrava a agenda destes empreendedores.",
  },
  {
    bgColor: "bg-[#FFCBC4]",
    title: "ECOSSISTEMA LOCAL DE IMPACTO (INFRA-ESTRUTURA) COM TECNOLOGIA",
    text: "Criar uma infraestrutura ética que siga protocolos responsáveis para apoiar o ecossistema brasileiro (SOs, network, regulação, academia, fundações) a fazer as melhores escolhas em relação às tecnologias, protótipos, financiamento e implementação em larga escala.",
  },
  {
    bgColor: "bg-[#AAD5DC] ",
    title: "ECOSSISTEMA LOCAL DE IMPACTO (INFRA-ESTRUTURA) COM TECNOLOGIA",
    text: "Criar uma grande rede colaborativa que responda rapidamente aos grandes problemas sociais e ambientais com soluções que podem ser aceleradas com o uso de tecnologias responsáveis e trocando globalmente.",
  },
];

export const CMEPartners = [
  {
    bgColor: "bg-[#FFCBC4]",
    img: DesenrolaLogo,
    title: {
      color: "text-hot-coral",
      name: "Desenrola e não me enrola",
    },
    text: [
      <p>
        Desenvolve jornalismo comunitário e educação antirracista e midiática em
        favelas e periferias urbanas, para construir ecossistemas informacionais
        para combater as desigualdades digitais e informacionais.
      </p>,

      <strong>
        Criado em 2013 por moradores das periferias, seu trabalho descentraliza
        a produção de conhecimento e impulsiona o engajamento cívico, criando
        soluções inovadoras para enfrentar a desinformação, segregação digital e
        exclusão midiática.
      </strong>,

      <p>
        Ao desenvolver tecnologias escaláveis que possibilitam a educação
        midiática, oportunidades de emprego e acesso a informações de melhor
        qualidade, o <strong>Desenrola</strong> exerce um papel vital na
        promoção de ecossistemas informacionais inclusivos que reduzem
        desigualdades e fortalecem a democracia.
      </p>,
    ],
  },
  {
    bgColor: "bg-porcelain",
    img: MapBiomasLogo,
    title: {
      color: "text-cyan",
      name: "MapBiomas",
    },
    text: [
      <p>
        Revelar as transformações do território brasileiro por meio da ciência,
        com precisão, agilidade e qualidade, e tornar acessível o conhecimento
        sobre a cobertura e o uso da terra, para buscar a conservação e o manejo
        sustentável dos recursos naturais e bloquear financeiramente práticas
        ilegais de desmatamento e uso ilegal da terra, como forma de combate às
        mudanças climáticas.
      </p>,

      <strong>
        Desde 2015, o MapBiomas está transformando a forma de monitorar a
        cobertura e o uso da terra no Brasil. Com uma rede de ONGs,
        universidades e startups de tecnologia, utiliza inteligência artificial
        e processamento em nuvem para gerar dados abertos e atualizados sobre
        desmatamento, água e incêndios, desde 1985.
      </strong>,

      <p>
        A plataforma é aberta, escalável e replicável em diferentes países e
        contextos, permitindo a integração de novos parceiros e a contribuição
        da comunidade científica. É gerado conhecimento acessível e preciso
        sobre as transformações do território para impulsionar a conservação, o
        manejo sustentável dos recursos naturais e o combate às mudanças
        climáticas.
      </p>,
    ],
  },
  {
    bgColor: "bg-[#FFECFD]",
    img: SerenasLogo,
    title: {
      color: "text-[#E679E0]",
      name: "Serenas",
    },
    text: [
      <strong>
        &quot;Como a tecnologia pode nos ajudar a construir um Brasil seguro
        para mulheres e meninas de forma ética, responsável e efetiva?&quot;
      </strong>,

      <p>
        Uma jornada que se soma ao trabalho de uma organização que nasceu para
        que meninas e mulheres possam ser livres, escolher e sonhar sem limites,
        exercendo seus direitos à dignidade, respeito e igualdade em um mundo
        sem discriminação.
      </p>,

      <p>
        <strong>A Serenas </strong>é uma{" "}
        <strong>
          organização sem fins lucrativos que, desde 2021, apoia governos na
          construção e implementação de políticas educacionais de prevenção de
          violências contra meninas e mulheres, além da qualificação dos
          serviços públicos para um atendimento humanizado, intersetorial e
          efetivo a sobreviventes de violência sexual e doméstica.
        </strong>
      </p>,

      <p>
        Como a <strong>Serenas</strong>, acreditamos que a transformação exige
        um trabalho profundo de mudança dos valores e normas sociais que
        sustentam as violências e isso se dá através da educação das novas
        gerações e daqueles que atuam no atendimento de vítimas, garantindo um
        atendimento adequado e respeitoso.
      </p>,
    ],
  },
];

export const cmeActionList = [
  "Formalizou uma parceria global com o Centre for Exponential Change (C4EC);",
  "Construiu e lançou o Centro para Mudanças Exponenciais (CMe) em São Paulo, em novembro;",
  "Realizou diálogos profundos com financiadores e especialistas durante o Filantropando e, posteriormente, no CMe;",
  "Engajou Orquestradores de Sistemas no Brasil para selecionar as jornadas iniciais do CMe;",
  "Selecionou o primeiro grupo de Orquestradores de Sistemas e iniciou suas jornadas de mudança exponencial.",
];

export const OSList = [
  Images.Logos.MapBiomasLogo,
  Images.Logos.SerenasLogo,
  Images.Logos.DesenrolaLogo,
];
