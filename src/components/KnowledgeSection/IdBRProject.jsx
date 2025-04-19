import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
const JusticaRacial = "/assets/JusticaRacial.png";
const ID_BRLogo = "/assets/IDE_BR.png";

export function IdBRProject() {
  return (
    <KnowledgeSubsection
      title='Instituto Identidades do Brasil (ID_BR)'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[ID_BRLogo]}
          img={[JusticaRacial]}
          subtitle='Vigência – 2024'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O <strong>Instituto Identidades do Brasil (ID_BR)</strong> é uma
            organização sem fins lucrativos, pioneira e referência nacional na
            promoção e aceleração da igualdade racial. Atua por meio de
            abordagens criativas e inovadoras, bem como ações estruturadas em
            quatro pilares principais: dados e impacto; empregabilidade;
            educação e engajamento.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            O <strong>ID_BR</strong> busca tornar as pautas de igualdade racial,
            diversidade e inclusão mais acessíveis, promovendo conexões
            humanizadas e participando de eventos estratégicos. A organização
            acelera a transformação de empresas e instituições, além de
            contribuir para o desenvolvimento das carreiras e a valorização da
            jornada de pessoas negras e indígenas.
          </p>
          <p>
            Em parceria com o <strong>Instituto Beja</strong>, o{" "}
            <strong>ID_BR</strong> também fortalece iniciativas relacionadas à
            equidade racial, com foco na diversidade e inclusão.{" "}
            <strong>
              Entre suas estratégias está o desenvolvimento e a implementação de
              soluções tecnológicas inovadoras, como a criação de Deb, a
              primeira inteligência artificial (IA) do Brasil voltada para
              questões étnico-raciais.
            </strong>
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
