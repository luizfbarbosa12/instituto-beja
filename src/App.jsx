import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_desenho_beja from "/assets/logo-desenho-beja.svg";

const App = () => {
  return (
    <>
      {/* // carta fundadora */}
      <div className='flex overflow-clip'>
        <div className='py-16 bg-[var(--rose)] flex-1 relative mx-auto'>
          <img
            src={nuvens}
            alt='imagem de nuvens douradas no fundo'
            className='absolute -top-25 h-100 -left-40'
          />
          <div className='px-10 max-w-[1028px] flex flex-col gap-8 mx-auto z-2 bg-[var(--porcelain)] p-20 rounded-3xl relative'>
            <div className='editorial text-xl flex justify-between'>
              <span>Cristiane Sultani</span>
              <span>(O) Desde 2021</span>
            </div>
            <h1 className='font-bold text-6xl editorial'>Carta da Fundadora</h1>
            <p>
              Estamos vivendo um profundo momento de transição geracional não só
              humana mas também planetária. As notícias diárias sobre conflitos
              nos consomem e nos afetam. Já sabemos que apesar de muitos passos
              dados, ainda estamos devendo a lição de casa sobre questões como
              justiça racial, o caminho sem volta dos avanços tecnológicos, o
              enfraquecimento da democracia, e a urgente necessidade de
              adaptação climática para simples sobrevivência. Ainda assim, temos
              sido lentos na mudança de rumos e, arrisco a dizer, muitas vezes
              até passivos.
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
              acelerada o objetivo que tanto almejamos; uma sociedade mais justa
              e uma vida coletiva mais digna. E isso exige colaboração.
            </p>
            <p>
              Nesses três anos de vida do Instituto Beja, amadurecemos. O que só
              ocorreu porque experimentamos. Nascemos com o espírito de
              colaborar “stricto sensu”, o que significa participar ativamente,
              cooperar, construir junto com nossos pares e outros atores. E
              somente em 2024, conseguimos vislumbrar este tão desejado caminho
              de co-construção, atingindo um objetivo ainda maior, com parcerias
              globais em favorecimento do Sul Global.
            </p>
            <p>
              Entendo, porém, que estamos só no começo e precisamos de reforço.
              Para co-criar, é necessário desapego. E desapego só é possível com
              o sentimento de amor. Se a filantropia significa amor à humanidade
              - e eu acrescentaria amor ao Planeta também -, atualizando as
              nossas necessidades e o termo ao presente momento, desejo que esse
              seja o meu legado de vida. E que o Instituto Beja possa sempre
              inspirar o ecossistema a desapegar, a tomar riscos e a inovar a
              serviço da sociedade.
            </p>
            <p>
              Também estamos na era da nova longevidade e sendo provocados a nos
              reinventar em prol de nós próprios e o que nos atinge
              individualmente também é o que forma o coletivo. Por isso, os
              nossos anseios individuais nunca podem se sobressair à nossa
              missão social.
            </p>
            <p>
              O presente relatório saiu do forno porque cooperamos. E isso é
              música para nossos ouvidos. Espero que vocês o recebam com a mente
              e com o coração abertos. Esse relatório pode e deve ser
              interpretado como um convite para mudarmos juntos os ponteiros das
              nossas entregas, com uma visão integrada e consolidada do nosso
              contexto territorial e global.
            </p>
            <p>
              Todos os nossos pares podem participar dos nossos Laboratórios e
              do Centro de Mudanças Exponenciais, explicados um a um no decorrer
              desse documento, das mais variadas formas. As Casas Beja tanto do
              Rio quanto de SP também estão com as portas abertas para cada uma
              das experiências de colaboração.
            </p>
            <p className='flex flex-col'>
              Com gratidão,
              <span>Cristiane Sultani</span>
            </p>
            <img
              src={logo_desenho_beja}
              alt='Logo da Beja'
              className='h-20 absolute bottom-0 right-0 px-10 py-4 scale-x-[-1]'
            />
          </div>
          <div className='relative w-full h-32 mt-8'>
            <img
              src='/assets/bicicletinha.svg'
              alt='pessoa numa bicicleta em dourado'
              className='absolute h-100 bottom-0 z-1'
            />
          </div>
        </div>
      </div>
      {/* respiro dourado */}
      <div className='bg-[var(--retro-ochre)] h-screen flex-1 editorial text-6xl flex items-center justify-start text-left relative'>
        <p className='w-[1084px] ml-50 flex flex-col gap-8 text-[var(--porcelain)]'>
          <span>Neste relatório anual,</span>
          <span>convidamos você a explorar</span>
          <span>as ações do Instituto Beja em 2024.</span>
        </p>
        <div className='absolute w-full -bottom-120'>
          <div className='w-full aspect-[2/1] overflow-hidden'>
            <div className='w-full h-[400%] rounded-full bg-[var(--porcelain)]'></div>{" "}
          </div>
        </div>
      </div>
      {/* contexto */}
      <div className='bg-[var(--porcelain)] rounded-t-3xl z-10 relative'>
        <h2 className='text-4xl h-screen '>
          Este documento sintetiza as investigações, interações, descobertas e
          reflexões coletivas ao longo dos três anos que nos inspiram
          diariamente a desafiar modelos ultrapassados para a prática de uma
          filantropia que gostamos de denominar como “oxigenada”.
        </h2>
      </div>
    </>
  );
};

export default App;