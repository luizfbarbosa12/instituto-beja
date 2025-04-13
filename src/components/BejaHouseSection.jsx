import EspacoBeja from "../../public/assets/EspacoBeja.png";
import EspacoBeja2 from "../../public/assets/EspacoBeja2.png";
import EspacoBeja3 from "../../public/assets/EspacoBeja3.png";
import ImageSlider from "./ImageSlider";
import TextBlock from "./TextBlock";

const BejaHouseSection = () => {
  return (
    <div className='flex flex-col relative rounded-[70px]'>
      <div className='relative -left-29 max-w-none w-screen'>
        <img src={EspacoBeja} alt='Espaço Beja image' className='' />
      </div>

      <div className='flex flex-col gap-[3.7rem] py-[6.5rem]'>
        <h1 className='editorial text-8xl'>Casa Beja</h1>

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    Com alegria apresentamos a <strong>Casa Beja</strong>, a
                    nova morada dos nossos valores. Inaugurada em novembro de
                    2024, na cidade de São Paulo, a <strong>Casa Beja</strong>{" "}
                    vai muito além de um simples escritório, assim como a sede
                    no Rio de Janeiro, é um ambiente vivo onde ideias se
                    encontram, parcerias florescem e soluções sistêmicas ganham
                    forma. É aqui que buscamos conectar indivíduos e
                    comunidades, semear a cultura da filantropia e inspirar
                    ações coletivas que constroem um futuro mais solidário e
                    sustentável.
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
                    Com grande honra, incubamos o hub Brasil do{" "}
                    <strong>Centro para Mudanças Exponenciais</strong>,
                    reafirmando nosso compromisso com a inovação e com o impacto
                    social. Este espaço é ponto de convergência entre sociedade
                    civil, setor privado e governo, unindo forças para criar
                    colaborações que impulsionam soluções e transformam
                    realidades sociais de maneira eficaz e inclusiva.
                  </p>
                  <p>
                    <strong>A Casa Beja</strong> simboliza{" "}
                    <strong>movimento, relações e articulação -</strong>{" "}
                    refletindo a essência do nosso logo, que ilustra a dinâmica
                    constante entre pilares e a busca por equilíbrio nas
                    relações humanas.
                  </p>
                </>
              ),
            },
          ]}
        />
      </div>

      <div className='flex-center relative flex-col w-screen max-w-none -left-29 bg-retro-ochre gap-24 py-50'>
        <h1 className='text-5xl text-porcelain editorial'>
          Bem-vindo(a) à Casa Beja!
        </h1>

        <ImageSlider
          arr={[EspacoBeja, EspacoBeja2, EspacoBeja3]}
          translateYMiddleImg={"80"}
          ImgWidth={"47rem"}
          ImgHeight={"31rem"}
          ImgStyle={{ borderRadius: "70px" }}
          ButtonStyle={"text-retro-ochre bg-porcelain"}
        />
      </div>
    </div>
  );
};

export default BejaHouseSection;
