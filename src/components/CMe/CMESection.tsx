import { useRef } from "react";
import TextBlock from "../ui/TextBlock.js";
import { calcClamp } from "@/data/Utils.js";
import { Images } from "../../assets/Index.js";
import { motion, useScroll, useTransform } from "framer-motion";
import AnimatedHorizontalScroll from "./../ui/AnimatedHorizontalScroll";
import CMEScrollTriggerList from "../ScrollTriggerCard/CMEScrollTriggerList/CMEScrollTriggerList.jsx";
import {
  AEPIE,
  cmeActionList,
  CMEPartners,
  OSList,
  VTCME,
} from "../../data/cmeData.js";

import { ArrowRightLink } from "../ui/ArrowRightLink.js";
import { NoticeContainer } from "../ui/NoticeContainer.js";
import { NoticeColumn } from "../ui/NoticeColumn.js";

const CMESection = () => {
  const targetRef1 = useRef(null);

  const scroll1 = useScroll({
    target: targetRef1,
    offset: ["start end", "end start"],
  });

  const heightAnimation1 = useTransform(
    scroll1.scrollYProgress,
    [0.25, 0.75],
    ["0%", "75%"],
  );

  const targetRef2 = useRef(null);

  const scroll2 = useScroll({
    target: targetRef2,
    offset: ["start end", "end start"],
  });

  const heightAnimation2 = useTransform(
    scroll2.scrollYProgress,
    [0.4, 1],
    ["0%", "75%"],
  );

  const VTCMEmap = VTCME.map((item, index) => (
    <div
      key={index}
      style={{ width: `clamp(${calcClamp(270, 480)})` }}
      className={`flex flex-col ${item.bgColor} gap-3 px-8 py-10 rounded-[2.75rem]`}
    >
      <h1
        style={{ fontSize: `clamp(${calcClamp(14, 20)})` }}
        className='font-bold uppercase'
      >
        {item.title}
      </h1>

      <p style={{ fontSize: `clamp(${calcClamp(12, 16)})` }}>{item.text}</p>
    </div>
  ));

  return (
    <div className='flex flex-col bg-peach w-full gap-50 pb-50 max-1280:gap-25 max-768:gap-20'>
      <div className='flex w-full items-center relative py-32 min-h-screen px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:justify-center max-768:items-start overflow-hidden'>
        <img
          src={Images.CME.CentroME}
          alt='Centro de mudanças exponencias'
          style={{
            width: `clamp(${calcClamp(291, 582)})`,
            height: `clamp(${calcClamp(54, 108)})`,
          }}
          className='max-768:relative max-768:-right-55 max-640:-right-52.5 max-460:-right-50 max-420:-right-45 max-380:-right-40 max-360:-right-36'
        />

        <img
          src={Images.CME.CMEWheel}
          alt='Roda CME'
          className='relative -right-35 max-1280:-right-15 max-1080:-right-0 max-768:top-60 max-768:right-10 max-640:right-20 max-460:right-25'
          style={{
            width: `clamp(${calcClamp(851, 1171)})`,
            height: `clamp(${calcClamp(771, 1062)})`,
          }}
        />
      </div>

      <div className='flex flex-col items-end w-full gap-15 pt-20 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(32, 64)})` }}
          className='text-hot-coral editorial w-full'
        >
          Centro para Mudanças Exponenciais (CMe)
        </h1>

        <NoticeContainer className='max-w-250 self-end'>
          <NoticeColumn>
            <p>
              Em 2024, inauguramos o{" "}
              <strong>Centro para Mudanças Exponenciais (CMe)</strong>, uma
              cocriação brasileira com o{" "}
              <strong>Centre for Exponential Change (C4EC)</strong>. O C4EC é
              uma rede global de apoio que reacende a imaginação e capacita{" "}
              <strong>Orquestradores de Sistemas</strong>, que catalisam
              mudanças exponenciais positivas na construção de uma sociedade
              melhor. Cofundamos o C4EC junto com a{" "}
              <strong>
                Nilekani Philanthropies (Índia), New Profit (EUA), Skoll
                Foundation (Global), Waverley Street Foundation (Global) e
                Yellowwoods (África do Sul).
              </strong>
            </p>
          </NoticeColumn>
          <NoticeColumn>
            <p>
              No Brasil, o CMe atua como um{" "}
              <strong>articulador de ecossistemas</strong>, conectando a
              sociedade civil, o setor privado e o governo para promover
              transformações sistêmicas dentro do contexto único do país. A
              abordagem do CMe valoriza a <strong>ação coletiva</strong>e o uso
              estratégico de <strong>tecnologias digitais</strong>, que, quando
              desenhadas com cuidado, segurança e inclusão, podem enfrentar os
              desafios atuais com velocidade, escala e sustentabilidade.
            </p>

            <p>
              O CMe conta com um comitê multissetorial de embaixadoras e
              embaixadores, composto por{" "}
              <strong>
                Jéssica Silva, Cristiano Franco, Luca Cavalcanti, Saulo Barreto,
                Sheila Pires, Silvana Bahia, Thiago Rached, Cristiane Sultani,
                Sanjay Purohit e Célia Cruz.
              </strong>
            </p>
          </NoticeColumn>
        </NoticeContainer>

        <div className='flex flex-col gap-30 w-[66rem] max-[1325px]:w-full'>
          <div className='flex flex-col gap-8'>
            <div className='flex flex-col gap-2'>
              <div
                style={{ width: `clamp(${calcClamp(220, 580)})` }}
                className='h-0.5 bg-hot-coral'
              />
              <h1
                className='font-bold text-hot-coral'
                style={{ fontSize: `clamp(${calcClamp(16, 32)})` }}
              >
                AÇÕES CENTRAIS DO CMe EM 2024
              </h1>
            </div>

            <ul className='flex flex-col gap-8 list-disc'>
              {cmeActionList.map((item, index) => (
                <div key={index} className='flex gap-4 items-center'>
                  <div className='rounded-full size-4 bg-hot-coral max-768:size-3' />
                  <p
                    className='marker:text-hot-coral marker:text-5xl w-4/5'
                    style={{
                      fontSize: `clamp(${calcClamp(12, 24)})`,
                      lineHeight: `clamp(${calcClamp(12, 24)})`,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className='flex-center px-64 max-1366:px-32 max-950:px-16 max-896:px-8 max-640:px-5'>
        <div className='flex flex-col items-center p-30 relative border-4 border-hot-coral w-full rounded-3xl max-768:p-15 max-640:rounded-2xl max-640:border-3 max-640:px-10 max-380:px-8'>
          <p
            style={{
              fontSize: `clamp(${calcClamp(14, 32)})`,
            }}
            className='uppercase absolute -top-9 py-2 px-3 bg-peach font-bold text-hot-coral max-1366:-top-8 max-1080:-top-7 max-768:-top-6 max-640:-top-5'
          >
            Nossa estratégia
          </p>

          <div className='flex flex-col items-center'>
            <p style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}>
              Rede de Apoio
            </p>

            <p
              style={{ fontSize: `clamp(${calcClamp(12, 20)})` }}
              className='text-center'
            >
              Financiadores | Especialistas em Tecnologia | Colaboradores |
              Mentores Academia
            </p>
          </div>

          <div ref={targetRef1} className='h-60 relative'>
            <motion.div
              style={{ height: heightAnimation1 }}
              className='absolute top-10 w-[1px] bg-bourdeaux rounded origin-top bg-hot-coral'
            >
              <div
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
                className='absolute -left-[5.5px] bottom-0 size-3 bg-hot-coral'
              />
            </motion.div>
          </div>

          <p
            style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
            className='text-center'
          >
            Possibilitar mudança exponencial com Orquestradores de Sistemas
            usando o Pensamento Societal
          </p>

          <div ref={targetRef2} className='h-60 relative'>
            <motion.div
              style={{ height: heightAnimation2 }}
              className='absolute top-10 w-[1px] bg-hot-coral rounded origin-top'
            >
              <div
                style={{
                  clipPath: "polygon(50% 100%, 0 0, 100% 0)",
                }}
                className='absolute -left-[5.5px] bottom-0 size-3 bg-hot-coral'
              />
            </motion.div>
          </div>

          <p
            className='text-center'
            style={{ fontSize: `clamp(${calcClamp(14, 24)})` }}
          >
            Criar impacto em escala societal
          </p>
        </div>
      </div>

      <div className='flex flex-col w-full px-32 max-1280:px-16 max-896:px-8 max-768:px-5'>
        <CMEScrollTriggerList
          arr={AEPIE}
          title={"Orquestrando o Ecossistema para a Mudança Exponencial"}
          paddingTop={
            "pt-90 max-1280:pt-80 max-360:pt-60 max-460:pt-55 max-950:pt-60"
          }
        />
      </div>

      <div className='px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(24, 48)})` }}
          className={`text-cyan font-bold w-full`}
        >
          Visão de Transformação do CMe
        </h1>

        <AnimatedHorizontalScroll map={VTCMEmap} />
      </div>

      <div className='flex flex-col items-end w-full gap-15 pt-20 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(24, 48)})`,
            lineHeight: `clamp(${calcClamp(24 * 1.2, 48 * 1.2)})`,
          }}
          className={`text-cyan font-bold w-full`}
        >
          Jornada Rumo à Mudança Exponencial
        </h1>
        <div className='flex flex-col gap-30 w-[66rem] max-[1325px]:w-full'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      No CMe, caminhamos lado a lado com{" "}
                      <strong>Orquestradores de Sistemas</strong> para{" "}
                      <strong>
                        aprofundar a compreensão de suas grandes missões
                      </strong>
                      , fazendo perguntas e explorando respostas por meio do
                      Modelo de Pensamento Societal, de forma sistemática, para
                      construir redes de adoção e ecossistemas de inovação
                      alavancados por tecnologias digitais de ponta.
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
                    <div className='flex flex-col gap-1'>
                      <h1
                        style={{
                          fontSize: `clamp(${calcClamp(14, 24)})`,
                          lineHeight: `clamp(${calcClamp(14 * 1.3, 24 * 1.3)})`,
                        }}
                        className={`text-cyan font-bold`}
                      >
                        Conheça mais sobre o Centro de Mudanças Exponenciais
                      </h1>

                      <ArrowRightLink
                        href={
                          "https://centreforexponentialchange.org/pt-br/brazil/"
                        }
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
      </div>

      <div className='flex flex-col gap-10 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-640:hidden'>
        <h1
          style={{ fontSize: `clamp(${calcClamp(24, 48)})` }}
          className={`text-cyan font-bold w-full`}
        >
          Jornada de um Orquestrador de Sistemas
        </h1>

        <img src={Images.CME.CMEGrafico} alt='CME Grafico' />
      </div>

      <div className='flex flex-col gap-10 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:gap-5'>
        <h1
          style={{
            fontSize: `clamp(${calcClamp(24, 48)})`,
            lineHeight: `clamp(${calcClamp(24 * 1.2, 48 * 1.2)})`,
          }}
          className={`text-cyan font-bold w-full`}
        >
          Orquestradores de sistema do Brasil
        </h1>

        <div className='flex justify-between gap-10 max-1080:flex-col'>
          <div
            style={{
              fontSize: `clamp(${calcClamp(12, 16)})`,
              lineHeight: `clamp(${calcClamp(12 * 1.5, 16 * 1.5)})`,
            }}
            className='flex flex-col w-[462px] gap-4 max-950:w-full'
          >
            <p>
              Em 2024, anunciamos três{" "}
              <strong>Orquestradores de Sistemas</strong> com os quais vamos
              coconstruir jornadas rumo à mudança exponencial. A escolha desses
              Orquestradores foi recebida com reconhecimento e apoio pelo{" "}
              <strong>Conselho Consultivo Global</strong>
              do <strong>Centre for Exponential Change</strong>, composto por{" "}
              <strong>
                Nilekani Philanthropies, Skoll Foundation, Waverley Street
                Foundation, New Profit
              </strong>{" "}
              e <strong>Instituto Beja.</strong>
            </p>

            <p>
              Estamos entusiasmados com essas jornadas de aprendizado,
              reimaginação e design para promover mudanças exponenciais.
            </p>
          </div>

          <div className='flex flex-col gap-2'>
            <h1
              className='font-bold text-cyan'
              style={{ fontSize: `clamp(${calcClamp(12, 20)})` }}
            >
              Os Orquestradores de Sistemas selecionados são:
            </h1>

            <div className='flex gap-4 max-768:gap-2'>
              {OSList.map((item, index) => (
                <div
                  style={{
                    width: `clamp(${calcClamp(105, 231)})`,
                    height: `clamp(${calcClamp(81, 177)})`,
                  }}
                  key={index}
                  className='bg-porcelain flex-center rounded-3xl p-4 max-768:rounded-xl'
                >
                  <img src={item} alt='Logo' />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className='w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-0'>
        <CMEScrollTriggerList arr={CMEPartners} />
      </div>
    </div>
  );
};

export default CMESection;
