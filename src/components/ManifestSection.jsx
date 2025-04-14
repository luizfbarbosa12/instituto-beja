import Bush from "../../public/assets/Ilustracao-3.png";
import Wrapper from "./Wrapper";

const ManifestSection = () => {
  return (
    <div className='relative flex flex-col items-center gap-12 w-full bg-porcelain overflow-hidden'>
      <Wrapper className={"z-10"}>
        <div className='flex justify-between w-full [&>p]:leading-none editorial text-2xl'>
          <p>
            www.
            <br />
            institutobeja.org
          </p>
          <p>
            (O)
            <br />
            Desde 2021
          </p>
        </div>

        <div
          style={{ backgroundImage: "url('/assets/ManifestBg.png')" }}
          className='flex py-48 w-[74rem] h-[105rem] bg-center bg-cover z-10'
        >
          <div className='flex flex-col justify-start h-full pl-50 gap-12 text-porcelain'>
            <h1 className='text-6xl editorial'>Manifesto Beja</h1>

            <p className='text-2xl leading-10'>
              Para mudar o mundo, é preciso vontade.
              <br />
              Recursos. Questionamentos.
              <br />
              E quem junte tudo isso.
              <br />
              Mas vá além: escute. <br />
              Troque. Evolua. Inove.
              <br />
              Traga um ar diferente para o sistema.
              <br />
              Ajude ele a respirar.
              <br />
              Que não se conforme.
              <br />
              Veja além do status quo.
              <br />
              Tenha liberdade e segurança <br />
              para trazer um novo ponto de vista.
              <br />
              Não tenha amarras.
              <br />
              E amarre as pontas soltas.
              <br />
              Junte quem quer fazer, quem tem recurso,
              <br />
              quem tem críticas e oxigena tudo, <br />
              para que a solução conjunta possa florescer.
              <br />
              Que seja o agente da renovação.
              <br />
              Aprendamos todos com a natureza: <br />
              nada cresce sem O2.
              <br />
              A vida precisa de ar.
              <br />
              E a filantropia, de novos ares.
              <br />
              Para isso nasceu o Beja: <br />
              articular novas possibilidades para a filantropia, <br />
              oxigenando processos, espaços e relações.
              <br />
              <br />
              <br />
              Beja. Oxigenando a filantropia desde 2021.
            </p>
          </div>
        </div>
      </Wrapper>

      <img
        src={Bush}
        alt='Bush image'
        className='absolute -right-90 bottom-0 pointer-events-none'
      />
    </div>
  );
};

export default ManifestSection;
