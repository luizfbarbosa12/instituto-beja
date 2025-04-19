import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
const Democracia = "/assets/democracia.png";
const LAUTLogo = "/assets/LAUT.png";

export function LautProject() {
  return (
    <KnowledgeSubsection
      title='LAUT - Centro de Análise da Liberdade e do Autoritarismo (LAUT)'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[LAUTLogo]}
          img={[Democracia]}
          subtitle='Vigência – 2024 a 2026'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O{" "}
            <strong>
              Centro de Análise da Liberdade e do Autoritarismo (LAUT)
            </strong>{" "}
            é uma instituição independente e apartidária que se dedica a
            pesquisas interdisciplinares sobre o estado de direito, a democracia
            e a defesa das liberdades fundamentais. Lançado em maio de 2020 como
            um projeto incubado no{" "}
            <strong>Instituto de Defesa do Direito de Defesa (IDDD)</strong>, o{" "}
            <strong>LAUT</strong> tem como objetivo monitorar as diversas
            manifestações do autoritarismo e repressão às liberdades, buscando
            fortalecer os alicerces democráticos e fomentar a mobilização da
            sociedade civil.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Com foco em produzir e disseminar conhecimento relevante, o{" "}
            <strong>LAUT</strong>
            adota uma abordagem interdisciplinar para analisar e compreender as
            ameaças às liberdades fundamentais.{" "}
            <strong>
              Destaca-se por sua atuação em mapear padrões de autoritarismo,
              promover estratégias de desradicalização e criar condições para um
              diálogo social mais robusto. Dessa forma, contribui para a
              consolidação de uma democracia plural, resiliente e comprometida
              com os direitos humanos.
            </strong>
          </p>
          <p>
            O <strong>LAUT</strong> lançou um Centro de Formação voltado para
            jovens pesquisadores, para criar oportunidades que promovam a
            participação ativa em projetos de pesquisa, metodologias de análise
            e na comunicação de resultados. O programa prioriza a inclusão e a
            diversidade, oferecendo bolsas de auxílio especialmente destinadas a
            candidatos negros e indígenas.
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
