import * as Icon from "@phosphor-icons/react";
import { memo, useContext } from "react";
import { useTranslation } from "react-i18next";
import { GlobalContext } from "../../context/GlobalContext";
import LogoHoverEffect from "./LogoHoverEffect";
import VisitInstitutoBejaLink from "./VisitInstitutoBejaLink";

const GoldGlobe = "/assets/cutedGoldGlobe.webp";

function DownloadButton() {
  const [t] = useTranslation();
  return (
    <a
      href={t("firstSection.downloadUrl")}
      download
      className="absolute bottom-20 not-tablet:mr-15 tablet:bottom-1/5 flex items-center gap-2 tablet:gap-4 z-10 px-0 py-0 group w-fit"
      style={{ textDecoration: "none" }}
    >
      <span className="h-8 w-8 flex items-center justify-center rounded-full bg-porcelain group-hover:bg-rose transition-colors duration-200">
        <Icon.ArrowDown className="size-7 tablet:size-8 text-[#210704] group-hover:text-porcelain transition-colors duration-200" />
      </span>
      <span className="text-base leading-[100%] text-porcelain font-bold whitespace-nowrap group-hover:text-rose transition-colors duration-200">
        {t("firstSection.download")}
      </span>
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

        <div className="flex gap-0.5 items-center ml-2">
  <button
    onClick={() => { setLanguage(false); i18n.changeLanguage("pt"); }}
    className={`px-2 py-1 text-lg font-normal transition-all duration-150
      ${i18n.language === "pt" ? "text-[#B39567]" : "text-white"}
      hover:text-[#B39567]
      bg-transparent border-none outline-none shadow-none focus:outline-none focus:text-[#B39567]`
    }
    aria-current={i18n.language === "pt"}
    style={{ background: 'none', boxShadow: 'none' }}
  >
    PT
  </button>
  <span className="text-bourdeaux font-bold">|</span>
  <button
    onClick={() => { setLanguage(true); i18n.changeLanguage("en"); }}
    className={`px-2 py-1 text-lg font-normal transition-all duration-150
      ${i18n.language === "en" ? "text-[#B39567]" : "text-white"}
      hover:text-[#B39567]
      bg-transparent border-none outline-none shadow-none focus:outline-none focus:text-[#B39567]`
    }
    aria-current={i18n.language === "en"}
    style={{ background: 'none', boxShadow: 'none' }}
  >
    EN
  </button>
</div>
      </div>

      <div className='relative w-full h-[64vh] left-0 tablet:h-[40vh] flex not-tablet:mt-16 '>
        <LogoHoverEffect
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
      <div className="flex flex-col items-start gap-4 z-30 absolute left-8 tablet:left-10 bottom-20 tablet:bottom-24">
        <DownloadButton />
        <div className="mt-60">
          <VisitInstitutoBejaLink />
        </div>
      </div>
    </div>
  );
};

export default memo(FirstSection);
