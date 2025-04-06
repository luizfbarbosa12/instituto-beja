import * as Icon from "@phosphor-icons/react";
import AdvocacyCard from "./AdvocacyCard";
import UspLogo from "/public/assets/UspLogo.png";
import IcciLogo from "/public/assets/IcciLogo.png";
import GifeLogo from "/public/assets/GifeLogo.png";
import PonteLogo from "/public/assets/PonteLogo.png";
import ProudHand from "/public/assets/Ilustracao-4.png";
import LineCME from "./../../../public/assets/LineCME";
import { advocacyActions } from "../../data/AdvocacyData";
import SerenasLogo from "/public/assets/Serenas_logo.svg";
import JusticaRacial from "/public/assets/JusticaRacial.png";
import LogoFirstSection from "/public/assets/LogoFirstSection";
import PelaDemocracia from "/public/assets/PelaDemocracia.png";
import EquidadeGenero from "/public/assets/EquidadeGenero.png";
import PelaDemocracia2 from "/public/assets/PelaDemocracia2.png";
import AliancaAdvocacy from "/public/assets/AliancaAdvocacy.png";
import PazJusticaImage from "/public/assets/PazJusticaImage.png";
import MovimentoDoacao from "/public/assets/MovimentoDoacao.png";
import LatimImpactoLogo from "/public/assets/LatimImpactoLogo.png";
import FilantropiaSubCard from "/public/assets/FilantropiaSubCard.png";
import PactoContraFomeLogo from "/public/assets/PactoContraFomeLogo.png";

