import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { KnowledgeSubsection } from "./KnowledgeSubsection";
import { ArrowRightLink } from "../ui/ArrowRightLink";

const Democracia = "/assets/democracia.png";
const Politize = "/assets/Logo_Politize.png";
const AppCivico = "/assets/LOGO_APP_CIVICO.png";
export function AppCIVICO() {
  return (
    <KnowledgeSubsection
      title='APP Cívico + Politize! - IAgora?'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[AppCivico, Politize]}
          img={[Democracia]}
          subtitle='Vigência – 2024'
        />
      }
    >
      <NoticeContainer>
        <NoticeColumn>
          <p>
            <strong>Politize!</strong> é uma organização da sociedade civil
            dedicada a despertar o interesse pela política e ampliar a
            participação cidadã nos espaços de tomada de decisão que impactam a
            vida de todos os brasileiros. Sua missão é formar uma geração de
            cidadãos conscientes e comprometidos com a democracia, levando
            educação política a qualquer pessoa, em qualquer lugar.
          </p>
          <p>
            O jogo online <strong>IAgora</strong>? foi desenvolvido como uma
            abordagem inovadora para combater a desinformação, combinando a
            teoria da inoculação com ciências comportamentais. A Teoria da
            Inoculação, proposta por William J. McGuire, sugere que é possível
            fortalecer crenças e atitudes ao expor as pessoas a argumentos
            contrários fracos ou versões leves de contra-argumentos. Essa
            exposição funciona como uma &quot;vacina&quot; cognitiva, ajudando a
            desenvolver defesas intelectuais que tornam as pessoas mais
            resistentes a influências ou persuasões futuras. Amplamente aplicada
            em comunicação, publicidade e combate à desinformação, a teoria é
            uma ferramenta eficaz para promover pensamento crítico e proteção
            contra manipulação.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Desde seu lançamento, em 20 de agosto de 2024, o jogo registrou
            cerca de 26 mil acessos, realizados por aproximadamente 5 mil
            usuários. O pico de acessos ocorreu no mês eleitoral (outubro), com
            um tempo médio de permanência de 4 minutos por usuário. Em termos de
            alcance, o site iagora.org contou com usuários em mais de 600
            cidades brasileiras.
          </p>
          <p>
            Com o objetivo de fortalecer as defesas cognitivas dos cidadãos, o
            IAgora? apoia o reconhecimento técnico de manipulações e a criação
            de resistências psicológicas contra tentativas de desinformação,
            especialmente durante períodos eleitorais. Essa iniciativa busca
            desenvolver estratégias inovadoras de proteger a integridade da
            informação e promover uma cidadania mais crítica e engajada.
          </p>

          <div>
            <h3 className='text-sm leading-relaxed font-serif text-gold tablet:text-2xl tracking-[1%]'>
              Conheça o Site IAgora?
            </h3>
            <ArrowRightLink href='https://relatorio20212022.pactopelademocracia.org.br/'>
              Acesse aqui o Site IAgora?
            </ArrowRightLink>
          </div>
        </NoticeColumn>
      </NoticeContainer>
    </KnowledgeSubsection>
  );
}
