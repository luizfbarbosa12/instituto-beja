import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import { AgbaraFundAssociation } from "./AgbaraFundAssociation";
import { IEAEvent } from "./IEAEvent";
import { LautProject } from "./LautProject";
import { IdBRProject } from "./IdBRProject";
import { IgarapeProject } from "./IgarapeProject";
import { MoreInCommonProject } from "./MoreInCommonProject";
import { CriaAndTHPSupport } from "./CriaAndTHPSupport";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";

const conector_de_textos = "/assets/conector-de-textos.svg";
const nuvens = "/assets/ilustracao-nuvens.svg";
const logo_beja_completo = "/assets/logo-beja-completo-svg.svg";
const logo_pipa = "/assets/logo-pipa.svg";
const KnowledgeSection = () => {
  const fases = [
    {
      titulo: "Fase 1 - Composição do status quo e seus silêncios",
      descricao:
        "Esta etapa tem como objetivo traçar, em uma perspectiva histórica, os modos pelos quais a filantropia, a justiça social e a democracia se aproximaram e se opuseram nos diferentes modelos de filantropia que se estabeleceram no Brasil ao longo do tempo. Será dada atenção especial às disputas entre esses modelos, examinando os princípios que os fundamentam e os conflitos que emergem dessas divergências. O foco está em identificar os silenciamentos que resultaram da predominância de determinadas definições de filantropia, quais são seus objetivos e quais são suas responsabilidades em detrimento de outras abordagens. A meta é iluminar como essas escolhas moldam as práticas filantrópicas no país, destacando os impactos das exclusões históricas e conceituais no desenvolvimento do setor.",
    },
    {
      titulo: "Fase 2 - Análise crítica e histórica",
      descricao:
        "Nesta etapa, o objetivo é contribuir para a consolidação de uma teoria política da filantropia no Brasil. Apesar da importância do tema, são escassos os estudos acadêmicos, particularmente no campo da filosofia e da teoria política, que abordem a filantropia de forma crítica e aprofundada. Enquanto há alguma literatura sobre  a evolução histórica, o escopo e o surgimento da filantropia, especialmente nos Estados Unidos e em partes da Europa, pouco se tem produzido sobre a formulação de um modelo de filantropia adequado a países do Sul Global. O desenvolvimento de tal modelo exige um movimento normativo e histórico que posicione a filantropia brasileira no contexto das sobrevidas - ou seja, nas continuidades da escravidão, da colonialidade e de suas formas persistentes de opressão, desigualdades e hierarquizações injustificáveis.",
    },
    {
      titulo: "Fase 3 – Por uma teoria política da filantropia no Brasil",
      descricao:
        "Nesta etapa, o foco é consolidar os achados da pesquisa, analisando as formas pelas quais a filantropia, a justiça social e a democracia se aproximaram e se antagonizaram nos modelos de filantropia ao longo da história brasileira. O impacto esperado é a criação de um ambiente rico em trocas de conhecimento e análises substanciais, promovendo a valorização da formação teórica e prática no campo da filantropia. Os seminários e os resultados obtidos serão amplamente divulgados e compartilhados, contribuindo para a construção de uma nova teoria política filantrópica no Brasil - que poderá, inclusive, influenciar práticas globais, a partir da perspectiva do Sul Global.",
    },
  ];
  return (
    <>
      <div className='min-h-screen bg-rose flex justify-center items-center relative'>
        <img
          src={logo_beja_completo}
          alt='logo da beja no topo esquerdo'
          className='h-15 absolute top-20 left-20'
        />
        <h1 className='text-9xl editorial relative z-2 pb-10'>Conhecimento</h1>
        <img
          src={nuvens}
          alt='nuvens douradas no fundo'
          className='absolute -bottom-50'
        />
        {/* semicircle */}
        <div className='absolute w-full -top-90 flex items-center justify-center -z-4'>
          <div className='w-full aspect-[2/1] overflow-hidden'>
            <div className='w-full h-[400%] rounded-full bg-[var(--rose)] '></div>
          </div>
        </div>
      </div>
      {/* pipa */}

      <div className='min-h-screen pt-20'>
        <div className='flex items-center gap-4 justify-end mr-27'>
          <p className='editorial text-3xl'>Conhecimento</p>
          <img
            src={nuvens}
            alt='nuvens no canto superior direito'
            className='h-10'
          />
        </div>

        <div className=' pl-32'>
          <img src={logo_pipa} alt='logo da pipa' />
        </div>
        <div className='flex flex-col justify-start items-left gap-4 w-[min-content] mx-auto'>
          <h1 className='editorial text-6xl'>PIPA</h1>
          <p className='w-[472px]'>
            A <strong>PIPA</strong> é uma organização criada para democratizar o
            acesso ao investimento social privado e à filantropia no Brasil. Sua
            missão é ser uma ponte eficaz entre financiadores e coletivos,
            movimentos e organizações de base situados em favelas e periferias,
            historicamente excluídos dos centros de poder. Por meio de
            diagnósticos, ferramentas e ações, a PIPA trabalha para assegurar
            que esses recursos cheguem aos territórios de maneira ampla e
            equitativa, considerando as dimensões de raça, gênero e classe.
          </p>
        </div>
        {/* slider */}
        <div className='w-full max-w-6xl ml-auto mt-10 px-4 mb-40 flex flex-col'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              “PIPA, porque deriva da autonomia e liberdade do ser e viver nas
              periferias, do esforço de se manter no alto e do impacto do seu
              voo. PIPA porque é sobre mãos negras e periféricas sustentando o
              país, promovendo mudanças e futuros possíveis. Organizações,
              coletivos e movimentos de base favelada e periférica realizam
              trabalhos urgentes e de impacto social, político e econômico
              direto em suas comunidades e territórios.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              No entanto, enfrentam muitos desafios no acesso ao investimento
              social privado no Brasil, que opera a partir de desigualdades
              estruturais. A capacidade de movimentar recursos de forma ágil
              para movimentos de base no Brasil é essencial para a criar
              estratégias resilientes e efetivas para lidar com crises e
              diminuir desigualdades no país.{" "}
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              A partir dessa constatação, queremos contribuir para mudar as
              estruturas, as práticas e a cultura de investimento social privado
              no Brasil, impulsionando a democratização do repasse destes
              recursos.”
            </SwiperSlide>
          </Swiper>
          <cite className='editorial text-4xl text-retro-ochre w-full text-right'>
            - PIPA
          </cite>
        </div>
        <div className='flex gap-12 px-20'>
          <div className='text-retro-ochre editorial flex flex-col w-[860px] gap-4'>
            <p className='text-3xl self-end'>“As periferias têm respostas.”</p>
            <cite className='text-2xl self-end'>- PIPA</cite>
            <img
              src={nuvens}
              alt='ilustração de nuvens douradas'
              className='w-[912px] -mt-25'
            />
          </div>
          <p className='flex w-[472px]'>
            A atuação da PIPA concentra-se na criação de ferramentas que
            conectem coletivos e movimentos periféricos brasileiros a
            investimentos sociais privados e à filantropia em âmbito global. A
            organização também trabalha ativamente na construção de parcerias e
            na incidência junto a organizações filantrópicas e investidores
            sociais privados, promovendo a reavaliação de suas estruturas e
            práticas de financiamento para torná-las mais inclusivas e eficazes.
            A PIPA também desempenha um papel fundamental na racialização do
            debate, destacando as periferias como protagonistas na construção de
            soluções planejadas pela filantropia e pelos investimentos sociais
            privados no Brasil, trazendo maior reconhecimento às especificidades
            e necessidades desses territórios.
          </p>
        </div>
        <div className='w-full flex items-center justify-center'>
          <img
            src={conector_de_textos}
            alt='linha conectando textos'
            className=''
          />
        </div>
        <div className='flex justify-end  gap-12 -mt-3'>
          <p className='flex flex-col gap-12 w-[472px]'>
            <span>
              Em 2024, a <strong>PIPA</strong> ampliou sua equipe e implementou
              políticas de cuidado que incentivam o desenvolvimento profissional
              e pessoal dos colaboradores. Entre as iniciativas, destacam-se
              auxílios complementares para infraestrutura, terapia pessoal e
              aprendizado de idiomas.
            </span>
            <span>
              Nesse período, a <strong>PIPA</strong> estruturou seu ciclo de
              avaliação interna, capacitando os profissionais para o uso de
              softwares de gestão de tarefas e projetos, além de elaborar planos
              de desenvolvimento individual para cada colaborador. Em parceria
              com o Instituto <strong>ACP</strong>, articulou a participação de
              integrantes de sua equipe em mentorias de gestão e liderança da{" "}
              <strong>ACP</strong>. A colaboração com o Instituto também
              resultou na criação do primeiro{" "}
              <strong>
                Fundo de Desenvolvimento Institucional para Organizações
                Periféricas (Fundo POP)
              </strong>
              , voltado para o fortalecimento institucional de organizações e
              centros de mobilização social localizados nas favelas e periferias
              de todo o Brasil.
            </span>
          </p>
          <p className='w-[472px]'>
            Outro marco importante foi o lançamento, em maio, do{" "}
            <strong>Guia das periferias para doadores</strong>, um material
            estruturado para orientar empresas, instituições, financiadores e
            fundações interessados em reduzir os impactos da desigualdade nos
            sistemas de doação no Brasil. Organizado em três eixos principais -{" "}
            <strong>
              transparência, pluralidade e desenvolvimento institucional
            </strong>{" "}
            - o guia reflete o compromisso da <strong>PIPA</strong> em
            transformar as práticas de doação, promovendo inclusão e justiça
            social no acesso a recursos.
          </p>
        </div>
        <div className='w-full max-w-6xl ml-auto mt-10 px-4 flex flex-col mb-40'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              &quot;Na aproximação com o Beja, estávamos querendo fortalecer a
              nossa comunicação, o que culminou com a ativação do GUIA e o nosso
              processo de construção de narrativas da periferia. Para além de
              peças audiovisuais, da comunicação e do fortalecimento interno da
              nossa comunicação, o objetivo era também trazer os atores e
              projetos que já atuam nas periferias do Brasil para o debate da
              discussão de democratização da filantropia.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              A Pipa roda por cinco regiões do Brasil e traz as narrativas
              dessas pessoas que estão tocando seus projetos nas suas
              periferias, nas suas comunidades, para o grande centro de debate
              da filantropia. Essa aproximação estabelece o apoio institucional
              dentro do guia.”
            </SwiperSlide>
          </Swiper>
          <cite className='editorial text-4xl text-retro-ochre w-full text-right'>
            — ANDREY CHAGAS, Coordenador de Operações
          </cite>
        </div>
        <div className='flex justify-end gap-12 -mt-3'>
          <p className='flex gap-12 w-[1024px] mr-10'>
            <span>
              Na ativação do Guia, e em parceria com a{" "}
              <strong>NARRA - Organização de Comunicação Política</strong>, foi
              possível articular cinco regiões do Brasil, garantindo a
              participação das vozes e protagonismo de atores e agentes
              intrinsecamente ligados à transformação dos seus territórios. Essa
              iniciativa promoveu debates e mobilizou projetos e ações em várias
              partes do país, incluindo Manaus (AM), Fortaleza (CE), Cuiabá
              (MT), Porto Alegre (RS) e Rio de Janeiro (RJ), além de São Paulo
              (SP). A participação no{" "}
              <strong>
                Festival da Associação Brasileira de Captadores de Recursos
                (ABCR)
              </strong>{" "}
              também marcou presença como um importante passo na disseminação do
              Guia.
            </span>
            <span>
              Em colaboração com a organização{" "}
              <strong>Confluentes, a PIPA</strong> realizou o{" "}
              <strong>1º Encontro Periferias em Rede</strong>, no bairro de
              Pinheiros, em São Paulo. Houve a oportunidade de dialogar
              diretamente com lideranças de diversos projetos durante um jantar
              de arrecadação. Para a cofundadora da <strong>PIPA</strong> e
              coordenadora de estratégia e sustentabilidade Marcelle Decothe,
              essas iniciativas apresentam um enorme potencial para se tornarem
              ações anuais, contribuindo para o fortalecimento e a continuidade
              do impacto em prol das periferias.
            </span>
          </p>
        </div>
        <div className='w-full max-w-6xl ml-auto mt-10 px-4 flex flex-col mb-40'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              “Além do fortalecimento nacional, a PIPA fez conexões
              internacionais. Desenvolvemos uma pesquisa de fundos de
              grantmaking participativos. A gente vem fazendo um debate sobre a
              descolonização da filantropia e a disputa sobre o futuro da
              filantropia a partir desse lugar, que é o lugar de uma organização
              de periferia do Sul Global, que está se posicionando para
              democratizar a filantropia no mundo.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              O aporte e suporte do Beja foi muito importante para a
              consolidação da área de produção de conhecimento e narrativas,
              porque pouquíssimas organizações apostam na produção de
              conhecimento como ferramenta de incidência e de avanço.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              A confiança e a aposta do Beja tanto para a construção do Guia
              quanto para sua ativação, usando-o como ferramenta norteadora para
              incidir na filantropia e no debate de uma agenda mais ampliada, é
              muito importante. O que a filantropia nomeia como Filantropia de
              confiança, não pode ser feita apenas entre pares.”
            </SwiperSlide>
          </Swiper>
          <cite className='editorial text-4xl text-retro-ochre text-right ml-[100px]'>
            — MARCELLE DECOTHE, Cofundadora e Coordenadora de Estratégia e
            Sustentabilidade
          </cite>
        </div>
        <div className='flex justify-end gap-12 -mt-3'>
          <p className='gap-12 w-[472px] mr-10'>
            Em parceria com o{" "}
            <strong>Grupo de Institutos Fundações e Empresas (GIFE)</strong>, a{" "}
            <strong>PIPA</strong> lançou um ciclo formativo dedicado ao
            fortalecimento de lideranças negras no setor de{" "}
            <strong>Investimento Social Privado (ISP)</strong> e{" "}
            <strong>Filantropia</strong> no Brasil. O programa, oferecido de
            forma gratuita e on-line, foi estruturado para proporcionar uma
            visão crítica da filantropia no país, abordando temas relevantes,
            como descolonialidade, justiça social, e as dinâmicas entre
            filantropia e periferias. O ciclo formativo tem como objetivo
            principal capacitar indivíduos pertencentes a grupos minorizados,
            especialmente pessoas negras, LGBTQIA+, oriundas de periferias e
            pessoas com deficiência.
          </p>
        </div>
        <div className='w-full max-w-6xl ml-auto mt-10 px-4 flex flex-col mb-40'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              “Os impactos causados pela PIPA só podem ser vistos a médio e
              longo prazo. Impactar a filantropia é algo que leva tempo, não
              pode ser conseguido imediatamente ou apenas com um projeto. Somos
              uma organização jovem, nova e negra.
            </SwiperSlide>
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              Com isso, sentimos que sempre precisamos promover um debate de
              altíssimo nível para chamar a atenção desse grupo e para ganhar
              dinheiro, mas quem pode manter esse conhecimento para o debate,
              estando preocupado com a captação de dinheiro o tempo todo?”
            </SwiperSlide>
          </Swiper>
          <cite className='editorial text-4xl text-retro-ochre text-right ml-[100px]'>
            — MARCELLE DECOTHE, Cofundadora e Coordenadora de Estratégia e
            Sustentabilidade
          </cite>
        </div>
        <div className='flex items-center gap-4 justify-end mr-27'>
          <p className='editorial text-3xl'>Conhecimento</p>
          <img
            src={nuvens}
            alt='nuvens no canto superior direito'
            className='h-10'
          />
        </div>
        <div className=' pl-32'>
          <img
            src='/assets/fundacao-jose-luiz.svg'
            alt='logo da fundação jose luiz'
          />
        </div>
        <div className='flex flex-col justify-start items-left gap-12 w-[1024px] ml-auto pt-24 pb-24'>
          <h1 className='editorial text-6xl'>
            Fundação José Luiz Egydio Setúbal (FJLES) - Filantropia no Brasil:
            Trajetórias e experiências de Grandes Doadores
          </h1>
          <div className='flex gap-12'>
            <p className='w-[472px]'>
              A Pesquisa{" "}
              <strong>
                Filantropia no Brasil: Trajetórias e experiências de Grandes
                Doadores
              </strong>
              , desenvolvida pela{" "}
              <strong>Fundação José Luiz Egydio Setúbal (FJLES)</strong>, teve
              como objetivo investigar as motivações e práticas filantrópicas de
              indivíduos identificados como grandes doadores no Brasil.
            </p>
            <p className='w-[472px]'>
              O estudo buscou explorar as experiências, conhecimentos e
              expectativas desses filantropos, bem como compreender de que forma
              suas ações contribuem para o fortalecimento do investimento social
              privado no país. A pesquisa pretende{" "}
              <strong>
                oferecer uma análise aprofundada das motivações e comportamentos
                filantrópicos desses doadores, ao mesmo tempo em que mapeia as
                práticas utilizadas e os desafios enfrentados.
              </strong>
            </p>
          </div>
        </div>
        <div className='flex items-center gap-4 justify-end mr-27'>
          <p className='editorial text-3xl'>Conhecimento</p>
          <img
            src={nuvens}
            alt='nuvens no canto superior direito'
            className='h-10'
          />
        </div>
        <div className=' pl-32'>
          <img src='/assets/logo-cebrap.svg' alt='logo da fundação jose luiz' />
        </div>
        <div className='flex flex-col justify-start items-left gap-12 w-[1024px] ml-auto pt-24 pb-24'>
          <h1 className='editorial text-6xl'>
            Centro Brasileiro de Análise e Planejamento (CEBRAP) - Seminários de
            Pesquisa em Desigualdades e Justiça (DeSJuS)
          </h1>
          <div className='flex gap-12'>
            <p className='w-[472px] flex flex-col gap-12'>
              <span>
                O{" "}
                <strong>
                  Seminários de Pesquisa em Desigualdades e Justiça (Desjus)
                </strong>
                surgiu com o propósito fundamental de criar um espaço de
                encontro para pesquisadoras e pesquisadores interessados nos
                desafios políticos e normativos das sociedades contemporâneas. O
                grupo de pesquisa está abrigado no{" "}
                <strong>
                  Núcleo de Estudos Internacionais do Centro Brasileiro de
                  Análise e Planejamento (CEBRAP).
                </strong>
              </span>{" "}
              <span>
                A iniciativa tem como objetivo desenvolver um arcabouço teórico
                e analítico que possibilite reimaginar o papel da filantropia no
                Brasil, a partir de uma perspectiva crítica e transformadora,
                com ênfase nas especificidades e desafios das realidades do Sul
                Global. O projeto busca promover um diálogo inovador sobre o
                futuro da filantropia, utilizando novos vocabulários e conceitos
                que desafiem o status quo e ampliem as possibilidades de impacto
                social.
              </span>
            </p>
            <p className='w-[472px] flex flex-col gap-12'>
              <span>
                O ponto central dessa colaboração foi a realização de um
                <strong>Seminário de Pesquisa</strong>, estruturado em uma
                rotina de encontros híbridos - virtuais e presenciais, para
                participantes localizados fora de São Paulo - organizados no
                formato de
                <strong>Oficinas de Formação</strong>. Os encontros tiveram como
                finalidade estudar a filantropia em profundidade e criar termos,
                definições e esquemas analíticos que, em um futuro próximo,
                possibilitem repensar e reimaginar o significado da filantropia
                sob a ótica do Sul Global.
              </span>{" "}
              <span>
                Por meio da parceria iniciada em 2024 com o{" "}
                <strong>Instituto Beja</strong>, têm sido realizados ciclos de
                leitura com convidados, visando consolidar os termos que
                construam um repertório sobre justiça capaz de enfrentar os
                desafios específicos do Sul Global.
              </span>
            </p>
          </div>
        </div>
        <div className='w-full max-w-6xl ml-auto mt-10 px-4 flex flex-col mb-40'>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            pagination={true}
            modules={[Pagination]}
            className=' max-w-[990px]'
          >
            <SwiperSlide className='editorial text-4xl text-retro-ochre py-20'>
              “Nossa proposta é nos formar e formar uma rede de pessoas que
              possam vir a pensar a filantropia do ponto de vista da nossa caixa
              de ferramentas, que é a teoria política e a filosofia política.”
            </SwiperSlide>
          </Swiper>
          <cite className='editorial text-4xl text-retro-ochre text-right ml-[100px]'>
            — RAISSA VENTURA, Pesquisadora
          </cite>
        </div>
        {/* <div className='w-full overflow-hidden py-8'>
          <div className='flex overflow-x-auto pb-6 hide-scrollbar custom-horizontal-scrollbar'>
            <div className='flex gap-4 px-6'>
              <div className='bg-transparent border border-gray-300 rounded-3xl p-16 shadow-sm w-[867px] flex-shrink-0'>
                <h2 className='text-3xl font-medium mb-4'>
                  Fase 1 — Composição do status quo e seus silêncios
                </h2>
                <p className='text-md leading-relaxed'>
                  Esta etapa tem como objetivo traçar, em uma perspectiva
                  histórica, os modos pelos quais a filantropia, a justiça
                  social e a democracia se encontraram e se separaram nos
                  diferentes modelos de filantropia que se estabeleceram no
                  Brasil ao longo do tempo. Será feita através&nbsp;de disputas
                  entre esses modelos, examinando os princípios que os
                  fundamentam e os conflitos que emergem dessas divergências. O
                  foco está em identificar e simultaneamente se contrapor em às
                  predominâncias de determinadas definições de filantropia,
                  quais são seus objetivos e quais são suas responsabilidades em
                  detrimento de outras abordagens. A meta é iluminar como essas
                  escolhas revelam as práticas filantrópicas no país, destacando
                  os impactos das exclusões históricas e conceituais no
                  desenvolvimento do setor.
                </p>
              </div>

              <div className='bg-transparent border border-gray-300 rounded-3xl p-16 shadow-sm w-[867px] flex-shrink-0'>
                <h2 className='editorial text-3xl font-medium mb-4'>
                  Fase 2 — Análise crítica e histórica
                </h2>
                <p className='text-md leading-relaxed'>
                  Nesta etapa, o objetivo é contribuir para a consolidação de
                  uma teoria política da filantropia no Brasil a partir da
                  importância do tema, sua relevância e estudos acadêmicos,
                  particularmente no campo da filosofia e da teoria política,
                  que abordam a filantropia de forma crítica e aprofundada.
                  Embora haja alguma literatura sobre a evolução histórica, o
                  escopo e o surgimento da filantropia, especialmente nos
                  Estados Unidos e em países da Europa, pouco se tem produzido
                  sobre a formulação de um modelo de filantropia adequado a
                  países do Sul Global. O desenvolvimento de tal modelo exige um
                  movimento normativo e histórico que posicione a filantropia
                  brasileira no contexto das subvidas – ou seja, nas comunidades
                  de escravidão, do colonialismo e de suas formas persistentes
                  de opressão, desigualdades e hierarquizações injustificáveis.
                </p>
              </div>

              <div className='bg-transparent border border-gray-300 rounded-3xl p-16 shadow-sm w-[867px] flex-shrink-0'>
                <h2 className='text-3xl font-medium mb-4'>
                  Fase 3 — Por uma teoria política da filantropia no Brasil
                </h2>
                <p className='text-md leading-relaxed'>
                  Nesta etapa, o foco é consolidar os achados da pesquisa,
                  analisando as formas pelas quais a filantropia, a justiça
                  social e a democracia se encontraram e se antagonizaram nos
                  modelos de filantropia ao longo da história brasileira. O
                  impacto esperado é a criação de um ambiente rico em trocas de
                  conhecimento e análises substanciais, promovendo a valorização
                  da formação teórica e prática no campo da filantropia. Os
                  seminários e os resultados obtidos serão amplamente divulgados
                  e compartilhados, contribuindo para a construção de uma nova
                  teoria política filantrópica no Brasil - que poderá,
                  inclusive, influenciar práticas globais, a partir da
                  perspectiva do Sul Global.
                </p>
              </div>
            </div>
          </div>
        </div> */}
        <section className='w-full px-4 py-20 flex justify-center'>
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            pagination={{ clickable: true }}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={20}
            className='w-[100vw] '
          >
            {fases.map((fase, index) => (
              <SwiperSlide key={index}>
                <div className='bg-transparent border border-gray-300 rounded-3xl h-[400px] p-16 shadow-sm flex-shrink-0'>
                  <h3 className='text-xl font-bold mb-4'>{fase.titulo}</h3>
                  <p className='text-base text-bourdeaux'>{fase.descricao}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className='max-w-3xl mx-auto py-12 px-4'>
          <div className='text-center mb-10'>
            <p className='text-md mb-6 text-left'>
              Por meio da parceria iniciada em 2024 com o Instituto Beja, têm
              sido realizados ciclos de leitura com convidados, visando
              consolidar os termos que constituem um repertório sobre justiça
              capaz de enfrentar os desafios específicos do Sul Global.
            </p>

            <div className='w-full h-px bg-retro-ochre my-6'></div>

            <h3 className='text-2xl editorial mb-6 text-left'>
              Esses ciclos abordam temas como:
            </h3>

            <ul className='space-y-4 text-left editorial text-2xl'>
              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  (In)justiças climáticas e seus desafios políticos e
                  normativos.
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>Injustiças históricas e formas de reparação.</span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  Imigração e formação de fronteiras na sobrevida da
                  colonialidade.
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>Os desafios da filantropia no Sul Global.</span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  Novas tecnologias, ferramentas digitais e problemas de
                  soberania.
                </span>
              </li>
            </ul>
          </div>

          <div className='mt-12'>
            <blockquote className='text-retro-ochre mb-4 editorial text-3xl'>
              &quot;Pensar, imaginar, qual filantropia queremos para uma
              sociedade democrática e profundamente desigual. Em que,
              obviamente, o estado não é capaz de responder a todas as demandas
              sociais.&quot;
            </blockquote>

            <div className='text-right editorial'>
              <cite className='text-retro-ochre text-2xl'>
                — RAISSA VENTURA, Pesquisadora
              </cite>
            </div>
          </div>
        </div>
        <div className='max-w-3xl mx-auto py-12 px-4'>
          <div className='text-center mb-10'>
            <p className='text-md mb-6 text-left'>
              A lacuna a que nos referimos atraiu uma alta procura, resultando
              em mais de 200 inscrições. Em resposta, o CEBRAP enviou um
              questionário para compreender o perfil dos interessados, recebendo
              160 respostas.
            </p>

            <div className='w-full h-px bg-retro-ochre my-6'></div>

            <h3 className='text-2xl editorial mb-6 text-left'>
              A análise revelou alguns insights importantes:
            </h3>

            <ul className='space-y-4 text-left editorial text-2xl'>
              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  O público é majoritariamente composto por mulheres, com
                  mestrado como nível acadêmico predominante;
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  50% dos participantes realizam pesquisas ou trabalham com
                  filantropia;
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  73% se identificaram como pessoas brancas, 59% possuem o
                  título de mestrado;
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  50% estão desenvolvendo pesquisa acadêmica, destacando um
                  perfil acadêmico especializado.
                </span>
              </li>

              <li className='flex items-start'>
                <span className='h-5 w-5 rounded-full bg-retro-ochre flex-shrink-0 mr-3'></span>
                <span>
                  Outro dado relevante é que cerca de 64% dos participantes
                  conheceram as oficinas por meio de engajamento nas redes
                  sociais, especialmente via Instagram.
                </span>
              </li>
            </ul>
          </div>

          <div className='mt-12'>
            <blockquote className='text-retro-ochre mb-4 editorial text-3xl'>
              &quot;É preciso entender o que a filantropia está ou não
              financiando. Entendemos a filantropia como um lugar onde o estado
              não está chegando, onde o estado não está fazendo o seu papel
              como, por exemplo, arte e alta cultura. Mas e quando a filantropia
              começa a financiar movimentos de direita e extrema direita? E
              quando a filantropia começa a ocupar o lugar do estado?&quot;
            </blockquote>

            <div className='text-right editorial'>
              <cite className='text-retro-ochre text-2xl'>
                — RAISSA VENTURA, Pesquisadora
              </cite>
            </div>
          </div>
        </div>
        <div className='flex justify-end mt-16 '>
          <div className='w-full md:w-1/2 bg-rose p-6 rounded mr-20'>
            <p className='text-md p-12'>
              Para o primeiro semestre de 2025, o modelo de oficinas de leitura
              aplicado em 2024 será ajustado. A nova proposta vai alternar
              oficinas de leitura com palestras conduzidas por convidados,
              fortalecendo a formação de uma rede engajada com a temática.
            </p>
          </div>
        </div>
      </div>

      <AgbaraFundAssociation />
      <IEAEvent />
      <LautProject />
      <IdBRProject />
      <IgarapeProject />
      <MoreInCommonProject />
      <CriaAndTHPSupport />
    </>
  );
};

export default KnowledgeSection;
