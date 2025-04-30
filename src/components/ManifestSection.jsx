const Bush = "/assets/folhas.png";
const ManifestSection = () => {
  return (
    <div className='relative flex flex-col items-center gap-12 w-full bg-porcelain overflow-hidden pb-40'>
      <div className={"z-10 mx-0 w-full"}>
        <div className='flex justify-between [&>p]:leading-none editorial text-2xl pb-7 mx-6'>
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
          className='flex w-full py-48 tablet:py-48 tablet:w-full bg-size-[auto_100%] not-tablet:bg-position-[-100px_0] bg-no-repeat z-10'
        >
          <div className='flex flex-col justify-start h-full w-full px-6 tablet:pl-50 gap-5 tablet:gap-12 text-porcelain'>
            <h1 className='text-[28px] text-6xl editorial'>Manifesto Beja</h1>

            <p className='text-sm leading-[160%] tablet:text-2xl tablet:leading-10'>
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
              Beja. Oxigenando a filantropia desde 2021.
            </p>
          </div>
        </div>
      </div>

      <img
        src={Bush}
        alt='Bush image'
        className='absolute  not-tablet:scale-130 bottom-12 -right-30 tablet:-right-90 tablet:bottom-0 pointer-events-none'
      />
    </div>
  );
};

export default ManifestSection;
