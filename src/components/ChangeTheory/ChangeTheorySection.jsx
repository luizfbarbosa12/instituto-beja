import Wrapper from "../ui/Wrapper";
import { NoticeColumn } from "../ui/NoticeColumn";
import { ArrowRightLink } from "../ui/ArrowRightLink";
import { NoticeContainer } from "../ui/NoticeContainer";

const Image = "/assets/Ilustracao-8.png";
const ChangeTheorySection = () => {
  return (
    <Wrapper className={"pt-60"}>
      <div className='flex flex-col items-end gap-16 relative'>
        <h1 className='self-start editorial tablet:max-w-200 max-w-60 text-[28px] leading-relaxed tablet:leading-none tablet:text-8xl'>
          Evolução da Teoria da Mudança
        </h1>

        <div className='flex flex-col gap-7 tablet:gap-14 tablet:justify-self-end max-w-250'>
          <div className='flex flex-col items-end font-serif text-base leading-relaxed tablet:text-3xl text-gold tablet:leading-12'>
            <p>
              “O capital filantrópico é um capital de risco. O Beja toma grandes
              riscos em prol da aprendizagem. Pois sem experimentação não há
              inovação.”
            </p>
            <p className='text-end text-sm leading-relaxed tablet:text-[1.75rem]'>
              — Cristiane Sultani,
              <br />
              Fundadora e Presidente
            </p>
          </div>

          <NoticeContainer>
            <NoticeColumn>
              <p className='text-base'>
                Para tangibilizar nossa proposta de influenciar o campo da
                filantropia, direcionamos esforços a alguns temas prioritários,
                com vistas a gerar inovações e maximizar impactos. Ao definir as
                áreas focais, reafirmamos a vocação do Instituto e destacamos a
                permeabilidade dessas pautas como poderoso estímulo para
                deslocar o status quo.
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                À medida que nosso processo de evolução se desenha, desejamos
                tornar essa permeabilidade estimulante, visível e aplicável,
                para que seja possível às temáticas prioritárias demonstrarem
                seus potenciais de transformação, sem necessidade de disputa ou
                mediação.
              </p>
            </NoticeColumn>
          </NoticeContainer>

          <div className='flex flex-col gap-2'>
            <p className='text-gold font-serif text-sm leading-relaxed tablet:text-2xl w-full max-w-[43.75rem] tablet:leading-10'>
              A visão completa do estudo de nossa Teoria de Mudança foi resumida
              aqui e pode ser consultada com maiores detalhes no relatório
              anterior:
            </p>

            <ArrowRightLink href='https://institutobeja.org/wp-content/uploads/2024/02/Relatório-Anual-Instituto-Beja-2023-PT.pdf'>
              Acessar o Relatório Anual de 2023
            </ArrowRightLink>
          </div>
        </div>
      </div>

      <img
        src={Image}
        alt='Ilustração'
        className='relative h-86 tablet:h-[42rem] -translate-x-1/2 tablet:translate-x-1/2 pt-8 pb-6 tablet:pt-25 tablet:pb-25 '
      />
    </Wrapper>
  );
};

export default ChangeTheorySection;
