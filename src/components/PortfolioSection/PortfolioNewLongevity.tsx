import SupportSectionCard from "../SupportSectionCard";
import { NoticeColumn } from "../ui/NoticeColumn";
import { NoticeContainer } from "../ui/NoticeContainer";
import { PortfolioSubsection } from "./PortfolioSubsection";
import { Blockquote } from "../ui/Blockote";

const LOGO_BEJA = "/assets/LOGO_BEJA-puro.svg";
const LOGO_ASHOKA = "/assets/logo-ashoka.png";
const LOGO_ITAU = "/assets/logo_ivm2.png";
const JusticaRacial = "/assets/JusticaRacial.png";
const EquidadeGenero = "/assets/EquidadeGenero.png";
const Democracia = "/assets/democracia.png";
const Filantropia = "/assets/FilantropiaSubCard.png";

export function PortfolioNewLongevity() {
  return (
    <PortfolioSubsection
      title='Lab Nova Longevidade Ashoka / Itaú Viver Mais / Instituto Beja'
      supportSectionCard={
        <SupportSectionCard
          title='PROJETO APOIADO'
          mainImg={[LOGO_ASHOKA, LOGO_BEJA, LOGO_ITAU]}
          img={[JusticaRacial, EquidadeGenero, Democracia, Filantropia]}
          subtitle='Vigência – 2024 a 2026'
        />
      }
    >
      <Blockquote
        text='“A velhice precisa ser tratada no plural, não há uma única forma de se envelhecer, principalmente num cenário como o brasileiro, marcado por extrema desigualdade social. Nova Longevidade: o Lab precisa estar atento a essas questões da desigualdade porque não se trata apenas de envelhecer bem, contribuindo para a sociedade, com saúde, dignidade, com autonomia, propósito e com colaboração intergeracional. No Brasil essas questões estão marcadas pela desigualdade social.”'
        author='MARILIA DUQUE, Consultora, Mentora e Pesquisadora da Interface Tecnologia e Envelhecimento'
      />
      <NoticeContainer>
        <NoticeColumn>
          <p>
            A inversão da pirâmide etária no Brasil, resultado da queda na taxa
            de natalidade e do aumento da expectativa de vida, é um marco
            demográfico de grande relevância. Em 1980, os brasileiros com 65
            anos ou mais representavam apenas 4% da população, enquanto jovens
            de 0 a 14 anos representavam 38,2%. Já no Censo de 2022, pessoas com
            65 anos ou mais passaram a representar 10,9% da população, e o
            Índice de Envelhecimento atingiu 55,2 neste mesmo ano, indicando que
            há 55,2 idosos para cada 100 crianças de 0 a 14 anos.
          </p>
        </NoticeColumn>

        <NoticeColumn>
          <p>
            Diante desse cenário, a <strong>Ashoka</strong>, ao longo dos
            últimos 8 anos, adotou uma visão sistêmica para observar o campo da
            infância e adolescência e identificou o envelhecimento como um tema
            transgeracional fundamental. Esse fenômeno demanda soluções
            inovadoras em todas as esferas sociais, sendo essencial os debates
            de justiça social, racial e democracia. Com essa perspectiva, a{" "}
            <strong>Ashoka</strong> desenvolveu um amplo estudo e uma Teoria da
            Mudança que defendem o direito de todos a envelhecer como agentes de
            transformação social, contribuindo para a construção de uma
            sociedade mais inclusiva.
          </p>
          <p>
            Em parceria com a <strong>Ashoka</strong> e o programa{" "}
            <strong>Itaú Viver Mais</strong>, o Instituto Beja reafirmou seu
            compromisso com a colaboração e a experimentação para a criação do
            Laboratório. Assim nasceu a ideia do{" "}
            <strong>Lab Nova Longevidade</strong>. Este laboratório surge como
            um espaço de cocriação entre diferentes atores que compartilham a
            mesma visão de construir novas narrativas e paradigmas para a
            longevidade. O projeto parte da crença de que a confiança e a
            colaboração são alicerces fundamentais para alcançar essa
            transformação
          </p>
        </NoticeColumn>
      </NoticeContainer>

      <div className='flex flex-col gap-5 self-start'>
        <hr className='self-start border-none bg-retro-ochre h-[3px] w-1/2' />
        <h4 className='font-serif text-bourdeaux text-3xl leading-1/1'>
          Frentes de atuação do Lab em 2024
        </h4>
        <ol className='flex flex-col gap-8'>
          <li className='font-serif flex gap-3 text-[28px] leading-[120%]'>
            <span className='text-retro-ochre'>1</span>Mapeamento do Ecossistema
            de Inovação Social em Longevidade
          </li>
          <li className='font-serif flex gap-3 text-[28px] leading-[120%]'>
            <span className='text-retro-ochre'>2</span>Construção de Reputação
            do Lab Nova Longevidade para o ecossistema
          </li>
          <li className='font-serif flex gap-3 text-[28px] leading-[120%]'>
            <span className='text-retro-ochre'>3</span>Produção de Narrativas
            para o Paradigma da Nova Longevidade
          </li>
        </ol>
      </div>
    </PortfolioSubsection>
  );
}
