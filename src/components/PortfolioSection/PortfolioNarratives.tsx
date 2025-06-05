import { Blockquote } from "../ui/Blockote";
import { List } from "../ui/List";
import { ListItem } from "../ui/List/ListItem";
import { ListSubItem } from "../ui/List/ListSubItem";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";

const seeding = "/assets/folhas.png";
const illustration = "/assets/Ilustracao-8.png";

export function PortfolioNarratives() {
  return (
    <div className='bg-porcelain py-30 flex flex-col'>
      <div className='flex items-center gap-4 justify-end mr-27'>
        <p className='editorial text-3xl'>Beja Labs - Laboratório</p>
        <img
          src={seeding}
          alt='sementes no canto superior direito'
          className='h-10'
        />
      </div>
      <img
        src={illustration}
        alt='sementes'
        className='w-16 max-w-[64px] h-auto -translate-x-10'
      />
      <div className='ml-55 flex flex-col px-32 gap-8 mt-16'>
        <h3 className='font-serif text-6xl leading-[100%]'>
          Produção de Novas Narrativas 
        </h3>
        <NoticeContainer>
          <NoticeColumn>
            <p>
              O <strong>Lab Nova Longevidade</strong> tem desempenhado um papel
              central na produção e circulação de novas narrativas sobre
              envelhecimento, contribuindo para mudanças de mentalidade e a
              consolidação do paradigma da Nova Longevidade. Por meio de
              parcerias estratégicas, o <strong>Lab</strong> tem trabalhado para
              mobilizar a sociedade e envolver produtores de conteúdo, mídia,
              formação de jornalistas e publicitários na criação de um novo
              modelo mental que promove envelhecimento saudável, com propósito e
              justiça social.
            </p>
          </NoticeColumn>
          <NoticeColumn>
            <p>
              A transformação exige um olhar crítico para os sistemas da
              sociedade – transporte, saúde e modelos de trabalho – e o repensar
              dos modelos de cuidado, considerando as desigualdades de gênero e
              raça. Para responder ao acelerado envelhecimento populacional, é
              necessário acelerar mudanças em políticas públicas, normas sociais
              e mercados, enquanto se engaja a sociedade em soluções inovadoras
              e inclusivas.
            </p>
          </NoticeColumn>
        </NoticeContainer>

        <List
          className='mt-16'
          title='Principais iniciativas para novas narrativas:'
        >
          <div className='flex flex-col gap-4'>
            <ListItem>
              Editoria #Longevidade no Nexo Políticas Públicas
            </ListItem>
            <ListSubItem>
              Publicação de 19 artigos, alcançando 16,5 mil visualizações.
            </ListSubItem>
            <ListSubItem>
              No Instagram do Nexo, o conteúdo sobre cuidado com idosos obteve
              124 mil visualizações e 9 mil interações.
            </ListSubItem>
          </div>
          <div className='flex flex-col gap-4'>
            <ListItem>
              Podcast Change For Good Talks - Temporada #Longevidade
            </ListItem>
            <ListSubItem>
              Abordagem de temas como cuidado, trabalho, propósito, colaboração
              intergeracional e produção de conhecimento.
            </ListSubItem>
            <ListSubItem>
              No Spotify, somou 87h de atividades, enquanto os vídeos no
              Instagram tiveram 39 mil visualizações.
            </ListSubItem>
          </div>
          <div className='flex flex-col gap-4'>
            <ListItem>Colaboração com a Fundação Cásper Líbero</ListItem>
            <ListSubItem>
              Produção de conteúdos audiovisuais, como o Manifesto Nova
              Longevidade e o podcast Democracia Por Toda a Vida.
            </ListSubItem>
            <ListSubItem>
              Formação de futuros comunicadores para combater o idadismo e
              qualificar a informação sobre longevidade.
            </ListSubItem>
          </div>
          <div className='flex flex-col gap-4'>
            <ListItem>
              Debates Públicos nas Escolas (Ashoka + Coletivo Encrespados)
            </ListItem>
            <ListSubItem>
              Desenvolvimento de percursos temáticos, incluindo Longevidade e
              Diálogos Intergeracionais e Agentes Por Toda a Vida.
            </ListSubItem>
            <ListSubItem>
              Piloto aplicado em um Centro de Convivência para Idosos em Ibiúna (SP),
              com planejamento para replicação em Maranguape (CE).
            </ListSubItem>
          </div>
        </List>
        <p className='max-w-[472px] mt-28'>
          Em 16 de outubro, no Espaço Literat, o Lab Nova Longevidade realizou
          seu primeiro círculo de aprendizado, explorando temas fundamentais,
          como:
        </p>
        <List title='Principais ações e impactos:'>
          <ListItem>Educação para Longevidade</ListItem>
          <ListItem>Cultura do Cuidado</ListItem>
          <ListItem>Inclusão Digital</ListItem>
          <ListItem>Importância da Voz das Comunidades</ListItem>
          <ListItem>Novas Narrativas e Modelos Mentais</ListItem>
          <ListItem>Trabalho e Aprendizagem ao Longo da Vida</ListItem>
          <ListItem>Idadismo.</ListItem>
        </List>
        <p className='max-w-[737px] p-14 mt-28 self-end bg-rose'>
          Esses encontros permitiram a troca de experiências e de diferentes
          perspectivas, revelando que o <strong>Lab</strong> atua como
          amplificador, catalisador e orquestrador do ecossistema de inovação
          social. Esse papel tem sido crucial para impulsionar o paradigma de
          Nova Longevidade, promovendo oportunidades para que todas as pessoas
          possam ser <strong>Agentes Por Toda a Vida</strong>, contribuindo para
          suas famílias, comunidades e territórios. A sistematização dessa troca
          foi consolidada em uma devolutiva e servirá como um dos recursos que
          embasam a estratégia do <strong>Lab</strong> para 2025.
        </p>
        <Blockquote
          author='MARILIA DUQUE, Consultora, Mentora e Pesquisadora da Interface Tecnologia e Envelhecimento'
          text=' "Impulsionar mudanças em políticas públicas, normas sociais e
          dinâmicas de mercado para promover um envelhecimento saudável, ativo e
          com propósito. Mobilizar a sociedade como um todo para enfrentar os
          desafios e oportunidades do rápido envelhecimento populacional,
          garantindo qualidade de vida e inclusão para todas as gerações.”'
        ></Blockquote>
      </div>
    </div>
  );
}
