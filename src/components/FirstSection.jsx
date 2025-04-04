import GoldGlobe from '../../public/assets/Ilustracao-2.png'
import LogoFirstSection from '../../public/assets/LogoFirstSection'
import * as Icon from '@phosphor-icons/react'

const FirstSection = () => {
  return (
    <div className="bg-bourdeaux w-full overflow-hidden pb-30">
      <div className="flex w-full justify-between px-10 pt-4">
        <p className="editorial text-white text-4xl w-[19rem] leading-14">Relatório Anual 2024</p>

        <div className="size-10 bg-rose rounded-full flex-center flex-col gap-1">
          <div className="bg-bourdeaux h-0.5 w-6" />
          <div className="bg-bourdeaux h-0.5 w-6" />
        </div>
      </div>

      <div className="relative w-full h-screen grid grid-cols-50 grid-rows-50">
        <div className='flex flex-col col-span-full row-span-full pl-10 w-[31rem] gap-[12rem] row-start-34'>
          <div className='flex items-center gap-2 z-10'>
            <div className='size-10 rounded-full bg-rose p-2 flex-center'>
              <Icon.ArrowDown className='size-full' />
            </div>

            <p className='text-rose'>Faça Download do Relatório Anual 2024 em PDF aqui.</p>
          </div>
        </div>

        <LogoFirstSection/>
        <img src={GoldGlobe} alt="" className='absolute -right-22 w-[63rem] row-start-2' />
      </div>
    </div>
  )
}

export default FirstSection