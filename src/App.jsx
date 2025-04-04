import carta_fundadora from "/assets/image-carta-fundadora.png";
import white_logo from "/assets/white-logo-trans.svg";
const App = () => {
  return (
    <div className='flex'>
      <img src={carta_fundadora} alt='Imagem da carta fundadora' className="relative"/>
      <img src={white_logo} alt="Logo do instituto beja" className="absolute bottom-0"/>
      <div className='py-16 bg-[var(--rose)] flex-1'>
        <div className='max-w-[474px] flex flex-col gap-8 mx-auto'>
          <h1 className='font-bold text-[40px] editorial'>
            Carta da Fundadora
          </h1>
          <p>
            Estamos vivendo um profundo momento de transição geracional não só
            humana mas também planetária. As notícias diárias sobre conflitos
            nos consomem e nos afetam. Já sabemos que apesar de muitos passos
            dados, ainda estamos devendo a lição de casa sobre questões como
            justiça racial, o caminho sem volta dos avanços tecnológicos, o
            enfraquecimento da democracia, e a urgente necessidade de adaptação
            climática para simples sobrevivência. Ainda assim, temos sido lentos
            na mudança de rumos e, arrisco a dizer, muitas vezes até
            passivos.{" "}
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
          <cite className="text-2xl self-end pt-8">Cristiane Sultani</cite>
        </div>
      </div>
    </div>
  );
};

export default App;
