import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
const Democracia = "/assets/democracia.png";
const IgarapeLogo = "/assets/igarape.png";

export function IgarapeProject() {
  return (
    <KnowledgeSubsection
      title='Instituto Igarapé'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[IgarapeLogo]}
          img={[Democracia]}
          subtitle='Vigência – 2024 a 2025'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            O <strong>Instituto Igarapé</strong>, fundado em 2011, tem como
            objetivo propor soluções e parcerias para os desafios globais
            complexos. Sua capacidade de produzir conhecimento, conectar mundos,
            compreender diferentes realidades, gerar soluções concretas e
            traduzi-las para uma audiência que forma opiniões e toma decisões,
            lhe possibilita um posicionamento único para influenciar políticas
            públicas e corporativas, do nível local ao global.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            O <strong>Instituto Beja</strong> apoia o{" "}
            <strong>Instituto Igarapé</strong> em sua missão de influenciar
            positivamente políticas públicas no Brasil e no cenário global. Com
            base em pesquisas sólidas, tecnologias emergentes e comunicação
            estratégica, o Igarapé desenvolve soluções para segurança pública,
            clima e tecnologia digital, influenciando políticas públicas e
            corporativas de forma inovadora e eficaz.
          </p>
          <p>
            <strong>
              A organização foi reconhecida como o principal think tank de
              políticas sociais do mundo em 2019, melhor ONG de Direitos Humanos
              em 2018, e foi classificada entre as principais ONGs da América
              Latina. Entre 2017 e 2023, o Igarapé figurou entre as melhores
              ONGs do Brasil, consolidando sua influência global e regional.
            </strong>
          </p>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
