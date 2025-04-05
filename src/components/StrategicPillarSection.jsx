import Clouds from '../../public/assets/Ilustracao-6.png'
import ProudHand from '../../public/assets/Ilustracao-4.png'
import Bush from '../../public/assets/Ilustracao-3.png'
import Pillars from '../../public/assets/PilaresEstrategicos.png'

const StrategicPillarSection = () => {
    return (
        <div className='flex flex-col gap-38 w-full pt-80'>
            <h1 className='editorial text-8xl w-[60rem] leading-32 pl-32'>Pilares Estratégicos</h1>

            <div className='flex items-start justify-end w-full gap-[9rem] px-32'>
                <img src={Pillars} alt="Pilares Estratégicos" />
                <p className='w-[29.5rem] text-base'>Nossos três pilares estratégicos – advocacy, conhecimento e laboratórios – são as forças motrizes que orientaram nossas ações ao longo de 2024. Funcionaram como lentes de estudos, práticas e experimentações, sustentando as reflexões do Beja sobre os modos de fazer diferente. Sem restringir abordagens, esses pilares condensam instrumentos para nossos exercícios de ação e inovação.</p>
            </div>

            <div className='flex flex-col w-full  gap-10'>
                <div className='flex flex-col relative w-full bg-bourdeaux text-porcelain rounded-[4rem] p-22.5 gap-6.5'>
                    <h1 className='editorial text-6xl'>Advocacy</h1>

                    <div className='flex w-full gap-40'>
                        <p className='editorial text-4xl w-[30rem] shrink-0 leading-13'>Advocacy e engajamento de atores por mudanças sistêmicas na filantropia</p>
                        <p className='text-[1.375rem] leading-9'>A estratégia de advocacy busca impulsionar mudanças sistêmicas na filantropia por meio da mobilização e articulação de diferentes atores do ecossistema. Para isso, combinamos apoio e coordenação de iniciativas de advocacy com ações estratégicas de engajamento da sociedade civil. Além disso, promovemos espaços de troca e colaboração que fortalecem a atuação conjunta, incentivando a construção de soluções coletivas para desafios estruturais do setor.</p>
                    </div>

                    <div className='h-0.5 bg-retro-ochre w-1/3' />

                    <div className='flex flex-col gap-7 w-full editorial'>
                        <h1 className='text-5xl'>Tópicos de atuação:</h1>

                        <ul className='flex flex-col gap-7 text-3xl list-disc list-inside marker:text-retro-ochre marker:text-4xl w-fit'>
                            <li>Apoio e coordenação de ações de advocacy</li>
                            <li>Eventos e ações de engajamento de stakeholders e sociedade civil</li>
                            <li>Articulação de atores do ecossistema para atuação conjunta</li>
                        </ul>
                    </div>

                    <img src={ProudHand} alt="Imagem de uma mão" className='absolute bottom-0 right-40  w-[11rem] h-[20rem]' />
                </div>

                <div className='flex flex-col relative w-full bg-rose text-porcelain rounded-[4rem] p-22.5 gap-6.5 overflow-hidden'>
                    <h1 className='editorial text-6xl'>Conhecimento</h1>

                    <div className='flex w-full gap-40'>
                        <p className='editorial text-4xl w-[30rem] shrink-0 leading-14'>Área de estudos, capacitação e discussões sobre Filantropia</p>
                        <p className='text-[1.375rem] leading-9'>Promover conhecimento, capacitação e novas reflexões é um caminho essencial para entender o panorama de informações e pesquisas, tanto em âmbito nacional quanto internacional. Isso inclui a sistematização de dados existentes e o financiamento de novos estudos necessários ao ecossistema. Além disso, fomentar debates entre as lideranças do setor, facilitando a concepção de novos projetos e parcerias com entidades e instituições brasileiras e estrangeiras para criar jornadas filantrópicas.</p>
                    </div>

                    <div className='h-0.5 bg-porcelain w-1/3' />

                    <div className='flex flex-col gap-7 w-full editorial'>
                        <h1 className='text-5xl'>Tópicos de atuação:</h1>

                        <ul className='flex flex-col gap-7 text-3xl list-disc list-inside marker:text-porcelain marker:text-4xl w-fit'>
                            <li>Desenvolvimento e financiamento de estudos e pesquisas</li>
                            <li>Organização e gestão de informações</li>
                            <li>Promoção de debates e troca de conhecimento</li>
                            <li>Aprendizagem</li>
                        </ul>
                    </div>

                    <img src={Clouds} alt="Imagem de nuvens" className='absolute bottom-0 right-0  w-[45rem] h-[20rem]' />
                </div>

                <div className='flex flex-col relative w-full bg-retro-ochre rounded-[4rem] p-22.5 gap-6.5'>
                    <h1 className='editorial text-6xl'>Beja Labs / Laboratórios</h1>

                    <div className='flex w-full gap-40'>
                        <p className='editorial text-4xl w-[35rem] shrink-0 leading-14'>Incubadora de projetos filantrópicos e de impacto escaláveis, replicáveis e mensuráveis</p>
                        <p className='text-[1.375rem] leading-9'>O objetivo deste pilar dedicado à experimentação conjunta,  é desenvolver e apoiar projetos filantrópicos com  múltiplos atores e seus diferentes  policapitais, voltados a promover transformações profundas e relevantes no Brasil. Essa atuação é viabilizada  pelo suporte à medição de impacto, pela sistematização de práticas que possibilitam a replicação de iniciativas bem-sucedidas e pela incorporação de novas tecnologias para ampliar a escala das ações. As experiências e aprendizados decorrentes desses laboratórios também devem contribuir para discussões e pesquisas relativos ao pilar de conhecimento, além de oferecer subsídios a pleitos do pilar de advocacy.</p>
                    </div>

                    <div className='h-0.5 bg-porcelain w-1/3' />

                    <div className='flex flex-col gap-7 w-full editorial'>
                        <h1 className='text-5xl'>Tópicos de atuação:</h1>

                        <ul className='flex flex-col gap-7 text-3xl list-disc list-inside marker:text-porcelain marker:text-4xl [&>li]:w-[40rem]'>
                            <li>Ambiente de colaboração e aprendizagem</li>
                            <li>Acelerar, medir e escalar modelos</li>
                            <li>Testar hipóteses e desenvolver protótipos e metodologias</li>
                            <li>Desenhar percursos de transformação</li>
                            <li>Prototipar novas tecnologias sociais</li>
                            <li>Oferta de soluções para receberem investimentos e serem multiplicadas</li>
                        </ul>
                    </div>

                    <img src={Bush} alt="Imagem de uma mão" className='absolute bottom-0 right-15 w-[42rem] h-[37.5rem]' />
                </div>
            </div>
        </div>
    )
}

export default StrategicPillarSection