const AdvocacySection = () => {
  const advocacyActionsMap = advocacyActions.map((item, index) => (
    <div key={index} className='flex items-center gap-5'>
      <div className='size-5 bg-retro-ochre rounded-full shrink-0' />
      <p className='text-2xl editorial'>{item}</p>
    </div>
  ));

  return (
    <div className='flex flex-col items-end w-full overflow-hidden'>
      <div className='flex justify-end relative w-full items- bg-bourdeaux text-porcelain pb-45 pl-32'>
        <LogoFirstSection
          style={"fill-porcelain w-65 h-21 relative top-20 left-0"}
        />

        <h1 className='flex items-center text-9xl editorial h-screen'>
          Advocacy
        </h1>

        <img
          src={ProudHand}
          alt=''
          className='relative w-170 h-270 -bottom-46'
        />
      </div>

      <AdvocacyCard
        title='Associação'
        mainImg={AliancaAdvocacy}
        img={[PelaDemocracia2, FilantropiaSubCard]}
        subtitle='Vigência - 2024 - 2025'
      />

      <div className='flex flex-col w-full items-end pl-32 pb-25'>
        <div className='flex flex-col gap-18 w-[71rem] pr-32'>
          <h1 className='editorial text-6xl flex-wrap w-[70%] leading-20'>
            Aliança pelo fortalecimento da sociedade civil
          </h1>

          <div className='flex gap-16 text-base'>
            <div className='flex flex-col w-full gap-8'>
              <p>
                <strong>
                  A Aliança para o Fortalecimento da Sociedade Civil
                </strong>{" "}
                é uma coalizão de organizações do terceiro setor, em suas
                múltiplas formas de atuação. Seu objetivo é promover a
                construção e consolidação de um ambiente jurídico, legislativo e
                institucional promissor, aliado aos recursos necessários para
                potencializar a excelência no desempenho de suas atividades.
              </p>
            </div>

            <div className='flex flex-col w-full gap-8'>
              <p>
                A <strong>Aliança</strong> articula e mobiliza atores públicos e
                privados para a construção de um ambiente tributário e
                regulatório favorável ao fortalecimento das organizações da
                sociedade civil. Além disso, atua na produção e disseminação de
                dados e informações de interesse público relacionados ao tema.
              </p>
            </div>
          </div>

          <div className='flex flex-col gap-10 pt-5'>
            <div className='flex flex-col gap-4'>
              <div className='h-1 w-2/3 bg-retro-ochre' />
              <h1 className='text-[2rem] font-bold w-[80%] editorial'>
                O Instituto Beja, enquanto Secretaria Executiva, é responsável
                por toda a gestão da Aliança, incluindo:
              </h1>
            </div>

            <ul className='flex flex-col gap-11 w-[75%]'>
              {advocacyActionsMap}
            </ul>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Apoio Plurianual'
        mainImg={UspLogo}
        img={[JusticaRacial]}
        subtitle='Vigência - 2024 - 2025'
      />

      <div className='flex flex-col items-end w-[78rem] px-32'>
        <h1 className='editorial text-6xl w-full pb-16'>
          Endowment: Fundo USP Diversa
        </h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              O Fundo USP Diversa é um fundo de propósito específico cuja missão
              é garantir a sustentabilidade financeira necessária para oferecer
              bolsas de permanência que possibilitem aos estudantes em situação
              de vulnerabilidade socioeconômica concluir sua formação com
              excelência.
            </p>

            <p>
              <strong>
                A estruturação do Fundo teve início em meados de 2023
              </strong>
              , com um intenso trabalho de articulação que contou com
              consultorias especializadas financiadas pelo Instituto Beja, além
              da dedicação de uma equipe comprometida, das pró-reitorias e de
              programas da Universidade. O processo culminou no lançamento
              oficial em março de 2024, tornando-se o primeiro fundo de
              propósito específico em operação no{" "}
              <strong>Fundo Patrimonial da USP.</strong>
            </p>
            <strong>
              Atualmente, é o maior fundo exclusivamente dedicado a bolsas de
              permanência, e está sendo preparado como um modelo para ser
              replicado em outras universidades públicas que enfrentam desafios
              semelhantes.
            </strong>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Em 2024, o <strong>Fundo USP Diversa</strong> avançou em sua
              estruturação e captação de recursos. Para intensificar a
              arrecadação, foi criada uma gerência exclusiva voltada à captação
              e articulação com o Fundo Patrimonial irrestrito e a Universidade.
              Esse esforço esteve concentrado na mobilização de grandes
              filantropos e empresas, o que resultou na realização de dois
              eventos institucionais e na criação do Comitê de Apoiadores,
              composto por Paula Miraglia, Neca Setubal, Cristiane Sultani,
              Ludhmila Hajjar, Marisa Monte e Stelio Marras. Esse comitê
              desempenha um papel essencial ao conectar potenciais doadores e
              garantir a adesão aos princípios do <strong>Fundo</strong>. Como
              fruto dessas ações, foram conquistados patronos - grandes doadores
              que fazem contribuições expressivas -, além da expansão na base de
              doadores recorrentes e dos legados por testamento.
            </p>
          </div>
        </div>

        <div className='flex h-54 w-full relative'>
          <LineCME style='absolute -left-40 -top-5' />
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              Para 2025 e os próximos anos, o <strong>Fundo USP Diversa</strong>{" "}
              pretende continuar ampliando sua visibilidade, fortalecendo sua
              marca e expandindo sua base de apoiadores, por meio de estratégias
              voltadas à fidelização de doadores em diferentes níveis de
              contribuição. Esse crescimento será viabilizado com o apoio de
              startups especializadas na captação de doações recorrentes,
              utilizando tecnologia e inovação para aumentar o engajamento e
              facilitar contribuições de menor porte.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Além disso, a ampliação de parcerias estratégicas com a
              Universidade e outras organizações será fundamental para
              identificar e engajar ex-alunos que se conectam com a causa. A
              promoção de eventos e iniciativas de engajamento também seguirá
              sendo um pilar estratégico, consolidando a visibilidade do{" "}
              <strong>Fundo</strong> e potencializando futuras arrecadações.
            </p>

            <p>
              A longo prazo, o objetivo é intensificar a articulação com a
              Universidade para mensurar o impacto das bolsas na trajetória
              acadêmica dos beneficiários e em seu desenvolvimento profissional
              e social, dessa forma assegurando a continuidade e o crescimento
              do <strong>Fundo</strong>.
            </p>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Apoio Plurianual'
        mainImg={SerenasLogo}
        img={[JusticaRacial, EquidadeGenero]}
        subtitle='Vigência - 2023 - 2027'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>Serenas</h1>

        <div className='flex gap-16 text-base pb-64'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              A prevenção da violência contra meninas e mulheres ainda não é
              percebida como algo essencial para o ecossistema de Educação,
              mesmo com uma parte significativa dos recursos da filantropia
              destinada a esse setor. A <strong>Serenas</strong> busca
              evidenciar o impacto da violência de gênero no desenvolvimento
              geral de meninas e meninos, no aproveitamento escolar e,
              consequentemente, no avanço do país como um todo.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              A organização foi criada para entender por que, apesar de leis
              robustas como a Lei Maria da Penha, o Brasil ainda apresenta
              números alarmantes de violência contra meninas e mulheres. O
              objetivo da <strong>Serenas</strong> é garantir que meninas e
              mulheres sejam livres para escolher e sonhar sem limites,
              exercendo seus direitos à dignidade, respeito e igualdade, em um
              mundo sem discriminação e violência.
            </p>
            <p>
              A organização trabalha na capacitação de sistemas de educação e
              segurança pública nas esferas municipais, estaduais e federais. A
              incorporação de tecnologias permitirá a expansão de treinamentos,
              formações e a disseminação do conhecimento gerado em diferentes
              regiões do Brasil.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8'>
          <div className='h-0.5 w-2/3 bg-retro-ochre' />
          <h1 className='text-[2rem] w-full editorial'>
            A Serenas trabalha em duas frentes principais:
          </h1>

          <ul className='flex flex-col gap-11 '>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-retro-ochre rounded-full shrink-0' />
              <p className='text-2xl editorial leading-10'>
                <span className='text-retro-ochre uppercase'>
                  Educar para prevenir
                </span>{" "}
                apoia políticas educacionais para implementação da perspectiva
                de prevenção de violência de gênero e a promoção de relações
                saudáveis, articulando parcerias com as secretarias de educação
                e saúde para interromper ciclos intergeracionais de violência.
              </p>
            </div>
            <div className='flex items-center gap-5'>
              <div className='size-5 bg-retro-ochre rounded-full shrink-0' />
              <p className='text-2xl editorial leading-10'>
                <span className='text-retro-ochre uppercase'>
                  Qualificar para acolher
                </span>{" "}
                habilita os atores que atendem sobreviventes de violência, como
                lideranças locais, assistentes sociais e, em 2024, integrantes
                da polícia civil, ampliando a prevenção da violência
                institucional.
              </p>
            </div>
          </ul>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “A parceria com o Beja é revolucionária para a Serenas, pois o apoio
            institucional é um recurso que nos permite desenvolver a nossa
            capacidade de fazer. Um recurso que se multiplica, pois a partir
            dele nós temos a capacidade de captar mais. Com estes cinco anos de
            apoio, podemos contratar pessoas com mais visibilidade, saindo de
            contratações com prazos curtos, apenas. Isso nos permite oferecer
            formação e suporte à saúde mental da equipe.”
          </p>

          <p className='w-[55%] text-end'>
            — AMANDA SADALLA, Cofundadora e Diretora Executiva
          </p>
        </div>

        <div className='flex gap-16 text-base pb-11 pt-9'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              A partir da parceria com o <strong>Instituto Beja</strong>, a
              <strong>Serenas</strong> foi convidada a participar – e, a seu
              modo, revolucionar – o processo de Evolução da Teoria da Mudança.
              Em 2025, elas assumirão conosco a{" "}
              <strong>Orquestração de Sistemas</strong> do <strong>CMe</strong>.
            </p>

            <strong>
              Em 2024, a Serenas alcançou marcos significativos, incluindo a
              formação de 100 lideranças e técnicos na Secretaria de Educação de
              Alagoas, em parceria com a Secretaria da Mulher. Também está
              produzindo um guia de prevenção de violências de gênero, em
              colaboração com a Embaixada do Canadá, que será distribuído em
              mais de 300 escolas do estado. 
            </strong>

            <p>
              No município de São Paulo, realizou a formação de 30 assistentes
              sociais da prefeitura, impactando mais de 7 mil famílias que
              utilizam diversos equipamentos públicos. Em âmbito nacional,
              formaram 70 agentes que atendem mais de 500 mil ligações por ano
              no programa Ligue 180 – linha de atendimento a mulheres vítimas de
              violência –, em parceria com o Ministério das Mulheres e com o
              financiamento da Embaixada do Reino Unido.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Outro avanço significativo foi a{" "}
              <strong>
                formação de 20 professores da Academia de Polícia Civil de São
                Paulo sob uma metodologia focada no acolhimento, reconhecimento
                e prevenção de violências de gênero.
              </strong>{" "}
              Esses professores aplicarão a metodologia para formar 3 mil novos
              policiais contratados pelo estado.
            </p>

            <p>
              Adicionalmente, o <strong>Instituto Beja</strong> e o{" "}
              <strong>Instituto Machado Meyer</strong> financiaram a pesquisa{" "}
              <strong>Bullying e Violência Escolar</strong>. O estudo busca
              compreender as percepções de professores, estudantes, lideranças e
              secretarias de educação sobre violências de gênero, machismo e
              LGBTfobia, que será lançado em 2025.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12'>
          <p>
            “Em 2025, na atuação como Orquestradores de Sistema junto ao CMe,
            poderemos reavaliar as formas como fazemos, pensar em melhores e
            novas formas de fazer para, a partir daí, tentar elaborar
            estratégias de escala do trabalho da Serenas. No desafio de pensar
            uma nova narrativa de advocacy, desejamos levar a temática da
            violência contra meninas e mulheres para o centro das políticas
            educacionais.”
          </p>

          <p className='w-[55%] text-end'>
            — AMANDA SADALLA, Cofundadora e Diretora Executiva
          </p>
        </div>

        <div className='bg-rose p-15 w-180'>
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
            um tributo.
          </p>
        </div>
      </div>

      <AdvocacyCard
        title='Apoio Plurianual'
        mainImg={PonteLogo}
        img={[PelaDemocracia2, EquidadeGenero]}
        subtitle='Vigência - 2023 - 2027'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>A Ponte</h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              O <strong>Brasil</strong> figura entre os países com os{" "}
              <strong>
                piores índices de paridade de gênero na política da América
                Latina
              </strong>
              . Na <strong>Câmara dos Deputados</strong>, as mulheres
              representam apenas <strong>18%</strong> dos parlamentares eleitos,
              enquanto no <strong>Senado</strong> esse número é ainda menor, com
              apenas <strong>7%</strong>. A situação nos municípios é ainda mais
              alarmante: <strong>955 câmaras municipais</strong> não possuem
              sequer uma mulher eleita, de acordo com dados do{" "}
              <strong>Tribunal Superior Eleitoral</strong> levantados pela{" "}
              <strong>A Ponte</strong>. Vale destacar que a{" "}
              <strong>verança</strong> é a principal porta de entrada para a
              política, sendo responsável por iniciar a trajetória de{" "}
              <strong>90% das mulheres</strong> que atuam nesse campo.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              A <strong>rede A Ponte</strong> é composta por mais de{" "}
              <strong>60 mulheres especialistas</strong> em{" "}
              <strong>14 áreas de políticas públicas</strong> como{" "}
              <strong>
                saúde, educação, orçamento público, segurança pública
              </strong>{" "}
              e <strong>meio ambiente</strong>. Criada em <strong>2020</strong>,
              a rede tem como propósito{" "}
              <strong>
                fortalecer a carreira de mulheres vereadoras e deputadas
              </strong>
              , ampliando a representatividade na democracia brasileira. Seu
              objetivo é <strong>apoiar mulheres eleitas</strong> e promover{" "}
              <strong>políticas públicas universais</strong>, elaboradas com
              base em <strong>dados e evidências</strong>, implementadas com{" "}
              <strong>rigor técnico</strong> e voltadas para atender os{" "}
              <strong>grupos mais vulneráveis</strong>.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Ninguém está olhando para o começo das carreiras políticas, toda a
            atenção vai para o congresso, deputadas e senadoras. Mas e as
            vereadoras? Sem essa atenção para o começo de carreira, não é
            possível formar um congresso com equidade de gênero num futuro
            próximo.”
          </p>

          <p className='w-[55%] text-end'>
            — AMANDA SADALLA, Cofundadora e Diretora Executiva
          </p>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>A Ponte</strong> atua oferecendo suporte técnico e
              político a mandatos e cargos estratégicos, tanto no legislativo
              quanto no executivo, assegurando que mulheres em posições de
              liderança possam tomar importantes decisões e influenciar
              políticas públicas com foco na equidade de gênero e na defesa da
              democracia. Até o momento,{" "}
              <strong>
                {" "}
                a organização já apoiou 32 vereadoras e deputadas de 10 partidos
                diferentes, sendo 93% delas eleitas em seu primeiro mandato,
                abrangendo 13 estados de todas as regiões do Brasil.
              </strong>
            </p>

            <p>
              <strong>A Ponte</strong> se posiciona como suprapartidária, e
              esclarece que não apoia candidaturas que possam comprometer os
              direitos das mulheres, conforme sua detalhada{" "}
              <strong>Carta de Princípios.</strong> A organização também se
              declara mista, com 60% de sua equipe composta por mulheres negras,
              e aplica a paridade racial em todos os níveis de sua estrutura.
            </p>

            <p>
              <strong>A Ponte</strong> já impactou diretamente 193 mandatos
              parlamentares, oferecendo assessoria técnica para a elaboração e
              submissão de 99 Projetos de Lei, dos quais 37 já foram aprovados.
              Ademais, realizou 71 assessorias técnicas individuais e organizou
              10 cursos e workshops, contribuindo para o fortalecimento das
              capacidades de mulheres em posições de liderança política no
              Brasil.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Entre suas iniciativas, destaca-se o projeto{" "}
              <strong>Maré de PLs</strong>, que já está em sua 11ª edição, que
              tem como objetivo a proposição e aprovação de Projetos de Lei
              qualificados, capazes de transformar realidades locais. Uma vez
              aprovados, esses projetos seguem válidos independentemente das
              mudanças de gestão, promovendo políticas públicas bem
              fundamentadas e duradouras. Em <strong>2024</strong>,{" "}
              <strong>115 mandatos</strong> foram afetados pelo apoio das
              especialistas em rede, <strong>104 mandatos</strong> foram
              apoiados pela Maré de PLs, resultando na aprovação de{" "}
              <strong>7 Projetos de Leis</strong>.
            </p>

            <p>
              Outro marco foi o curso <strong>Escola de Reeleição</strong>,
              criado após a identificação da baixa taxa de reeleição de mulheres
              na política. Das <strong>30 vereadoras</strong> acompanhadas,
              apenas <strong>13</strong> foram reeleitas. O curso, composto por{" "}
              <strong>18 aulas</strong>, contou com a participação de{" "}
              <strong>28 mandatos</strong>, totalizando{" "}
              <strong>85 participantes</strong>, com uma diversidade regional
              significativa, incluindo mais de um terço de representantes do{" "}
              <strong>Norte e Nordeste</strong>.
            </p>

            <p>
              A Ponte também realizou assistências técnicas individuais
              bilaterais e encontros personalizados com{" "}
              <strong>15 mandatos</strong>, forneceu assessoria de imprensa para
              todos os mandatos acompanhados e organizou{" "}
              <strong>workshops individualizados de comunicação</strong> para{" "}
              <strong>9 mandatos</strong>.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Conseguimos, através da criação do canal de denúncias ‘Alô
            Jurídico’, um contato direto com as denunciantes para que A Ponte
            possa agir rapidamente e auxiliá-las de forma eficiente. Pudemos
            articular um mandado de prisão por violência política esse ano.
          </p>

          <p className='w-[55%] text-end'>
            — AMANDA SADALLA, Cofundadora e Diretora Executiva
          </p>
        </div>

        <div className='flex justify-end gap-16 text-base'>
          <div className='flex flex-col w-1/2 gap-8'>
            <p>
              <strong>A Ponte</strong> destaca a necessidade de maior
              coordenação entre os doadores, especialmente diante do
              desaparecimento de muitas organizações voltadas ao fortalecimento
              da democracia com as quais colaboraram.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “O desafio da Ponte é ainda maior por se tratar de uma organização
            que atua pelo fortalecimento da democracia, que é feminista,
            antirracista e progressista”.
          </p>

          <p className='w-[55%] text-end'>
            — AMANDA SADALLA, Cofundadora e Diretora Executiva
          </p>
        </div>

        <div className='flex justify-end gap-16 text-base'>
          <div className='flex flex-col w-1/2 gap-8'>
            <p>
              Para 2025, <strong>A Ponte</strong> planeja implementar sistemas
              para mensurar os resultados de gestão de projetos, utilizando a
              aplicação de aleatorização, estratégia desenhada na reestruturação
              de sua Teoria de Mudança, e expandirá sua atuação no legislativo
              com ao incorporar  um terceiro eixo de trabalho, direcionado
              especificamente aos impactos climáticos. 
            </p>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Apoio Plurianual'
        mainImg={PactoContraFomeLogo}
        img={[JusticaRacial]}
        subtitle='Vigência - 2024'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>Pacto contra a Fome</h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              O <strong>Pacto Contra a Fome</strong> atua como um catalisador no
              ecossistema de combate à fome, unindo esforços e somando forças
              com entidades do terceiro setor, governos, parlamentares,
              academias e empresas. O objetivo é erradicar a fome e a
              insegurança alimentar, realidade que ainda afeta mais de{" "}
              <strong>64 milhões de brasileiros</strong>, segundo o{" "}
              <strong>
                Instituto Brasileiro Geografia e Estatística (IBGE)
              </strong>
              . A iniciativa também busca reduzir o desperdício de alimentos.
            </p>

            <p>
              O <strong>Pacto</strong> baseia sua atuação na{" "}
              <strong>articulação</strong>, na <strong>colaboração</strong> e no{" "}
              <strong>uso inteligente de dados</strong>, que orientam as suas
              decisões e ações. A organização reconhece as{" "}
              <strong>políticas públicas</strong> como ferramentas poderosas de
              mudança social e acredita no papel da{" "}
              <strong>sociedade civil</strong> como parceira dos governos e
              impulsionadora de transformações relevantes.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              No caminho para alcançar seus objetivos, o{" "}
              <strong>
                Pacto investiu em parcerias nos estados do Pará e do Maranhão,
                voltadas ao fortalecimento do Sistema de Segurança Alimentar e
                Nutricional (SISAN), em colaboração com os governos estaduais.
                No Ceará, em parceria com o Governo do Estado, a iniciativa
                Ceará sem Fome se destaca como um projeto piloto que integra
                ações ligadas ao desperdício de alimentos e à inclusão
                produtiva, complementando outros programas do Pacto Contra a
                Fome.
              </strong>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Fundamental, neste contexto, é também destacar o Projeto Ceasas,
            realizado em parceria com o Ministério do Desenvolvimento Agrário e
            Agricultura Familiar, que busca, por meio de um complexo estudo de
            casos e iniciativas bem-sucedidas, criar modelos de atuação para os
            bancos de alimentos de todos o país, de forma que eles possam
            contribuir com efetividade e escala no suporte às famílias em
            situação de fome e insegurança alimentar. A implementação desse
            modelo neste ano aconteceu nas duas maiores centrais de
            abastecimento do Brasil: São Paulo e Minas Gerais.”
          </p>

          <p className='w-[70%] text-end'>
            — MARIA SIQUEIRA, Diretora do Instituto e JULIANA MALHEIRO PLASTER,
            Diretora de Captação do Instituto Pacto Contra a Fome
          </p>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              A atuação em advocacy tem se concentrado em pautas de políticas
              públicas que acreditam serem consideradas essenciais para a
              promoção de uma alimentação saudável e adequada, além do combate
              ao desperdício de alimentos. Entre os avanços, destaca-se a
              construção de uma nova proposta de cesta básica de alimentos,
              desenvolvida no contexto da Proposta de Emenda à Constituição da
              Reforma Tributária no Congresso Nacional. Essa iniciativa incluiu
              a definição de cesta básica saudável e regional. Mais
              recentemente, com a regulamentação da Reforma Tributária, foi
              conquistada uma importante vitória: a isenção de impostos para
              produtos alimentícios, em sua maioria saudáveis e minimamente
              processados.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Durante a{" "}
              <strong>
                Campanha Nacional de Combate ao Desperdício de Alimentos
              </strong>{" "}
              realizada no segundo semestre de <strong>2024</strong>, o{" "}
              <strong>Pacto Contra a Fome</strong> atuou como força
              mobilizadora, reunindo empresas e governos para conscientizar a
              sociedade sobre a importância de diminuir as perdas alimentares.
              E, sem dúvida alguma, a{" "}
              <strong>segunda edição do Prêmio Pacto Contra a Fome</strong>{" "}
              amplifica a ação.
            </p>

            <p>
              Neste ano, o evento <strong>cresceu 63%</strong> e alcançou mais
              de <strong>500 inscritos</strong>, premiando{" "}
              <strong>6 instituições</strong> de vários estados do Brasil.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Atuar no combate à fome e ao desperdício de alimentos é, por si só,
            um grande desafio, dada a complexidade dessas problemáticas. Elas
            demandam ações multissetoriais e multidisciplinares, que vão desde
            temas diretamente relacionados, como alimentação escolar e políticas
            de distribuição de renda, até outros mais transversais, como
            melhoria da educação e políticas de saúde pública. Além disso,
            envolvem atores diversos, do setor público e também do privado,
            grupos de interesse significativos.”
          </p>

          <p className='w-[70%] text-end'>
            — MARIA SIQUEIRA, Diretora do Instituto e JULIANA MALHEIRO PLASTER,
            Diretora de Captação do Instituto Pacto Contra a Fome
          </p>
        </div>

        <div className='flex justify-end gap-16 text-base'>
          <div className='flex flex-col w-1/2 gap-8'>
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
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Apoio Plurianual'
        mainImg={PelaDemocracia}
        img={[PelaDemocracia2]}
        subtitle='Vigência - 2024 A 2026'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>Pacto pela Democracia</h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              O <strong>Pacto pela Democracia</strong> é uma coalizão da
              sociedade civil que, desde <strong>2018</strong>, coordena
              esforços entre atores sociais em todo o espectro ideológico. Sua
              meta é ampliar a capacidade da sociedade civil de defender e
              revigorar a <strong>democracia no Brasil</strong>, promovendo um
              espaço <strong>apartidário</strong> que reúne mais de{" "}
              <strong>200 organizações</strong>.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              <p>
                Esse <strong>ambiente diverso</strong> possibilita a colaboração
                de atores com diferentes agendas, visões e identidades
                políticas, de maneira a unirem forças para o{" "}
                <strong>
                  fortalecimento de processos e instituições democráticas
                </strong>
                . Isso significa a{" "}
                <strong>
                  garantia de direitos e liberdades constitucionais
                </strong>
                , o <strong>aprofundamento de valores democráticos</strong> na
                sociedade brasileira, que se vê diante da{" "}
                <strong>atual crise global das democracias</strong>.
              </p>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “A defesa da democracia é uma pauta que precisa ser continuamente
            trabalhada, não é possível relaxar. Ela é uma base que precisa estar
            estável para que todas as outras pautas avancem.”
          </p>

          <p className='w-[70%] text-end'>
            — MARGARIDA GORECKI, Coordenação de Desenvolvimento Institucional e
            Operações
          </p>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              Por meio do{" "}
              <strong>
                monitoramento contínuo de ameaças ao sistema legislativo
              </strong>
              , o <strong>Pacto pela Democracia</strong> organiza{" "}
              <strong>grupos de trabalho</strong> dedicados a tratar temas
              prioritários identificados. Esses grupos colaboram na formulação
              de <strong>estratégias conjuntas</strong> para enfrentar as
              questões emergentes. A rede desenvolve uma ampla gama de
              iniciativas, incluindo{" "}
              <strong>ações de advocacy no legislativo</strong>,{" "}
              <strong>campanhas de comunicação</strong> (presenciais e online),
              além da <strong>produção de conhecimento</strong> por meio de
              estudos e eventos.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              <p>
                O <strong>Pacto pela Democracia</strong> também desempenha um
                papel crucial durante os <strong>processos eleitorais</strong>,
                atuando de forma incisiva para garantir que as{" "}
                <strong>eleições ocorram de maneira segura</strong> e que os{" "}
                <strong>resultados sejam respeitados</strong>.
              </p>
            </p>
          </div>
        </div>

        <div className='w-full'>
          <h1 className='editorial text-2xl text-retro-ochre'>
            Conheça o Relatório sobre a atuação do Pacto na eleição de 2022.
          </h1>
          <div className='flex gap-1 items-center'>
            <h1>Saber Mais Sobre o Centro de Mudanças Exponenciais</h1>
            <div className='flex-center size-4 bg-bourdeaux text-porcelain rounded-full p-0.5 text-[14px]'>
              <Icon.ArrowRight className='-rotate-15' />
            </div>
          </div>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              Em <strong>2024</strong>, o <strong>Pacto pela Democracia</strong>{" "}
              lançou a <strong>Agenda Democracia Forte</strong>, uma iniciativa
              estruturada em <strong>oito pilares fundamentais</strong>: Forças
              de Segurança; Equilíbrio dos Poderes; Sistema Eleitoral;
              Responsabilização; Participação Social; Educação Cidadã; Debate
              Público; e Monitor Internacional. Essa agenda tem como objetivo{" "}
              <strong>promover reflexões</strong> e{" "}
              <strong>sugerir diretrizes</strong> para proteger a{" "}
              <strong>democracia brasileira</strong>, tornando-a menos
              vulnerável às <strong>investidas autoritárias</strong>.
            </p>

            <p>
              Como parte dessa iniciativa, foram realizadas{" "}
              <strong>aulas magnas</strong> conduzidas por{" "}
              <strong>especialistas renomados</strong>, abordando cada um dos
              temas em profundidade. Além disso, o Pacto trabalhou na{" "}
              <strong>elaboração conjunta de propostas de ação</strong> para
              responder aos desafios identificados em cada eixo. Para ampliar o
              alcance da Agenda, foi desenvolvida uma{" "}
              <strong>campanha de divulgação do conteúdo</strong>.
            </p>

            <p>
              Em <strong>2022</strong>, o <strong>Pacto pela Democracia</strong>{" "}
              recebeu o <strong>prêmio da World Justice Project</strong> em
              reconhecimento à sua atuação na defesa do{" "}
              <strong>processo eleitoral</strong>. Em <strong>2024</strong>,
              realizou a{" "}
              <strong>campanha de conscientização e informação</strong>{" "}
              intitulada <strong>"Sem memória não há futuro"</strong>, marcando
              os <strong>60 anos do Golpe Militar</strong>, e lançou o{" "}
              <strong>
                Guia para a democracia: defesa do processo eleitoral
              </strong>
              , para{" "}
              <strong>
                fortalecer a confiança no sistema eleitoral brasileiro
              </strong>
              .
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Outro destaque foi o lançamento do <strong>Confia</strong>, um{" "}
              <strong>serviço via WhatsApp</strong> que{" "}
              <strong>mapeia a desinformação sobre o processo eleitoral</strong>
              . Por meio de mensagens de texto, vídeos, links ou fotos enviadas
              a um chatbot, o serviço identifica{" "}
              <strong>notícias falsas</strong> e{" "}
              <strong>discursos de ódio</strong> relacionados às{" "}
              <strong>eleições de 2024</strong>. Essas informações são
              armazenadas para análise, permitindo a identificação das{" "}
              <strong>narrativas</strong> e dos{" "}
              <strong>grupos que buscam desestabilizar a democracia</strong>. A
              partir desses dados, o Pacto desenvolve{" "}
              <strong>ações e estratégias para proteger a democracia</strong>,
              tendo em vista principalmente as{" "}
              <strong>eleições presidenciais de 2026</strong>.
            </p>

            <p>
              O <strong>Pacto</strong> também atuou como{" "}
              <strong>
                co-líder do Grupo de Trabalho sobre Governança Democrática,
                Espaço Cívico, Anticorrupção e Acesso à Justiça
              </strong>
              , o fórum de engajamento da sociedade civil para a reunião do{" "}
              <strong>G20 no Brasil</strong>, em novembro de 2024. Em
              colaboração com outras organizações, coordenou atividades
              relacionadas ao{" "}
              <strong>
                Objetivo de Desenvolvimento Sustentável (ODS 16 – Paz, Justiça e
                Instituições Eficazes)
              </strong>
              .
            </p>

            <img
              src={PazJusticaImage}
              alt='Paz e Justiça'
              className='size-40'
            />
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “O grande desafio da rede é a própria causa. As pessoas tendem a não
            olhar para democracia como algo que precisa ser levado a sério, que
            precisa de investimento e recursos, até ela estar à beira do
            colapso. É uma causa urgente, mas também é preciso mobilizar a rede
            em relação a projetos que talvez não pareçam 'urgentes'. Trabalhar
            de forma mais propositiva e menos defensiva e reativa.”
          </p>

          <p className='w-[70%] text-end'>
            — MARGARIDA GORECKI, Coordenação de Desenvolvimento Institucional e
            Operações
          </p>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>O Pacto pela Democracia</strong> implementou uma nova
              governança, expandiu a equipe, e aprovou um novo estatuto,
              consolidando estratégias voltadas para o aumento do investimento
              na produção de conhecimento. Ademais, criou uma rede de
              organizações pró-democracia pelo mundo e fortaleceu a rede já
              existente, com o objetivo de ampliar continuamente a diversidade
              racial, regional e ideológica.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            O foco é chegar a 2026 com uma estrutura mais sólida para enfrentar
            as próximas eleições presidenciais e legislativas. Isso inclui atuar
            com segurança, liberdade e confiança, além de investir no
            treinamento da equipe para a gestão da rede. A iniciativa reflete a
            convicção de que o desenvolvimento institucional das organizações do
            terceiro setor no Brasil depende fortemente de um apoio
            institucional robusto, que permita a edificação e formação das
            equipes.
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Projeto Apoiado'
        mainImg={IcciLogo}
        img={[PelaDemocracia2, JusticaRacial]}
        subtitle='Vigência - 2024 A 2025'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>
          Instituto Cultura, Comunicação e Incidência (ICCI)
        </h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>
                O Instituto Cultura, Comunicação e Incidência (ICCI)
              </strong>{" "}
              apoia iniciativas de comunicação estratégica focadas em
              impulsionar as agendas de clima, democracia e justiça, criando
              demanda por políticas públicas e ações privadas que se traduzam em
              mudanças concretas e positivas nessas áreas. O Instituto entende
              que a comunicação estratégica é um recurso central no avanço
              dessas agendas e trabalha para ajudar a construir um ecossistema
              de iniciativas robustas, com alto potencial de produzir mudanças
              em escala.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>
                O ICCI oferece apoio financeiro, facilita a colaboração entre
                iniciativas, conduz pesquisas e promove o debate sobre a
                importância da comunicação no campo da filantropia.
              </strong>{" "}
              Busca criar um cenário no qual a sociedade civil, empresários e
              atores políticos, dos mais diversos espectros políticos e
              ideológicos, reconheçam que ações em prol do clima, da democracia
              e da justiça são fundamentais para impulsionar o desenvolvimento
              sustentável e inclusivo do Brasil.
            </p>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Associação e Apoio Plurianual'
        mainImg={GifeLogo}
        img={[FilantropiaSubCard]}
        subtitle='Vigência - 2024 A 2028'
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>
          Grupo de Institutos Fundações e Empresas (GIFE)
        </h1>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Em 2024, trabalhamos dados e informações a partir de pesquisas
            consolidadas, como o Censo GIFE, lançado no final de 2023. Usar
            dados e informações é uma forma de ir além do convencimento
            normativo, do dever ser. Com bons dados, podemos dizer como as
            coisas são e por que devemos mudar, evidenciando as conquistas mas
            sobretudo os limites da filantropia."
          </p>

          <p className='w-[70%] text-end'>—  CÁSSIO FRANÇA, Secretário Geral</p>
        </div>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>O Grupo de Institutos Fundações e Empresas (GIFE)</strong>{" "}
              é uma associação que reúne investidores sociais privados do
              Brasil, incluindo empresas, institutos e fundações de diferentes
              naturezas – seja familiar, independente ou empresarial. Fundado
              como grupo informal em 1989, foi formalizado como organização sem
              fins lucrativos em 1995 e é uma referência nacional no campo do
              investimento social privado.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              A associação desempenha um papel estratégico ao promover espaços
              de articulação e reflexão, produzir conteúdos e conhecimentos
              sobre o setor, incentivar o engajamento de novos atores e liderar
              esforços de advocacy. Um exemplo disso foi sua atuação na
              preparação de recomendações para o G20. Por meio de sua presença
              em grupos de trabalho, e da construção de agendas, o GIFE tem
              contribuído para fortalecer a atuação do setor filantrópico no
              Brasil.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-8 items-end editorial text-3xl text-retro-ochre leading-12 pt-16'>
          <p>
            “Acredito que compreender o alcance policapital seja um passo
            essencial para maior impacto social; a filantropia deve assumir o
            papel político institucional frente ao setor público e privado. Sua
            participação no Conselho de Desenvolvimento Econômico Social
            Sustentável do Governo Federal e no Fundo USP Diversa, são
            demonstrações grandiosas da necessidade de corresponsabilidade no
            desenvolvimento do país como um todo."
          </p>

          <p className='w-[70%] text-end'>—  CÁSSIO FRANÇA, Secretário Geral</p>
        </div>

        <div className='flex justify-end gap-16 text-base'>
          <div className='flex flex-col w-1/2 gap-8'>
            <p>
              Nosso compromisso é assegurar que o <strong>GIFE</strong> continue
              cumprindo sua missão de estimular o diálogo entre seus membros,
              apoiar o desenvolvimento de novos atores no campo do investimento
              social privado e impulsionar a geração de conteúdos e
              conhecimentos relevantes que colaborem para o avanço do setor.
            </p>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Associação'
        mainImg={LatimImpactoLogo}
        img={[FilantropiaSubCard]}
        subtitle='Vigência - 2024 '
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>Latimpacto</h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              A <strong>Latimpacto</strong> é uma rede que conecta provedores de
              capital em toda a América Latina e o Caribe, com a missão de
              impulsionar o fluxo de capital humano, intelectual e financeiro.
              Seu principal objetivo é fortalecer o ecossistema de investimento
              de impacto na região, potencializando a alocação de recursos para
              iniciativas socioambientais e de justiça social.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Com aproximadamente 220 membros, a rede reúne uma diversidade de
              atores, incluindo famílias, family offices, corporações, fundações
              doadoras, organizações multilaterais, instituições acadêmicas e
              aceleradoras.
              <strong>
                {" "}
                Presente em mais de 16 países, a Latimpacto desempenha um papel
                fundamental ao conectar investidores, gestores e organizações
                comprometidas com a filantropia e o impacto socioambiental,
                ampliando a força desse ecossistema na região.
              </strong>
            </p>
          </div>
        </div>
      </div>

      <AdvocacyCard
        title='Associação'
        mainImg={MovimentoDoacao}
        img={[FilantropiaSubCard]}
        subtitle='Vigência - 2024 '
      />

      <div className='flex flex-col items-end w-[78rem] gap-16 px-32'>
        <h1 className='editorial text-6xl w-full'>
          Movimento por uma Cultura de Doação (MCD)
        </h1>

        <div className='flex gap-16 text-base'>
          <div className='flex flex-col w-full gap-8'>
            <p>
              <strong>
                O Movimento por uma Cultura de Doação (MCD) é uma rede aberta e
                democrática, composta por pessoas e organizações que, desde
                2012, se mobilizam voluntariamente com o propósito de enraizar a
                prática da doação como um valor essencial à cultura brasileira.
              </strong>{" "}
              Dessa maneira, promove o altruísmo e a solidariedade. Por meio de
              campanhas colaborativas, produção de conhecimento e monitoramento
              do cenário de doação no Brasil, o <strong>MCD</strong> se engaja
              na construção de agendas estratégicas, fortalecendo a atuação do
              setor filantrópico.
            </p>
          </div>

          <div className='flex flex-col w-full gap-8'>
            <p>
              Por meio de iniciativas como o <strong>Monitor de Doação</strong>{" "}
              e a produção de diretrizes e conhecimento especializado, o{" "}
              <strong>MCD</strong> busca ampliar a conscientização pública.
              Assim, fomenta uma sociedade mais generosa, solidária e
              participativa no apoio a causas sociais.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvocacySection;
