import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
import { List } from "../ui/List";
import { ListItem } from "../ui/List/ListItem";

const JusticaRacial = "/assets/JusticaRacial.png";
const IEALogo = "/assets/instituto-de-estudos-avancados-ieausp.png";
const BLISLogo = "/assets/BLIS.png";

export function IEAEvent() {
  return (
    <KnowledgeSubsection
      title='Instituto de Estudos Avançados da Universidade de São Paulo (IEA–USP) e Centro de Estudos de Cultura Contemporânea (CEDEC) - Colóquio Colonialidade, racialidade, punição e reparação nas Américas'
      supportSectionCard={
        <SupportSectionCard
          title='Evento'
          mainImg={[IEALogo, BLISLogo]}
          img={[JusticaRacial]}
          subtitle='Vigência – NOVEMBRO DE 2024'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O{" "}
            <strong>
              Colóquio Colonialidade, Racialidade, Punição e Reparação nas
              Américas
            </strong>
            , promovido pelo Instituto de{" "}
            <strong>
              Estudos Avançados da Universidade de São Paulo (IEA–USP) e Centro
              de Estudos de Cultura Contemporânea (CEDEC)
            </strong>
            , ofereceu um espaço de profunda reflexão sobre as interseções entre
            esses temas, estruturado a partir de uma abordagem transnacional e
            interdisciplinar. Com o objetivo de investigar conexões históricas e
            contemporâneas entre os diferentes contextos das Américas, o evento
            examinou de que forma o legado colonial continua a moldar as
            dinâmicas raciais, os sistemas de punição e os desafios relacionados
            à justiça social na atualidade.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Entre os dias <strong>25 e 29 de novembro de 2024</strong>, o{" "}
            <strong>Instituto Beja</strong> teve a honra de organizar uma série
            de encontros com{" "}
            <strong>
              Trevor Smith, um dos mais renomados especialistas internacionais
              em reparações históricas e narrativas de justiça racial
            </strong>
            . Durante sua primeira visita ao Brasil, Trevor apresentou o
            conceito inovador de world-making, uma prática transformadora que
            busca reimaginar as estruturas sociais e econômicas existentes. O
            objetivo é desmantelar o capitalismo racial e fortalecer alianças
            estratégicas entre movimentos negros e indígenas.
          </p>
        </NoticeColumn>
      </NoticeContainer>

      <div className='flex flex-col gap-16'>
        <NoticeContainer>
          <NoticeColumn>
            <p>
              {" "}
              O colóquio teve duração de 4 dias, incluindo 11 mesas redondas, 14
              minicursos e 160 Grupos de Trabalho (GTs). As discussões abordaram
              questões como racismo, vigilância, controle social, práticas
              abolicionistas, reparação histórica e colonialidade.
            </p>
            <hr className='border-retro-ochre border-3 ' />
          </NoticeColumn>
          <NoticeColumn></NoticeColumn>
        </NoticeContainer>

        <List title='Durante os encontros, refletimos sobre: '>
          <ListItem title='Solidariedade interseccional:'>
            desafios e oportunidades para alinhar movimentos negros e indígenas
            no contexto brasileiro.
          </ListItem>
          <ListItem title='Reparações no Brasil:'>
            a importância de garantir a não repetição e de transformar as bases
            do racismo estrutural, considerando as particularidades históricas e
            sociais de nosso país.
          </ListItem>
          <ListItem title='Narrativas multigeracionais:'>
            como integrar e normalizar a agenda de reparações em políticas
            públicas robustas e contínuas, essenciais para promover mudanças
            estruturais de longo prazo.
          </ListItem>
        </List>
      </div>

      <NoticeContainer>
        <NoticeColumn>
          <p>
            <strong>Trevor</strong> destacou sua inspiração pelas complexidades
            do nosso contexto histórico e racial e o momento crucial que
            vivemos, com o racismo estrutural sendo amplamente discutido, mas
            ainda desafiado por barreiras práticas. Ressaltou a importância de
            alinhar narrativas globais de reparação às especificidades locais,
            unindo movimentos negros e indígenas em torno de uma agenda que vai
            além de compensações financeiras. O palestrante também reconheceu a
            potência das conexões criadas durante sua visita e enfatizou a
            necessidade de espaços que promovam solidariedade e transformações
            estruturais, lembrando que afeto e narrativa caminham juntos na
            construção de realidades mais justas.
          </p>
        </NoticeColumn>
        <NoticeColumn>
          <p>
            Com o apoio de parceiros como o <strong>Instituto Toriba</strong> e
            o <strong>BLIS Collective</strong>, e em colaboração com
            <strong>Ibirapitanga</strong>, <strong>Casa Sueli Carneiro</strong>,
            <strong>Observatório da Branquitude</strong>,{" "}
            <strong>Instituto de Estudos da Religião (ISER)</strong>,{" "}
            <strong>Ação da Cidadania</strong> e{" "}
            <strong>Casa Fluminense</strong>, promovemos diálogos que ampliam a
            atuação da filantropia no fortalecimento da justiça racial e
            histórica. Essa iniciativa representou um avanço significativo ao
            alinhar reflexões globais com a realidade brasileira e ao destacar o
            poder de narrativas transformadoras.
          </p>
          <p>
            Com o apoio do <strong>Instituto Beja</strong>, foi possível
            garantir a participação de <strong>14 organizações</strong> no
            evento, superando os limites tradicionais de financiamento
            acadêmico. Essa colaboração foi essencial para viabilizar a presença
            de representantes do <strong>Movimento Negro Unificado</strong>, da
            <strong>Rede Nacional de Feministas Antiabolicionistas</strong>, do
            <strong>Projeto Reparações</strong>, das{" "}
            <strong>Mães de Maio</strong>, do <strong>Quilombagem</strong> e da{" "}
            <strong>Rede de Proteção e Resistência contra o Genocídio</strong>.
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
