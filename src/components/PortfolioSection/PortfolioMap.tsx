import { List } from "../ui/List";
import { ListItem } from "../ui/List/ListItem";

const seeding = "/assets/folhas.png";
const map = "/assets/img_2.png";

export function PortfolioMap() {
  return (
    <div className='bg-rose py-30 flex flex-col'>
      <div className='flex items-center gap-4 justify-end mr-27'>
        <p className='editorial text-3xl'>Beja Labs - Laboratório</p>
        <img
          src={seeding}
          alt='sementes no canto superior direito'
          className='h-10'
        />
      </div>
      <img src={map} alt='mapa' className='mt-16' />
      <div className='ml-55 flex flex-col px-32 gap-8'>
        <h3 className='font-serif text-6xl leading-[100%]'>
          Mapeamento do Ecossistema de Inovação Social em Longevidade
        </h3>
        <p className='max-w-[472px] mt-10'>
          O Mapeamento do Ecossistema, conduzido pelo{" "}
          <strong>Lab Nova Longevidade</strong> em parceria com o{" "}
          <strong>Instituto Beja</strong>e o <strong>Itaú Viver Mais</strong>,
          foi oficialmente lançado em 29 de setembro de 2024, durante a
          <strong>Longevidade Expo+Fórum</strong>, em São Paulo.
        </p>
        <List title='Principais destaques:'>
          <ListItem>
            403 iniciativas mapeadas em todas as regiões do Brasil, com exceção
            do Acre e Rondônia, das quais 62,3% possuem mais de 5 anos de
            atuação.
          </ListItem>
          <ListItem>
            A colaboração intergeracional foi destacada como prioridade por 74%
            das iniciativas.
          </ListItem>
          <ListItem>
            A Educação foi apontada como uma das seis principais barreiras para
            a construção de uma sociedade equitativa para todas as idades.
          </ListItem>
          <ListItem>
            403 iniciativas mapeadas em todas as regiões do Brasil, com exceção
            do Acre e Rondônia, das quais 62,3% possuem mais de 5 anos de
            atuação.
          </ListItem>
          <ListItem>
            17 atores-chave de diversos setores foram entrevistados,
            contribuindo com suas perspectivas sobre a criação de demanda para
            inovação social na longevidade.
          </ListItem>
          <ListItem>
            Em parceria com Apurva-ai e desenvolvida pelo C4EC (Centre For
            Exponential Change), foi criada uma inteligência artificial
            denominada Cérebro Nova Longevidade, que estruturou as iniciativas
            em 30 frentes de ação e trouxe insights para uma arquitetura de
            mudança.
          </ListItem>
        </List>
        <p className='max-w-[472px] mt-28'>
          Para ampliar o alcance e engajamento, foi lançado um site exclusivo
          contendo <em>insights</em> detalhados, um mapa interativo e relatórios
          disponíveis para download.
        </p>
        <List title='Plataformas de engajamento:'>
          <ListItem>
            Entre outubro e dezembro de 2024, o site registrou 942 novos
            usuários, gerando 2,9 mil de pageviews.
          </ListItem>
          <ListItem>
            Até 2 de janeiro de 2025, 134 downloads do relatório foram
            realizados.
          </ListItem>
          <ListItem>
            Campanhas realizadas nas redes sociais, em parceria com Ashoka,
            Instituto Beja e Itaú Viver Mais, alcançaram 23 mil visualizações e
            1 mil interações.
          </ListItem>
          <ListItem>
            O mapeamento teve 33 menções na mídia, alcançando uma exposição
            estimada em 500 mil reais em publicidade.
          </ListItem>
        </List>
        <p className='max-w-[472px] mt-28'>
          <strong>Educação foi identificada pelo ecossistema como uma das principais
          barreiras</strong> para uma sociedade participativa e equitativa para todas as
          idades.
        </p>
        <List title='O tema educação emergiu relacionado à: '>
          <ListItem>Educação Formal</ListItem>
          <ListItem>
            Até 2 de janeiro de 2025, 134 downloads do relatório foram
            realizados.
          </ListItem>
          <ListItem>Capacidade de Informação e Decisão</ListItem>
          <ListItem>Aprendizado ao longo da vida</ListItem>
          <ListItem>Formação em Geriatria e Gerontologia</ListItem>
          <ListItem>Educação para Saúde</ListItem>
          <ListItem>Educação para Longevidade</ListItem>
        </List>
      </div>
    </div>
  );
}
