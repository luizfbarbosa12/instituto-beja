import Wrapper from "../ui/Wrapper";
import { NoticeColumn } from "../ui/NoticeColumn";
import { SectionTitle } from "../ui/SectionTitle";
import ImageSlider from "../Animations/ImageSlider";
import { NoticeContainer } from "../ui/NoticeContainer";
import {
  Carousel,
  CarouselItem,
  CarouselDots,
  CarouselContent,
} from "../ui/carousel";
import {
  keywordImg,
  bejaCoverImgs,
  bejaCoverImgsMobile,
} from "@/data/RebrandingData";

const Logo = "/assets/beja-logo-animada-marrom.gif";
const RebrandingSection = () => {
  const bejaCoverImagesMap = bejaCoverImgs.map((item, index) => (
    <img className='select-none' key={index} src={item} alt='' />
  ));

  return (
    <div className='flex flex-col gap-8 tablet:gap-30 mt-22.5 tablet:mt-75 w-full overflow-hidden bg-porcelain'>
      <div className='flex flex-col w-full gap-6 tablet:gap-44'>
        <div className='flex flex-col gap-[4rem] tablet:mx-25'>
          <SectionTitle title='Rebranding' />

          <div className='flex tablet:items-center flex-col tablet:flex-row gap-10 tablet:gap-40 w-full justify-end'>
            <NoticeContainer className='max-w-250 self-end'>
              <NoticeColumn>
                <img
                  src={Logo}
                  alt='Beja logo'
                  className='self-center size-60 tablet:size-80'
                />
              </NoticeColumn>
              <NoticeColumn>
                <p>
                  Desenvolver o rebranding do <strong>Instituto Beja </strong>
                  representou mais do que um desafio criativo – foi um mergulho
                  para repensar a forma como nos apresentamos ao mundo. Liderado
                  pela agência <strong>AKQA</strong>, esse processo teve como
                  objetivo criar um espaço visual e narrativo que não apenas
                  inspirasse, mas também convidasse à ação – articulando
                  possibilidades, conectando pessoas e provocando mudanças
                  reais.
                </p>
                <p>
                  Guiado pela missão de promover impacto no campo da
                  filantropia, o <strong>Instituto Beja</strong> atua como um
                  organismo vivo, fluido, abrangente e diverso que estimula e
                  promove ambientes para conexões e transformações. Nossa
                  essência está na pluralidade das vozes que nos compõem e nas
                  relações que cultivamos. O desafio consistiu em manter essa
                  riqueza, enquanto criávamos uma comunicação clara, objetiva e
                  capaz de refletir nossa força e autenticidade.
                </p>
              </NoticeColumn>
            </NoticeContainer>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-14 tablet:gap-65 w-full'>
        <div className='w-full flex flex-col tablet:items-center editorial h-fit gap-14 tablet:gap-10'>
          <h1 className='text-2xl not-tablet:max-w-75 not-tablet:px-6 leading-[160%] tablet:text-4xl'>
            A palavra-chave deste rebranding foi oxigenar.
          </h1>

          <ImageSlider
            arr={keywordImg}
            translateYMiddleImg={80}
            ImgWidth={"43rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-bourdeaux text-porcelain"}
            className='not-tablet:hidden'
          />
        </div>

        <div className='flex justify-between flex-col tablet:flex-row w-full gap-12 mx-auto'>
          <Carousel className='tablet:hidden' opts={{ align: "center" }}>
            <CarouselContent className='w-full'>
              {bejaCoverImgsMobile.map((item, index) => (
                <CarouselItem
                  className='items-center justify-center flex'
                  key={index}
                >
                  <img src={item} alt='' />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselDots />
          </Carousel>

          <div className='flex w-full gap-4 justify-center'>
            <div className='hidden tablet:grid tablet:grid-cols-3 desktop:grid-cols-3 grid-rows-2 [&>img]:h-full [&>img]:w-full [&>img]:object-cover '>
              {bejaCoverImagesMap}
            </div>
            <div className='flex flex-col relative right-0 text-xs leading-[160%] tablet:text-lg mx-6 tablet:w-[28.5rem] gap-10 text-bourdeaux'>
              <p>
                Nosso foco estava em revitalizar a marca, explorando caminhos
                criativos para contar quem somos e o que nos torna únicos. Em um
                processo colaborativo, envolvendo diálogos com nossa equipe,
                parceiros e comunidades que fazem parte do Beja, escutamos
                histórias, exploramos simbolismos e traduzimos ideias em uma
                identidade visual e verbal alinhada ao nosso propósito.
              </p>
              <p>
                O coração deste trabalho está sintetizado em nosso manifesto:
                articular novas possibilidades para a filantropia, oxigenando os
                meios, os espaços e as relações. É com essa visão que traduzimos
                o Beja agora, por meio de palavras e ações, sempre movidos pelo
                desejo de estimular e assistir a uma transformação social
                profunda. Acreditamos que mudar o mundo exige escuta ativa,
                troca de saberes, inovação e a capacidade de amarrar pontas
                soltas, sempre com a colaboração no centro de cada processo.
              </p>
              <p>
                Mais do que uma nova representação visual, o rebranding reafirma
                quem somos e aquilo em que acreditamos. Nosso novo logotipo
                simboliza movimento, intersecção e conexão, ilustrando a
                essência do Instituto como articulador de uma filantropia
                colaborativa.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Wrapper>
        <div className='flex w-full justify-end pb-30'>
          <p className='tablet:w-[56rem] text-lg leading-[160%] tablet:text-[2.5rem] editorial text-rose'>
            É o Beja de sempre, agora mais maduro, com uma nova linguagem para
            transformar o futuro que já começou.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default RebrandingSection;
