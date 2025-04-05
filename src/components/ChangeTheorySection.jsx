import * as Icon from "@phosphor-icons/react"
import Image from '../../public/assets/Ilustracao-8.png'

const ChangeTheorySection = () => {
  return (
    <div className='flex flex-col items-end w-full gap-16 pt-80 px-32 relative pb-[45.5rem]'>
        <div className='w-full'>
            <h1 className='editorial text-8xl w-[50rem] leading-32'>Evolução da Teoria da Mudança</h1>
        </div>

        <div className='flex flex-col gap-7 w-[62rem]'>
            <div className='flex flex-col items-end text-3xl text-gold editorial leading-12'>
                <p>“O capital filantrópico é um capital de risco. O Beja toma grandes riscos em prol da aprendizagem. Pois sem experimentação não há inovação.”</p>
                <p className='text-end text-[1.75rem]'>—  Cristiane Sultani,<br/>
                Presidente do Instituto Beja</p>
            </div>

            <div className='flex text-base w-[59rem] gap-11 [&>p]:w-full '>
                <p>Para tangibilizar nossa proposta de influenciar o campo da filantropia, direcionamos esforços a alguns temas prioritários, com vistas a gerar inovações e maximizar impactos. Ao definir as áreas focais, reafirmamos a vocação do Instituto e destacamos a permeabilidade dessas pautas como poderoso estímulo para deslocar o status quo. </p>
                <p>À medida que nosso processo de evolução se desenha, desejamos tornar essa permeabilidade estimulante, visível e aplicável, para que seja possível às temáticas prioritárias demonstrarem seus potenciais de transformação, sem necessidade de disputa ou mediação.</p>
            </div>

            <div className='flex flex-col gap-2 pt-[3rem]'>
                <p className='text-gold text-2xl editorial w-[43.75rem] leading-10'>A visão completa do estudo de nossa Teoria de Mudança foi resumida aqui e pode ser consultada com maiores detalhes no relatório anterior:</p>
                <div className='flex items-center gap-2'>
                    <p className='text-[0.875rem] text-neutral-700'>Saber Mais sobre a nossa Teoria de Mudança</p>
                    <div className='size-4 rounded-full p-0.5 bg-bourdeaux'>
                        <Icon.ArrowRight className='size-full text-porcelain fill-porcelain -rotate-25'/>
                    </div>
                </div>
            </div>

            <img src={Image} alt="Ilustração" className='absolute w-[42rem] h-[42rem] bottom-0 -left-40' />
        </div>
    </div>
  )
}

export default ChangeTheorySection