import Wrapper from "../ui/Wrapper";
import { Images } from "../../assets/Index";
import { NoticeColumn } from "../ui/NoticeColumn";
import ImageSlider from "../Animations/ImageSlider";
import { NoticeContainer } from "../ui/NoticeContainer";

const BejaHouseSection = () => {
  return (
    <div className='flex flex-col relative rounded-[70px]'>
      <img
        src={Images.BejaHouse.EspacoBeja1}
        alt='Espaço Beja image'
        className='object-center w-full aspect-video max-h-210 object-cover'
      />

      <Wrapper>
        <div className='flex flex-col gap-6 text-bourdeaux tablet:gap-16 pt-5 tablet:pt-20 pb-5 tablet:pb-60'>
          <h1 className='editorial text-[28px] leading-[65px] tablet:text-8xl tablet:leading-none'>
            Casa Beja
          </h1>

          <NoticeContainer className='max-w-[980px] self-end'>
            <NoticeColumn>
              <p>
                Com alegria apresentamos a <strong>Casa Beja</strong>, a nova
                morada dos nossos valores. Inaugurada em novembro de 2024, na
                cidade de São Paulo, a <strong>Casa Beja</strong> vai muito além
                de um simples escritório, assim como a sede no Rio de Janeiro, é
                um ambiente vivo onde ideias se encontram, parcerias florescem e
                soluções sistêmicas ganham forma. É aqui que buscamos conectar
                indivíduos e comunidades, semear a cultura da filantropia e
                inspirar ações coletivas que constroem um futuro mais solidário
                e sustentável.
              </p>
            </NoticeColumn>
            <NoticeColumn>
              <p>
                Com grande honra, incubamos o hub Brasil do{" "}
                <strong>Centro para Mudanças Exponenciais</strong>, reafirmando
                nosso compromisso com a inovação e com o impacto social. Este
                espaço é ponto de convergência entre sociedade civil, setor
                privado e governo, unindo forças para criar colaborações que
                impulsionam soluções e transformam realidades sociais de maneira
                eficaz e inclusiva.
              </p>
              <p>
                <strong>A Casa Beja</strong> simboliza{" "}
                <strong>movimento, relações e articulação -</strong> refletindo
                a essência do nosso logo, que ilustra a dinâmica constante entre
                pilares e a busca por equilíbrio nas relações humanas.
              </p>
            </NoticeColumn>
          </NoticeContainer>
        </div>
      </Wrapper>

      <div className='flex-center relative flex-col w-full bg-retro-ochre gap-8 tablet:gap-24 py-26 tablet:py-50'>
        <h1 className='text-lg leading-relaxed tablet:leading-none tablet:text-5xl text-porcelain editorial'>
          Bem-vindo(a) à Casa Beja!
        </h1>
        <ImageSlider
          arr={[
            Images.BejaHouse.EspacoBeja1,
            Images.BejaHouse.EspacoBeja2,
            Images.BejaHouse.BejaHouseCard1,
            Images.BejaHouse.BejaHouseCard2,
            Images.BejaHouse.BejaHouseCard3,
            Images.BejaHouse.BejaHouseCard4,
            Images.BejaHouse.BejaHouseCard5,
            Images.BejaHouse.BejaHouseCard6,
            Images.BejaHouse.BejaHouseCard7,
          ]}
          translateYMiddleImg={"80"}
          imgStyle={{ borderRadius: "40px", overflow: "hidden" }}
          ButtonStyle={"text-retro-ochre bg-porcelain"}
          buttonsClassName={"w-2/3 tablet:w-2/5"}
        />
      </div>
    </div>
  );
};

export default BejaHouseSection;
