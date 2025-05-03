import { EcosystemCapitalProviders } from "./EcosystemCapitalProviders";
import { EcosystemEndSection } from "./EcosystemEndSection";
import { EcosystemIntermediates } from "./EcosystemIntermediates";
import { EcosystemSocialOrganizations } from "./EcosystemSocialOrganizations";

export default function InteractionEcosystem() {
  return (
    <div className='py-6 md:py-20 lg:py-[320px] bg-porcelain'>
      <div className='px-4 md:px-8 lg:px-[132px] flex flex-col gap-4 md:gap-8 lg:gap-14'>
        <h2 className='font-serif text-bourdeaux text-3xl md:text-5xl lg:text-8xl leading-tight md:leading-snug lg:leading-[130px]'>
          Ecossistema de Interações
        </h2>
        <p className='font-sans text-sm md:text-base leading-relaxed max-w-full md:max-w-138'>
          Por meio da colaboração e da coconstrução de estratégias, cultivamos
          espaços de diálogo ativo, incentivando a escuta atenta e o suporte
          mútuo. Esses espaços se fortalecem com a troca de conhecimentos,
          recursos e práticas inovadoras para o setor. A interação neste
          ecossistema nos mantém atentos às capacidades associativas,
          fundamentais para nossas relações.
        </p>
      </div>

      <div className='mt-14 tablet:mt-[120px]'>
        <EcosystemCapitalProviders />
        <EcosystemIntermediates />
        <EcosystemSocialOrganizations />
        <EcosystemEndSection />
      </div>
    </div>
  );
}
