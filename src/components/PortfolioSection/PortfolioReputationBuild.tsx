import { List } from "../ui/List";
import { ListItem } from "../ui/List/ListItem";

const seeding = "/assets/folhas.png";

export function PortfolioReputationBuild() {
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
      <img src={seeding} alt='sementes' className='w-1/2 -translate-x-10' />
      <div className='ml-55 flex flex-col px-32 gap-8 mt-16'>
        <h3 className='font-serif text-6xl leading-[100%]'>
          ​​Construção de reputação do Lab Nova Longevidade para o ecossistema
        </h3>
        <p className='max-w-[472px] mt-10'>
          O mapeamento do ecossistema desempenhou um papel fundamental no
          fortalecimento da reputação do <strong>Lab</strong>. Ele ampliou oportunidades de
          conexão e abriu frentes de colaboração, consolidando sua presença no
          campo da inovação social para a longevidade.
        </p>
        <List title='Principais ações e impactos:'>
          <ListItem>
            Entrevistas estratégicas: realizadas com representantes de órgãos
            públicos, setor privado, academia e iniciativas sociais. Entre os
            participantes estão a <em>Secretaria Nacional de Direitos da Pessoa
            Idosa, Grupo RD Saúde, Talento Sênior e Fórum Gerações e Futuro do
            Trabalho, entre outros.</em>
          </ListItem>
          <ListItem>
            Conexões com organizações relevantes: parcerias estabelecidas com
            instituições como <em>SESC, Sanofi, Insper, FGV EAESP, MedSênior, Sírio
            Libanês, Catalyst 2030, BID, ThinkOlga, Ministério Público de
            Pernambuco</em>, entre outros.
          </ListItem>
          <ListItem>
            Colaboração com empreendedores da rede <em>Ashoka</em>: engajamento com
            empreendedores que atuam com longevidade, incluindo Gabriela
            Agustini (<em>Olabi</em>), João Souza (<em>Fa.vela</em>), João Paulo Nogueira
            (<em>Cuidador de Confiança</em>), Sérgio Serapião (<em>Labora</em>), Karen Worcman
            (<em>Museu da Pessoa</em>), entre outros.
          </ListItem>
        </List>
        <List className='mt-28' title='Presença em eventos externos:'>
          <ListItem>
            24 de outubro: presença na Expo Vida60+ em Recife.
          </ListItem>
          <ListItem>
            30 de outubro: participação no evento Fundação Instituto de
            Administração da Universidade de São Paulo.
          </ListItem>
          <ListItem>
            12 de dezembro: contribuição no Fórum Gerações e Futuro do Trabalho.
          </ListItem>
        </List>
      </div>
    </div>
  );
}
