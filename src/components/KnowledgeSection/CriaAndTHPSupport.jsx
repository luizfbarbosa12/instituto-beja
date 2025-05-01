import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
import { Blockquote } from "../ui/Blockote";

const EquidadeGenero = "/assets/EquidadeGenero.png";
const JusticaRacial = "/assets/JusticaRacial.png";
const THPLogo = "/assets/thp_logo.png";
const CRIA_LOGO = "/assets/CRIA_LOGO.png";
export function CriaAndTHPSupport() {
  return (
    <KnowledgeSubsection
      title='CRIA – (Cultivate and Raise Infancy Awareness - Cultive e aumente a consciência da primeira infância, em tradução livre), desenvolvida pelo The Human Project (THP).'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[CRIA_LOGO, THPLogo]}
          img={[JusticaRacial, EquidadeGenero]}
          subtitle='Vigência – 2024 a 2026'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            A proposta do <strong>CRIA</strong> é desenvolver uma tecnologia
            social inovadora para a implantação de um programa de
            desenvolvimento infantil. O objetivo é planejar, gerir e oferecer
            apoio psicológico a jovens e adolescentes do{" "}
            <strong>Espaço CRIA</strong>, criando condições para um
            desenvolvimento pleno e saudável, especialmente no contexto da
            maternidade e da primeira infância. O foco de atuação está em
            pequenas e remotas comunidades, promovendo o bem-estar integral e
            ampliando suas oportunidades de crescimento e desenvolvimento.
          </p>
          <p>
            As atividades são realizadas junto à comunidade, por meio de rodas
            de conversa e dinâmicas interativas que abordam temas essenciais,
            como pré-natal, parto, segurança alimentar, marcos do
            desenvolvimento infantil, a importância do brincar, amamentação,
            emoções, desafios nas relações familiares e parentalidade.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            O projeto teve início em 2023, com a proposta de desenvolver uma
            experiência piloto e testar sua reaplicação ao longo de um período
            de 5 anos. Um dos principais objetivos é capacitar jovens e
            adolescentes para atuarem como apoio comunitário, permitindo que
            repliquem a experiência como Agentes de Saúde na Adolescência.
          </p>
          <p>
            Até 2024, o <strong>CRIA</strong> concentrou suas atividades em
            Pedra Furada, um povoado localizado no Município de Santa Luzia do
            Itanhy, na região sul de Sergipe. Essa comunidade apresenta desafios
            significativos, com raras manifestações de afeto e alta incidência
            de casos de violência doméstica.
          </p>
        </NoticeColumn>
      </NoticeContainer>
      <Blockquote
        text='"Mulheres estão sempre fazendo a diferença, mas a gente também precisa da participação dos homens.”'
        author='RAIANE RIBEIRO, Coordenadora'
      />
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O <strong>CRIA</strong> organizou, em Pedra Furada, um encontro de
            casais como primeiro contato e para divulgação de suas ações, com
            foco especial nos homens da comunidade. O objetivo foi engajar
            membros que tradicionalmente não participavam dos projetos do{" "}
            <strong>Espaço CRIA</strong>, ainda em construção, ou de atividades
            coletivas e comunitárias. A ação buscou fortalecer casais,
            independentemente do tempo de relacionamento – 5 meses ou 35 anos –,
            reconhecendo que a maternidade tem início com a relação entre o
            casal. O evento contou com a participação de 15 casais.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            A partir de 2024, o <strong>CRIA</strong> entra em uma nova fase de
            sistematização das ações implementadas, consolidando aprendizados e
            promovendo um teste piloto para reaplicação do conhecimento
            adquirido pelos jovens Agentes de Saúde na Adolescência em outras
            comunidades vizinhas de Pedra Furada.
          </p>
        </NoticeColumn>
      </NoticeContainer>
      <Blockquote
        text='“Joice Kelly chegou ao CRIA e quase não falava nada, apenas chorava. Ela teve uma infância muito difícil, sem carinho e afeto, sem brincadeiras e, dentro do CRIA, ela conheceu a técnica de massagem de bebês Shantala. Ela se apropriou da técnica e vem atuando com muita confiança nessa área. Depois de aprender a Shantala, ela deu um abraço em seu pai pela primeira vez! Além da Shantala, ela também se interessa pelas plantas medicinais e por isso foi apelidada de a curandeira do CRIA”'
        author='RAIANE RIBEIRO, Coordenadora'
      />
    </KnowledgeSubsection>
  );
}
