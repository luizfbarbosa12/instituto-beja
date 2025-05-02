import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";

const Filantropia = "/assets/Filantropia.png";
const Idis = "/assets/idis_logo.png";
export function IDIS() {
  return (
    <KnowledgeSubsection
      title='Instituto para o Desenvolvimento do Investimento Social (IDIS)'
      supportSectionCard={
        <SupportSectionCard
          title='PESQUISA'
          mainImg={[Idis]}
          img={[Filantropia]}
          subtitle='Vigência – 2024'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O{" "}
            <strong>
              Instituto para o Desenvolvimento do Investimento Social (IDIS)
            </strong>
            promove workshops com filantropos atuantes para criar uma Teoria de
            Mudança voltada ao engajamento de novas pessoas. Esses encontros
            identificam motivações, condições necessárias para a transformação e
            definem atividades e intervenções para alcançar seus objetivos. Um
            exemplo é o workshop{" "}
            <strong>Perspectivas para a Filantropia no Brasil 2024</strong>, que
            busca fomentar o diálogo e a colaboração no setor. Os resultados
            dessas iniciativas serão sistematizados em uma publicação com ampla
            divulgação.
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
