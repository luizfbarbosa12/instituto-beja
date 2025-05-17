import PinkBox from "../ui/PinkBox";
import LabSection from "./LabSection";
import TopicList from "./../ui/TopicList";
import TextBlock from "./../ui/TextBlock";
import { Images } from "../../assets/Index";
import { calcClamp } from "../../data/Utils";
import PartnerSection from "../ui/PartnerSection";
import AnimatedLetter from "../ui/AnimatedLetter";
import { Trans, useTranslation } from "react-i18next";
import TopicListWithSub from "./../ui/TopicListWithSub";
import GoldenQuoteSlider from "./../ui/GoldenQuoteSlider";
import { PortfolioSectionVentTransition } from "./../PortfolioSection/PortfolioSectionVentTransition";

const BejaLabs = () => {
  const { t } = useTranslation();

  return (
    <div className='flex flex-col items-end w-full overflow-hidden pb-90'>
      <PortfolioSectionVentTransition />

      <AnimatedLetter
        text={t("bejaLabs.sections.animatedLetter", {
          returnObjects: true,
        })}
      />

      <PartnerSection
        section={<Trans i18nKey='bejaLabs.title' />}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        title={<Trans i18nKey='bejaLabs.sections.ashoka.title' />}
        subtitle={<Trans i18nKey='bejaLabs.sections.ashoka.subtitle' />}
        partnerName={<Trans i18nKey='bejaLabs.sections.ashoka.partnerName' />}
        partnerImg={[
          Images.Logos.AshokaLogo,
          Images.Logos.InstitutoBejaLogo,
          Images.Logos.ItauViverMais,
        ]}
        subCards={[
          Images.Secoes.JusticaRacial,
          Images.Secoes.EquidadeGenero,
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
        ]}
      >
        <GoldenQuoteSlider
          cite={<Trans i18nKey='bejaLabs.sections.ashoka.quotes.quote1.cite' />}
          arr={t("bejaLabs.sections.ashoka.quotes.quote1.quote", {
            returnObjects: true,
          })}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='bejaLabs.sections.ashoka.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='bejaLabs.sections.ashoka.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='bejaLabs.sections.ashoka.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={
            <Trans i18nKey='bejaLabs.sections.ashoka.topicList.list1.title' />
          }
          list={t("bejaLabs.sections.ashoka.topicList.list1.topics", {
            returnObjects: true,
          })}
          decimal={false}
        />
      </PartnerSection>

      <LabSection
        title={<Trans i18nKey='bejaLabs.sections.ecosystemMap.title' />}
        section={<Trans i18nKey='bejaLabs.title' />}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        bgColor={"bg-rose"}
        topImg={Images.BejaLabs.MapeamentoBrasil}
        topImgStyle={{ w: 320, maxW: 1491, h: 320, maxH: 1155 }}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='bejaLabs.sections.ecosystemMap.blocks.block1.fs.p1' />
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />

        <TopicList
          title={
            <Trans i18nKey='bejaLabs.sections.ecosystemMap.topicList.list1.title' />
          }
          list={t("bejaLabs.sections.ecosystemMap.topicList.list1.topics", {
            returnObjects: true,
          })}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='bejaLabs.sections.ecosystemMap.blocks.block2.fs.p1' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={
              <Trans i18nKey='bejaLabs.sections.ecosystemMap.topicList.list2.title' />
            }
            list={t("bejaLabs.sections.ecosystemMap.topicList.list2.topics", {
              returnObjects: true,
            })}
          />
        </div>

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='bejaLabs.sections.ecosystemMap.blocks.block3.fs.p1' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={
              <Trans i18nKey='bejaLabs.sections.ecosystemMap.topicList.list3.title' />
            }
            list={t("bejaLabs.sections.ecosystemMap.topicList.list3.topics", {
              returnObjects: true,
            })}
          />
        </div>
      </LabSection>

      <LabSection
        title={<Trans i18nKey='bejaLabs.sections.reputationLab.title' />}
        section={<Trans i18nKey='bejaLabs.title' />}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        topImg={Images.Ilustracoes.Bush}
        topImgStyle={{ w: 221, maxW: 751, h: 193, maxH: 659 }}
        topImgCss={"-left-40"}
      >
        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='bejaLabs.sections.reputationLab.blocks.block1.fs.p1' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={
              <Trans i18nKey='bejaLabs.sections.reputationLab.topicList.list1.title' />
            }
            list={t("bejaLabs.sections.reputationLab.topicList.list1.topics", {
              returnObjects: true,
            })}
          />
        </div>

        <TopicList
          title={
            <Trans i18nKey='bejaLabs.sections.reputationLab.topicList.list2.title' />
          }
          list={t("bejaLabs.sections.reputationLab.topicList.list2.topics", {
            returnObjects: true,
          })}
        />

        <TopicList
          title={
            <Trans i18nKey='bejaLabs.sections.reputationLab.topicList.list3.title' />
          }
          list={t("bejaLabs.sections.reputationLab.topicList.list3.topics", {
            returnObjects: true,
          })}
        />
      </LabSection>

      <LabSection
        title={
          <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.title' />
        }
        section={<Trans i18nKey='bejaLabs.title' />}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        topImg={Images.BejaLabs.Globe}
        topImgStyle={{ w: 221, maxW: 751, h: 193, maxH: 659 }}
        topImgCss={"-left-20"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.blocks.block1.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicListWithSub
          title={
            <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.topicList.list1.title' />
          }
          list={t(
            "bejaLabs.sections.newNarrativeProduction.topicList.list1.topics",
            {
              returnObjects: true,
            },
          )}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.blocks.block2.fs.p1' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={
              <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.topicList.list2.title' />
            }
            list={t(
              "bejaLabs.sections.newNarrativeProduction.topicList.list2.topics",
              {
                returnObjects: true,
              },
            )}
          />
        </div>

        <PinkBox>
          <p>
            <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.pinkBlock' />
          </p>
        </PinkBox>

        <GoldenQuoteSlider
          cite={
            <Trans i18nKey='bejaLabs.sections.newNarrativeProduction.quotes.quote1.cite' />
          }
          arr={t(
            "bejaLabs.sections.newNarrativeProduction.quotes.quote1.quote",
            {
              returnObjects: true,
            },
          )}
        />
      </LabSection>

      <PartnerSection
        section={<Trans i18nKey='bejaLabs.title' />}
        sectionImg={Images.Ilustracoes.Bush}
        sectionImgStyle={{ w: 30, maxW: 100, h: 30, maxH: 90 }}
        title={<Trans i18nKey='bejaLabs.sections.toriba.title' />}
        subtitle={<Trans i18nKey='bejaLabs.sections.toriba.subtitle' />}
        partnerName={<Trans i18nKey='bejaLabs.sections.toriba.partnerName' />}
        partnerImg={[Images.Logos.ToribaLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
      >
        <GoldenQuoteSlider
          cite={<Trans i18nKey='bejaLabs.sections.toriba.quotes.quote1.cite' />}
          arr={t("bejaLabs.sections.toriba.quotes.quote1.quote", {
            returnObjects: true,
          })}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col gap-4'>
                    <h1
                      style={{
                        fontSize: `clamp(${calcClamp(14, 32)})`,
                        lineHeight: `clamp(${calcClamp(14 * 1.2, 32 * 1.2)})`,
                      }}
                      className='editorial'
                    >
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block1.fs.p1' />
                    </h1>

                    <p>
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block1.fs.p2' />
                    </p>
                  </div>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />

        <GoldenQuoteSlider
          cite={<Trans i18nKey='bejaLabs.sections.toriba.quotes.quote2.cite' />}
          arr={t("bejaLabs.sections.toriba.quotes.quote2.quote", {
            returnObjects: true,
          })}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='bejaLabs.sections.toriba.blocks.block2.fs.p1' />
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
                    <Trans i18nKey='bejaLabs.sections.toriba.blocks.block2.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={
            <Trans i18nKey='bejaLabs.sections.toriba.topicList.list1.title' />
          }
          list={t("bejaLabs.sections.toriba.topicList.list1.topics", {
            returnObjects: true,
          })}
        />

        <div className='flex flex-col gap-4'>
          <TextBlock
            firstBlock={[
              {
                key: "first-0",
                content: (
                  <>
                    <p>
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block3.fs.p1' />
                    </p>
                  </>
                ),
              },
            ]}
            secondBlock={[
              {
                key: "second-0",
                content: <></>,
              },
            ]}
          />

          <TopicList
            title={
              <Trans i18nKey='bejaLabs.sections.toriba.topicList.list2.title' />
            }
            list={t("bejaLabs.sections.toriba.topicList.list2.topics", {
              returnObjects: true,
            })}
          />
        </div>

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col gap-4'>
                    <h1
                      style={{
                        fontSize: `clamp(${calcClamp(14, 32)})`,
                        lineHeight: `clamp(${calcClamp(14 * 1.2, 32 * 1.2)})`,
                      }}
                      className='editorial'
                    >
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block4.fs.p1' />
                    </h1>

                    <p>
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block4.fs.p2' />
                    </p>

                    <p>
                      <Trans i18nKey='bejaLabs.sections.toriba.blocks.block4.fs.p3' />
                    </p>
                  </div>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: <></>,
            },
          ]}
        />
      </PartnerSection>
    </div>
  );
};

export default BejaLabs;
