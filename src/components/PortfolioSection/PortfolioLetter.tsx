const logo_desenho_beja = "/assets/logo-desenho-beja.svg";
const Logo40 = "/assets/LOGO-40.png";

export function PortfolioLetter() {
  return (
    <div className='bg-retro-ochre'>
      <div className='max-w-[1028px] flex flex-col gap-8 mx-auto bg-porcelain rounded-3xl relative'>
        <div className='editorial px-8 pt-16 items-center text-xl flex justify-between'>
          <img src={Logo40} alt='Logo Beja' />
          <span>(O) Desde 2021</span>
        </div>
        <div className='flex flex-col font-serif text-3xl leading-[160%] gap-8 pl-21 pt-21 pr-68'>
          <p>
            "Eu sou a favor do uso do capital social para inovar, porque
            acredito que é um capital que permite a tomada de riscos. Ele
            possibilita a experimentação com novas ferramentas ainda não
            consagradas, novos formatos e tecnologias de pesquisa. Também abre
            espaço para a apropriação de diferentes modelos de prestação de
            serviços e para a ocupação de novos territórios.
          </p>{" "}
          <p>
            O Instituto Beja tem exatamente esse papel: inovar com capital
            social privado. E esse é o meu lugar predileto como filantropa. Eu
            gosto de olhar para o que é diferente. Cada um de nós pode ser
            protagonista de alguma criação, se formos para esse espaço de
            laboratório também. Provavelmente, você tem habilidades diferentes
            das minhas. Sempre brinco na minha casa que minha irmã do meio tem
            solução para tudo. Eu não sou essa pessoa, mas eu sou a pessoa que
            vai atrás do sonho, que tem as ideias.
          </p>{" "}
          <p>
            Cada ser humano se complementa. Ao mesmo tempo em que nos
            individualizamos, também coletivizamos nossa individualidade,
            trazendo esse ‘policapital’ que nos permite pensar diferente. E
            acredito que é obrigação da filantropia ocupar esse espaço de
            conscientização e inovação."
          </p>
          <p> Cristiane Sultani - Fundadora e Presidente</p>
        </div>
        <div className='flex items-end justify-end pr-20 pb-12'>
          <img
            src={logo_desenho_beja}
            alt='Logo da Beja'
            className='h-40 self-end scale-x-[-1]'
          />
        </div>
      </div>
      <div className='relative w-full h-32 mt-8'></div>
    </div>
  );
}
