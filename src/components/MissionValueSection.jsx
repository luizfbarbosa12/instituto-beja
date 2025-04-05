
import Clouds from '../../public/assets/Ilustracao-6.png'
import Mountains from '../../public/assets/Ilustracao-1.png'
import ProudHand from '../../public/assets/Ilustracao-4.png'

const MissionValueSection = () => {
  return (
    <div className="pt-[40rem] px-32 bg-porcelain relative flex flex-col gap-25 pb-[36rem]">
        <img src={Clouds} alt="Cloud image" className='absolute right-0 top-70' />

        <div className="flex w-full z-10">
            <div className="flex-center flex-col size-[38.75rem] bg-bourdeaux flex-center rounded-full text-porcelain px-20 translate-x-40">
                <h1 className="editorial text-[4rem]">Missão</h1>
                <p className="text-[1.25rem] text-center">Se tornar um Instituto de referência no ecossistema de filantropia, reconhecido por realizar, inspirar e catalisar uma filantropia inovadora, colaborativa e eficaz para destravar alavancas potencializadoras, trazendo impacto real em problemas sistêmicos.</p>
            </div>
        </div>

        <div className="flex w-full justify-end relative">
            <img src={ProudHand} alt="Proud hand image" className='absolute h-[46rem] w-[29rem] left-0 top-10' />
            <div className="flex-center flex-col size-[38.75rem] bg-bourdeaux flex-center rounded-full text-porcelain px-20 z-10">
                <h1 className="editorial text-[4rem]">Visão</h1>
                <p className="text-[1.25rem] text-center">Promover o impacto positivo no campo da filantropia fomentando a inovação, colaboração, eficácia e engajamento da sociedade civil, do setor privado e do governo para resolução de problemas sistêmicos.</p>
            </div>
        </div>

        <div className="flex w-full">
            <div className="flex-center flex-col size-[38.75rem] bg-bourdeaux flex-center rounded-full text-porcelain px-20 z-10">
                <h1 className="editorial text-[4rem]">Valores</h1>
                <p className="text-[1.25rem] text-center">O respeito, a escuta, a empatia, o pertencimento, o acolhimento, a resiliência, a responsabilidade, o sonho, o afeto, a curiosidade e a inovação, atuando em todas essas frentes, interseccionadas com o protagonismo pessoal, mediante o desenvolvimento de autoconsciência e autoconfiança.</p>
            </div>
        </div>

        <img src={Mountains} alt="Mountains image" className='absolute left-0 bottom-0'/>
    </div>
  )
}

export default MissionValueSection