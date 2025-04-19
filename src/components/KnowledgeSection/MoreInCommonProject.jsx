import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
const Democracia = "/assets/democracia.png";
const MoreInCommonLogo = "/assets/more-in-common-logo-header.png";
import { KnowledgeSubsection } from "./KnowledgeSubsection";

export function MoreInCommonProject() {
  return (
    <KnowledgeSubsection
      title='More in Common Brasil'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[MoreInCommonLogo]}
          img={[Democracia]}
          subtitle='Vigência – 2024 a 2026'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            A missão da <strong>More in Common</strong> é entender as dinâmicas
            da polarização, identificar pontos de convergência e unir as pessoas
            para enfrentar desafios compartilhados. Por meio de pesquisas sobre
            polarização e do uso da ciência comportamental, a organização mapeia
            identidades e valores de diferentes grupos populacionais. Essas
            percepções são aplicadas em colaboração com parceiros da sociedade
            civil, filantropia, governo, mídia e empresas, promovendo
            iniciativas que visam superar divisões.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Ao desenvolver narrativas eficazes e inclusivas,{" "}
            <strong>
              o programa auxilia lideranças brasileiras na superação da
              polarização, criando espaços de convergência para enfrentar
              desafios urgentes, como o fortalecimento da democracia, a promoção
              da justiça social e o combate às mudanças climáticas
            </strong>
            . Com uma abordagem baseada em compreensão profunda e narrativas
            convincentes, a <strong>More in Common</strong>
            busca mobilizar vontades políticas e sociais em torno de
            questões-chaves.
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
