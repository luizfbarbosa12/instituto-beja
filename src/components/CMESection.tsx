import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TextBlock from "./TextBlock.js";
import { motion } from "framer-motion";
import LogoCME from "/assets/LogoCME.png";
import ImageCME from "/assets/ImageCME.png";
import AnimatedLine from "./ui/AnimatedLine";
import CMEGrafico from "/assets/CMEGrafico.png";
import CMEGrafico2 from "/assets/CMEGrafico2.png";
import MapBiomasLogo from "/assets/MapBiomas.png";
import SerenasLogo from "/assets/Serenas_logo.svg";
import DesenrolaLogo from "/assets/DesenrolaLogo.png";
import { ArrowRightLink } from "./ui/ArrowRightLink.js";
import { AEPIE, CMEPartners, VTCME } from "../data/cmeData.js";
import CMEScrollTriggerList from "./ScrollTriggerCard/CMEScrollTriggerList/CMEScrollTriggerList";

const CMESection = () => {
  const svgLineRef = useRef(null);

  useGSAP(() => {
    if (svgLineRef.current) {
      const path = svgLineRef.current as SVGPathElement;

      const pathLength = path.getTotalLength();

      gsap.set(path, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
      });

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: path,
          start: "top 80%",
          end: "bottom 10%",
          scrub: true,
        },
      });
    }
  });

  const VTCMEmap = VTCME.map((item, index) => (
    <div
      key={index}
      className={`flex flex-col min-w-115 h-60 ${item.bgColor} gap-3 px-8 py-10 rounded-[2.75rem]`}
    >
      <h1 className='font-bold text-[20px] uppercase '>{item.title}</h1>

      <p className='text-[14px]'>{item.text}</p>
    </div>
  ));

  return (
    <div className='flex flex-col w-full bg-peach text-text-default-black'>
      <div className='flex relative items-center w-full min-h-screen pl-32 overflow-hidden'>
        <img
          src={LogoCME}
          alt='Centro para mudanças exponencias logo'
          className='size-fit'
        />

        <img
          src={ImageCME}
          alt='Representação do CME'
          className='w relative -right-[16rem]'
        />
      </div>

      <div className='flex flex-col px-32'>
        <div className='flex flex-col gap-18 pt-16 items-end'>
          <h1 className='editorial text-hot-coral text-6xl w-full'>
            Centro para Mudanças Exponenciais (CMe)
          </h1>

          <div className='flex flex-col items-end w-[78rem]'>
            <div className='flex gap-16 text-base'>
              <TextBlock
                firstBlock={[
                  {
                    key: "first-0",
                    content: (
                      <>
                        <p>
                          Em 2024, inauguramos o{" "}
                          <strong>
                            Centro para Mudanças Exponenciais (CMe)
                          </strong>
                          , uma cocriação brasileira com o{" "}
                          <strong>Centre for Exponential Change (C4EC)</strong>.
                          O C4EC é uma rede global de apoio que reacende a
                          imaginação e capacita{" "}
                          <strong>Orquestradores de Sistemas</strong>, que
                          catalisam mudanças exponenciais positivas na
                          construção de uma sociedade melhor. Cofundamos o C4EC
                          junto com a{" "}
                          <strong>
                            {" "}
                            Nilekani Philanthropies (Índia), New Profit (EUA),
                            Skoll Foundation (Global), Waverley Street
                            Foundation (Global) e Yellowwoods (África do Sul)
                          </strong>
                          .
                        </p>
                      </>
                    ),
                  },
                ]}
                secondBlock={[
                  {
                    key: "second-0",
                    content: (
                      <>
                        <p>
                          Na Índia, as indústrias de tecnologia colaboram
                          diretamente com o setor público para desenvolver
                          soluções de impacto, combinando investimentos de
                          capital social privado e público de maneira natural e
                          com benefícios mútuos.
                        </p>
                        <p>
                          Entretanto, no Brasil, esse modelo de colaboração
                          ainda é incipiente, devido à ausência de políticas
                          públicas consistentes que incentivem a prototipação e
                          implementação de soluções além da simples contratação
                          de softwares.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </div>

            <AnimatedLine />

            <div className='flex gap-16 text-base'>
              <TextBlock
                firstBlock={[
                  {
                    key: "first-0",
                    content: (
                      <>
                        <p>
                          As funções dessas tecnologias, geralmente
                          impulsionadas pelo esforço da sociedade civil, são
                          financiadas com base em interesses específicos das
                          empresas de capital privado. Isso resulta em
                          orçamentos pontuais que, frequentemente, não incluem a
                          etapa de acompanhamento dos impactos a médio e longo
                          prazo. Como consequência, o financiamento é
                          interrompido, levando à descontinuidade do
                          desenvolvimento e à perda do conhecimento gerado, o
                          que, em última instância, pode tornar os produtos
                          obsoletos.
                        </p>
                        <p>
                          O CMe se estabelece no Brasil para mudar esse cenário,
                          propondo alternativas que incentivem investimentos
                          colaborativos. Inspirado na vasta experiência indiana,
                          o CMe inicia sua jornada identificando potenciais
                          parcerias em tecnologia, políticas públicas,
                          organizações sociais e agentes de transformação social
                          no Brasil.
                        </p>
                      </>
                    ),
                  },
                ]}
                secondBlock={[
                  {
                    key: "second-0",
                    content: (
                      <>
                        <p>
                          Além disso, o CMe reconhece o desafio de ampliar o
                          entendimento do setor brasileiro sobre tecnologias,
                          especialmente em um contexto marcado por disputas em
                          torno da regulação da inteligência artificial. Para o
                          CMe, é fundamental que essas tecnologias sejam
                          utilizadas com responsabilidade, priorizando seus
                          impactos sociais e ambientais.
                        </p>
                        <p>
                          Outro aspecto essencial do CMe é o compromisso com a
                          democratização do acesso.{" "}
                          <strong>
                            Todas as tecnologias desenvolvidas ao longo da
                            jornada são de código aberto (Open Source),
                            permitindo que as ferramentas criadas sejam
                            acessíveis a todos e beneficiem o ecossistema como
                            um todo.
                          </strong>
                        </p>
                        <p>
                          O CMe conta com um comitê multissetorial de
                          embaixadores, composto por Jessica Silva, Cristiano
                          Franco, Luca Cavalcanti, Saulo Barreto,Sheila Pires,
                          Silvana Bahia,Thiago Rached, Cristiane Sultani e
                          Sanjay Purohit.
                        </p>
                      </>
                    ),
                  },
                ]}
              />
            </div>
          </div>

          <div className='flex flex-col gap-10 w-[78rem] pl-48 pt-20'>
            <h1 className='text-[2rem] font-bold w-fit text-hot-coral border-3 border-x-0 border-b-0'>
              AÇÕES CENTRAIS DO CMe EM 2024
            </h1>

            <ul className='flex flex-col gap-11 w-180'>
              <div className='flex items-center gap-5'>
                <div className='size-5 bg-hot-coral rounded-full shrink-0' />
                <p className='text-2xl'>
                  Construção da parceria global e hub nacional;
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='size-5 bg-hot-coral rounded-full shrink-0' />
                <p className='text-2xl'>
                  Lançamento do CMe Hub Brasil em novembro;
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='size-5 bg-hot-coral rounded-full shrink-0' />
                <p className='text-2xl'>
                  Construção do website e das narrativas para comunicação;
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='size-5 bg-hot-coral rounded-full shrink-0' />
                <p className='text-2xl'>
                  Implementação do centro de acordo com os parâmetros originais
                  do C4EC - espaço dedicado para trabalhar a catalização local;
                </p>
              </div>
              <div className='flex items-center gap-5'>
                <div className='size-5 bg-hot-coral rounded-full shrink-0' />
                <p className='text-2xl'>
                  Chamada e seleção de Orquestradores de Sistemas no Brasil.
                </p>
              </div>
            </ul>
          </div>

          <div className='w-full flex-center pt-35 pb-25'>
            <img src={CMEGrafico} alt='Gráfico CME' />
          </div>

          <div className='flex flex-col w-full'>
            <CMEScrollTriggerList
              arr={AEPIE}
              title={"Orquestrando o Ecossistema para a Mudança Exponencial"}
              paddingTop={"pt-100"}
              imgSize={"w-40 h-35"}
            />
          </div>

          <div className='flex flex-col w-full pt-55'>
            <div className='flex flex-col gap-14'>
              <h1 className='w-full text-cyan text-5xl font-bold'>
                Visão de Transformação do CMe
              </h1>

              <div className='w-full overflow-hidden'>
                <motion.div
                  drag='x'
                  dragConstraints={{ left: -800, right: 0 }}
                  className='flex w-full gap-4 pl-100'
                >
                  {VTCMEmap}
                </motion.div>
              </div>
            </div>
          </div>

          <div className='flex flex-col items-end gap-14 w-full pt-40'>
            <h1 className='text-cyan text-5xl font-bold w-full'>
              Jornada de Mudança Exponencial
            </h1>

            <div className='flex justify-between w-[61.5rem] gap-14 text-base'>
              <TextBlock
                firstBlock={[
                  {
                    key: "first-0",
                    content: (
                      <>
                        <p>
                          No CMe, caminhamos lado a lado com{" "}
                          <strong>Orquestradores de Sistemas</strong> para
                          <strong>
                            aprofundar a compreensão de suas grandes missões
                          </strong>
                          , fazendo perguntas e explorando respostas por meio do
                          Modelo de Pensamento Societal, de forma sistemática,
                          para construir redes de adoção e ecossistemas de
                          inovação alavancados por tecnologias digitais de
                          ponta.
                        </p>

                        <p>
                          Juntos, embarcamos em uma jornada para{" "}
                          <strong>
                            Aprender, Reimaginar, Projetar, Construir, Validar,
                            Coordenar e Mobilizar
                          </strong>{" "}
                          para alcançar escala com agilidade e sustentabilidade.
                        </p>
                      </>
                    ),
                  },
                ]}
                secondBlock={[
                  {
                    key: "second-0",
                    content: (
                      <>
                        <div className='flex flex-col w-full gap-4'>
                          <h1 className='text-3xl font-bold text-cyan'>
                            Conheça mais sobre o Centro de Mudanças Exponenciais
                          </h1>

                          <ArrowRightLink
                            iconClassName='fill-rose'
                            href='https://centreforexponentialchange.org/pt-br/brazil/'
                          >
                            Acessar site Centro de Mudanças Exponenciais
                          </ArrowRightLink>
                        </div>
                      </>
                    ),
                  },
                ]}
              />
            </div>

            <div className='flex-center w-full'>
              <img src={CMEGrafico2} alt='Grafico CME' />
            </div>
          </div>

          <div className='flex flex-col items-end gap-14 w-full pt-40'>
            <h1 className='text-cyan text-5xl font-bold w-full'>
              Orquestradores de Sistema do Brasil
            </h1>

            <div className='flex gap-18'>
              <div className='flex flex-col gap-5'>
                <p className='text-base'>
                  Em 2024, anunciamos três{" "}
                  <strong>Orquestradores de Sistemas</strong> com os quais vamos
                  co-construir jornadas rumo à mudança exponencial. A escolha
                  desses Orquestradores foi recebida com reconhecimento e apoio
                  pelo <strong>Conselho Consultivo Global</strong> do{" "}
                  <strong>Centre for Exponential Change</strong>, composto por
                  <strong>
                    Nilekani Philanthropies, Skoll Foundation, Waverley Street
                    Foundation, New Profit
                  </strong>{" "}
                  e <strong>Instituto Beja.</strong>
                </p>

                <p>
                  Estamos entusiasmados com essas jornadas de{" "}
                  <strong>aprendizado, reimaginação e design</strong> para
                  promover mudanças exponenciais.
                </p>
              </div>

              <div className='flex flex-col gap-2'>
                <h1 className='text-cyan text-xl font-bold'>
                  Os Orquestradores de Sistemas selecionados são:
                </h1>

                <div className='flex gap-4'>
                  {[MapBiomasLogo, SerenasLogo, DesenrolaLogo].map(
                    (item, index) => (
                      <div
                        key={index}
                        className='w-50 h-40 p-4 bg-white flex-center rounded-2xl'
                      >
                        <img src={item} alt='Empresa parceira logo' />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col gap-4 w-full pb-40'>
            <CMEScrollTriggerList
              arr={CMEPartners}
              paddingTop='pt-40 '
              imgSize={"w-67 h-52"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CMESection;
