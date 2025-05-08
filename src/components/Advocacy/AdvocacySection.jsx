import PinkBox from "../ui/PinkBox";
import TextBlock from "../ui/TextBlock";
import GoldenQuote from "../ui/GoldenQuote";
import TopicList from "../ui/TopicList";
import { Images } from "../../assets/Index";
import AnimatedLine from "../ui/AnimatedLine";
import FastTravelCard from "./FastTravelCard";
import PartnerSection from "../ui/PartnerSection";
import { advocacyActions, serenasList } from "../../data/AdvocacyData";
import { AdvocacySectionVentTransition } from "./AdvocacySectionVentTransition";
import ExternalLinkContainer from "../ui/ExternalLinkContainer";

const AdvocacySection = () => {
  return (
    <div className='flex flex-col items-end w-full overflow-hidden pb-90'>
      <div
        style={{ backgroundImage: "url('/assets/AdvocacyFSBG.png')" }}
        className='flex-center flex-col w-full min-h-screen gap-25 bg-no-repeat bg-cover bg-center
        max-1024:px-8
        max-768:px-6 max-768:gap-14'
      >
        <img
          alt='Beja Logo'
          src={Images.Logos.BejaLogo}
          className='max-1366:size-[12rem] max-640:size-[6rem]'
        />

        <h1 className='editorial text-5xl max-w-225 leading-15 text-center text-porcelain max-1025:w-full max-768:text-4xl max-768:leading-12 max-640:text-lg max-640:leading-normal'>
          O Portfólio Beja foi organizado conforme os pilares estratégicos
          apresentados:{" "}
        </h1>
      </div>

      <div
        className='flex gap w-full max-h-screen h-full items-center justify-center bg-retro-ochre gap-10 py-40
                    max-1280:px-10
                    max-1160:px-8
                    max-1024:flex-col max-1024:py-10
                    max-640:px-5 max-420:px-2 max-640:gap-4 max-640:justify-start max-640:'
      >
        <FastTravelCard
          title={"Advocacy"}
          img={Images.Ilustracoes.ProudHand}
          className={"bg-bourdeaux text-porcelain"}
          imgConfig={
            "w-40 h-75 absolute bottom-0 right-10 max-1080:h-60 max-1080:right-0 max-1024:right-20 max-768:w-35 max-768:h-55 max-640:w-20 max-640:h-25 max-500:right-10"
          }
        />

        <FastTravelCard
          title={"Conhecimento"}
          img={Images.Ilustracoes.Clouds}
          className={"bg-rose text-bourdeaux"}
          imgConfig={
            "max-w-none h-50 absolute bottom-0 max-1080:h-60 max-1080:right-0 max-950:h-50 max-844:h-40 max-640:h-20 max-460:h-15 max-460:w-50"
          }
        />

        <FastTravelCard
          title={"Beja Labs / Laboratórios"}
          img={Images.Ilustracoes.Bush}
          className={"bg-porcelain text-bourdeaux"}
          imgConfig={
            "max-w-none h-60 absolute bottom-0 max-1080:right-20 max-950:h-50 max-844:h-40 max-768:right-10 max-640:h-30 max-460:right-5 max-380:h-25"
          }
        />
      </div>

      <AdvocacySectionVentTransition />

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Associação"}
        partnerImg={[Images.Secoes.AliancaAdvocacy]}
        subCards={[
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
        ]}
        subtitle={"Vigência - 2024"}
        partnerName={"Aliança pelo fortalecimento da sociedade civil"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>
                      A Aliança para o Fortalecimento da Sociedade Civil
                    </strong>{" "}
                    é uma coalizão de organizações do terceiro setor, em suas
                    múltiplas formas de atuação. Seu objetivo é promover a
                    construção e consolidação de um ambiente jurídico,
                    legislativo e institucional promissor, aliado aos recursos
                    necessários para potencializar a excelência no desempenho de
                    suas atividades.
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
                    A <strong>Aliança</strong> articula e mobiliza atores
                    públicos e privados para a construção de um ambiente
                    tributário e regulatório favorável ao fortalecimento das
                    organizações da sociedade civil. Além disso, atua na
                    produção e disseminação de dados e informações de interesse
                    público relacionados ao tema.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={
            " O Instituto Beja, enquanto Secretaria Executiva, é responsável por toda a gestão da Aliança, incluindo:"
          }
          list={advocacyActions}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Logos.UspLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - 2023"}
        partnerName={"Endowment: Fundo USP Diversa"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O Fundo USP Diversa é um fundo de propósito específico cuja
                    missão é garantir a sustentabilidade financeira necessária
                    para oferecer bolsas de permanência que possibilitem aos
                    estudantes em situação de vulnerabilidade socioeconômica
                    concluir sua formação com excelência.
                  </p>

                  <p>
                    <strong>
                      A estruturação do Fundo teve início em meados de 2023
                    </strong>
                    , com um intenso trabalho de articulação que contou com
                    consultorias especializadas financiadas pelo Instituto Beja,
                    além da dedicação de uma equipe comprometida, das
                    pró-reitorias e de programas da Universidade. O processo
                    culminou no lançamento oficial em março de 2024, tornando-se
                    o primeiro fundo de propósito específico em operação no{" "}
                    <strong>Fundo Patrimonial da USP.</strong>
                  </p>
                  <strong>
                    Atualmente, é o maior fundo exclusivamente dedicado a bolsas
                    de permanência, e está sendo preparado como um modelo para
                    ser replicado em outras universidades públicas que enfrentam
                    desafios semelhantes.
                  </strong>
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
                    Em 2024, o <strong>Fundo USP Diversa</strong> avançou em sua
                    estruturação e captação de recursos. Para intensificar a
                    arrecadação, foi criada uma gerência exclusiva voltada à
                    captação e articulação com o Fundo Patrimonial irrestrito e
                    a Universidade. Esse esforço esteve concentrado na
                    mobilização de grandes filantropos e empresas, o que
                    resultou na realização de dois eventos institucionais e na
                    criação do Comitê de Apoiadores, composto por Paula
                    Miraglia, Neca Setubal, Cristiane Sultani, Ludhmila Hajjar,
                    Marisa Monte e Stelio Marras. Esse comitê desempenha um
                    papel essencial ao conectar potenciais doadores e garantir a
                    adesão aos princípios do <strong>Fundo</strong>. Como fruto
                    dessas ações, foram conquistados patronos - grandes doadores
                    que fazem contribuições expressivas -, além da expansão na
                    base de doadores recorrentes e dos legados por testamento.
                  </p>
                </>
              ),
            },
          ]}
        />

        <AnimatedLine />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Para 2025 e os próximos anos, o{" "}
                    <strong>Fundo USP Diversa</strong> pretende continuar
                    ampliando sua visibilidade, fortalecendo sua marca e
                    expandindo sua base de apoiadores, por meio de estratégias
                    voltadas à fidelização de doadores em diferentes níveis de
                    contribuição. Esse crescimento será viabilizado com o apoio
                    de startups especializadas na captação de doações
                    recorrentes, utilizando tecnologia e inovação para aumentar
                    o engajamento e facilitar contribuições de menor porte.
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
                    Além disso, a ampliação de parcerias estratégicas com a
                    Universidade e outras organizações será fundamental para
                    identificar e engajar ex-alunos que se conectam com a causa.
                    A promoção de eventos e iniciativas de engajamento também
                    seguirá sendo um pilar estratégico, consolidando a
                    visibilidade do <strong>Fundo</strong> e potencializando
                    futuras arrecadações.
                  </p>

                  <p>
                    A longo prazo, o objetivo é intensificar a articulação com a
                    Universidade para mensurar o impacto das bolsas na
                    trajetória acadêmica dos beneficiários e em seu
                    desenvolvimento profissional e social, dessa forma
                    assegurando a continuidade e o crescimento do{" "}
                    <strong>Fundo</strong>.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Logos.SerenasLogo]}
        subCards={[Images.Secoes.JusticaRacial, Images.Secoes.EquidadeGenero]}
        subtitle={"Vigência - 2023 - 2027"}
        partnerName={"Serenas"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A prevenção da violência contra meninas e mulheres ainda não
                    é percebida como algo essencial para o ecossistema de
                    Educação, mesmo com uma parte significativa dos recursos da
                    filantropia destinada a esse setor. A{" "}
                    <strong>Serenas</strong> busca evidenciar o impacto da
                    violência de gênero no desenvolvimento geral de meninas e
                    meninos, no aproveitamento escolar e, consequentemente, no
                    avanço do país como um todo.
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
                    A organização foi criada para entender por que, apesar de
                    leis robustas como a Lei Maria da Penha, o Brasil ainda
                    apresenta números alarmantes de violência contra meninas e
                    mulheres. O objetivo da <strong>Serenas</strong> é garantir
                    que meninas e mulheres sejam livres para escolher e sonhar
                    sem limites, exercendo seus direitos à dignidade, respeito e
                    igualdade, em um mundo sem discriminação e violência.
                  </p>
                  <p>
                    A organização trabalha na capacitação de sistemas de
                    educação e segurança pública nas esferas municipais,
                    estaduais e federais. A incorporação de tecnologias
                    permitirá a expansão de treinamentos, formações e a
                    disseminação do conhecimento gerado em diferentes regiões do
                    Brasil.
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={"A Serenas trabalha em duas frentes principais:"}
          list={serenasList}
        />

        <GoldenQuote
          text={
            "A parceria com o Beja é revolucionária para a Serenas, pois o apoio institucional é um recurso que nos permite desenvolver a nossa capacidade de fazer. Um recurso que se multiplica, pois a partir dele nós temos a capacidade de captar mais. Com estes cinco anos de apoio, podemos contratar pessoas com mais visibilidade, saindo de contratações com prazos curtos, apenas. Isso nos permite oferecer formação e suporte à saúde mental da equipe."
          }
          autor={"— AMANDA SADALLA, Cofundadora e Diretora Executiva"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A partir da parceria com o <strong>Instituto Beja</strong>,
                    a <strong>Serenas</strong> foi convidada a participar - e, a
                    seu modo, revolucionar - o processo de Evolução da Teoria da
                    Mudança. Em 2025, elas assumirão conosco a{" "}
                    <strong>Orquestração de Sistemas</strong> do{" "}
                    <strong>CMe</strong>.
                  </p>

                  <strong>
                    Em 2024, a Serenas alcançou marcos significativos, incluindo
                    a formação de 100 lideranças e técnicos na Secretaria de
                    Educação de Alagoas, em parceria com a Secretaria da Mulher.
                    Também está produzindo um guia de prevenção de violências de
                    gênero, em colaboração com a Embaixada do Canadá, que será
                    distribuído em mais de 300 escolas do estado.
                  </strong>

                  <p>
                    No município de São Paulo, realizou a formação de 30
                    assistentes sociais da prefeitura, impactando mais de 7 mil
                    famílias que utilizam diversos equipamentos públicos. Em
                    âmbito nacional, formaram 70 agentes que atendem mais de 500
                    mil ligações por ano no programa Ligue 180 – linha de
                    atendimento a mulheres vítimas de violência –, em parceria
                    com o Ministério das Mulheres e com o financiamento da
                    Embaixada do Reino Unido.
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
                    Outro avanço significativo foi a{" "}
                    <strong>
                      formação de 20 professores da Academia de Polícia Civil de
                      São Paulo sob uma metodologia focada no acolhimento,
                      reconhecimento e prevenção de violências de gênero.
                    </strong>{" "}
                    Esses professores aplicarão a metodologia para formar 3 mil
                    novos policiais contratados pelo estado.
                  </p>

                  <p>
                    Adicionalmente, o <strong>Instituto Beja</strong> e o{" "}
                    <strong>Instituto Machado Meyer</strong> financiaram a
                    pesquisa <strong>Bullying e Violência Escolar</strong>. O
                    estudo busca compreender as percepções de professores,
                    estudantes, lideranças e secretarias de educação sobre
                    violências de gênero, machismo e LGBTfobia, que será lançado
                    em 2025.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Em 2025, na atuação como Orquestradores de Sistema junto ao CMe, poderemos reavaliar as formas como fazemos, pensar em melhores e novas formas de fazer para, a partir daí, tentar elaborar estratégias de escala do trabalho da Serenas. No desafio de pensar uma nova narrativa de advocacy, desejamos levar a temática da violência contra meninas e mulheres para o centro das políticas educacionais."
          }
          autor={"— AMANDA SADALLA, Cofundadora e Diretora Executiva"}
        />

        <PinkBox>
          <p>
            <strong>
              Em 2024, a Serenas recebeu o Selo de Igualdade Racial, uma
              honraria que reconhece a composição de sua equipe, formada por
              mais de 60% de mulheres negras, das quais metade ocupa cargos de
              liderança.
            </strong>{" "}
            Esse destaque reafirma o compromisso da organização com a promoção
            da equidade racial e de gênero. Além disso, pelo terceiro ano
            consecutivo, a Serenas foi reconhecida com o{" "}
            <strong>Selo Municipal de Direitos Humanos e Diversidades</strong>,
            um tributo à consistência de suas iniciativas em defesa da
            diversidade e dos direitos humanos.
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Logos.PonteLogo]}
        subCards={[Images.Secoes.PelaDemocracia2, Images.Secoes.EquidadeGenero]}
        subtitle={"Vigência - 2023 - 2027"}
        partnerName={"A Ponte"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>
                      O Brasil figura entre os países com os piores índices de
                      paridade de gênero na política da América Latina. Na
                      Câmara dos Deputados, as mulheres representam apenas 18%
                      dos parlamentares eleitos, enquanto no Senado esse número
                      é ainda menor, com apenas 7%.
                    </strong>{" "}
                    A situação nos municípios é ainda mais alarmante: 955
                    câmaras municipais não possuem sequer uma mulher eleita, de
                    acordo com dados do Tribunal Superior Eleitoral{" "}
                    <strong>levantados pela A Ponte</strong>. Vale destacar que
                    a vereança é a principal porta de entrada para a política,
                    sendo responsável por iniciar a trajetória de 90% das
                    mulheres que atuam nesse campo.
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
                    A rede <strong>A Ponte</strong> é composta por mais de 60
                    mulheres especialistas em 14 áreas de políticas públicas
                    como saúde, educação, orçamento público, segurança pública e
                    meio ambiente. Criada em 2020, a rede tem como propósito
                    fortalecer a carreira de mulheres vereadoras e deputadas,
                    ampliando a representatividade na democracia brasileira. Seu
                    objetivo é apoiar mulheres eleitas e promover políticas
                    públicas universais, elaboradas com base em dados e
                    evidências, implementadas com rigor técnico e voltadas para
                    atender os grupos mais vulneráveis.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Ninguém está olhando para o começo das carreiras políticas, toda a atenção vai para o congresso, deputadas e senadoras. Mas e as vereadoras? Sem essa atenção para o começo de carreira, não é possível formar um congresso com equidade de gênero num futuro próximo."
          }
          autor={"— AMANDA SADALLA, Cofundadora e Diretora Executiva"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>A Ponte</strong> atua oferecendo suporte técnico e
                    político a mandatos e cargos estratégicos, tanto no
                    legislativo quanto no executivo, assegurando que mulheres em
                    posições de liderança possam tomar importantes decisões e
                    influenciar políticas públicas com foco na equidade de
                    gênero e na defesa da democracia. Até o momento,{" "}
                    <strong>
                      {" "}
                      a organização já apoiou 32 vereadoras e deputadas de 10
                      partidos diferentes, sendo 93% delas eleitas em seu
                      primeiro mandato, abrangendo 13 estados de todas as
                      regiões do Brasil.
                    </strong>
                  </p>

                  <p>
                    <strong>A Ponte</strong> se posiciona como suprapartidária,
                    e esclarece que não apoia candidaturas que possam
                    comprometer os direitos das mulheres, conforme sua detalhada{" "}
                    <strong>Carta de Princípios.</strong> A organização também
                    se declara mista, com 60% de sua equipe composta por
                    mulheres negras, e aplica a paridade racial em todos os
                    níveis de sua estrutura.
                  </p>

                  <p>
                    <strong>A Ponte</strong> já impactou diretamente 193
                    mandatos parlamentares, oferecendo assessoria técnica para a
                    elaboração e submissão de 99 Projetos de Lei, dos quais 37
                    já foram aprovados. Ademais, realizou 71 assessorias
                    técnicas individuais e organizou 10 cursos e workshops,
                    contribuindo para o fortalecimento das capacidades de
                    mulheres em posições de liderança política no Brasil.
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
                    Entre suas iniciativas, destaca-se o projeto{" "}
                    <strong>Maré de PLs</strong>, que já está em sua 11ª edição,
                    que tem como objetivo a proposição e aprovação de Projetos
                    de Lei qualificados, capazes de transformar realidades
                    locais. Uma vez aprovados, esses projetos seguem válidos
                    independentemente das mudanças de gestão, promovendo
                    políticas públicas bem fundamentadas e duradouras.{" "}
                    <strong>
                      Em 2024, 115 mandatos foram afetados pelo apoio das
                      especialistas em rede, 104 mandatos foram apoiados pela
                      Maré de PLs, resultando na aprovação de 7 Projetos de
                      Leis.
                    </strong>
                  </p>

                  <p>
                    <strong>
                      Outro marco foi o curso Escola de Reeleição , criado após
                      a identificação da baixa taxa de reeleição de mulheres na
                      política. Das 30 vereadoras acompanhadas, apenas 13 foram
                      reeleitas.
                    </strong>{" "}
                    O curso, composto por 18 aulas, contou com a participação de
                    28 mandatos, totalizando 85 participantes, com uma
                    diversidade regional significativa, incluindo mais de um
                    terço de representantes do Norte e Nordeste.
                  </p>

                  <p>
                    <strong>A Ponte</strong> também realizou assistências
                    técnicas individuais bilaterais e encontros personalizados
                    com 15 mandatos, forneceu assessoria de imprensa para todos
                    os mandatos acompanhados e organizou workshops
                    individualizados de comunicação para 9 mandatos.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Conseguimos, através da criação do canal de denúncias ‘Alô Jurídico’, um contato direto com as denunciantes para que A Ponte possa agir rapidamente e auxiliá-las de forma eficiente. Pudemos articular um mandado de prisão por violência política esse ano."
          }
          autor={"— AMANDA SADALLA, Cofundadora e Diretora Executiva"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>A Ponte</strong> destaca a necessidade de maior
                    coordenação entre os doadores, especialmente diante do
                    desaparecimento de muitas organizações voltadas ao
                    fortalecimento da democracia com as quais colaboraram.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "O desafio da Ponte é ainda maior por se tratar de uma organização que atua pelo fortalecimento da democracia, que é feminista, antirracista e progressista."
          }
          autor={"— AMANDA SADALLA, Cofundadora e Diretora Executiva"}
        />

        <PinkBox>
          <p>
            Para 2025, <strong>A Ponte</strong> planeja implementar sistemas
            para mensurar os resultados de gestão de projetos, utilizando a
            aplicação de aleatorização, estratégia desenhada na reestruturação
            de sua Teoria de Mudança, e expandirá sua atuação no legislativo com
            ao incorporar um terceiro eixo de trabalho, direcionado
            especificamente aos impactos climáticos.
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Logos.PactoContraFomeLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - 2024"}
        partnerName={"Pacto contra a Fome"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>O Pacto</strong> Contra a Fome atua como um
                    catalisador no ecossistema de combate à fome, unindo
                    esforços e somando forças com entidades do terceiro setor,
                    governos, parlamentares, academias e empresas. O objetivo é
                    erradicar a fome e a insegurança alimentar, realidade que
                    ainda afeta mais de 64 milhões de brasileiros, segundo o
                    Instituto Brasileiro Geografia e Estatística (IBGE) . A
                    iniciativa também busca reduzir o desperdício de alimentos.
                  </p>

                  <p>
                    <strong>O Pacto</strong> baseia sua atuação na articulação,
                    na colaboração e no uso inteligente de dados, que orientam
                    as suas decisões e ações. A organização reconhece as
                    políticas públicas como ferramentas poderosas de mudança
                    social e acredita no papel da sociedade civil como parceira
                    dos governos e impulsionadora de transformações relevantes.
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
                    No caminho para alcançar seus objetivos, o{" "}
                    <strong>
                      Pacto investiu em parcerias nos estados do Pará e do
                      Maranhão, voltadas ao fortalecimento do Sistema de
                      Segurança Alimentar e Nutricional (SISAN), em colaboração
                      com os governos estaduais. No Ceará, em parceria com o
                      Governo do Estado, a iniciativa Ceará sem Fome se destaca
                      como um projeto piloto que integra ações ligadas ao
                      desperdício de alimentos e à inclusão produtiva,
                      complementando outros programas do Pacto Contra a Fome.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Fundamental, neste contexto, é também destacar o Projeto Ceasas, realizado em parceria com o Ministério do Desenvolvimento Agrário e Agricultura Familiar, que busca, por meio de um complexo estudo de casos e iniciativas bem-sucedidas, criar modelos de atuação para os bancos de alimentos de todos o país, de forma que eles possam contribuir com efetividade e escala no suporte às famílias em situação de fome e insegurança alimentar. A implementação desse modelo neste ano aconteceu nas duas maiores centrais de abastecimento do Brasil: São Paulo e Minas Gerais."
          }
          autor={
            "— MARIA SIQUEIRA, Diretora do Instituto e JULIANA MALHEIRO PLASTER, Diretora de Captação"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A atuação em advocacy tem se concentrado em pautas de
                    políticas públicas que acreditam serem consideradas
                    essenciais para a promoção de uma alimentação saudável e
                    adequada, além do combate ao desperdício de alimentos. Entre
                    os avanços, destaca-se a construção de uma nova proposta de
                    cesta básica de alimentos, desenvolvida no contexto da
                    Proposta de Emenda à Constituição da Reforma Tributária no
                    Congresso Nacional. Essa iniciativa incluiu a definição de
                    cesta básica saudável e regional. Mais recentemente, com a
                    regulamentação da Reforma Tributária, foi conquistada uma
                    importante vitória: a isenção de impostos para produtos
                    alimentícios, em sua maioria saudáveis e minimamente
                    processados.
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
                    Durante a{" "}
                    <strong>
                      Campanha Nacional de Combate ao Desperdício de Alimentos
                    </strong>{" "}
                    realizada no segundo semestre de 2024, o{" "}
                    <strong>Pacto Contra a Fome</strong> atuou como força
                    mobilizadora, reunindo empresas e governos para
                    conscientizar a sociedade sobre a importância de diminuir as
                    perdas alimentares. E, sem dúvida alguma, a segunda edição
                    do Prêmio Pacto Contra a Fome amplifica a ação.
                    <strong>
                      Neste ano, o evento cresceu 63% e alcançou mais de 500
                      inscritos, premiando 6 instituições de vários estados do
                      Brasil.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Atuar no combate à fome e ao desperdício de alimentos é, por si só, um grande desafio, dada a complexidade dessas problemáticas. Elas demandam ações multissetoriais e multidisciplinares, que vão desde temas diretamente relacionados, como alimentação escolar e políticas de distribuição de renda, até outros mais transversais, como melhoria da educação e políticas de saúde pública. Além disso, envolvem atores diversos, do setor público e também do privado, grupos de interesse significativos."
          }
          autor={
            "— MARIA SIQUEIRA, Diretora do Instituto e JULIANA MALHEIRO PLASTER, Diretora de Captação"
          }
        />

        <div className='flex w-full gap-5 max-[880px]:gap-2 max-md:flex-col max-md:items-end'>
          <img
            src={Images.Secoes.FomeZeroAdvocacy}
            className='shrink-0 size-25 max-[880px]:size-20'
          />

          <PinkBox>
            <p>
              Toda essa teia de ações e relações repercute diretamente na
              capacidade de o Brasil chegar a <strong>2030</strong> cumprindo o{" "}
              <strong>
                Objetivo de Desenvolvimento Sustentável (ODS 2 – Fome Zero e
                Agricultura Sustentável)
              </strong>{" "}
              relativo à erradicação da fome.
            </p>

            <p>
              Em <strong>2025</strong>, o objetivo do{" "}
              <strong>Pacto Contra a Fome</strong> é crescer de maneira{" "}
              <strong>estruturada</strong> e <strong>sustentável</strong>,
              seguindo um cuidadoso planejamento que apoiará o foco e a
              amplitude de seus projetos e ações.
            </p>
          </PinkBox>
        </div>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Apoio Plurianual"}
        partnerImg={[Images.Secoes.PelaDemocracia]}
        subCards={[Images.Secoes.PelaDemocracia2]}
        subtitle={"Vigência - 2024 A 2027"}
        partnerName={"Pacto pela Democracia"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    O <strong>Pacto pela Democracia</strong> é uma coalizão da
                    sociedade civil que, desde 2018, coordena esforços entre
                    atores sociais em todo o espectro ideológico. Sua meta é
                    ampliar a capacidade da sociedade civil de defender e
                    revigorar a democracia no Brasil, promovendo um espaço
                    apartidário que reúne mais de 200 organizações.
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
                      Esse ambiente diverso possibilita a colaboração de atores
                      com diferentes agendas, visões e identidades políticas, de
                      maneira a unirem forças para o fortalecimento de processos
                      e instituições democráticas.
                    </strong>{" "}
                    Isso significa a garantia de direitos e liberdades
                    constitucionais , o aprofundamento de valores democráticos
                    na sociedade brasileira, que se vê diante da atual crise
                    global das democracias.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "A defesa da democracia é uma pauta que precisa ser continuamente trabalhada, não é possível relaxar. Ela é uma base que precisa estar estável para que todas as outras pautas avancem."
          }
          autor={
            "— MARGARIDA GORECKI, Coordenação de Desenvolvimento Institucional e Operações"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Por meio do monitoramento contínuo de ameaças ao sistema
                    legislativo , o <strong>Pacto pela Democracia</strong>{" "}
                    organiza grupos de trabalho dedicados a tratar temas
                    prioritários identificados. Esses grupos colaboram na
                    formulação de estratégias conjuntas para enfrentar as
                    questões emergentes. A rede desenvolve uma ampla gama de
                    iniciativas, incluindo ações de advocacy no legislativo,{" "}
                    campanhas de comunicação (presenciais e online), além da
                    produção de conhecimento por meio de estudos e eventos.
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
                    O <strong>Pacto pela Democracia</strong> também desempenha
                    um papel crucial durante os processos eleitorais, atuando de
                    forma incisiva para garantir que as eleições ocorram de
                    maneira segura e que os resultados sejam respeitados.
                  </p>
                </>
              ),
            },
          ]}
        />

        <ExternalLinkContainer
          title={
            "Conheça o Relatório sobre a atuação do Pacto na eleição de 2022."
          }
          subtitle={"Acessar Relatório do Pacto na eleição de 2022"}
          link={"https://relatorio20212022.pactopelademocracia.org.br/"}
        />

        <GoldenQuote
          text={
            "O apoio do Beja foi muito importante para que o Pacto pudesse sistematizar as suas ações. Muitas vezes as organizações produzem uma série de inovações, mas não conseguem sistematizá-las para que possam ser vistas e pensadas por outras pessoas. A sistematização de estratégias e formas de trabalho é importante para ampliar o debate e impactar cada vez mais."
          }
          autor={
            "— MARGARIDA GORECKI, Coordenação de Desenvolvimento Institucional e Operações"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Em 2024, o <strong>Pacto pela Democracia</strong> lançou a{" "}
                    <strong className='underline'>
                      Agenda Democracia Forte
                    </strong>
                    , uma iniciativa estruturada em oito pilares fundamentais:
                    Forças de Segurança; Equilíbrio dos Poderes; Sistema
                    Eleitoral; Responsabilização; Participação Social; Educação
                    Cidadã; Debate Público; e Monitor Internacional. Essa agenda
                    tem como objetivo promover reflexões e sugerir diretrizes
                    para proteger a democracia brasileira, tornando-a menos
                    vulnerável às investidas autoritárias.
                  </p>

                  <p>
                    Como parte dessa iniciativa, foram realizadas aulas magnas
                    conduzidas por especialistas renomados, abordando cada um
                    dos temas em profundidade. Além disso, o Pacto trabalhou na
                    elaboração conjunta de propostas de ação para responder aos
                    desafios identificados em cada eixo. Para ampliar o alcance
                    da <strong>Agenda</strong>, foi desenvolvida uma campanha de
                    divulgação do conteúdo.
                  </p>

                  <p>
                    Em 2022, o <strong>Pacto pela Democracia</strong> recebeu o
                    prêmio da{" "}
                    <strong className='underline'>World Justice Project</strong>{" "}
                    em reconhecimento à sua atuação na defesa do processo
                    eleitoral. Em 2024, realizou a campanha de conscientização e
                    informação intitulada{" "}
                    <strong className='underline'>
                      &quot;Sem memória não há futuro&quot;
                    </strong>
                    , marcando os 60 anos do Golpe Militar, e lançou o{" "}
                    <strong className='underline'>
                      Guia para a democracia: defesa do processo eleitoral
                    </strong>{" "}
                    , para fortalecer a confiança no sistema eleitoral
                    brasileiro .
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
                    Outro destaque foi o lançamento do <strong>Confia</strong> ,
                    um serviço via WhatsApp que mapeia a desinformação sobre o
                    processo eleitoral . Por meio de mensagens de texto, vídeos,
                    links ou fotos enviadas a um chatbot, o serviço identifica
                    notícias falsas e discursos de ódio relacionados às eleições
                    de 2024. Essas informações são armazenadas para análise,
                    permitindo a identificação das narrativas e dos grupos que
                    buscam desestabilizar a democracia . A partir desses dados,
                    o <strong>Pacto</strong> desenvolve ações e estratégias para
                    proteger a democracia , tendo em vista principalmente as
                    eleições presidenciais de 2026.
                  </p>

                  <p>
                    O <strong>Pacto</strong> também atuou como co-líder do
                    <strong>
                      Grupo de Trabalho sobre Governança Democrática, Espaço
                      Cívico, Anticorrupção
                    </strong>{" "}
                    e <strong> Acesso à Justiça</strong>, o fórum de engajamento
                    da sociedade civil para a reunião do G20 no Brasil, em
                    novembro de 2024. Em colaboração com outras organizações,
                    coordenou atividades relacionadas ao{" "}
                    <strong>
                      Objetivo de Desenvolvimento Sustentável (ODS 16 – Paz,
                      Justiça e Instituições Eficazes) .
                    </strong>
                  </p>

                  <img
                    src={Images.Secoes.PazJusticaImage}
                    alt='Paz e Justiça'
                    className='size-40 max-lg:size-32 max-sm:size-20'
                  />
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "O grande desafio da rede é a própria causa. As pessoas tendem a não olhar para democracia como algo que precisa ser levado a sério, que precisa de investimento e recursos, até ela estar à beira do colapso. É uma causa urgente, mas também é preciso mobilizar a rede em relação a projetos que talvez não pareçam 'urgentes'. Trabalhar de forma mais propositiva e menos defensiva e reativa."
          }
          autor={
            "— MARGARIDA GORECKI, Coordenação de Desenvolvimento Institucional e Operações"
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>O Pacto pela Democracia</strong> implementou uma
                    nova governança, expandiu a equipe, e aprovou um novo
                    estatuto, consolidando estratégias voltadas para o aumento
                    do investimento na produção de conhecimento. Ademais, criou
                    uma rede de organizações pró-democracia pelo mundo e
                    fortaleceu a rede já existente, com o objetivo de ampliar
                    continuamente a diversidade racial, regional e ideológica.
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
                    O foco é chegar a 2026 com uma estrutura mais sólida para
                    enfrentar as próximas eleições presidenciais e legislativas.
                    Isso inclui atuar com segurança, liberdade e confiança, além
                    de investir no treinamento da equipe para a gestão da rede.
                    A iniciativa reflete a convicção de que o desenvolvimento
                    institucional das organizações do terceiro setor no Brasil
                    depende fortemente de um apoio institucional robusto, que
                    permita a edificação e formação das equipes.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Projeto Apoiado"}
        partnerImg={[Images.Logos.IcciLogo]}
        subCards={[Images.Secoes.PelaDemocracia2, Images.Secoes.JusticaRacial]}
        subtitle={"Vigência - 2024 A 2025"}
        partnerName={"Instituto Cultura, Comunicação e Incidência (ICCI)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>
                      O Instituto Cultura, Comunicação e Incidência (ICCI)
                    </strong>{" "}
                    apoia iniciativas de comunicação estratégica focadas em
                    impulsionar as agendas de clima, democracia e justiça,
                    criando demanda por políticas públicas e ações privadas que
                    se traduzam em mudanças concretas e positivas nessas áreas.
                    O Instituto entende que a comunicação estratégica é um
                    recurso central no avanço dessas agendas e trabalha para
                    ajudar a construir um ecossistema de iniciativas robustas,
                    com alto potencial de produzir mudanças em escala.
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
                      O ICCI oferece apoio financeiro, facilita a colaboração
                      entre iniciativas, conduz pesquisas e promove o debate
                      sobre a importância da comunicação no campo da filantro
                      pia.
                    </strong>{" "}
                    Busca criar um cenário no qual a sociedade civil,
                    empresários e atores políticos, dos mais diversos espectros
                    políticos e ideológicos, reconheçam que ações em prol do
                    clima, da democracia e da justiça são fundamentais para
                    impulsionar o desenvolvimento sustentável e inclusivo do
                    Brasil.
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Associação e Apoio Plurianual"}
        partnerImg={[Images.Logos.GifeLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024 A 2028"}
        partnerName={"Grupo de Institutos Fundações e Empresas (GIFE)"}
      >
        <GoldenQuote
          text={
            "Em 2024, trabalhamos dados e informações a partir de pesquisas consolidadas, como o Censo GIFE, lançado no final de 2023. Usar dados e informações é uma forma de ir além do convencimento normativo, do dever ser. Com bons dados, podemos dizer como as coisas são e por que devemos mudar, evidenciando as conquistas mas sobretudo os limites da filantropia."
          }
          autor={"— CÁSSIO FRANÇA, Secretário Geral"}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>
                      O Grupo de Institutos Fundações e Empresas (GIFE)
                    </strong>{" "}
                    é uma associação que reúne investidores sociais privados do
                    Brasil, incluindo empresas, institutos e fundações de
                    diferentes naturezas - seja familiar, independente ou
                    empresarial. Fundado como grupo informal em 1989, foi
                    formalizado como organização sem fins lucrativos em 1995 e é
                    uma referência nacional no campo do investimento social
                    privado.
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
                    A associação desempenha um papel estratégico ao promover
                    espaços de articulação e reflexão, produzir conteúdos e
                    conhecimentos sobre o setor, incentivar o engajamento de
                    novos atores e liderar esforços de advocacy. Um exemplo
                    disso foi sua atuação na preparação de recomendações para o
                    G20. Por meio de sua presença em grupos de trabalho, e da
                    construção de agendas, o GIFE tem contribuído para
                    fortalecer a atuação do setor filantrópico no Brasil.
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={
            "Acredito que compreender o alcance policapital seja um passo essencial para maior impacto social; a filantropia deve assumir o papel político institucional frente ao setor público e privado. Sua participação no Conselho de Desenvolvimento Econômico Social Sustentável do Governo Federal e no Fundo USP Diversa, são demonstrações grandiosas da necessidade de corresponsabilidade no desenvolvimento do país como um todo."
          }
          autor={"— CÁSSIO FRANÇA, Secretário Geral"}
        />

        <PinkBox>
          <p>
            Nosso compromisso é assegurar que o <strong>GIFE</strong> continue
            cumprindo sua missão de estimular o diálogo entre seus membros,
            apoiar o desenvolvimento de novos atores no campo do investimento
            social privado e impulsionar a geração de conteúdos e conhecimentos
            relevantes que colaborem para o avanço do setor.
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Associação"}
        partnerImg={[Images.Logos.LatimImpactoLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024"}
        partnerName={"Latimpacto"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    A <strong>Latimpacto</strong> é uma rede que conecta
                    provedores de capital em toda a América Latina e o Caribe,
                    com a missão de impulsionar o fluxo de capital humano,
                    intelectual e financeiro. Seu principal objetivo é
                    fortalecer o ecossistema de investimento de impacto na
                    região, potencializando a alocação de recursos para
                    iniciativas socioambientais e de justiça social.
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
                    Com aproximadamente 220 membros, a rede reúne uma
                    diversidade de atores, incluindo famílias, family offices,
                    corporações, fundações doadoras, organizações multilaterais,
                    instituições acadêmicas e aceleradoras.{" "}
                    <strong>
                      Presente em mais de 16 países, a Latimpacto desempenha um
                      papel fundamental ao conectar investidores, gestores e
                      organizações comprometidas com a filantropia e o impacto
                      socioambiental, ampliando a força desse ecossistema na
                      região.
                    </strong>
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={"Associação"}
        partnerImg={[Images.Secoes.MovimentoDoacao]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={"Vigência - 2024"}
        partnerName={"Movimento por uma Cultura de Doação (MCD)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <strong>
                      O Movimento por uma Cultura de Doação (MCD) é uma rede
                      aberta e democrática, composta por pessoas e organizações
                      que, desde 2012, se mobilizam voluntariamente com o
                      propósito de enraizar a prática da doação como um valor
                      essencial à cultura brasileira.
                    </strong>{" "}
                    Dessa maneira, promove o altruísmo e a solidariedade. Por
                    meio de campanhas colaborativas, produção de conhecimento e
                    monitoramento do cenário de doação no Brasil, o{" "}
                    <strong>MCD</strong> se engaja na construção de agendas
                    estratégicas, fortalecendo a atuação do setor filantrópico.
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
                    Por meio de iniciativas como o{" "}
                    <strong>Monitor de Doação</strong> e a produção de
                    diretrizes e conhecimento especializado, o{" "}
                    <strong>MCD</strong> busca ampliar a conscientização
                    pública. Assim, fomenta uma sociedade mais generosa,
                    solidária e participativa no apoio a causas sociais.
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

export default AdvocacySection;
