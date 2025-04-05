import Logo from '../../public/assets/LogoRebranding.svg'
import Image1 from '../../public/assets/Rebranding1.png'
import Image2 from '../../public/assets/Rebranding2.png'
import Image3 from '../../public/assets/Rebranding3.png'
import Post1 from '../../public/assets/RebrandingPost1.png'
import Post2 from '../../public/assets/RebrandingPost2.png'
import Post3 from '../../public/assets/RebrandingPost3.png'
import Post4 from '../../public/assets/RebrandingPost4.png'
import Post5 from '../../public/assets/RebrandingPost5.png'
import Post6 from '../../public/assets/RebrandingPost6.png'


const RebrandingSection = () => {
    return (
        <div className="flex flex-col pt-80 pb-30 gap-64 w-full overflow-hidden bg-porcelain">
            <div className='flex flex-col gap-[4rem]'>
                <h1 className="text-8xl editorial px-32">Rebranding</h1>

                <div className='flex items-center gap-[10rem] w-full justify-end px-32'>
                    <img src={Logo} alt='Beja logo' className='size-60' />

                    <div className='w-[31rem] flex flex-col gap-[3rem] text-[1.3rem]'>
                        <p>Desenvolver o rebranding do <strong>Instituto Beja </strong>representou mais do que um desafio criativo – foi um mergulho para repensar a forma como nos apresentamos ao mundo. Liderado pela agência <strong>AKQA</strong>, esse processo teve como objetivo criar um espaço visual e narrativo que não apenas inspirasse, mas também convidasse à ação – articulando possibilidades, conectando pessoas e provocando mudanças reais.</p>
                        <p>Guiado pela missão de promover impacto no campo da filantropia, o <strong>Instituto Beja</strong> atua como um organismo vivo, fluido, abrangente e diverso que estimula e promove ambientes para conexões e transformações. Nossa essência está na pluralidade das vozes que nos compõem e nas relações que cultivamos. O desafio consistiu em manter essa riqueza, enquanto criávamos uma comunicação clara, objetiva e capaz de refletir nossa força e autenticidade.</p>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center editorial h-fit gap-10'>
                <h1 className='text-4xl'>A palavra-chave deste rebranding foi oxigenar.</h1>

                <div className='flex w-full shrink-0 [&>img]:w-full gap-3'>
                    <img src={Image1} alt='Rebranding image' className='translate-y-20' />
                    <img src={Image2} alt='Rebranding image' />
                    <img src={Image3} alt='Rebranding image' className='translate-y-20' />
                </div>
            </div>

            <div className='flex w-full pr-32 gap-12 pt-[5rem]'>
                <div className='grid grid-cols-3 grid-rows-2 w-[55rem] h-[46.5rem]  [&>img]:h-full [&>img]:w-full [&>img]:object-cover '>
                    <img src={Post1} alt="Beja image" />
                    <img src={Post2} alt="Beja image" />
                    <img src={Post3} alt="Beja image" />
                    <img src={Post4} alt="Beja image" />
                    <img src={Post5} alt="Beja image" />
                    <img src={Post6} alt="Beja image" />
                </div>

                <div className='flex flex-col text-xl w-[28.5rem] gap-11'>
                    <p>Nosso foco estava em revitalizar a marca, explorando caminhos criativos para contar quem somos e o que nos torna únicos. Em um processo colaborativo, envolvendo diálogos com nossa equipe, parceiros e comunidades que fazem parte do Beja, escutamos histórias, exploramos simbolismos e traduzimos ideias em uma identidade visual e verbal alinhada ao nosso propósito.</p>
                    <p>O coração deste trabalho está sintetizado em nosso manifesto: articular novas possibilidades para a filantropia, oxigenando os meios, os espaços e as relações. É com essa visão que traduzimos o Beja agora, por meio de palavras e ações, sempre movidos pelo desejo de estimular e assistir a uma transformação social profunda. Acreditamos que mudar o mundo exige escuta ativa, troca de saberes, inovação e a capacidade de amarrar pontas soltas, sempre com a colaboração no centro de cada processo.</p>
                    <p>Mais do que uma nova representação visual, o rebranding reafirma quem somos e aquilo em que acreditamos. Nosso novo logotipo simboliza movimento, intersecção e conexão, ilustrando a essência do Instituto como articulador de uma filantropia colaborativa.</p>
                </div>
            </div>

            <div className='flex w-full justify-end pr-32 editorial text-gold'>
                <p className='w-[56rem] text-[2.5rem]'>É o Beja de sempre, agora mais maduro, com uma nova linguagem para transformar o futuro que já começou.</p>
            </div>
        </div>
    )
}

export default RebrandingSection