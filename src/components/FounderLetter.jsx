import { useRef } from "react";
import { FoundLetterToContextTransition } from "./FoundLetterToContextTransition";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const nuvens = "/assets/ilustracao-6-5.webp";
const logo_desenho_beja = "/assets/logo-desenho-beja.svg";

const FounderLetter = () => {
  const letterContainerRef = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".letter",
        {
          opacity: 0.7,
          y: 200,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: letterContainerRef.current,
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
          },
        },
      );

      gsap.fromTo(
        ".letter",
        {
          height: "500px",
        },
        {
          height: "auto",
          scrollTrigger: {
            trigger: letterContainerRef.current,

            start: "50% 60%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".letter-text p",
        {
          transformOrigin: "top",
          opacity: 0,
          y: "100%",
        },
        {
          height: "100%",
          opacity: 1,
          y: 0,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".letter",
            start: "top 60%",
            end: "top 0%",
            scrub: 1,
          },
        },
      );

      gsap.fromTo(
        ".beja-logo",
        {
          rotate: "-90deg",
        },
        {
          rotate: "270deg",
          scrollTrigger: {
            trigger: letterContainerRef.current,
            start: "50% 60%",
            end: "top 0%",
            scrub: 2,
          },
        },
      );
    },
    {
      scope: letterContainerRef.current,
    },
  );

  return (
    <>
      {/* // carta fundadora */}
      <div
        ref={letterContainerRef}
        className='relative flex overflow-clip min-h-screen'
      >
        <div className='py-16 bg-[var(--rose)] flex-1 relative mx-auto'>
          <img
            src={nuvens}
            alt='imagem de nuvens douradas no fundo'
            className='absolute w-full h-auto -top-20 right-0'
          />
          <div className='letter overflow-hidden max-w-[1028px] h-auto flex flex-col gap-8 mx-auto z-2 bg-porcelain pl-21 pt-21 pb-21 pr-68 rounded-3xl relative'>
            <div className='editorial text-xl absolute right-20'>
              <span>(O) Desde 2021</span>
            </div>
            <h1 className='font-bold text-8xl editorial mt-50'>
              Carta da Fundadora
            </h1>
            <div className='letter-text flex flex-col gap-8'>
              <p>
                Estamos vivendo um profundo momento de transição geracional não
                só humana mas também planetária. As notícias diárias sobre
                conflitos nos consomem e nos afetam. Já sabemos que apesar de
                muitos passos dados, ainda estamos devendo a lição de casa sobre
                questões como justiça racial, o caminho sem volta dos avanços
                tecnológicos, o enfraquecimento da democracia, e a urgente
                necessidade de adaptação climática para simples sobrevivência.
                Ainda assim, temos sido lentos na mudança de rumos e, arrisco a
                dizer, muitas vezes até passivos.
              </p>{" "}
              <p>
                A fórmula não é complexa: o que está em vigor não funciona mais;
                não alcançamos nossos resultados e a desigualdade só aumenta. A
                tão falada policrise nos assola e exige que usemos nosso
                policapital. Contudo, mais do que isso, exige que o nosso
                policapital esteja à disposição da coletividade.
              </p>{" "}
              <p>
                Tenho insistido em falar da coletivização das nossas
                individualidades como filantropos para promover de forma mais
                acelerada o objetivo que tanto almejamos; uma sociedade mais
                justa e uma vida coletiva mais digna. E isso exige colaboração.
              </p>
              <p>
                Nesses três anos de vida do Instituto Beja, amadurecemos. O que
                só ocorreu porque experimentamos. Nascemos com o espírito de
                colaborar “stricto sensu”, o que significa participar
                ativamente, cooperar, construir junto com nossos pares e outros
                atores. E somente em 2024, conseguimos vislumbrar este tão
                desejado caminho de co-construção, atingindo um objetivo ainda
                maior, com parcerias globais em favorecimento do Sul Global.
              </p>
              <p>
                Entendo, porém, que estamos só no começo e precisamos de
                reforço. Para co-criar, é necessário desapego. E desapego só é
                possível com o sentimento de amor. Se a filantropia significa
                amor à humanidade - e eu acrescentaria amor ao Planeta também -,
                atualizando as nossas necessidades e o termo ao presente
                momento, desejo que esse seja o meu legado de vida. E que o
                Instituto Beja possa sempre inspirar o ecossistema a desapegar,
                a tomar riscos e a inovar a serviço da sociedade.
              </p>
              <p>
                Também estamos na era da nova longevidade e sendo provocados a
                nos reinventar em prol de nós próprios e o que nos atinge
                individualmente também é o que forma o coletivo. Por isso, os
                nossos anseios individuais nunca podem se sobressair à nossa
                missão social.
              </p>
              <p>
                O presente relatório saiu do forno porque cooperamos. E isso é
                música para nossos ouvidos. Espero que vocês o recebam com a
                mente e com o coração abertos. Esse relatório pode e deve ser
                interpretado como um convite para mudarmos juntos os ponteiros
                das nossas entregas, com uma visão integrada e consolidada do
                nosso contexto territorial e global.
              </p>
              <p>
                Todos os nossos pares podem participar dos nossos Laboratórios e
                do Centro de Mudanças Exponenciais, explicados um a um no
                decorrer desse documento, das mais variadas formas. As Casas
                Beja tanto do Rio quanto de SP também estão com as portas
                abertas para cada uma das experiências de colaboração.
              </p>
              <p className='flex flex-col'>
                Com gratidão,
                <span>Cristiane Sultani</span>
              </p>
            </div>
            <img
              src={logo_desenho_beja}
              alt='Logo da Beja'
              className='beja-logo h-32 absolute bottom-10 right-20'
            />
          </div>
        </div>
        <img
          src='/assets/bicicletinha.svg'
          alt='pessoa numa bicicleta em dourado'
          className='absolute h-100 bottom-0 z-1'
        />
      </div>
      {/* respiro dourado */}
      <FoundLetterToContextTransition />
      {/* contexto */}
      <div className='bg-[var(--porcelain)] z-10 relative border border-porcelain flex flex-col items-end px-32'>
        <div className='max-w-250 flex flex-col gap-8 justify-end items-end flex-1 '></div>
      </div>
    </>
  );
};

export default FounderLetter;
