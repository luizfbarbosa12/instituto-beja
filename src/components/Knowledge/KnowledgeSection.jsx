import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import PinkBox from "../ui/PinkBox";
import TextBlock from "../ui/TextBlock";
import TopicList from "../ui/TopicList";
import { Images } from "../../assets/Index";
import { calcClamp } from "../../data/Utils";
import AnimatedLine from "../ui/AnimatedLine";
import PartnerSection from "../ui/PartnerSection";
import { Trans, useTranslation } from "react-i18next";
import GoldenQuoteSlider from "../ui/GoldenQuoteSlider";
import ExternalLinkContainer from "../ui/ExternalLinkContainer";
import { KnowledgeSectionVentTransition } from "./KnowledgeSectionVentTransition";
import { KnowledgeSectionHorizontalScrollCarousel } from "./HorizontallScrollCarousel";

const KnowledgeSection = () => {
  const { t } = useTranslation();

  return (
    <div className='pb-90'>
      <KnowledgeSectionVentTransition />

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.pipa.title' />}
        partnerImg={[Images.Logos.PipaLogo]}
        subtitle={<Trans i18nKey='knowledge.sections.pipa.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.pipa.partnerName' />}
        subCards={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block1.fs.p1' />
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

        <GoldenQuoteSlider
          cite={<Trans i18nKey='knowledge.sections.pipa.quotes.quote1.cite' />}
          arr={t("knowledge.sections.pipa.quotes.quote1.quote", {
            returnObjects: true,
          })}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <div className='flex flex-col max-640:flex-col-reverse max-640:gap-10'>
                    <div className='flex flex-col w-full'>
                      <p
                        style={{
                          fontSize: `clamp(${calcClamp(12, 32)})`,
                          lineHeight: `clamp(${calcClamp(12 * 1.2, 32 * 1.2)})`,
                        }}
                        className='w-full editorial text-start text-retro-ochre '
                      >
                        <Trans i18nKey='knowledge.sections.pipa.blocks.block2.fs.p1' />
                      </p>

                      <cite
                        style={{
                          fontSize: `clamp(${calcClamp(12, 32)})`,
                          lineHeight: `clamp(${calcClamp(12 * 1.2, 32 * 1.2)})`,
                        }}
                        className='w-full text-end editorial text-retro-ochre'
                      >
                        <Trans i18nKey='knowledge.sections.pipa.blocks.block2.fs.p2' />
                      </cite>
                    </div>

                    <img
                      src={Images.Ilustracoes.Clouds}
                      className='object-contain relative'
                      style={{
                        width: `clamp(${calcClamp(434, 815)})`,
                        height: `clamp(${calcClamp(185, 249)})`,
                      }}
                    />
                  </div>
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
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block2.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <AnimatedLine className='tablet:-mt-20' />

        <TextBlock
          className='tablet:-mt-20'
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block3.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block3.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block3.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.pipa.quotes.quote2.quote", {
            returnObjects: true,
          })}
          cite={<Trans i18nKey='knowledge.sections.pipa.quotes.quote2.cite' />}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block4.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block3.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.pipa.quotes.quote3.quote", {
            returnObjects: true,
          })}
          cite={<Trans i18nKey='knowledge.sections.pipa.quotes.quote3.cite' />}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: <></>,
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.pipa.blocks.block5.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.pipa.quotes.quote4.quote", {
            returnObjects: true,
          })}
          cite={<Trans i18nKey='knowledge.sections.pipa.quotes.quote4.cite' />}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.fjles.title' />}
        partnerImg={[Images.Logos.FundacaoJoseLuizLogo]}
        subtitle={<Trans i18nKey='knowledge.sections.fjles.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.fjles.partnerName' />}
        subCards={[Images.Secoes.FilantropiaSubCard]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.fjles.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.fjles.blocks.block1.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.cebrap.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.cebrap.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.cebrap.partnerName' />}
        partnerImg={[Images.Logos.CebrabLogo, Images.Logos.DesJusLogo]}
        subCards={[
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.cebrap.quotes.quote1.quote", {
            returnObjects: true,
          })}
          cite={
            <Trans i18nKey='knowledge.sections.cebrap.quotes.quote1.cite' />
          }
        />

        <KnowledgeSectionHorizontalScrollCarousel />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block2.fs.p1' />
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
            <Trans i18nKey='knowledge.sections.cebrap.topicList.list1.title' />
          }
          list={t("knowledge.sections.cebrap.topicList.list1.topics", {
            returnObjects: true,
          })}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.cebrap.quotes.quote2.quote", {
            returnObjects: true,
          })}
          cite={
            <Trans i18nKey='knowledge.sections.cebrap.quotes.quote2.cite' />
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cebrap.blocks.block3.fs.p1' />
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
            <Trans i18nKey='knowledge.sections.cebrap.topicList.list2.title' />
          }
          list={t("knowledge.sections.cebrap.topicList.list2.topics", {
            returnObjects: true,
          })}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.cebrap.quotes.quote3.quote", {
            returnObjects: true,
          })}
          cite={
            <Trans i18nKey='knowledge.sections.cebrap.quotes.quote3.cite' />
          }
        />

        <PinkBox>
          <p>
            <Trans i18nKey='knowledge.sections.cebrap.pinkBlock' />
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.agbara.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.agbara.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.agbara.partnerName' />}
        partnerImg={[Images.Logos.FundoAgbaraLogo]}
        subCards={[
          Images.Secoes.JusticaRacial,
          Images.Secoes.EquidadeGenero,
          Images.Secoes.FilantropiaSubCard,
        ]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block1.fs.p2' />
                  </p>

                  <ExternalLinkContainer
                    title={<Trans i18nKey='knowledge.extra.knowStudy' />}
                    subtitle={<Trans i18nKey='knowledge.extra.accessStudy' />}
                    link={
                      "https://fundoagbara.org.br/wp-content/uploads/2024/11/Diagnostico-acerca-de-filantropia-e-raca-no-Brasil.pdf?fbclid=PAZXh0bgNhZW0CMTEAAaby0073qhpeGV6XpFjzJcDcCY_p5GD3fesev-PG9Wfq6jG1VjTqsSDvAAU_aem_IT4-nq7aP96lp8QpvDRMbg"
                    }
                  />
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
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block1.ss.p1' />
                  </p>
                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block1.ss.p2' />
                  </p>
                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block1.ss.p3' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.agbara.quotes.quote1.quote", {
            returnObjects: true,
          })}
          cite={
            <Trans i18nKey='knowledge.sections.agbara.quotes.quote1.cite' />
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block2.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block2.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.agbara.quotes.quote2.quote", {
            returnObjects: true,
          })}
          cite={
            <Trans i18nKey='knowledge.sections.agbara.quotes.quote2.cite' />
          }
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <p>
                  <Trans i18nKey='knowledge.sections.agbara.blocks.block3.fs.p1' />
                </p>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.agbara.blocks.block3.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.cedec.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.cedec.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.cedec.partnerName' />}
        partnerImg={[Images.Logos.IElogo, Images.Logos.BlisLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cedec.blocks.block1.fs.p1' />
                  </p>
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <p>
                  <Trans i18nKey='knowledge.sections.cedec.blocks.block1.ss.p1' />
                </p>
              ),
            },
          ]}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <p>
                  <Trans i18nKey='knowledge.sections.cedec.blocks.block2.fs.p1' />
                </p>
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
            <Trans i18nKey='knowledge.sections.cedec.topicList.list1.title' />
          }
          list={t("knowledge.sections.cedec.topicList.list1.topics", {
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
                    <Trans i18nKey='knowledge.sections.cedec.blocks.block3.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.cedec.blocks.block3.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.cedec.blocks.block3.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.laut.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.laut.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.laut.partnerName' />}
        partnerImg={[Images.Logos.LautELiberdadeAutoritarismo]}
        subCards={[Images.Secoes.PelaDemocracia2]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.laut.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.laut.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.laut.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.idbr.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.idbr.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.idbr.partnerName' />}
        partnerImg={[Images.Logos.IDBRLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.idbr.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.idbr.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.idbr.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.igapare.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.igapare.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.igapare.partnerName' />}
        partnerImg={[Images.Logos.IgapareLogo]}
        subCards={[Images.Secoes.PelaDemocracia2]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.igapare.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.igapare.blocks.block1.ss.p1' />
                  </p>

                  <strong>
                    <Trans i18nKey='knowledge.sections.igapare.blocks.block1.ss.p2' />
                  </strong>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.mic.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.mic.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.mic.partnerName' />}
        partnerImg={[Images.Logos.MoreInCommonLogo]}
        subCards={[Images.Secoes.PelaDemocracia2]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.mic.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.mic.blocks.block1.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.cria.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.cria.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.cria.partnerName' />}
        partnerImg={[Images.Logos.CriaLogo, Images.Logos.ThpLogo]}
        subCards={[Images.Secoes.JusticaRacial, Images.Secoes.EquidadeGenero]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cria.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.cria.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.cria.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.cria.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.cria.quotes.quote1.quote", {
            returnObjects: true,
          })}
          cite={<Trans i18nKey='knowledge.sections.cria.quotes.quote1.cite' />}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.cria.blocks.block2.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.cria.blocks.block2.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuoteSlider
          arr={t("knowledge.sections.cria.quotes.quote2.quote", {
            returnObjects: true,
          })}
          cite={<Trans i18nKey='knowledge.sections.cria.quotes.quote2.cite' />}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.appcivico.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.appcivico.subtitle' />}
        partnerName={
          <Trans i18nKey='knowledge.sections.appcivico.partnerName' />
        }
        partnerImg={[Images.Logos.AppCivicoLogo, Images.Logos.PolitizeLogo]}
        subCards={[Images.Secoes.PelaDemocracia2]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.appcivico.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.appcivico.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.appcivico.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.appcivico.blocks.block1.ss.p2' />
                  </p>

                  <ExternalLinkContainer
                    title={<Trans i18nKey='knowledge.extra.knowSite' />}
                    subtitle={<Trans i18nKey='knowledge.extra.accessSite' />}
                    link={
                      "https://iagora.org/"
                    }
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.idis.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.idis.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.idis.partnerName' />}
        partnerImg={[Images.Logos.IDISLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.idis.blocks.block1.fs.p1' />
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
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.sitawi.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.sitawi.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.sitawi.partnerName' />}
        partnerImg={[Images.Logos.SITAWILogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.sitawi.blocks.block1.fs.p1' />
                  </p>
                  <p>
                    <Trans i18nKey='knowledge.sections.sitawi.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.sitawi.blocks.block1.ss.p1' />
                  </p>

                  <ExternalLinkContainer
                    title={<Trans i18nKey='knowledge.extra.knowSurvey' />}
                    subtitle={<Trans i18nKey='knowledge.extra.accessSurvey' />}
                    link={
                      "https://sitawi.net/familias-de-alto-patrimonio-no-brasil-investimento-de-impacto-e-filantropia/"
                    }
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.atahualpa.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.atahualpa.subtitle' />}
        partnerName={
          <Trans i18nKey='knowledge.sections.atahualpa.partnerName' />
        }
        partnerImg={[Images.Logos.ATAHUALPALogo]}
        subCards={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.atahualpa.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.atahualpa.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.atahualpa.blocks.block1.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.maradentro.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.maradentro.subtitle' />}
        partnerName={
          <Trans i18nKey='knowledge.sections.maradentro.partnerName' />
        }
        partnerImg={[Images.Logos.MarAdentroLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.maradentro.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.maradentro.blocks.block1.ss.p1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <TopicList
                    title={
                      <Trans i18nKey='knowledge.sections.maradentro.topicList.list1.title' />
                    }
                    list={t(
                      "knowledge.sections.maradentro.topicList.list1.topics",
                      {
                        returnObjects: true,
                      },
                    )}
                  />
                </>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <>
                  <TopicList
                    title={
                      <Trans i18nKey='knowledge.sections.maradentro.topicList.list2.title' />
                    }
                    list={t(
                      "knowledge.sections.maradentro.topicList.list2.topics",
                      {
                        returnObjects: true,
                      },
                    )}
                  />
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.coalizacao.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.coalizacao.subtitle' />}
        partnerName={
          <Trans i18nKey='knowledge.sections.coalizacao.partnerName' />
        }
        partnerImg={[Images.Logos.CoalizacaoLogo]}
        subCards={[
          Images.Secoes.FilantropiaSubCard,
          Images.Secoes.JusticaRacial,
        ]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.coalizacao.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.coalizacao.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.coalizacao.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.coalizacao.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.dpgc.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.dpgc.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.dpgc.partnerName' />}
        partnerImg={[Images.Logos.DataPrivacyLogo]}
        subCards={[Images.Secoes.PelaDemocracia2]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.dpgc.blocks.block1.fs.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.dpgc.blocks.block1.fs.p2' />
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
                    <Trans i18nKey='knowledge.sections.dpgc.blocks.block1.ss.p1' />
                  </p>

                  <strong>
                    <Trans i18nKey='knowledge.sections.dpgc.blocks.block1.ss.p2' />
                  </strong>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={<Trans i18nKey='knowledge.name' />}
        sectionImg={Images.Ilustracoes.Clouds}
        sectionImgStyle={{ w: 48, maxW: 158, h: 15, maxH: 60 }}
        title={<Trans i18nKey='knowledge.sections.yunus.title' />}
        subtitle={<Trans i18nKey='knowledge.sections.yunus.subtitle' />}
        partnerName={<Trans i18nKey='knowledge.sections.yunus.partnerName' />}
        partnerImg={[Images.Logos.YunusLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='knowledge.sections.yunus.blocks.block1.fs.p1' />
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
                    <Trans i18nKey='knowledge.sections.yunus.blocks.block1.ss.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='knowledge.sections.yunus.blocks.block1.ss.p2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>
    </div>
  );
};

export default KnowledgeSection;
