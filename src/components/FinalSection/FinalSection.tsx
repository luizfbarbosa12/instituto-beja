import { HorizontalScrollCarousel } from "./HorizontalScrollCarousel";
import { calcClamp } from "@/data/Utils";
import { t } from "i18next";
import { Trans } from "react-i18next";
import ImageSlider from "../Animations/ImageSlider";
import TextBlock from "../ui/TextBlock";
import { Images } from "./../../assets/Index";

const FinalSection = () => {
  return (
    <div className='flex flex-col bg-porcelain'>
      <img
        src={Images.Filantropando.FilantropandoBanner}
        alt={t("philanthropy.bannerAlt")}
        className='w-full'
      />

      <div className='flex flex-col justify-start gap-15 w-full py-15 pb-30 px-32 max-1280:px-16 max-1280:gap-14 max-896:px-8 max-896:gap-12 max-640:px-5 max-640:gap-4 max-640:py-10 max-640:pb-15'>
        <h1
          className='editorial'
          style={{ fontSize: `clamp(${calcClamp(28, 96)})` }}
        >
          <Trans i18nKey='finalSection.title' />
        </h1>

        <div className='w-full flex justify-end'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='finalSection.p1' />
                    </p>
                    <p>
                      <Trans i18nKey='finalSection.p2' />
                    </p>
                    <p>
                      <Trans i18nKey='finalSection.p3' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='finalSection.p4' />
                    </p>

                    <p>
                      <Trans i18nKey='finalSection.p5' />
                    </p>
                  </>
                ),
              },
            ]}
          />
        </div>

        <HorizontalScrollCarousel />
      </div>
    </div>
  );
};

export default FinalSection;
