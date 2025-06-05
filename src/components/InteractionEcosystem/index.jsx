import { Trans, useTranslation } from "react-i18next";
import { EcosystemCapitalProviders } from "./EcosystemCapitalProviders";
import { EcosystemEndSection } from "./EcosystemEndSection";
import { EcosystemIntermediates } from "./EcosystemIntermediates";
import { EcosystemSocialOrganizations } from "./EcosystemSocialOrganizations";

export default function InteractionEcosystem() {
  const [t] = useTranslation();
  return (
    <div className='py-6 md:py-20 lg:py-[40px] bg-porcelain'>
      <div className='px-4 md:px-8 lg:px-[132px] flex flex-col gap-4 md:gap-8 lg:gap-14'>
        <h2 className='font-serif text-bourdeaux text-3xl md:text-5xl lg:text-8xl leading-tight md:leading-snug lg:leading-[130px]'>
          {t("interactionEcosystem.title")}
        </h2>
        <p className='font-sans text-sm md:text-base leading-relaxed max-w-full md:max-w-138'>
          <Trans i18nKey='interactionEcosystem.subtitle' />
        </p>
      </div>

      <div className='mt-8 tablet:mt-[20px]'>
        <EcosystemCapitalProviders />
        <EcosystemIntermediates />
        <EcosystemSocialOrganizations />
        <EcosystemEndSection />
      </div>
    </div>
  );
}
