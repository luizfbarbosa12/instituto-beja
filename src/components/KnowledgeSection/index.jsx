import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import LineCME from "../LineCME";
import TextBlock from "../TextBlock";
import TopicList from "../ui/TopicList";
import { Scrollbar } from "swiper/modules";
import { Images } from "../../assets/Index";
import { calcClamp } from "../../data/Utils";
import PinkBox from "../AdvocacySection/PinkBox";
import PartnerSection from "../ui/PartnerSection";
import { Swiper, SwiperSlide } from "swiper/react";
import GoldenQuoteSlider from "../ui/GoldenQuoteSlider";
import ExternalLinkContainer from "../ui/ExternalLinkContainer";
import { fases, KnowledgeData } from "../../data/KnowledgeData";
import { KnowledgeSectionVentTransition } from "./KnowledgeSectionVentTransition";

const KnowledgeSection = () => {
  return (
    <div className='flex flex-col items-end w-full overflow-hidden pb-90'>
      <KnowledgeSectionVentTransition />

      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Apoio Plurianual"}
        mainImg={Images.Logos.PipaLogo}
        cardsImg={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
        subtitle={"Vigência - 2024 a 2026"}
        partnerName={"Pipa"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A <strong>PIPA</strong> é uma organização criada para
                    democratizar o acesso ao investimento social privado e à
                    filantropia no Brasil. Sua missão é ser uma ponte eficaz
                    entre financiadores e coletivos, movimentos e organizações
                    de base situados em favelas e periferias, historicamente
                    excluídos dos centros de poder. Por meio de diagnósticos,
                    ferramentas e ações, a PIPA trabalha para assegurar que
                    esses recursos cheguem aos territórios de maneira ampla e
                    equitativa, considerando as dimensões de raça, gênero e
                    classe.
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

        <GoldenQuoteSlider
          cite={"PIPA"}
          arr={KnowledgeData.quotes.firstQuoteSection}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col max-640:flex-col-reverse max-640:gap-10'>
                    <div className='flex flex-col w-full'>
                      <p
                        style={{
                          fontSize: `clamp(${calcClamp(12, 32)})`,
                          lineHeight: `clamp(${calcClamp(12 * 1.2, 32 * 1.2)})`,
                        }}
                        className='w-full editorial text-start text-retro-ochre '
                      >
                        &quot;As periferias tem respostas&quot;
                      </p>
                      <cite
                        style={{
                          fontSize: `clamp(${calcClamp(12, 32)})`,
                          lineHeight: `clamp(${calcClamp(12 * 1.2, 32 * 1.2)})`,
                        }}
                        className='w-full text-end editorial text-retro-ochre'
                      >
                        — PIPA
                      </cite>
                    </div>

                    <img
                      src={Images.Ilustracoes.Clouds}
                      className='object-contain relative'
                      style={{
                        width: `clamp(${calcClamp(434, 815)})`,
                        height: `clamp(${calcClamp(185, 249)})`,
                      }}
                    />
                  </div>
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
                    A atuação da <strong>PIPA</strong> concentra-se na criação
                    de ferramentas que conectem coletivos e movimentos
                    periféricos brasileiros a investimentos sociais privados e à
                    filantropia em âmbito global. A organização também trabalha
                    ativamente na construção de parcerias e na incidência junto
                    a organizações filantrópicas e investidores sociais
                    privados, promovendo a reavaliação de suas estruturas e
                    práticas de financiamento para torná-las mais inclusivas e
                    eficazes. A PIPA também desempenha um papel fundamental na
                    racialização do debate, destacando as periferias como
                    protagonistas na construção de soluções planejadas pela
                    filantropia e pelos investimentos sociais privados no
                    Brasil, trazendo maior reconhecimento às especificidades e
                    necessidades desses territórios.
                  </p>
                </>
              ),
            },
          ]}
        />

        <LineCME style={"pr-20"} />

        <TextBlock
          className='-mt-20'
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Em 2024, a <strong>PIPA</strong> ampliou sua equipe e
                    implementou políticas de cuidado que incentivam o
                    desenvolvimento profissional e pessoal dos colaboradores.
                    Entre as iniciativas, destacam-se auxílios complementares
                    para infraestrutura, terapia pessoal e aprendizado de
                    idiomas.
                  </p>

                  <p>
                    Nesse período, a <strong>PIPA</strong> estruturou seu ciclo
                    de avaliação interna, capacitando os profissionais para o
                    uso de softwares de gestão de tarefas e projetos, além de
                    elaborar planos de desenvolvimento individual para cada
                    colaborador. Em parceria com o Instituto{" "}
                    <strong>ACP</strong>, articulou a participação de
                    integrantes de sua equipe em mentorias de gestão e liderança
                    da <strong>ACP</strong>. A colaboração com o Instituto
                    também resultou na criação do primeiro{" "}
                    <strong>
                      Fundo de Desenvolvimento Institucional para Organizações
                      Periféricas (Fundo POP)
                    </strong>
                    , voltado para o fortalecimento institucional de
                    organizações e centros de mobilização social localizados nas
                    favelas e periferias de todo o Brasil.
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
                    Outro marco importante foi o lançamento, em maio, do{" "}
                    <strong>Guia das periferias para doadores</strong>, um
                    material estruturado para orientar empresas, instituições,
                    financiadores e fundações interessados em reduzir os
                    impactos da desigualdade nos sistemas de doação no Brasil.
                    Organizado em três eixos principais -{" "}
                    <strong>
                      transparência, pluralidade e desenvolvimento institucional
                    </strong>{" "}
                    - o guia reflete o compromisso da <strong>PIPA</strong> em
                    transformar as práticas de doação, promovendo inclusão e
                    justiça social no acesso a recursos.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={KnowledgeData.quotes.secondQuoteSection}
          cite={"ANDREY CHAGAS, Coordenador de Operações"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Na ativação do Guia, e em parceria com a{" "}
                    <strong>NARRA - Organização de Comunicação Política</strong>
                    , foi possível articular cinco regiões do Brasil, garantindo
                    a participação das vozes e protagonismo de atores e agentes
                    intrinsecamente ligados à transformação dos seus
                    territórios. Essa iniciativa promoveu debates e mobilizou
                    projetos e ações em várias partes do país, incluindo Manaus
                    (AM), Fortaleza (CE), Cuiabá (MT), Porto Alegre (RS) e Rio
                    de Janeiro (RJ), além de São Paulo (SP). A participação no
                    <strong>
                      Festival da Associação Brasileira de Captadores de
                      Recursos (ABCR)
                    </strong>{" "}
                    também marcou presença como um importante passo na
                    disseminação do Guia.
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
                    Em colaboração com a organização{" "}
                    <strong>Confluentes, a PIPA</strong> realizou o{" "}
                    <strong>1º Encontro Periferias em Rede</strong>, no bairro
                    de Pinheiros, em São Paulo. Houve a oportunidade de dialogar
                    diretamente com lideranças de diversos projetos durante um
                    jantar de arrecadação. Para a cofundadora da{" "}
                    <strong>PIPA</strong> e coordenadora de estratégia e
                    sustentabilidade Marcelle Decothe, essas iniciativas
                    apresentam um enorme potencial para se tornarem ações
                    anuais, contribuindo para o fortalecimento e a continuidade
                    do impacto em prol das periferias.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={KnowledgeData.quotes.thirdQuoteSection}
          cite={
            "MARCELLE DECOTHE, Cofundadora e Coordenadora de Estratégia e Sustentabilidade"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: <></>,
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    Em parceria com o{" "}
                    <strong>
                      Grupo de Institutos Fundações e Empresas (GIFE)
                    </strong>
                    , a <strong>PIPA</strong> lançou um ciclo formativo dedicado
                    ao fortalecimento de lideranças negras no setor de
                    <strong>Investimento Social Privado (ISP)</strong> e{" "}
                    <strong>Filantropia</strong> no Brasil. O programa,
                    oferecido de forma gratuita e on-line, foi estruturado para
                    proporcionar uma visão crítica da filantropia no país,
                    abordando temas relevantes, como descolonialidade, justiça
                    social, e as dinâmicas entre filantropia e periferias. O
                    ciclo formativo tem como objetivo principal capacitar
                    indivíduos pertencentes a grupos minorizados, especialmente
                    pessoas negras, LGBTQIA+, oriundas de periferias e pessoas
                    com deficiência.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={KnowledgeData.quotes.fourthQuoteSection}
          cite={
            "MARCELLE DECOTHE, Cofundadora e Coordenadora de Estratégia e Sustentabilidade"
          }
        />
      </PartnerSection>

      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Pesquisa"}
        mainImg={Images.Logos.FundacaoJoseLuizLogo}
        cardsImg={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024 a 2025"}
        partnerName={
          "Fundação José Luiz Egydio Setúbal (FJLES) - Filantropia no Brasil: Trajetórias e experiências de Grandes Doadores"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A Pesquisa{" "}
                    <strong>
                      Filantropia no Brasil: Trajetórias e experiências de
                      Grandes Doadores
                    </strong>
                    , desenvolvida pela{" "}
                    <strong>Fundação José Luiz Egydio Setúbal (FJLES)</strong>,
                    teve como objetivo investigar as motivações e práticas
                    filantrópicas de indivíduos identificados como grandes
                    doadores no Brasil.
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
                    O estudo buscou explorar as experiências, conhecimentos e
                    expectativas desses filantropos, bem como compreender de que
                    forma suas ações contribuem para o fortalecimento do
                    investimento social privado no país. A pesquisa pretende
                    <strong>
                      oferecer uma análise aprofundada das motivações e
                      comportamentos filantrópicos desses doadores, ao mesmo
                      tempo em que mapeia as práticas utilizadas e os desafios
                      enfrentados.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.CebrabDesjusLogo}
        cardsImg={[
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
        subtitle={"Vigência - 2024 a 2025"}
        partnerName={
          "Centro Brasileiro de Análise e Planejamento (CEBRAP) - Seminários de Pesquisa em Desigualdades e Justiça (DeSJuS)"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O{" "}
                    <strong>
                      Seminários de Pesquisa em Desigualdades e Justiça (Desjus)
                    </strong>
                    surgiu com o propósito fundamental de criar um espaço de
                    encontro para pesquisadoras e pesquisadores interessados nos
                    desafios políticos e normativos das sociedades
                    contemporâneas. O grupo de pesquisa está abrigado no{" "}
                    <strong>
                      Núcleo de Estudos Internacionais do Centro Brasileiro de
                      Análise e Planejamento (CEBRAP)
                    </strong>
                    .
                  </p>

                  <p>
                    A iniciativa tem como objetivo desenvolver um arcabouço
                    teórico e analítico que possibilite reimaginar o papel da
                    filantropia no Brasil, a partir de uma perspectiva crítica e
                    transformadora, com ênfase nas especificidades e desafios
                    das realidades do Sul Global. O projeto busca promover um
                    diálogo inovador sobre o futuro da filantropia, utilizando
                    novos vocabulários e conceitos que desafiem o status quo e
                    ampliem as possibilidades de impacto social.
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
                    O ponto central dessa colaboração foi a realização de um
                    <strong>Seminário de Pesquisa</strong>, estruturado em uma
                    rotina de encontros híbridos - virtuais e presenciais, para
                    participantes localizados fora de São Paulo - organizados no
                    formato de <strong>Oficinas de Formação</strong>. Os
                    encontros tiveram como finalidade estudar a filantropia em
                    profundidade e criar termos, definições e esquemas
                    analíticos que, em um futuro próximo, possibilitem repensar
                    e reimaginar o significado da filantropia sob a ótica do Sul
                    Global.
                  </p>

                  <p>
                    Por meio da parceria iniciada em 2024 com o{" "}
                    <strong>Instituto Beja</strong>, têm sido realizados ciclos
                    de leitura com convidados, visando consolidar os termos que
                    construam um repertório sobre justiça capaz de enfrentar os
                    desafios específicos do Sul Global.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            "Nossa proposta é nos formar e formar uma rede de pessoas que possam vir a pensar a filantropia do ponto de vista da nossa caixa de ferramentas, que é a teoria política e a filosofia política.",
          ]}
          cite={"Rissa Ventura, Pesquisadora"}
        />

        <Swiper
          scrollbar={{
            hide: true,
          }}
          modules={[Scrollbar]}
          pagination={{ clickable: true }}
          centeredSlides={false}
          slidesPerView={2}
          spaceBetween={20}
          className='w-screen'
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

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Por meio da parceria iniciada em 2024 com o{" "}
                    <strong>Instituto Beja</strong>, têm sido realizados ciclos
                    de leitura com convidados, visando consolidar os termos que
                    construam um repertório sobre justiça capaz de enfrentar os
                    desafios específicos do Sul Global.
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
          title={"Esses ciclos abordam temas como:"}
          list={KnowledgeData.lists.firstList}
        />

        <GoldenQuoteSlider
          arr={[
            "“Pensar, imaginar, qual filantropia queremos para uma sociedade democrática e profundamente desigual. Em que, obviamente, o estado não é capaz de responder a todas as demandas sociais.”",
          ]}
          cite={"Raissa Ventura, Pesquisadora"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A lacuna a que nos referimos atraiu uma alta procura,
                    resultando em mais de 200 inscrições. Em resposta, o{" "}
                    <strong>CEBRAP</strong>
                    enviou um questionário para compreender o perfil dos
                    interessados, recebendo 160 respostas.
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
          title={"A análise revelou alguns insights importantes:"}
          list={KnowledgeData.lists.secondList}
        />

        <GoldenQuoteSlider
          arr={[
            "É preciso entender o que a filantropia está ou não financiando. Entendemos a filantropia como um lugar onde o estado não está chegando, onde o estado não está fazendo o seu papel como, por exemplo, arte e alta cultura. Mas e quando a filantropia começa a financiar movimentos de direita e extrema direita? E quando a filantropia começa a ocupar o lugar do estado?",
          ]}
          cite={"Raissa Ventura, Pesquisadora"}
        />

        <PinkBox>
          <p>
            Para o primeiro semestre de 2025, o modelo de oficinas de leitura
            aplicado em 2024 será ajustado. A nova proposta vai alternar
            oficinas de leitura com palestras conduzidas por convidados,
            fortalecendo a formação de uma rede engajada com a temática.
          </p>
        </PinkBox>
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Apoio Plurianual"}
        mainImg={Images.Logos.FundoAgbaraLogo}
        cardsImg={[
          Images.Secoes.JusticaRacial,
          Images.Secoes.EquidadeGenero,
          Images.Secoes.FilantropiaSubCard,
        ]}
        subtitle={"Vigência - 2024 a 2026"}
        partnerName={
          "Fundo Agbara - apoio ao Núcleo de Pesquisa e Memória da Mulher Negra (NUPEMN)"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Uma pesquisa global realizada pelo{" "}
                    <strong>Black Feminist Fund</strong>
                    revelou que mulheres negras recebem apenas 0,1% a 0,3% dos
                    recursos provenientes da filantropia e do investimento
                    social privado em todo o mundo. No Brasil, a situação não é
                    diferente. Com esse cenário em mente, o{" "}
                    <strong>Fundo Agbara</strong> foi criado em setembro de
                    2020, tornando-se o primeiro fundo de mulheres negras no
                    Brasil. Esta iniciativa de impacto social busca fortalecer
                    mulheres negras e suas comunidades por meio do apoio a
                    projetos que promovam igualdade étnico-racial, justiça
                    econômica, social e climática.
                  </p>

                  <p>
                    Com foco em iniciativas que contribuam para a construção de
                    um Brasil onde a população negra possa viver plenamente
                    emancipada e com o bem-estar assegurado, o{" "}
                    <strong>Fundo Agbara</strong> concentra seus esforços em
                    apoiar organizações de base lideradas por mulheres negras.
                    Assim, atua como uma ferramenta de resistência contra as
                    exclusões e desigualdades enfrentadas historicamente por
                    essa população.
                  </p>

                  <ExternalLinkContainer
                    title={"Conheça o estudo completo e compartilhe-o"}
                    subtitle={"Acessar aqui o Estudo Completo"}
                    link={
                      "https://fundoagbara.org.br/wp-content/uploads/2024/11/Diagnostico-acerca-de-filantropia-e-raca-no-Brasil.pdf?fbclid=PAZXh0bgNhZW0CMTEAAaby0073qhpeGV6XpFjzJcDcCY_p5GD3fesev-PG9Wfq6jG1VjTqsSDvAAU_aem_IT4-nq7aP96lp8QpvDRMbg"
                    }
                  />
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
                    <strong>
                      Núcleo de Pesquisa e Memória da Mulher Negra (NUPEMN)
                    </strong>
                    , vinculado ao <strong>Fundo Agbara</strong>, tem por
                    objetivo pesquisar e fortalecer a filantropia voltada para
                    as mulheres negras e apoiar iniciativas que influenciem
                    políticas públicas. Isso inclui democratizar o acesso ao
                    investimento social privado, priorizando o recorte racial na
                    alocação de recursos e promovendo o desenvolvimento de uma
                    filantropia mais inclusiva e representativa.
                  </p>
                  <p>
                    Como parte desse compromisso, o <strong>NUPEMN</strong>{" "}
                    lançou um diagnóstico inédito sobre filantropia e raça no
                    Brasil. O estudo mapeou mais de 800 organizações negras e
                    apresentou análises profundas sobre justiça social e
                    reparação histórica. Com contribuições de especialistas como{" "}
                    <strong>Cida Bento</strong> e um curta-metragem exclusivo, o
                    material é um convite à reflexão e à ação para transformar o
                    cenário da filantropia no país.
                  </p>
                  <p>
                    Temos orgulho de ser parceiros dessa pesquisa
                    transformadora, reforçando nosso compromisso com a equidade
                    racial e de oxigenar o ecossistema filantrópico.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            "A gente recebe muito esse tipo de questionamento de outros doadores: 'Ah! Mas outros Institutos já fazem pesquisa, porque vocês querem fazer também?' Mas não bastam dois institutos de pessoas negras, isso não representa tudo. Institutos de pessoas brancas têm aos montes.",
          ]}
          cite={"ALINE ODARA, Diretora Executiva"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>Fundo Agbara</strong> fortalece nossas parcerias
                    baseadas na confiança e na colaboração, destacando o valor
                    do investimento de apoio institucional. Esse modelo permite
                    que as instituições beneficiadas canalizem menos esforços
                    para preocupações com o futuro imediato e mais energia para
                    ampliar sua criatividade e potência para impactar a vida das
                    mulheres negras. O tempo antes consumido em captação de
                    recursos, agora é direcionado para transformar realidades e
                    fortalecer comunidades.
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
                    <strong>Agbara</strong> desempenha um papel fundamental na
                    filantropia brasileira, contribuindo para a democratização
                    desses espaços historicamente excludentes. A organização
                    busca atrair outras instituições negras para ocupar essas
                    esferas: &quot;... porque é um tanto constrangedor sermos as
                    únicas mulheres negras neste espaço.&quot; Isso reposiciona
                    o <strong>Fundo Agbara</strong> no ecossistema da
                    filantrópico de maneira inovadora.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            "Mulheres negras produzindo conhecimento e salvaguardando a nossa memória também é um importante instrumento emancipatório. As soluções são produzidas por mulheres negras há muito tempo.",
          ]}
          cite={"ALINE ODARA, Diretora Executiva"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Propõe-se a redução das ações, mantendo, porém, a
                    diversidade das frentes de atuação. Essa abordagem tem como
                    objetivo aumentar o número de pessoas atendidas e aprimorar
                    os processos de comunicação, ampliando o impacto alcançado
                    enquanto concentra esforços na otimização da equipe.
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
                    Adicionalmente, busca-se intensificar as interações entre os
                    agentes de parceria, incentivando um diálogo permanente e
                    uma convivência harmoniosa e colaborativa. Tal abordagem
                    contribui para o fortalecimento das iniciativas, baseando-se
                    em práticas de escuta ativa e no reconhecimento recíproco.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Evento"}
        mainImg={Images.Logos.IEBlisLogo}
        cardsImg={[Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - Novembro de 2024"}
        partnerName={
          "Instituto de Estudos Avançados da Universidade de São Paulo (IEA-USP) e Centro de Estudos de Cultura Contemporânea (CEDEC) - Colóquio Colonialidade, racialidade, punição e reparação nas Américas "
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O{" "}
                    <strong>
                      Colóquio Colonialidade, Racialidade, Punição e Reparação
                      nas Américas
                    </strong>
                    , promovido pelo Instituto de{" "}
                    <strong>
                      Estudos Avançados da Universidade de São Paulo (IEA-USP)
                    </strong>{" "}
                    e{" "}
                    <strong>
                      Centro de Estudos de Cultura Contemporânea (CEDEC)
                    </strong>
                    , ofereceu um espaço de profunda reflexão sobre as
                    interseções entre esses temas, estruturado a partir de uma
                    abordagem transnacional e interdisciplinar. Com o objetivo
                    de investigar conexões históricas e contemporâneas entre os
                    diferentes contextos das Américas, o evento examinou de que
                    forma o legado colonial continua a moldar as dinâmicas
                    raciais, os sistemas de punição e os desafios relacionados à
                    justiça social na atualidade.
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
                    Entre os dias <strong>25 e 29 de novembro de 2024</strong>,
                    o <strong>Instituto Beja</strong>
                    teve a honra de organizar uma série de encontros com{" "}
                    <strong>
                      Trevor Smith, um dos mais renomados especialistas
                      internacionais em reparações históricas e narrativas de
                      justiça racial
                    </strong>
                    . Durante sua primeira visita ao Brasil,{" "}
                    <strong>Trevor</strong> apresentou o conceito inovador de
                    world-making, uma prática transformadora que busca
                    reimaginar as estruturas sociais e econômicas existentes. O
                    objetivo é desmantelar o capitalismo racial e fortalecer
                    alianças estratégicas entre movimentos negros e indígenas.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O colóquio teve duração de 4 dias, incluindo{" "}
                    <strong>
                      11 mesas redondas, 14 minicursos e 160 Grupos de Trabalho
                      (GTs)
                    </strong>
                    . As discussões abordaram questões como racismo, vigilância,
                    controle social, práticas abolicionistas, reparação
                    histórica e colonialidade.
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
          title={"Durante os encontros, refletimos sobre: "}
          list={KnowledgeData.lists.thirdList}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>Trevor</strong> destacou sua inspiração pelas
                    complexidades do nosso contexto histórico e racial e o
                    momento crucial que vivemos, com o racismo estrutural sendo
                    amplamente discutido, mas ainda desafiado por barreiras
                    práticas. Ressaltou a importância de alinhar narrativas
                    globais de reparação às especificidades locais, unindo
                    movimentos negros e indígenas em torno de uma agenda que vai
                    além de compensações financeiras. O palestrante também
                    reconheceu a potência das conexões criadas durante sua
                    visita e enfatizou a necessidade de espaços que promovam
                    solidariedade e transformações estruturais, lembrando que
                    afeto e narrativa caminham juntos na construção de
                    realidades mais justas.
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
                    Com o apoio de parceiros como o{" "}
                    <strong>Instituto Toriba</strong> e o{" "}
                    <strong>BLIS Collective</strong>, e em colaboração com
                    <strong>
                      Ibirapitanga, Casa Sueli Carneiro, Observatório da
                      Branquitude, Instituto de Estudos da Religião (ISER), Ação
                      da Cidadania
                    </strong>{" "}
                    e <strong>Casa Fluminense</strong>, promovemos diálogos que
                    ampliam a atuação da filantropia no fortalecimento da
                    justiça racial e histórica. Essa iniciativa representou um
                    avanço significativo ao alinhar reflexões globais com a
                    realidade brasileira e ao destacar o poder de narrativas
                    transformadoras.
                  </p>

                  <p>
                    Com o apoio do <strong>Instituto Beja</strong>, foi possível
                    garantir a participação de 14 organizações no evento,
                    superando os limites tradicionais de financiamento
                    acadêmico. Essa colaboração foi essencial para viabilizar a
                    presença de representantes do{" "}
                    <strong>Movimento Negro Unificado</strong>, da{" "}
                    <strong>
                      Rede Nacional de Feministas Antiabolicionistas
                    </strong>
                    , do <strong>Projeto Reparações</strong>, das{" "}
                    <strong>Mães de Maio</strong>, do{" "}
                    <strong>Quilombagem</strong> e da{" "}
                    <strong>
                      Rede de Proteção e Resistência contra o Genocídio.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.LautELiberdadeAutoritarismo}
        cardsImg={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2024 a 2026"}
        partnerName={
          "LAUT - Centro de Análise da Liberdade e do Autoritarismo (LAUT)"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O{" "}
                    <strong>
                      Centro de Análise da Liberdade e do Autoritarismo (LAUT)
                    </strong>{" "}
                    é uma instituição independente e apartidária que se dedica a
                    pesquisas interdisciplinares sobre o estado de direito, a
                    democracia e a defesa das liberdades fundamentais. Lançado
                    em maio de 2020 como um projeto incubado no{" "}
                    <strong>
                      Instituto de Defesa do Direito de Defesa (IDDD)
                    </strong>
                    , o <strong>LAUT</strong> tem como objetivo monitorar as
                    diversas manifestações do autoritarismo e repressão às
                    liberdades, buscando fortalecer os alicerces democráticos e
                    fomentar a mobilização da sociedade civil.
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
                    Com foco em produzir e disseminar conhecimento relevante, o
                    <strong>LAUT</strong> adota uma abordagem interdisciplinar
                    para analisar e compreender as ameaças às liberdades
                    fundamentais.
                    <strong>
                      Destaca-se por sua atuação em mapear padrões de
                      autoritarismo, promover estratégias de desradicalização e
                      criar condições para um diálogo social mais robusto. Dessa
                      forma, contribui para a consolidação de uma democracia
                      plural, resiliente e comprometida com os direitos humanos.
                    </strong>
                  </p>

                  <p>
                    O <strong>LAUT</strong> lançou um Centro de Formação voltado
                    para jovens pesquisadores, para criar oportunidades que
                    promovam a participação ativa em projetos de pesquisa,
                    metodologias de análise e na comunicação de resultados. O
                    programa prioriza a inclusão e a diversidade, oferecendo
                    bolsas de auxílio especialmente destinadas a candidatos
                    negros e indígenas.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.IDBRLogo}
        cardsImg={[Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - 2024 a 2025"}
        partnerName={"Instituto Identidades do Brasil (ID_BR)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>Instituto Identidades do Brasil (ID_BR)</strong> é
                    uma organização sem fins lucrativos, pioneira e referência
                    nacional na promoção e aceleração da igualdade racial. Atua
                    por meio de abordagens criativas e inovadoras, bem como
                    ações estruturadas em quatro pilares principais: dados e
                    impacto; empregabilidade; educação e engajamento.
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
                    O <strong>ID_BR</strong> busca tornar as pautas de igualdade
                    racial, diversidade e inclusão mais acessíveis, promovendo
                    conexões humanizadas e participando de eventos estratégicos.
                    A organização acelera a transformação de empresas e
                    instituições, além de contribuir para o desenvolvimento das
                    carreiras e a valorização da jornada de pessoas negras e
                    indígenas.
                  </p>

                  <p>
                    Em parceria com o <strong>Instituto Beja</strong>, o{" "}
                    <strong>ID_BR</strong> também fortalece iniciativas
                    relacionadas à equidade racial, com foco na diversidade e
                    inclusão.{" "}
                    <strong>
                      Entre suas estratégias está o desenvolvimento e a
                      implementação de soluções tecnológicas inovadoras, como a
                      criação de Deb, a primeira inteligência artificial (IA) do
                      Brasil voltada para questões étnico-raciais.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.IgapareLogo}
        cardsImg={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2024 a 2025"}
        partnerName={"Instituto Igarapé"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>Instituto Igarapé</strong>, fundado em 2011, tem
                    como objetivo propor soluções e parcerias para os desafios
                    globais complexos. Sua capacidade de produzir conhecimento,
                    conectar mundos, compreender diferentes realidades, gerar
                    soluções concretas e traduzi-las para uma audiência que
                    forma opiniões e toma decisões, lhe possibilita um
                    posicionamento único para influenciar políticas públicas e
                    corporativas, do nível local ao global.
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
                    O <strong>Instituto Beja</strong> apoia o{" "}
                    <strong>Instituto Igarapé</strong> em sua missão de
                    influenciar positivamente políticas públicas no Brasil e no
                    cenário global. Com base em pesquisas sólidas, tecnologias
                    emergentes e comunicação estratégica, o Igarapé desenvolve
                    soluções para segurança pública, clima e tecnologia digital,
                    influenciando políticas públicas e corporativas de forma
                    inovadora e eficaz.
                  </p>

                  <strong>
                    A organização foi reconhecida como o principal think tank de
                    políticas sociais do mundo em 2019, melhor ONG de Direitos
                    Humanos em 2018, e foi classificada entre as principais ONGs
                    da América Latina. Entre 2017 e 2023, o Igarapé figurou
                    entre as melhores ONGs do Brasil, consolidando sua
                    influência global e regional.
                  </strong>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.MoreInCommonLogo}
        cardsImg={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2024 a 2026"}
        partnerName={"More in Common Brasil"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A missão da <strong>More in Common</strong> é entender as
                    dinâmicas da polarização, identificar pontos de convergência
                    e unir as pessoas para enfrentar desafios compartilhados.
                    Por meio de pesquisas sobre polarização e do uso da ciência
                    comportamental, a organização mapeia identidades e valores
                    de diferentes grupos populacionais. Essas percepções são
                    aplicadas em colaboração com parceiros da sociedade civil,
                    filantropia, governo, mídia e empresas, promovendo
                    iniciativas que visam superar divisões.
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
                    Ao desenvolver narrativas eficazes e inclusivas,{" "}
                    <strong>
                      o programa auxilia lideranças brasileiras na superação da
                      polarização, criando espaços de convergência para
                      enfrentar desafios urgentes, como o fortalecimento da
                      democracia, a promoção da justiça social e o combate às
                      mudanças climáticas
                    </strong>
                    . Com uma abordagem baseada em compreensão profunda e
                    narrativas convincentes, a <strong>More in Common</strong>{" "}
                    busca mobilizar vontades políticas e sociais em torno de
                    questões-chaves.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Apoio plurianual"}
        mainImg={Images.Logos.CiraTHPLogo}
        cardsImg={[Images.Secoes.JusticaRacial, Images.Secoes.EquidadeGenero]}
        subtitle={"Vigência - 2022 a 2026"}
        partnerName={
          "CRIA - (Cultivate and Raise Infancy Awareness - Cultive e aumente a consciência da primeira infância, em tradução livre), desenvolvida pelo The Human Project (THP)."
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A proposta do <strong>CRIA</strong> é desenvolver uma
                    tecnologia social inovadora para a implantação de um
                    programa de desenvolvimento infantil. O objetivo é planejar,
                    gerir e oferecer apoio psicológico a jovens e adolescentes
                    do <strong>Espaço CRIA</strong>, criando condições para um
                    desenvolvimento pleno e saudável, especialmente no contexto
                    da maternidade e da primeira infância. O foco de atuação
                    está em pequenas e remotas comunidades, promovendo o
                    bem-estar integral e ampliando suas oportunidades de
                    crescimento e desenvolvimento.
                  </p>

                  <p>
                    As atividades são realizadas junto à comunidade, por meio de
                    rodas de conversa e dinâmicas interativas que abordam temas
                    essenciais, como pré-natal, parto, segurança alimentar,
                    marcos do desenvolvimento infantil, a importância do
                    brincar, amamentação, emoções, desafios nas relações
                    familiares e parentalidade.
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
                    O projeto teve início em 2023, com a proposta de desenvolver
                    uma experiência piloto e testar sua reaplicação ao longo de
                    um período de 5 anos. Um dos principais objetivos é
                    capacitar jovens e adolescentes para atuarem como apoio
                    comunitário, permitindo que repliquem a experiência como
                    Agentes de Saúde na Adolescência.
                  </p>

                  <p>
                    Até 2024, o <strong>CRIA</strong> concentrou suas atividades
                    em Pedra Furada, um povoado localizado no Município de Santa
                    Luzia do Itanhy, na região sul de Sergipe. Essa comunidade
                    apresenta desafios significativos, com raras manifestações
                    de afeto e alta incidência de casos de violência doméstica.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            "Mulheres estão sempre fazendo a diferença, mas a gente também precisa da participação dos homens.",
          ]}
          cite={"RAIANE RIBEIRO, Coordenadora"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>CRIA</strong> organizou, em Pedra Furada, um
                    encontro de casais como primeiro contato e para divulgação
                    de suas ações, com foco especial nos homens da comunidade. O
                    objetivo foi engajar membros que tradicionalmente não
                    participavam dos projetos do <strong>Espaço CRIA</strong>,
                    ainda em construção, ou de atividades coletivas e
                    comunitárias. A ação buscou fortalecer casais,
                    independentemente do tempo de relacionamento - 5 meses ou 35
                    anos -, reconhecendo que a maternidade tem início com a
                    relação entre o casal. O evento contou com a participação de
                    15 casais.
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
                    A partir de 2024, o <strong>CRIA</strong> entra em uma nova
                    fase de sistematização das ações implementadas, consolidando
                    aprendizados e promovendo um teste piloto para reaplicação
                    do conhecimento adquirido pelos jovens Agentes de Saúde na
                    Adolescência em outras comunidades vizinhas de Pedra Furada.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={[
            "Joice Kelly chegou ao CRIA e quase não falava nada, apenas chorava. Ela teve uma infância muito difícil, sem carinho e afeto, sem brincadeiras e, dentro do CRIA, ela conheceu a técnica de massagem de bebês Shantala. Ela se apropriou da técnica e vem atuando com muita confiança nessa área. Depois de aprender a Shantala, ela deu um abraço em seu pai pela primeira vez! Além da Shantala, ela também se interessa pelas plantas medicinais e por isso foi apelidada de a curandeira do CRIA",
          ]}
          cite={"RAIANE RIBEIRO, Coordenadora"}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.AppCivicoLogo}
        cardsImg={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2022 a 2026"}
        partnerName={"APP Cívico + Politize! - IAgora?"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>Politize!</strong> é uma organização da sociedade
                    civil dedicada a despertar o interesse pela política e
                    ampliar a participação cidadã nos espaços de tomada de
                    decisão que impactam a vida de todos os brasileiros. Sua
                    missão é formar uma geração de cidadãos conscientes e
                    comprometidos com a democracia, levando educação política a
                    qualquer pessoa, em qualquer lugar.
                  </p>

                  <p>
                    O jogo online <strong>IAgora?</strong> foi desenvolvido como
                    uma abordagem inovadora para combater a desinformação,
                    combinando a teoria da inoculação com ciências
                    comportamentais. A Teoria da Inoculação, proposta por
                    William J. McGuire, sugere que é possível fortalecer crenças
                    e atitudes ao expor as pessoas a argumentos contrários
                    fracos ou versões leves de contra-argumentos. Essa exposição
                    funciona como uma &quot;vacina&quot; cognitiva, ajudando a
                    desenvolver defesas intelectuais que tornam as pessoas mais
                    resistentes a influências ou persuasões futuras. Amplamente
                    aplicada em comunicação, publicidade e combate à
                    desinformação, a teoria é uma ferramenta eficaz para
                    promover pensamento crítico e proteção contra manipulação.
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
                    Desde seu lançamento, em 20 de agosto de 2024, o jogo
                    registrou cerca de 26 mil acessos, realizados por
                    aproximadamente 5 mil usuários. O pico de acessos ocorreu no
                    mês eleitoral (outubro), com um tempo médio de permanência
                    de 4 minutos por usuário. Em termos de alcance, o site
                    iagora.org contou com usuários em mais de 600 cidades
                    brasileiras.
                  </p>

                  <p>
                    Com o objetivo de fortalecer as defesas cognitivas dos
                    cidadãos, o IAgora? apoia o reconhecimento técnico de
                    manipulações e a criação de resistências psicológicas contra
                    tentativas de desinformação, especialmente durante períodos
                    eleitorais. Essa iniciativa busca desenvolver estratégias
                    inovadoras de proteger a integridade da informação e
                    promover uma cidadania mais crítica e engajada.
                  </p>

                  <ExternalLinkContainer
                    title={"Conheça o Site IAgora?"}
                    subtitle={"Acesse aqui o Site IAgora?"}
                    link={
                      "https://relatorio20212022.pactopelademocracia.org.br/"
                    }
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Pesquisa"}
        mainImg={Images.Logos.IDISLogo}
        cardsImg={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024"}
        partnerName={
          "Instituto para o Desenvolvimento do Investimento Social (IDIS)"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O{" "}
                    <strong>
                      Instituto para o Desenvolvimento do Investimento Social
                      (IDIS)
                    </strong>{" "}
                    promove workshops com filantropos atuantes para criar uma
                    Teoria de Mudança voltada ao engajamento de novas pessoas.
                    Esses encontros identificam motivações, condições
                    necessárias para a transformação e definem atividades e
                    intervenções para alcançar seus objetivos. Um exemplo é o
                    workshop{" "}
                    <strong>
                      Perspectivas para a Filantropia no Brasil 2024
                    </strong>
                    , que busca fomentar o diálogo e a colaboração no setor. Os
                    resultados dessas iniciativas serão sistematizados em uma
                    publicação com ampla divulgação.
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
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Pesquisa"}
        mainImg={Images.Logos.SITAWILogo}
        cardsImg={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024"}
        partnerName={
          "SITAWI - Famílias de Alto Patrimônio no Brasil - Investimento de Impacto e Filantropia"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A <strong></strong> é uma Organização Social de Interesse
                    Público (OSCIP) atuante no desenvolvimento de soluções
                    financeiras inovadoras para promover benefícios
                    socioambientais positivos, desenvolvendo infraestrutura
                    financeira para a Economia de Impacto desde 2008.
                  </p>
                  <p>
                    A pesquisa{" "}
                    <strong>
                      Famílias de Alto Patrimônio no Brasil - Investimento de
                      Impacto e Filantropia
                    </strong>
                    , promovida pela
                    <strong>SITAWI</strong>, apresenta um panorama das práticas
                    atuais dessas famílias na alocação de recursos voltados ao
                    benefício social. O estudo buscou{" "}
                    <strong>
                      entender como essas famílias direcionam seus investimentos
                      para gerar impacto
                    </strong>
                    , além de explorar as expectativas em relação a essas
                    iniciativas.
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
                    O levantamento contou com a participação de famílias e
                    Single Family Offices, Multi-Family Offices,
                    gestores/assessores de investimento, bem como conselheiros e
                    outros assessores não financeiros. Os respondentes foram
                    questionados sobre a alocação de seus recursos em
                    Investimentos de Impacto e Filantropia, além de suas visões
                    de longo prazo para essas temáticas. A pesquisa também visa
                    identificar estratégias para fortalecer o investimento
                    social privado no Brasil.
                  </p>

                  <ExternalLinkContainer
                    title={"Conheça a pesquisa"}
                    subtitle={"Acesse aqui a pesquisa"}
                    link={
                      "https://sitawi.net/familias-de-alto-patrimonio-no-brasil-investimento-de-impacto-e-filantropia/"
                    }
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.ATAHUALPALogo}
        cardsImg={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
        subtitle={"Vigência - 2022"}
        partnerName={"Praça Atahualpa"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Desde 2022, o <strong>Instituto Beja</strong> tem se
                    dedicado à revitalização e renovação da{" "}
                    <strong>Praça Atahualpa</strong>, no Leblon, como parte do
                    programa <strong>Adote.Rio</strong>, uma iniciativa da
                    Prefeitura do Rio de Janeiro voltada à recuperação de bens
                    públicos de uso comum. Esse espaço, agora revitalizado,
                    tornou-se um ponto de encontro intergeracional, democrático
                    e seguro, promovido pelos moradores e pelas comunidades ao
                    redor.
                  </p>

                  <p>
                    Com uma abordagem que valoriza a diversidade e integra temas
                    transversais, a praça tem se consolidado como um local de
                    convivência e bem-estar social. Por meio de um esforço
                    coletivo, são promovidos eventos em datas comemorativas,
                    atividades culturais semanais e intervenções artísticas aos
                    sábados, fortalecendo os laços comunitários.
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
                    <strong>
                      As relações estabelecidas com usuários de diversas faixas
                      etárias impulsionam um crescimento orgânico da convivência
                      intergeracional e racial. Além disso, o espaço contribui
                      para o desenvolvimento da educação infantil,
                      complementando o aprendizado por meio de iniciativas
                      educativas e culturais.
                    </strong>{" "}
                    Essas ações têm fortalecido a segurança local, em parceria
                    com órgãos públicos e a sociedade civil, transformando a
                    praça em um ambiente verdadeiramente inclusivo.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.MarAdentroLogo}
        cardsImg={[Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - 2023 a 2025"}
        partnerName={
          "“Pedro e Beja em uma Aventura Animada” - Instituto Mar Adentro"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>Pedro e Beja em uma Aventura Animada</strong> é uma
                    série audiovisual composta por 6 animações de 10 minutos
                    cada, e utiliza a Arte Educação como ferramenta para abordar
                    assuntos relevantes de maneira lúdica. Voltada para o
                    público infantojuvenil, a obra estimula a adoção de bons
                    hábitos e promove a formação de cidadãos participativos e
                    conscientes em suas comunidades.
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
                    Devido ao sucesso da 1ª temporada nas escolas - exibida em
                    44 escolas, alcançando 17.600 alunos - e à vasta diversidade
                    de temas relacionados à educação cidadã, o Instituto Mar
                    Adentro deu continuidade ao projeto com a produção da 2ª
                    temporada.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <TopicList
                    title={"1ª temporada → 6 episódios - 10 min/cada"}
                    list={KnowledgeData.lists.fourthList}
                  />
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <TopicList
                    title={"2ª temporada → 3 episódios - 5 min/cada"}
                    list={[
                      "Autoestima",
                      "Meio Ambiente",
                      "Respeito e tolerância",
                    ]}
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Projeto Apoiado"}
        mainImg={Images.Logos.CoalizacaoLogo}
        cardsImg={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
        subtitle={"Vigência - 2023 a 2026"}
        partnerName={
          "Instituto de Cidadania Empresarial (ICE) - Coalizão pelo Impacto"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Fundado em 1999, o{" "}
                    <strong>Instituto de Cidadania Empresarial (ICE)</strong>
                    tem como propósito reunir empresários e investidores em
                    torno de inovações sociais que ampliem seu engajamento
                    pessoal, filantrópico e corporativo. Seu objetivo central é
                    <strong>
                      promover a inclusão social e reduzir a pobreza no Brasil
                    </strong>
                    , por meio de iniciativas que gerem impacto social
                    significativo.
                  </p>

                  <p>
                    Desde 2022, o <strong>ICE</strong> lidera a{" "}
                    <strong>Coalizão pelo Impacto</strong>, uma iniciativa
                    apoiada pelo <strong>Instituto Beja</strong>, voltada ao
                    fortalecimento do ecossistema de apoio a empreendedores de
                    impacto em seis cidades estratégicas, representando as cinco
                    regiões do país: Porto Alegre, Paranaguá, Fortaleza, Belém e
                    Campinas. <strong>A Coalizão</strong> é estruturada por um
                    Conselho Nacional, composto por apoiadores, e Conselhos
                    Locais em cada cidade participante.
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
                    A iniciativa busca articular líderes transformadores e
                    implementar ações que potencializam benefícios sociais
                    positivos, especialmente em comunidades de baixa renda.
                    Colabora para o fortalecimento de ecossistemas locais por
                    meio de parcerias com organizações dinamizadoras que apoiam
                    empreendedores. A estratégia central da{" "}
                    <strong>Coalizão</strong> é mobilizar mais recursos,
                    conectando empresários e investidores a iniciativas que
                    combinem impacto social mensurável e sustentabilidade
                    financeira.
                  </p>

                  <p>
                    Em 2024, durante uma reunião em Belém, os Conselhos do{" "}
                    <strong>ICE</strong>, da <strong>Coalizão</strong> e da
                    região discutiram sinergias, avaliaram os avanços alcançados
                    desde o lançamento da iniciativa e planejaram os próximos
                    passos para 2025. Um dos principais destaques foi o
                    reconhecimento dos progressos locais impulsionados pela
                    Coalizão, reforçando a necessidade de um ator estratégico
                    para liderar a iniciativa e proporcionar acesso a
                    networking, conhecimento e financiamento, fortalecendo as
                    diferentes dimensões do programa.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Evento Apoiado"}
        mainImg={Images.Logos.DataPrivacyLogo}
        cardsImg={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2024"}
        partnerName={"Data Privacy Global Conference (DPGC)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Em 2024, a regulação de novas tecnologias atingiu um novo
                    patamar no Brasil, impulsionada por uma convergência de
                    fatores internos e externos que colocaram o país no centro
                    das discussões mundiais. Temas como as eleições municipais,
                    a presidência brasileira no G20, a transformação digital
                    inclusiva e o regulamento para Inteligência Artificial (IA)
                    se destacaram como pautas cruciais entre organizações do
                    terceiro setor, governo e empresas.
                  </p>

                  <p>
                    A <strong>Data Privacy Global Conference (DPGC)</strong>,
                    organizada pela
                    <strong>Data Privacy Brasil</strong>, consolidou-se como um
                    dos eventos mais relevantes do Sul Global sobre privacidade
                    e proteção de dados. Em sua 3ª edição, realizada nos dias 25
                    e 26 de novembro de 2024 na Faculdade Cásper Líbero em São
                    Paulo - SP, a conferência reuniu representantes da academia,
                    do mercado e do governo para debater os principais desafios
                    e avanços da área.
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
                    A <strong>DPGC</strong> é um evento destinado para
                    profissionais e interessados que desejam se engajar mais
                    ativamente nas discussões sobre dados no país. O público foi
                    constituído por advogados, especialistas em segurança da
                    informação e de desenvolvimento de software, tomadores de
                    decisão, ativistas digitais e outros profissionais que atuam
                    na área de privacidade e proteção de dados.
                  </p>

                  <strong>
                    O evento buscou estabelecer conexões significativas entre os
                    mercados digitais e as democracias orientadas para a justiça
                    social. Entre os temas discutidos, destacam-se:
                    infraestrutura pública digital, integridade informacional,
                    cibersegurança, regulação da inteligência artificial (IA) e
                    fortalecimento da proteção de dados pessoais.
                  </strong>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
      <PartnerSection
        section={"Conhecimento"}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 90 }}
        title={"Evento Apoiado"}
        mainImg={Images.Logos.YunusLogo}
        cardsImg={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - Agosto de 2024"}
        partnerName={
          "Fórum Brasileiro de Negócios Sociais para Empreendedorismo Jovem -Yunus Negócios Sociais Brasil"
        }
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Realizado em agosto de 2024, o{" "}
                    <strong>
                      Fórum Brasileiro de Negócios Sociais para Empreendedorismo
                      Jovem
                    </strong>{" "}
                    abordou dois dos maiores desafios do Brasil contemporâneo: o
                    desemprego entre os jovens e a mudança climática. Durante o
                    evento, <strong>Cristiane Sultani</strong> destacou o papel
                    crucial do capital filantrópico como uma forma de capital de
                    risco, capaz de impulsionar a inovação e promover a
                    colaboração. Esses elementos são pilares essenciais para uma
                    <strong>filantropia estratégica e transformadora. </strong>
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
                    O fórum aconteceu no icônico{" "}
                    <strong>Museu do Amanhã</strong> e foi organizado pelo{" "}
                    <strong>Yunus Negócios Sociais</strong>, com o apoio do
                    Somos Um e do SEBRAE, além do patrocínio do{" "}
                    <strong>Instituto Beja</strong>. O encontro consolidou o{" "}
                    <strong>#FórumdeNegóciosSociais</strong> como uma plataforma
                    de referência, promovendo debates sobre como os princípios
                    dos negócios de impacto podem oferecer{" "}
                    <strong>soluções sustentáveis e eficazes.</strong>
                  </p>

                  <p>
                    Além de estimular discussões estratégicas, o evento
                    capacitou jovens empreendedores a liderarem transformações
                    positivas e enfrentarem desafios sociais urgentes. Foi mais
                    um espaço de inovação e troca, onde seguimos oxigenando o
                    futuro da filantropia e da sociedade.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
    </div>
  );
};

export default KnowledgeSection;
