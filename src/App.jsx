import carta_fundadora from "/assets/image-carta-fundadora.png";
import nuvens from "/assets/ilustracao-nuvens.svg";
import logo_desenho_beja from "/assets/logo-desenho-beja.svg";

const App = () => {
  return (
    <div className='flex'>
      <div className='min-w-[870px]'>
        <img
          src={carta_fundadora}
          alt='Imagem da carta fundadora'
          className='relative h-screen w-full object-cover'
        />
        <svg
          className='currentColor fill-[var(--porcelain)] absolute max-h-[200px] bottom-0 translate-x-1/8'
          id='Layer_1'
          xmlns='http://www.w3.org/2000/svg'
          version='1.1'
          viewBox='0 0 1298.5 450'
        >
          <path
            className='st0'
            d='M291.8,92.9c-.5-9.5-7.5-17.1-17.1-17.3-5.5,0-11-.2-16.5-.3,4.8-4.6,9.8-9.1,14.9-13.2,2.2-1.6,4.5-3.2,6.7-4.8,3.7-2.5,6.7-5.9,7.8-10.4,1.1-4.1.6-9.7-1.7-13.3-4.7-7.5-15.5-11.6-23.4-6.2-10.9,7.5-20.9,16-30.3,25.2-.2-3.3-.5-6.6-.7-9.9.2-.6.3-1.1.5-1.7.9-4.4.9-9.5-1.7-13.3-.6-.8-1.1-1.6-1.7-2.5-2.2-3.1-4.6-5.5-8.1-7-3.4-1.5-7.5-2.1-11.1-.9-2.9.9-5.4,2.4-7.6,4.5-3,2.8-5.3,8.2-5,12.2.9,13.6,2,27.1,2.9,40.7-7.3,0-14.7,0-22,.2-32.2.6-64.5,2.4-96.4,6.7-19.3,2.5-38.4,5.8-57.4,10.1-8.7,2.1-14.7,12.7-11.9,21.3,3,9.2,11.7,14.3,21,12.1,16.3-3.8,32.7-6.7,49.1-9.1,33.2-4.4,66.4-6.1,99.8-6.7-4,4.6-8,9.3-12.2,13.9-30.1,33.9-61.5,66.8-94,98.5-18.4,17.8-37.1,35.3-56.1,52.3-6.7,6-6.5,18.4,0,24.4,7.1,6.7,17,6.4,24.1,0,32.6-29.1,64.1-59.5,94.6-90.9,22.4-23.1,44.1-46.8,65.3-71.1,1.7,30.3,3,60.5,3.2,90.9,0,18.3-.2,36.6-1,54.8-.5,9.1,8.1,17.7,17.1,17.3,9.6-.5,16.6-7.6,17.1-17.3,1.5-32.3,1.3-64.8.1-97.2-.9-25.2-2.3-50.4-4-75.5,12.9.2,25.7.5,38.6.7,9,.2,17.4-8.1,17.1-17.3l.3.2Z'
          />
          <path className='st0' d='M291.8,235.9h20.6v151.3h-20.6v-151.3Z' />
          <path
            className='st0'
            d='M334.8,276.8h17.7v15.6c5.2-6.4,10.8-11.1,16.6-13.9,5.8-2.9,12.3-4.2,19.5-4.2,15.6,0,26.3,5.5,31.8,16.4,3,6,4.6,14.6,4.6,25.7v70.8h-18.8v-69.5c0-6.8-1-12.2-3-16.3-3.3-6.9-9.3-10.3-17.9-10.3s-8,.5-10.8,1.4c-5,1.5-9.5,4.6-13.4,9.1-3.1,3.7-5,7.5-6.1,11.2-.9,3.9-1.4,9.4-1.4,16.6v57.8h-18.6v-110.3h-.2Z'
          />
          <path
            className='st0'
            d='M454.7,352.5c.6,6.2,2.2,10.9,4.7,14.2,4.7,6,13.1,8.9,24.8,8.9s13.2-1.5,18.5-4.5c5.3-3,8-7.6,8-13.9s-2.2-8.4-6.4-10.8c-2.8-1.5-8.1-3.2-16.1-5.3l-15-3.7c-9.5-2.3-16.6-4.9-21.1-7.8-8.1-5-12.2-11.9-12.2-20.8s3.8-18.9,11.5-25.3c7.6-6.4,17.9-9.6,30.7-9.6s29,4.9,36.5,14.6c4.7,6.2,6.9,12.8,6.8,20h-17.5c-.3-4.1-1.8-7.9-4.6-11.4-4.4-4.8-11.9-7.2-22.7-7.2s-12.6,1.4-16.3,4c-3.7,2.6-5.5,6.2-5.5,10.6s2.4,8.6,7.2,11.5c2.8,1.7,6.9,3.2,12.4,4.5l12.5,3c13.5,3.2,22.7,6.3,27.3,9.4,7.2,4.7,10.8,12.2,10.8,22.4s-3.8,18.3-11.4,25.5c-7.6,7.1-19,10.7-34.4,10.7s-28.3-3.8-35.3-11.1c-6.9-7.5-10.7-16.6-11.1-27.6h18Z'
          />
          <path
            className='st0'
            d='M544.5,246.1h18.7v30.7h17.7v15.1h-17.7v72c0,3.9,1.3,6.4,3.9,7.7,1.5.8,3.9,1.1,7.2,1.1h2.9c1,0,2.2-.1,3.6-.3v14.7c-2.2.6-4.4,1-6.7,1.4-2.3.2-4.8.5-7.5.5-8.6,0-14.6-2.2-17.7-6.7-3.1-4.5-4.6-10.2-4.6-17.2v-73.1h-14.9v-15.1h14.9v-30.7h.1Z'
          />
          <path
            className='st0'
            d='M590.9,235.9h18.8v21h-18.8v-21ZM590.9,277.4h18.8v109.8h-18.8v-109.8Z'
          />
          <path
            className='st0'
            d='M633,246.1h18.7v30.7h17.7v15.1h-17.7v72c0,3.9,1.3,6.4,3.9,7.7,1.5.8,3.9,1.1,7.2,1.1h2.9c1,0,2.2-.1,3.6-.3v14.7c-2.2.6-4.4,1-6.7,1.4-2.3.2-4.8.5-7.5.5-8.6,0-14.6-2.2-17.7-6.7-3.1-4.5-4.6-10.2-4.6-17.2v-73.1h-14.9v-15.1h14.9v-30.7h.1Z'
          />
          <path
            className='st0'
            d='M697.9,276.8v73.2c0,5.6.9,10.2,2.6,13.8,3.2,6.5,9.2,9.9,18,9.9,12.6,0,21.1-5.7,25.7-17.3,2.5-6.2,3.7-14.7,3.7-25.5v-54.1h18.6v110.3h-17.6l.2-16.3c-2.4,4.2-5.3,7.7-8.8,10.6-7,5.7-15.4,8.6-25.2,8.6-15.5,0-25.9-5.3-31.5-15.7-3-5.6-4.6-13.2-4.6-22.6v-75h18.9v.2Z'
          />
          <path
            className='st0'
            d='M792,246.1h18.7v30.7h17.7v15.1h-17.7v72c0,3.9,1.3,6.4,3.9,7.7,1.5.8,3.9,1.1,7.2,1.1h2.9c1,0,2.2-.1,3.5-.3v14.7c-2.2.6-4.4,1-6.6,1.4-2.3.2-4.8.5-7.5.5-8.6,0-14.6-2.2-17.7-6.7-3.1-4.5-4.6-10.2-4.6-17.2v-73.1h-14.9v-15.1h14.9v-30.7h.1Z'
          />
          <path
            className='st0'
            d='M918.4,287.8c9.8,9.5,14.6,23.4,14.6,41.7s-4.2,32.5-12.8,44c-8.6,11.6-21.9,17.4-40,17.4s-27.1-5.2-35.9-15.4c-8.8-10.2-13.3-24-13.3-41.3s4.7-33.3,14-44.3c9.3-11,21.9-16.5,37.6-16.5s26,4.7,35.8,14.2h.1ZM906.9,361.1c4.5-9.3,6.8-19.6,6.8-31s-1.6-18.7-4.9-25.1c-5.2-10.1-14.1-15.3-26.7-15.3s-19.4,4.4-24.4,13c-5,8.6-7.7,19-7.7,31.3s2.5,21.4,7.7,29.4c5.2,7.9,13.2,11.7,24.2,11.7s20.5-4.7,25-14h.1Z'
          />
          <path
            className='st0'
            d='M1177.2,275.7c8.4,0,14.1-5.4,14.1-13.1s-5.7-13.2-14.1-13.2-14.1,5.3-14.1,13.2,5.8,13.1,14.1,13.1Z'
          />
          <path
            className='st0'
            d='M1255.8,370c-3.3,0-6.1,2.5-6.5,5.8-1.2,9.4-4.5,9.4-5.5,9.4s-3.3,0-3.3-9.5v-54.4c0-20.2-11.7-31.8-32.2-31.8s-21.3,3.8-27.9,10.2c-1-4.8-4.8-8.8-11.7-8.8-14.4,0-26.6,13.6-32.7,21.8-.7.9-1.8,1.4-3,1.3-1.2-.1-2-.8-2.4-2-5.6-14.6-16.3-22.4-30.7-22.4s-29.4,11.9-35.2,32c-.3,1-1,1.7-2.1,2.1-1.2.3-2.2,0-3-.8-4.6-4.5-10.9-7.5-18.3-8.9,24.3-4.8,41.2-20.8,41.2-40.4s-15.7-30.3-42.1-30.3h-49.1c-2.9,0-5.4,1.8-6.2,4.6l-1,3.2h2.3c5.5,0,12,.2,13.5,2.3,1,1.4.3,4.4-1.3,9.2l-35.8,110.8c-3,9.4-6.9,12.2-18.1,12.5-2.8,0-5.2,2-6,4.6l-1,3.3h59.2c27.5,0,51-9.5,62.7-25.5.9-1.3,2.3-1.3,2.8-1.1.9.1,2.1.8,2.5,2.2,5.7,17.3,18,27.3,33.8,27.3s32.2-7.6,37.3-43.8l.2-1.9h-2.9c-3,0-5.5,1.9-6.3,4.8-3.9,15.4-11.4,23.9-21,23.9-13.8,0-22.1-14.7-22.5-39.7h44.6c1.8,0,3.4-.7,4.7-2.1,1.3-1.3,2-3.1,1.8-4.9-.1-2.8-.5-5.4-.8-8h2.5l.5-.8c8.3-12.7,16.1-20.5,20.3-20.5s1,0,1,1.4-2.1,7.6-3.7,12.2l-19,52.4c-12.5,35-19.1,49.7-28.3,49.7s-4.8-1.4-7.1-3.1c-2.6-1.8-5.7-3.9-10.1-3.9-7.3,0-13.8,5.8-13.8,12.4s3.2,9.4,12,9.4c30.6,0,54.5-21.4,68.8-61.9l17.7-48.9c2.1,3.6,5.7,5.6,10.5,5.6s11.2-4,11.2-10.2-.8-4.4-1.5-6.1c-.7-1.6-1.3-3-1.3-4.8,0-4.9,4.5-8,11.2-8s13.2,2.3,13.2,19.6v7.5c0,1.3-.7,2.4-1.8,2.9l-1.2.5c-22.1,9.3-47.2,19.8-47.2,42.8s9.5,23.4,23.3,23.4,21.7-7.1,27.3-19.8c1.4,13.2,7.8,19.8,19,19.8s19-8.5,19.7-25.3v-1.8h-1.7l.2.9ZM1198.9,379.7c-7.9,0-8.7-7.7-8.7-11,0-12.5,11.9-20.5,23.6-26.7.5-.2.9-.3,1.5-.3s1.2.1,1.6.5c.9.6,1.5,1.6,1.5,2.6v13.1s0,.7-.1,1c-4.2,13.1-11.5,20.9-19.3,20.9h-.1ZM1084.4,326c1.8-16.6,7.1-25,15.5-25s12.3,8.3,13,25.2c0,.8-.2,1.6-.9,2.3-.7.7-1.4.9-2.2.9h-22.2c-.9,0-1.7-.3-2.3-1-.6-.7-.9-1.5-.8-2.4ZM1006.2,319.8c3-.2,6.3-.3,10.6-.3,17,0,25.7,7.3,25.7,21.7,0,20.6-17.3,42.1-46.2,42.1s-10.3-1.4-10.9-2.2c-.1-.2-.5-.7,0-1.9l18.2-57c.3-1.1,1.5-2.1,2.6-2.2h0ZM1014.9,308.7h-2.9c-.9,0-1.8-.5-2.4-1.3-.6-.8-.7-1.8-.5-2.8l15.5-47.5c.5-1.5,4.1-2.9,11.4-2.9,15.2,0,22.9,6.3,22.9,18.9,0,19.8-19.4,35.4-44.1,35.4h.1Z'
          />
          <path
            className='st0'
            d='M1273.6,273.8v-3.3c0-1.5-.2-2.5-.6-3.2-.3-.7-1-1.3-2.1-1.6,1.2-.3,1.9-1,2.4-1.9.5-.9.7-2,.7-2.9s-.1-1.5-.3-2.2c-.2-.7-.6-1.3-1-1.7-.6-.7-1.2-1.1-1.9-1.5-.8-.3-1.8-.5-3.3-.6h-10.1v20.4h4.1v-8h4.4c1.3,0,2.2.2,2.6.7.5.5.7,1.3.7,2.6v2c0,.6,0,1.1.2,1.7,0,.2.1.7.2,1.1h4.7v-.5s-.7-.7-.8-1.1h.1ZM1268.5,263.7s-1.3.3-2.2.3h-4.8v-5.5h4.9c.9,0,1.6,0,2.1.3.8.5,1.3,1.3,1.3,2.5s-.5,2-1.3,2.3Z'
          />
          <path
            className='st0'
            d='M1265.1,244c-12.2,0-22,9.9-22,22s9.9,22,22,22,22-9.9,22-22-10-22-22-22ZM1265.1,283.6c-9.6,0-17.5-7.8-17.5-17.5s7.8-17.5,17.5-17.5,17.5,7.8,17.5,17.5-7.8,17.5-17.5,17.5Z'
          />
        </svg>
      </div>

      <div className='py-16 bg-[var(--rose)] flex-1 overflow-y-scroll max-h-[100vh] relative custom-scrollbar'>
        <img
          src={nuvens}
          alt='imagem de nuvens douradas no fundo'
          className='absolute -top-25 h-100 -left-40'
        />
        <div className='max-w-[500px] flex flex-col gap-8 mx-auto z-2 bg-[var(--porcelain)] p-10 rounded-3xl relative'>
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
            enfraquecimento da democracia, e a urgente necessidade de adaptação
            climática para simples sobrevivência. Ainda assim, temos sido lentos
            na mudança de rumos e, arrisco a dizer, muitas vezes até passivos.
          </p>{" "}
          <p>
            A fórmula não é complexa: o que está em vigor não funciona mais; não
            alcançamos nossos resultados e a desigualdade só aumenta. A tão
            falada policrise nos assola e exige que usemos nosso policapital.
            Contudo, mais do que isso, exige que o nosso policapital esteja à
            disposição da coletividade.
          </p>{" "}
          <p>
            Tenho insistido em falar da coletivização das nossas
            individualidades como filantropos para promover de forma mais
            acelerada o objetivo que tanto almejamos; uma sociedade mais justa e
            uma vida coletiva mais digna. E isso exige colaboração.
          </p>
          <p>
            Nesses três anos de vida do Instituto Beja, amadurecemos. O que só
            ocorreu porque experimentamos. Nascemos com o espírito de colaborar
            “stricto sensu”, o que significa participar ativamente, cooperar,
            construir junto com nossos pares e outros atores. E somente em 2024,
            conseguimos vislumbrar este tão desejado caminho de co-construção,
            atingindo um objetivo ainda maior, com parcerias globais em
            favorecimento do Sul Global.
          </p>
          <p>
            Entendo, porém, que estamos só no começo e precisamos de reforço.
            Para co-criar, é necessário desapego. E desapego só é possível com o
            sentimento de amor. Se a filantropia significa amor à humanidade - e
            eu acrescentaria amor ao Planeta também -, atualizando as nossas
            necessidades e o termo ao presente momento, desejo que esse seja o
            meu legado de vida. E que o Instituto Beja possa sempre inspirar o
            ecossistema a desapegar, a tomar riscos e a inovar a serviço da
            sociedade.
          </p>
          <p>
            Também estamos na era da nova longevidade e sendo provocados a nos
            reinventar em prol de nós próprios e o que nos atinge
            individualmente também é o que forma o coletivo. Por isso, os nossos
            anseios individuais nunca podem se sobressair à nossa missão social.
          </p>
          <p>
            O presente relatório saiu do forno porque cooperamos. E isso é
            música para nossos ouvidos. Espero que vocês o recebam com a mente e
            com o coração abertos. Esse relatório pode e deve ser interpretado
            como um convite para mudarmos juntos os ponteiros das nossas
            entregas, com uma visão integrada e consolidada do nosso contexto
            territorial e global.
          </p>
          <p>
            Todos os nossos pares podem participar dos nossos Laboratórios e do
            Centro de Mudanças Exponenciais, explicados um a um no decorrer
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
  );
};

export default App;
