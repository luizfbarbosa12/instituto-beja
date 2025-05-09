import { Images } from "../../assets/Index";
import PartnerSection from "../ui/PartnerSection";
import GoldenQuoteSlider from "./../ui/GoldenQuoteSlider";
import TopicList from "./../ui/TopicList";
import LabSection from "./LabSection";
import TopicListWithSub from "./../ui/TopicListWithSub";
import { projects } from "../../data/LabData";
import PinkBox from "../ui/PinkBox";
import { calcClamp } from "../../data/Utils";
import { PortfolioSectionVentTransition } from "./../PortfolioSection/PortfolioSectionVentTransition";
import AnimatedLetter from "../ui/AnimatedLetter";
import TextBlock from "./../ui/TextBlock";

const BejaLabs = () => {
  return (
    <div className='flex flex-col items-end w-full overflow-hidden pb-90'>
      <PortfolioSectionVentTransition />

      <AnimatedLetter
        text={[
          `Eu sou a favor do uso do capital social para inovar, porque acredito que é um capital que permite a tomada de riscos. Ele possibilita a experimentação com novas ferramentas ainda não consagradas, novos formatos e tecnologias de pesquisa. Também abre espaço para a apropriação de diferentes modelos de prestação de serviços e para a ocupação de novos territórios.`,
          `O Instituto Beja tem exatamente esse papel: inovar com capital social privado. E esse é o meu lugar predileto como filantropa. Eu gosto de olhar para o que é diferente. Cada um de nós pode ser protagonista de alguma criação, se formos para esse espaço de laboratório também. Provavelmente, você tem habilidades diferentes das minhas. Sempre brinco na minha casa que minha irmã do meio tem solução para tudo. Eu não sou essa pessoa, mas eu sou a pessoa que vai atrás do sonho, que tem as ideias.`,
          `Cada ser humano se complementa. Ao mesmo tempo em que nos individualizamos, também coletivizamos nossa individualidade, trazendo esse "policapital" que nos permite pensar diferente. E acredito que é obrigação da filantropia ocupar esse espaço de conscientização e inovação.`,
          "CRISTIANE SULTANI - Fundadora e Presidente ",
        ]}
      />

      <PartnerSection
        section={"Beja Labs - Laboratório"}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        title={"Apoio Plurianual"}
        partnerImg={[
          Images.Logos.AshokaLogo,
          Images.Logos.InstitutoBejaLogo,
          Images.Logos.ItauViverMais,
        ]}
        subCards={[
          Images.Secoes.JusticaRacial,
          Images.Secoes.EquidadeGenero,
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
        ]}
        subtitle={"Vigência - 2024 a 2026"}
        partnerName={
          "Lab Nova Longevidade Ashoka / Itaú Viver Mais / Instituto Beja"
        }
      >
        <GoldenQuoteSlider
          arr={[
            '"A velhice precisa ser tratada no plural, não há uma única forma de se envelhecer, principalmente num cenário como o brasileiro, marcado por extrema desigualdade social. Nova Longevidade: o Lab precisa estar atento a essas questões da desigualdade porque não se trata apenas de envelhecer bem, contribuindo para a sociedade, com saúde, dignidade, com autonomia, propósito e com colaboração intergeracional. No Brasil essas questões estão marcadas pela desigualdade social."',
          ]}
          cite={
            "MARILIA DUQUE, Consultora, Mentora e Pesquisadora da Interface Tecnologia e Envelhecimento"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A inversão da pirâmide etária no Brasil, resultado da queda
                    na taxa de natalidade e do aumento da expectativa de vida, é
                    um marco demográfico de grande relevância. Em 1980, os
                    brasileiros com 65 anos ou mais representavam apenas 4% da
                    população, enquanto jovens de 0 a 14 anos representavam
                    38,2%. Já no Censo de 2022, pessoas com 65 anos ou mais
                    passaram a representar 10,9% da população, e o Índice de
                    Envelhecimento atingiu 55,2 neste mesmo ano, indicando que
                    há 55,2 idosos para cada 100 crianças de 0 a 14 anos.
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    Diante desse cenário, a <strong>Ashoka</strong>, ao longo
                    dos últimos 8 anos, adotou uma visão sistêmica para observar
                    o campo da infância e adolescência e identificou o
                    envelhecimento como um tema transgeracional fundamental.
                    Esse fenômeno demanda soluções inovadoras em todas as
                    esferas sociais, sendo essencial os debates de justiça
                    social, racial e democracia. Com essa perspectiva, a{" "}
                    <strong>Ashoka</strong> desenvolveu um amplo estudo e uma
                    Teoria da Mudança que defendem o direito de todos a
                    envelhecer como agentes de transformação social,
                    contribuindo para a construção de uma sociedade mais
                    inclusiva.
                  </p>

                  <p>
                    Em parceria com a <strong>Ashoka</strong> e o programa{" "}
                    <strong>Itaú Viver Mais</strong>, o{" "}
                    <strong>Instituto Beja</strong> reafirmou seu compromisso
                    com a colaboração e a experimentação para a criação do
                    Laboratório. Assim nasceu a ideia do{" "}
                    <strong>Lab Nova Longevidade</strong>. Este laboratório
                    surge como um espaço de cocriação entre diferentes atores
                    que compartilham a mesma visão de construir novas narrativas
                    e paradigmas para a longevidade. O projeto parte da crença
                    de que a confiança e a colaboração são alicerces
                    fundamentais para alcançar essa transformação.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={"Frentes de Atuação do Lab em 2024"}
          list={[
            "Mapeamento do Ecossistema de Inovação Social em Longevidade",
            "Construção de Reputação do Lab Nova Longevidade para o ecossistema",
            "Produção de Narrativas para o Paradigma da Nova Longevidade",
          ]}
          decimal={true}
        />
      </PartnerSection>

      <LabSection
        title={"Mapeamento do Ecossistema de Inovação Social em Longevidade"}
        section={"Beja Labs - Laboratório"}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        bgColor={"bg-rose"}
        topImg={Images.BejaLabs.MapeamentoBrasil}
        topImgStyle={{ w: 320, maxW: 1491, h: 320, maxH: 1155 }}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O Mapeamento do Ecossistema, conduzido pelo{" "}
                    <strong>Lab Nova Longevidade</strong> em parceria com o
                    <strong>Instituto Beja</strong> e o{" "}
                    <strong>Itaú Viver Mais</strong>, foi oficialmente lançado
                    em 29 de setembro de 2024, durante a{" "}
                    <strong>Longevidade Expo+Fórum</strong>, em São Paulo.
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />

        <TopicList
          title={"Principais destaques"}
          list={[
            "403 iniciativas mapeadas em todas as regiões do Brasil, com exceção do Acre e Romônia, das quais 62,3% possuem mais de 5 anos de atuação.",
            "A colaboração intergeracional foi destacada como prioridade por 74% das iniciativas.",
            "A Educação foi apontada como uma das seis principais barreiras para a construção de uma sociedade equitativa para todas as idades.",
            "17 atores-chave de diversos setores foram entrevistados, contribuindo com suas perspectivas sobre a criação de demanda para inovação social na longevidade.",
            "Em parceria com Apurva-at-e desenvolvida pelo CAEC (Centre For Exponential Change), foi criada uma inteligência artificial denominada Cérebro Nova Longevidade, que estruturou as iniciativas em 30 frentes de ação e trouxe insights para uma arquitetura de mudança.",
          ]}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      Para ampliar o alcance e engajamento, foi lançado um site
                      exclusivo contendo insights detalhados, um mapa interativo
                      e relatórios disponíveis para download.
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={"O tema educação emergiu relacionado à:"}
            list={[
              "Entre outubro e dezembro de 2024, o site registrou 942 novos usuários, gerando 2,9 mil de pageviews.",
              "Até 2 de janeiro de 2025, 134 downloads do relatório foram realizados.",
              "Campanhas realizadas nas redes sociais, em parceria com Ashoka, Institute Beja e Itaú Viver Mais, alcançaram 23 mil visualizações e 1 mil interações.",
              "O mapeamento teve 33 menções na mídia, alcançando uma exposição estimada em 500 mil reais em publicidade.",
            ]}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <strong>
                        Educação foi identificada pelo ecossistema como uma das
                        principais barreiras
                      </strong>{" "}
                      para uma sociedade participativa e equitativa para todas
                      as idades.
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={"O tema educação emergiu relacionado à:"}
            list={[
              "Educação Formal",
              "Até 2 de janeiro de 2025, 134 downloads do relatório foram realizados.",
              "Capacidade de Informação e Decisão",
              "Aprendizado ao longo da vida",
              "Formação em Geriatria e Gerontologia",
              "Educação para Saúde",
              "Educação para Longevidade",
            ]}
          />
        </div>
      </LabSection>

      <LabSection
        title={
          "Construção de reputação do Lab Nova Longevidade para o ecossistema"
        }
        section={"Beja Labs - Laboratório"}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        topImg={Images.Ilustracoes.Bush}
        topImgStyle={{ w: 221, maxW: 751, h: 193, maxH: 659 }}
        topImgCss={"-left-40"}
      >
        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      O mapeamento do ecossistema desempenhou um papel
                      fundamental no fortalecimento da reputação do{" "}
                      <strong>Lab</strong>. Ele ampliou oportunidades de conexão
                      e abriu frentes de colaboração, consolidando sua presença
                      no campo da inovação social para a longevidade.
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={"Principais ações e impactos:"}
            list={[
              "Entrevistas estratégicas: realizadas com representantes de órgãos públicos, setor privado, academia e iniciativas sociais. Entre os participantes estão a Secretaria Nacional de Direitos da Pessoa Idosa, Grupo RD Saúde, Talento Sênior e Fórum Gerações e Futuro do Trabalho, entre outros.",
              "Conexões com organizações relevantes: parcerias estabelecidas com instituições como SESG, Sanofi, Insper, FGV EAESP, MedSênior, Sírio Libanês, Catalyst 2030, BID, ThinkOlga, Ministério Público de Pernambuco, entre outros.",
              "Colaboração com empreendedores da rede Ashoka: engajamento com empreendedores que atuam com longevidade, incluindo Gabriela Agustini (Olahi), João Souza (Facela), João Paulo Nogueira (Cuidador de Confiança), Sérgio Serapião (Labora), Karen Woreman (Museu da Pessoa), entre outros.",
            ]}
          />
        </div>

        <TopicList
          title={
            "Destaques do lançamento do mapeamento na Longevidade Expo+Fórum"
          }
          list={[
            "Três dias de atividades no Espaço Itaú Viver Mais, incluindo uma participação no Espaço Lab60+ Labora.",
            "Painéis e debates enriquecedores com a presença de especialistas como Anna Fontes (Itaú Viver Mais), Célia Cruz (Instituto Beja) e Marília Duque (Lab Nova Longevidade/Ashoka). As discussões abordaram temas cruciais, como políticas públicas, inclusão digital e advocacy.",
            "Apresentação de iniciativas inspiradoras, como o Pocket Show Inclusão Digital: Transborda60+ e Agentes Por Toda Vida.",
          ]}
        />

        <TopicList
          title={"Presença em eventos externos"}
          list={[
            "24 de outubro: presença na Expo Vida60+ em Recife",
            "30 de outubro: participação no evento Fundação Instituto de Administração da Universidade de São Paulo",
            "12 de dezembro: contribuição no Fórum Gerações e Futuro do Trabalho",
          ]}
        />
      </LabSection>

      <LabSection
        title={"Produção de Novas Narrativas"}
        section={"Beja Labs - Laboratório"}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        topImg={Images.BejaLabs.Globe}
        topImgStyle={{ w: 221, maxW: 751, h: 193, maxH: 659 }}
        topImgCss={"-left-20"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>Lab Nova Longevidade</strong> tem desempenhado um
                    papel central na produção e circulação de novas narrativas
                    sobre envelhecimento, contribuindo para mudanças de
                    mentalidade e a consolidação do paradigma da Nova
                    Longevidade. Por meio de parcerias estratégicas, o{" "}
                    <strong>Lab</strong> tem trabalhado para mobilizar a
                    sociedade e envolver produtores de conteúdo, mídia, formação
                    de jornalistas e publicitários na criação de um novo modelo
                    mental que promove envelhecimento saudável, com propósito e
                    justiça social.
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    A transformação exige um olhar crítico para os sistemas da
                    sociedade – transporte, saúde e modelos de trabalho – e o
                    repensar dos modelos de cuidado, considerando as
                    desigualdades de gênero e raça. Para responder ao acelerado
                    envelhecimento populacional, é necessário acelerar mudanças
                    em políticas públicas, normas sociais e mercados, enquanto
                    se engaja a sociedade em soluções inovadoras e inclusivas.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicListWithSub
          title={"Principais iniciativas para novas narrativas"}
          list={projects}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      Em 16 de outubro, no Espaço Literat, o Lab Nova
                      Longevidade realizou seu primeiro círculo de aprendizado,
                      explorando temas fundamentais, como:
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={"Principais aprendizados do Lab em 2024"}
            list={[
              "Educação para Longevidade",
              "Cultura do Cuidado",
              "Inclusão Digital",
              "Importância da Voz das Comunidades",
              "Novas Narrativas e Modelos Mentais",
              "Trabalho e Aprendizagem ao Longo da Vida",
              "Idadismo",
            ]}
          />
        </div>

        <PinkBox>
          <p>
            Esses encontros permitiram a troca de experiências e de diferentes
            perspectivas, revelando que o <strong>Lab</strong> atua como
            amplificador, catalisador e orquestrador do ecossistema de inovação
            social. Esse papel tem sido crucial para impulsionar o paradigma de
            Nova Longevidade, promovendo oportunidades para que todas as pessoas
            possam ser <strong>Agentes Por Toda a Vida</strong>, contribuindo
            para suas famílias, comunidades e territórios. A sistematização
            dessa troca foi consolidada em uma devolutiva e servirá como um dos
            recursos que embasam a estratégia do <strong>Lab</strong> para 2025.
          </p>
        </PinkBox>

        <GoldenQuoteSlider
          arr={[
            '"Impulsionar mudanças em políticas públicas, normas sociais e dinâmicas de mercado para promover um envelhecimento saudável, ativo e com propósito. Mobilizar a sociedade como um todo para enfrentar os desafios e oportunidades do rápido envelhecimento populacional, garantindo qualidade de vida e inclusão para todas as gerações."',
          ]}
          cite={
            "MARILIA DUQUE, Consultora, Mentora e Pesquisadora da Interface Tecnologia e Envelhecimento"
          }
        />
      </LabSection>

      <PartnerSection
        section={"Beja Labs - Laboratório"}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Logos.ToribaLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024 a 2028"}
        partnerName={
          "Lab de Imaginação e Inovação na Filantropia – Instituto Toriba"
        }
      >
        <GoldenQuoteSlider
          arr={[
            '"E se, em vez de simplesmente reagir às questões que parecem erradas, nós começássemos a narrar o mundo diferente que queremos ver? Consolidar, a partir do exercício da especulação imaginativa, possibilidades que ainda não estão explícitas, mas que podem se tornar a partir desse exercício, baseado em processos bastante estruturados que a indústria já utiliza para forjar o design de futuros."',
          ]}
          cite={"GRACIELA SELAIMEN, Fundadora "}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col gap-4'>
                    <h1
                      style={{
                        fontSize: `clamp(${calcClamp(14, 32)})`,
                        lineHeight: `clamp(${calcClamp(14 * 1.2, 32 * 1.2)})`,
                      }}
                      className='editorial'
                    >
                      Como desenhar futuros mais justos e disruptivos
                    </h1>

                    <p>
                      O <strong>Instituto Toriba</strong> acredita no poder
                      transformador das histórias que contamos sobre o futuro.
                      Elas moldam nossas ações no presente. Por meio de
                      pesquisas, alfabetização em futuros e construção de
                      narrativas, o Instituto atua para catalisar transformações
                      sociais. Através de processos colaborativos que reúnem
                      ativistas, artistas, comunicadores e pensadores
                      visionários, criam-se espaços para que novas histórias
                      possam emergir – uma oportunidade única de reimaginar e
                      redefinir nosso papel no mundo.
                    </p>
                  </div>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            '"Para além de uma visão sistêmica, um fazer sistêmico: é preciso se implicar como parte do problema. Reconhecer que precisamos de pessoas muito diferentes discutindo na mesa, não podem ser as mesmas pessoas de sempre. Precisamos de outros discursos, outras habilidades. Quais as possibilidades de conversas temos quando se juntam vozes muito diferentes que nunca se encontram antes? É preciso ouvir pessoas que estão dispostas a desafiar o status quo, capazes de promover uma verdadeira transformação cultural na filantropia. E este tipo de mudança não é necessariamente mensurável."',
          ]}
          cite={"GRACIELA SELAIMEN, Fundadora "}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Em parceria com o <strong>Instituto Toriba</strong>, o{" "}
                    <strong>Instituto Beja</strong> dá mais um passo em direção
                    ao fortalecimento de relações baseadas em respeito,
                    confiança e colaboração mútua. Juntos, promovem ações para
                    reflexão compartilhada e para a prototipação de soluções
                    exponenciais para os desafios sociais e culturais.
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    O{" "}
                    <strong>Lab de Imaginação e Inovação na Filantropia</strong>{" "}
                    é fruto da convergência de talentos do{" "}
                    <strong>Instituto Toriba</strong> e do{" "}
                    <strong>Instituto Beja</strong>. O espaço oferece condições
                    para fomentar a reflexão e o diálogo sobre questões que
                    mobilizam atores sociais, incentivando novas práticas para a
                    filantropia. Também busca promover maior conscientização
                    sobre o papel transformador da filantropia e explorar novas
                    possibilidades de impacto.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={"Questões orientadoras"}
          list={[
            "Como explorar novos papéis das lideranças e instituições filantrópicas na condução de mudanças sistêmicas e culturais para gerar transformações positivas?",
            "Quais são as capacidades críticas que lideranças filantrópicas precisam para impulsionar processos transformadores e sustentáveis?",
            "Como criar espaços que incentivem uma cultura de inovação na filantropia?",
            "De que forma a filantropia pode apoiar efetivamente os agentes de mudança que moldam futuros alternativos?",
            "Como a filantropia pode acelerar a transição para um futuro mais equitativo e justo?",
            "De que maneira a filantropia pode se reinventar para responder aos desafios de um mundo em polícrise?",
          ]}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      Para buscar respostas e provocar reflexão, o{" "}
                      <strong>Lab</strong> atua em três dimensões principais:
                      SELF (indivíduo), ECOSSISTEMAS e INSTITUIÇÕES.
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={"Com foco em:"}
            list={[
              "Expansão de perspectivas",
              "Exploração de novas linguagens, conceitos e tecnologias",
              "Criação de conteúdos, storytelling, disputa de narrativas",
              "Construção de cenários e futuros",
              "Aplicação de design especulativo",
            ]}
          />
        </div>

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col gap-4'>
                    <h1
                      style={{
                        fontSize: `clamp(${calcClamp(14, 32)})`,
                        lineHeight: `clamp(${calcClamp(14 * 1.2, 32 * 1.2)})`,
                      }}
                      className='editorial'
                    >
                      AÇÕES em 2024
                    </h1>

                    <p>
                      <strong>Global Community Game:</strong> uma metodologia
                      baseada em simulação gamificada para capacitar lideranças
                      na criação soluções colaborativas em ecossistemas
                      complexos. Desenvolvido por{" "}
                      <strong>
                        Jahn Werner, Michael Fuchs e Jochen Messner
                        (Five4Success)
                      </strong>
                      , o jogo foi oferecido em São Paulo, nos dias 26 e 27 de
                      março, a um grupo de lideranças filantrópicas e da
                      sociedade civil. Ele desenvolve habilidades para abraçar
                      mudanças, navegar por relações e culturas institucionais
                      complexas com consciência e desenvoltura, em um cenário em
                      constante evolução.
                    </p>

                    <p>
                      O{" "}
                      <strong>
                        Lab de Imaginação e Inovação na Filantropia
                      </strong>{" "}
                      liderou a curadoria da 3ª edição do{" "}
                      <strong>Filantropando</strong>, promovendo diálogos e
                      interações sobre inovação e o futuro da prática
                      filantrópica.
                    </p>
                  </div>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />
      </PartnerSection>
    </div>
  );
};

export default BejaLabs;
