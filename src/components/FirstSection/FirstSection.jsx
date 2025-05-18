import * as Icon from "@phosphor-icons/react";
import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/GlobalContext";

const GoldGlobe = "/assets/cutedGoldGlobe.webp";

function DownloadButton() {
  const [t] = useTranslation();
  return (
    <a
      href={t("firstSection.downloadUrl")}
      download
      className='absolute bottom-20 not-tablet:mr-15 tablet:bottom-1/5 flex items-center justify-self-end gap-2 tablet:gap-4 z-10 px-8'
    >
      <div className='h-8 w-8 tablet:h-10 tablet:w-10 rounded-full bg-rose p-2 flex-center'>
        <Icon.ArrowDown className='size-8 tablet:*:size-10' />
      </div>

      <p className='text-base leading-[100%] text-rose'>
        {t("firstSection.download")}
      </p>
    </a>
  );
}

const FirstSection = () => {
  const { t, i18n } = useTranslation();

  const { setLanguage } = useContext(GlobalContext);

  const onClick = () => {
    setLanguage((prev) => !prev);

    i18n.changeLanguage(i18n.language === "en" ? "pt" : "en");
  };

  return (
    <div className='bg-bourdeaux w-full flex flex-col min-h-screen relative overflow-hidden'>
      <div className='flex w-full justify-between px-8 tablet:px-10 pt-0 tablet:pt-2'>
        <p className='mt-4 tablet:mt-0 editorial text-porcelain text-xl leading-[100%] tablet:text-2xl tablet:max-w-75 max-w-50 tablet:leading-10 whitespace-nowrap'>
          {t("firstSection.title")}
        </p>

        <div className="flex gap-2 items-center">
  <button
    onClick={() => { setLanguage(false); i18n.changeLanguage("pt"); }}
    className={`size-10 rounded-full flex items-center justify-center transition-all duration-150 ${i18n.language === "pt" ? "bg-rose text-white font-bold ring-2 ring-rose" : "bg-porcelain text-bourdeaux"}`}
    aria-current={i18n.language === "pt"}
  >
    PT
  </button>
  <span className="text-bourdeaux font-bold">|</span>
  <button
    onClick={() => { setLanguage(true); i18n.changeLanguage("en"); }}
    className={`size-10 rounded-full flex items-center justify-center transition-all duration-150 ${i18n.language === "en" ? "bg-rose text-white font-bold ring-2 ring-rose" : "bg-porcelain text-bourdeaux"}`}
    aria-current={i18n.language === "en"}
  >
    EN
  </button>
</div>
      </div>

      <div className='relative w-full h-[64vh] left-0 tablet:h-[40vh] flex not-tablet:mt-16 '>
        <img
          src='/assets/LOGO-16.png'
          alt={t("firstSection.logoAlt")}
          className='absolute top-0 w-full z-10 -mt-8 max-w-290'
        />
        <img
          src={GoldGlobe}
          fetchPriority='high'
          loading='eager'
          alt={t("firstSection.globeAlt")}
          className='absolute h-[60vh] w-auto max-w-fit top-2 -right-40 tablet:-right-22 tablet:h-[80vh]'
        />
      </div>
      <DownloadButton />
    </div>
  );
};

export default memo(FirstSection);
