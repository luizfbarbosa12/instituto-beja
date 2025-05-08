import SupportSectionCard from "../SupportSection/SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { PortfolioSubsection } from "./PortfolioSubsection";
import { Blockquote } from "../ui/Blockote";
import { List } from "../ui/List";
import { ListItem } from "../ui/List/ListItem";

const LOGO_TORIBA = "/assets/Toriba_azul.png";
const Filantropia = "/assets/FilantropiaSubCard.png";

export function PortfolioToriba() {
  return (
    <PortfolioSubsection
      title='Lab de Imaginação e Inovação na Filantropia – Instituto Toriba'
      supportSectionCard={
        <SupportSectionCard
          title='APOIO PLURIANUAL'
          mainImg={[LOGO_TORIBA]}
          img={[Filantropia]}
          subtitle='Vigência – 2024 - 2028'
        />
      }
    >
      <Blockquote
        text='“E se, em vez de simplesmente reagir às questões que parecem erradas, nós começássemos a narrar o mundo diferente que queremos ver? Consolidar, a partir do exercício da especulação imaginativa, possibilidades que ainda não estão explícitas, mas que podem se tornar a partir desse exercício, baseado em processos bastante estruturados que a indústria já utiliza para forjar o design de futuros.”'
        author='GRACIELA SELAIMEN, Fundadora '
      />

      <div className='flex self-start flex-col gap-12'>
        <h4 className='font-serif text-5xl'>
          Como desenhar futuros mais justos e disruptivos?
        </h4>
        <p className='max-w-[520px]'>
          O <strong>Instituto Toriba</strong> acredita no poder transformador
          das histórias que contamos sobre o futuro. Elas moldam nossas ações no
          presente. Por meio de pesquisas, alfabetização em futuros e construção
          de narrativas, o Instituto atua para catalisar transformações sociais.
          Através de processos colaborativos que reúnem ativistas, artistas,
          comunicadores e pensadores visionários, criam-se espaços para que
          novas histórias possam emergir – uma oportunidade única de reimaginar
          e redefinir nosso papel no mundo.
        </p>
      </div>

      <Blockquote
        text='“Para além de uma visão sistêmica, um fazer sistêmico: é preciso se implicar como parte do problema. Reconhecer que precisamos de pessoas muito diferentes discutindo na mesa, não podem ser as mesmas pessoas de sempre. Precisamos de outros discursos, outras habilidades. Quais as possibilidades de conversas temos quando se juntam vozes muito diferentes que nunca se encontram antes? É preciso ouvir pessoas que estão dispostas a desafiar o status quo, capazes de promover uma verdadeira transformação cultural na filantropia. E este tipo de mudança não é necessariamente mensurável.”'
        author='GRACIELA SELAIMEN, Fundadora'
      />
      <NoticeContainer>
        <NoticeColumn>
          <p>
            Em parceria com o <strong>Instituto Toriba</strong>, o{" "}
            <strong>Instituto Beja</strong> dá mais um passo em direção ao
            fortalecimento de relações baseadas em respeito, confiança e
            colaboração mútua. Juntos, promovem ações para reflexão
            compartilhada e para a prototipação de soluções exponenciais para os
            desafios sociais e culturais.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            O <strong>Lab de Imaginação e Inovação na Filantropia</strong> é
            fruto da convergência de talentos do{" "}
            <strong>Instituto Toriba</strong> e do{" "}
            <strong>Instituto Beja</strong>. O espaço oferece condições para
            fomentar a reflexão e o diálogo sobre questões que mobilizam atores
            sociais, incentivando novas práticas para a filantropia. Também
            busca promover maior conscientização sobre o papel transformador da
            filantropia e explorar novas possibilidades de impacto.
          </p>
        </NoticeColumn>
      </NoticeContainer>

      <List title='Questões orientadoras:'>
        <ListItem>
          Como explorar novos papéis das lideranças e instituições filantrópicas
          na condução de mudanças sistêmicas e culturais para gerar
          transformações positivas?
        </ListItem>
        <ListItem>
          Quais são as capacidades críticas que lideranças filantrópicas
          precisam para impulsionar processos transformadores e sustentáveis?
        </ListItem>
        <ListItem>
          Como criar espaços que incentivem uma cultura de inovação na
          filantropia?
        </ListItem>
        <ListItem>
          De que forma a filantropia pode apoiar efetivamente os agentes de
          mudança que moldam futuros alternativos?
        </ListItem>
        <ListItem>
          Como a filantropia pode acelerar a transição para um futuro mais
          equitativo e justo?
        </ListItem>
        <ListItem>
          De que maneira a filantropia pode se reinventar para responder aos
          desafios de um mundo em policrise?
        </ListItem>
      </List>

      <p className='max-w-[472px] mt-10'>
        Para buscar respostas e provocar reflexão, o <strong>Lab</strong> atua
        em três dimensões principais: SELF (indivíduo), ECOSSISTEMAS e
        INSTITUIÇÕES.
      </p>

      <List title='Com foco em:'>
        <ListItem>Expansão de perspectivas</ListItem>
        <ListItem>
          Exploração de novas linguagens, conceitos e tecnologias
        </ListItem>
        <ListItem>
          Criação de conteúdos, storytelling, disputa de narrativas
        </ListItem>
        <ListItem>Construção de cenários e futuros</ListItem>
        <ListItem>Aplicação de design especulativo</ListItem>
      </List>

      <div className='flex self-start flex-col mt-28 gap-12'>
        <h4 className='font-serif text-5xl'>
          Lab de Imaginação e Inovação na Filantropia
        </h4>
        <p className='max-w-[520px]'>
          <strong>Global Community Game</strong>: uma metodologia baseada em
          simulação gamificada para capacitar lideranças na criação soluções
          colaborativas em ecossistemas complexos. Desenvolvido por{" "}
          <strong>Jahn Werner</strong>, <strong>Michael Fuchs</strong> e{" "}
          <strong>Jochen Messner (Five4Success)</strong>, o jogo foi oferecido
          em São Paulo, nos dias 26 e 27 de março, a um grupo de lideranças
          filantrópicas e da sociedade civil. Ele desenvolve habilidades para
          abraçar mudanças, navegar por relações e culturas institucionais
          complexas com consciência e desenvoltura, em um cenário em constante
          evolução.
        </p>
        <p className='max-w-[520px]'>
          O <strong>Lab de Imaginação e Inovação na Filantropia</strong> liderou
          a curadoria da 3ª edição do <strong>Filantropando</strong>, promovendo
          diálogos e interações sobre inovação e o futuro da prática
          filantrópica.
        </p>
      </div>
    </PortfolioSubsection>
  );
}
