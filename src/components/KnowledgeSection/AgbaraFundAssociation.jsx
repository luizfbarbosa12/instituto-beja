import SupportSectionCard from "../SupportSectionCard";
import { Blockquote } from "../ui/Blockote";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
const FilantropiaSubCard = "/assets/FilantropiaSubCard.png";
const JusticaRacial = "/assets/JusticaRacial.png";
const EquidadeGenero = "/assets/EquidadeGenero.png";
const Ag = "/assets/agbara_logo.png";
const arrowRight = "/assets/icons/arrow-right.svg";

export function AgbaraFundAssociation() {
  return (
    <KnowledgeSubsection
      title='Fundo Agbara – apoio ao Núcleo de Pesquisa e Memória da Mulher Negra (NUPEMN)'
      supportSectionCard={
        <SupportSectionCard
          title='Associação'
          mainImg={[Ag]}
          img={[JusticaRacial, EquidadeGenero, FilantropiaSubCard]}
          subtitle='Vigência - 2024 - 2026'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            Uma pesquisa global realizada pelo{" "}
            <strong>Black Feminist Fund</strong> revelou que mulheres negras
            recebem apenas 0,1% a 0,3% dos recursos provenientes da filantropia
            e do investimento social privado em todo o mundo. No Brasil, a
            situação não é diferente. Com esse cenário em mente, o{" "}
            <strong>Fundo Agbara</strong> foi criado em setembro de 2020,
            tornando-se o primeiro fundo de mulheres negras no Brasil. Esta
            iniciativa de impacto social busca fortalecer mulheres negras e suas
            comunidades por meio do apoio a projetos que promovam igualdade
            étnico-racial, justiça econômica, social e climática.
          </p>
          <p>
            Com foco em iniciativas que contribuam para a construção de um
            Brasil onde a população negra possa viver plenamente emancipada e
            com o bem-estar assegurado, o <strong>Fundo Agbara</strong>{" "}
            concentra seus esforços em apoiar organizações de base lideradas por
            mulheres negras. Assim, atua como uma ferramenta de resistência
            contra as exclusões e desigualdades enfrentadas historicamente por
            essa população.
          </p>

          <div className=''>
            <h4 className='font-serif text-gold text-2xl leading-relaxed'>
              Conheça o estudo completo e compartilhe-o.
            </h4>
            <a
              href='https://google.com.br'
              target='_blank'
              rel='noopener noreferrer'
              className='flex gap-1 items-center hover:underline text-sm leading-relaxed'
            >
              <span>Acessar aqui o Estudo Completo</span>
              <img src={arrowRight} alt='Seta para direita acima' />
            </a>
          </div>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            O{" "}
            <strong>
              Núcleo de Pesquisa e Memória da Mulher Negra (NUPEMN)
            </strong>
            , vinculado ao <strong>Fundo Agbara</strong>, tem por objetivo
            pesquisar e fortalecer a filantropia voltada para as mulheres negras
            e apoiar iniciativas que influenciem políticas públicas. Isso inclui
            democratizar o acesso ao investimento social privado, priorizando o
            recorte racial na alocação de recursos e promovendo o
            desenvolvimento de uma filantropia mais inclusiva e representativa.
          </p>
          <p>
            Como parte desse compromisso, o <strong>NUPEMN</strong> lançou um
            diagnóstico inédito sobre filantropia e raça no Brasil. O estudo
            mapeou mais de 800 organizações negras e apresentou análises
            profundas sobre justiça social e reparação histórica. Com
            contribuições de especialistas como <strong>Cida Bento</strong> e um
            curta-metragem exclusivo, o material é um convite à reflexão e à
            ação para transformar o cenário da filantropia no país.
          </p>
          <p>
            Temos orgulho de ser parceiros dessa pesquisa transformadora,
            reforçando nosso compromisso com a equidade racial e de oxigenar o
            ecossistema filantrópico.
          </p>
        </NoticeColumn>
      </NoticeContainer>

      <Blockquote
        text={`“A gente recebe muito esse tipo de questionamento de outros
              doadores: ‘Ah! Mas outros Institutos já fazem pesquisa, porque
              vocês querem fazer também?’ Mas não bastam dois institutos de
              pessoas negras, isso não representa tudo. Institutos de pessoas
              brancas têm aos montes.”`}
        author='ALINE ODARA, Diretora Executiva'
      />

      <NoticeContainer>
        <NoticeColumn>
          <p>
            O <strong>Fundo Agbara</strong> fortalece nossas parcerias baseadas
            na confiança e na colaboração, destacando o valor do investimento de
            apoio institucional. Esse modelo permite que as instituições
            beneficiadas canalizem menos esforços para preocupações com o futuro
            imediato e mais energia para ampliar sua criatividade e potência
            para impactar a vida das mulheres negras. O tempo antes consumido em
            captação de recursos, agora é direcionado para transformar
            realidades e fortalecer comunidades
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            <strong>Agbara</strong> desempenha um papel fundamental na
            filantropia brasileira, contribuindo para a democratização desses
            espaços historicamente excludentes. A organização busca atrair
            outras instituições negras para ocupar essas esferas: &quot;...
            porque é um tanto constrangedor sermos as únicas mulheres negras
            neste espaço.” Isso reposiciona o <strong>Fundo Agbara</strong> no
            ecossistema da filantrópico de maneira inovadora
          </p>
        </NoticeColumn>
      </NoticeContainer>
      <Blockquote
        text={`“Mulheres negras produzindo conhecimento e salvaguardando a nossa memória também é um importante instrumento emancipatório. As soluções são produzidas por mulheres negras há muito tempo.”`}
        author='ALINE ODARA, Diretora Executiva'
      />
      <NoticeContainer>
        <NoticeColumn>
          <p>
            Propõe-se a redução das ações, mantendo, porém, a diversidade das
            frentes de atuação. Essa abordagem tem como objetivo aumentar o
            número de pessoas atendidas e aprimorar os processos de comunicação,
            ampliando o impacto alcançado enquanto concentra esforços na
            otimização da equipe.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Adicionalmente, busca-se intensificar as interações entre os agentes
            de parceria, incentivando um diálogo permanente e uma convivência
            harmoniosa e colaborativa. Tal abordagem contribui para o
            fortalecimento das iniciativas, baseando-se em práticas de escuta
            ativa e no reconhecimento recíproco.
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
