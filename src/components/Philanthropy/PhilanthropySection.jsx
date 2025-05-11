import gsap from "gsap";
import Axle from "./Axle";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import TextBlock from "../ui/TextBlock";
import { Images } from "../../assets/Index";
import { calcClamp } from "../../data/Utils";
import ImageSlider from "../Animations/ImageSlider";
import ExternalLinkContainer from "./../ui/ExternalLinkContainer";

const PhilanthropySection = () => {
  const axisContainer = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        ".axis-1 .axis-line",
        {
          transformOrigin: "center top",
          scaleY: 0.2,
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".axis-1",
            start: "top 30%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        },
      );
      gsap.fromTo(
        ".axis-2 .axis-line",
        {
          transformOrigin: "center top",
          scaleY: 0.2,
        },
        {
          scaleY: 1,
          scrollTrigger: {
            trigger: ".axis-2",
            start: "top 30%",
            end: "bottom 20%",
            scrub: 0.5,
          },
        },
      );
    },
    { scope: axisContainer },
  );

  const firstCardList = [
    {
      title: "Painel 1",
      subtitle: "Filantropia e futuros ancestrais",
      text: "Com Josimara Baré em diálogo com Geci Karuri-Sebina, mediado por Paula Miraglia",
      link: "https://www.youtube.com/watch?v=Dj_hPbwo090",
      bgColor: "bg-gold-ember",
      starColor: "fill-copper",
    },
    {
      title: "Painel 2",
      subtitle: "Infraestruturas de Imaginação",
      text: "Com Yoanna Okwesa em diálogo com Ondřej Liska, mediado por Paula Miraglia",
      link: "https://www.youtube.com/watch?v=qhl6yX23MKs",
      bgColor: "bg-copper",
      starColor: "fill-gold-ember",
    },
  ];
  const secondCardList = [
    {
      title: "Painel 3",
      subtitle: "Filantropia no mundo da Inteligência Artificial",
      text: "Com Sanjay Purohit em diálogo com Nishant Shah e Nina Santos, mediado por Paula Miraglia",
      link: "https://www.youtube.com/watch?v=QvbkvITW3cM",
      bgColor: "bg-gold-ember",
      starColor: "fill-copper",
    },
  ];

  return (
    <div className='flex flex-col bg-light-peach'>
      <img
        src={Images.Filantropando.FilantropandoBanner}
        alt='Falando sobre filantropia'
        className='w-full'
      />

      <div className='flex flex-col justify-start gap-15 w-full pt-15 pb-30 px-32 max-1280:px-16 max-1280:gap-14 max-896:px-8 max-896:gap-12 max-640:px-5 max-640:gap-4 max-640:pt-10 max-640:pb-15'>
        <h1
          className='editorial'
          style={{ fontSize: `clamp(${calcClamp(28, 96)})` }}
        >
          Filantropando
        </h1>

        <div className='w-full flex justify-end'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      O <strong>Instituto Beja</strong> deu início, em 2022, ao
                      movimento <strong>Filantropando</strong> com o objetivo de
                      criar espaços de diálogos concretos sobre as
                      transformações necessárias para impulsionar a filantropia
                      brasileira. Fundamentado na revitalização do ecossistema e
                      na introdução de novas ideias e práticas, o movimento
                      busca estimular a troca e expansão de perspectivas.
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
                      Em 2024, a 3ª edição do <strong>Filantropando</strong>{" "}
                      teve como tema central <strong>Imaginar Futuros</strong>,
                      com curadoria do <strong>Instituto Toriba</strong> e
                      direção de arte de <strong>Batman Zavareze</strong> e
                      equipe. O evento reuniu cerca de 200 convidados. A edição
                      ressaltou a importância de ressignificar a filantropia ao
                      questionar modelos tradicionais e estimular o desaprender
                      das práticas convencionais, por meio de um enfoque na
                      colaboração e cocriação.
                    </p>

                    <p>
                      A necessidade de imaginar e construir futuros mais
                      disruptivos, que abracem riscos, experimentem novas
                      abordagens, desafiem referências e rompam paradigmas
                      tornou-se uma prioridade emergente no mundo.
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>
      </div>

      <div className='flex items-center relative flex-col bg-gold-ember w-full px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
        <div className='w-full flex justify-center relative overflow-hidden'>
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt='Bolinhas'
            className='object-contain rotate-10 -top-30 relative'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>

        <div
          style={{ gap: `clamp(${calcClamp(5, 50)})` }}
          className='flex justify-between items-center w-full'
        >
          <div
            style={{
              fontSize: `clamp(${calcClamp(14, 48)})`,
              lineHeight: `clamp(${calcClamp(14 * 1.2, 48 * 1.2)})`,
            }}
            className='flex flex-col gap-10'
          >
            <p className='editorial'>
              É hora de abrir espaço para novas agendas.
            </p>
            <p className='editorial'>
              É hora de desconstruir, reaprender e cocriar.
            </p>
            <p className='editorial'>
              É hora de oxigenar o ecossistema da filantropia.
            </p>
          </div>

          <div className='flex flex-col'>
            <img
              src={Images.Filantropando.FilantropandoCCF}
              alt='Conectando compromisso e futuro'
              className='shrink-0'
              style={{
                width: `clamp(${calcClamp(190, 568)})`,
                height: `clamp(${calcClamp(100, 307)})`,
              }}
            />
            <img
              src={Images.Filantropando.FilantropandoBoasAcoes}
              alt='Filantropando boas ações'
              className='shrink-0'
              style={{
                width: `clamp(${calcClamp(91, 360)})`,
                height: `clamp(${calcClamp(28, 110)})`,
              }}
            />
          </div>
        </div>

        <div
          style={{ height: `clamp(${calcClamp(400 / 2, 400)})` }}
          className='w-full flex justify-center relative'
        >
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt='Bolinhas'
            className='object-contain rotate-240 -left-[30%] -bottom-8 absolute'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />

          <img
            style={{
              width: `clamp(${calcClamp(34, 110)})`,
              height: `clamp(${calcClamp(34, 110)})`,
            }}
            src={Images.Filantropando.FilantropandoStar}
            alt='Estrela'
            className='relative right-20 top-10 max-640:right-0'
          />
        </div>
      </div>

      <div
        ref={axisContainer}
        style={{ gap: `clamp(${calcClamp(30, 120)})` }}
        className='flex flex-col gap-30 py-40 px-32 max-1280:px-16 max-896:px-8 max-640:px-5 max-768:py-20 max-640:py-15'
      >
        <h1
          style={{
            fontSize: `clamp(${calcClamp(18, 32)})`,
            lineHeight: `clamp(${calcClamp(18 * 1.2, 32 * 1.2)})`,
          }}
          className='editorial text-3xl'
        >
          A 3ª edição foi organizada em torno de dois eixos principais:
        </h1>

        <Axle
          axle={"Eixo 1"}
          title={
            "A filantropia e os futuros possíveis, futuros emergentes, futuros ancestrais"
          }
          subtitle={
            "Como eu não pensei nisso antes? O que mais é preciso apreender?"
          }
          text={[
            "O olhar para o futuro, já presente nas práticas ancestrais, nos convida a abraçar mudanças significativas e adotar valores que refletem uma compreensão mais diversa e abrangente das necessidades da sociedade. Este eixo desafia a perpetuação de narrativas dominantes, instigando a criação de uma multiplicidade de perspectivas que reimagina a história como nossa história.",
            "Esse movimento destaca temas frequentemente invisibilizados, que demandam maior atenção e aprofundamento, e propõe uma descentralização da tomada de decisão. Ao sair de uma perspectiva individual para uma visão compartilhada de responsabilidades, somos convidados a acolher o desconforto que acompanha as mudanças coletivas. Isso exige: compreender as dinâmicas de poder que moldam as relações sociais e econômicas; coragem para assumir riscos; romper paradigmas e expandir referências e construção de uma representatividade mais equitativa.",
          ]}
          data={firstCardList}
        />

        <Axle
          axle={"Eixo 2"}
          title={"Tecnologia para Transformar"}
          subtitle={"Tecnologia a serviço de quem?"}
          text={[
            "As Big Techs ditam as regras sobre pensamentos e conexões em redes, sob uma perspectiva desumanizadora. A disparidade nas abordagens para regulamentar a ética digital expõe disputas de influência e lacunas de representatividade cultural, perpetuando desigualdades no acesso e educação digital.",
            "A interação entre filantropia e tecnologia enfrenta desafios de desigualdade. O que chamávamos de 'futurismo' agora exige desconstruir visões de futuro descontextualizadas, vazias de realidades humanas diversas. Tecnologias digitais não são neutras - moldam percepções, relações e dinâmicas de poder.",
            "Em contextos de governança e direitos humanos, as tecnologias transformam subjetividades e experiências. Diante da crítica insuficiente ao status quo que homogeneiza culturas a partir do Norte Global, questiona-se: como reumanizar a tecnologia e inovação em meio a mudanças exponenciais?",
          ]}
          data={secondCardList}
        />
      </div>

      <div className='flex items-center relative flex-col bg-gold-ember w-full'>
        <div className='w-full flex justify-center relative overflow-hidden  px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt='Bolinhas'
            className='object-contain rotate-10 -top-30 relative'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>

        <div className='flex flex-col gap-26 w-full'>
          <ImageSlider
            arr={[
              Images.Filantropando.FilantropiaSlider1,
              Images.Filantropando.FilantropiaSlider2,
              Images.Filantropando.FilantropiaSlider3,
              Images.Filantropando.FilantropandoCard2,
              Images.Filantropando.FilantropandoCard3,
              Images.Filantropando.FilantropandoCard4,
              Images.Filantropando.FilantropandoCard5,
              Images.Filantropando.FilantropandoCard6,
              Images.Filantropando.FilantropandoCard7,
            ]}
            translateYMiddleImg={"60"}
            ImgWidth={"35rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-aged-oak text-gold-ember"}
          />

          <div className='px-32 max-1280:px-16 max-896:px-8 max-640:px-5'>
            <ExternalLinkContainer
              title={"Conheça a relatoria completa do Filantropando 2024"}
              subtitle={"Acesse aqui"}
              link={"https://relatorio.filantropando.org/"}
            />
          </div>
        </div>

        <div
          style={{ height: `clamp(${calcClamp(400 / 2, 400)})` }}
          className='w-full flex justify-center relative px-32 max-1280:px-16 max-896:px-8 max-640:px-5'
        >
          <img
            src={Images.Filantropando.BubblesFilantropando}
            alt='Bolinhas'
            className='object-contain rotate-240 -left-[30%] -bottom-8 absolute'
            style={{
              width: `clamp(${calcClamp(506 / 2, 506)})`,
              height: `clamp(${calcClamp(400 / 2, 400)})`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PhilanthropySection;
