import ImageSlider from "./ImageSlider";
import { bejaCoverImg, keywordImg } from "../data/RebrandingData";
import Wrapper from "./Wrapper";

const Logo = "/assets/LogoRebranding.svg";
const RebrandingSection = () => {
  const bejaCoverImgMap = bejaCoverImg.map((item, index) => (
    <img key={index} src={item} />
  ));

  return (
    <div className='flex flex-col gap-48 w-full overflow-hidden bg-porcelain'>
      <Wrapper>
        <div className='flex flex-col w-full gap-44'>
          <div className='flex flex-col gap-[4rem]'>
            <h1 className='text-8xl editorial w-[100vw]'>Rebranding</h1>

            <div className='flex items-center gap-40 w-full justify-end'>
              <img src={Logo} alt='Beja logo' className='size-60' />

              <div className='w-[31rem] flex flex-col gap-[3rem] text-md'>
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
              </div>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className='flex flex-col gap-65 w-full'>
        <div className='w-full flex flex-col items-center editorial h-fit gap-10'>
          <h1 className='text-4xl'>
            A palavra-chave deste rebranding foi oxigenar.
          </h1>

          <ImageSlider
            arr={keywordImg}
            translateYMiddleImg={"80"}
            ImgWidth={"43rem"}
            ImgHeight={"23rem"}
            ButtonStyle={"bg-bourdeaux text-porcelain"}
          />
        </div>

        <div className='flex justify-between w-full gap-12 pr-32'>
          <div className='grid absolute left-0 grid-cols-3 grid-rows-2 w-[55rem] h-[46.5rem] [&>img]:h-full [&>img]:w-full [&>img]:object-cover '>
            {bejaCoverImgMap}
          </div>

          <div className='flex w-full justify-end'>
            <div className='flex flex-col relative right-0 text-md w-[28.5rem] gap-10'>
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
          <p className='w-[56rem] text-[2.5rem] editorial text-rose'>
            É o Beja de sempre, agora mais maduro, com uma nova linguagem para
            transformar o futuro que já começou.
          </p>
        </div>
      </Wrapper>
    </div>
  );
};

export default RebrandingSection;
