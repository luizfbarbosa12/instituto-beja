import PinkBox from "../ui/PinkBox";
import TextBlock from "../ui/TextBlock";
import TopicList from "../ui/TopicList";
import { Images } from "../../assets/Index";
import GoldenQuote from "../ui/GoldenQuote";
import AnimatedLine from "../ui/AnimatedLine";
import PartnerSection from "../ui/PartnerSection";
import { Trans, useTranslation } from "react-i18next";
import ExternalLinkContainer from "../ui/ExternalLinkContainer";
import { AdvocacySectionVentTransition } from "./AdvocacySectionVentTransition";
import { PortfolioToAdvocacyVentTransition } from "./PortfolioToAdvocacyVentTransition";

const AdvocacySection = () => {
  const { t } = useTranslation();

  const allianceList = t("advocacy.sections.alliance.topicList.list", {
    returnObjects: true,
  });
  const serenasList = t("advocacy.sections.serenas.topicList.list", {
    returnObjects: true,
  });

  return (
    <div className='flex flex-col items-end w-full overflow-hidden pb-90'>
      <div
        style={{ backgroundImage: "url('/assets/AdvocacyFSBG.png')" }}
        className='flex flex-col bg-no-repeat bg-cover bg-center w-full gap-35 tablet:gap-50'
      >
        <div className='flex-center flex-col w-full min-h-screen gap-6 max-1024:px-8 max-768:px-6 max-768:gap-6'>
          <img
            alt={t("advocacy.logoAlt")}
            src={Images.Logos.BejaLogoAnimadaBranca}
            className='max-1366:size-120 max-640:size-60'
          />

          <h1 className='editorial text-5xl max-w-225 leading-15 text-center text-porcelain max-1025:w-full max-768:text-4xl max-768:leading-12 max-640:text-lg max-640:leading-normal'>
            {t("advocacy.title")}
          </h1>
        </div>

        <PortfolioToAdvocacyVentTransition />
      </div>

      <AdvocacySectionVentTransition />

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.alliance.title")}
        partnerImg={[Images.Secoes.AliancaAdvocacy]}
        subCards={[
          Images.Secoes.PelaDemocracia2,
          Images.Secoes.FilantropiaSubCard,
        ]}
        subtitle={t("advocacy.sections.alliance.subtitle")}
        partnerName={"Aliança pelo fortalecimento da sociedade civil"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <p>
                  <Trans i18nKey='advocacy.sections.alliance.p1' />
                </p>
              ),
            },
          ]}
          secondBlock={[
            {
              key: "second-0",
              content: (
                <p>
                  <Trans i18nKey='advocacy.sections.alliance.p2' />
                </p>
              ),
            },
          ]}
        />

        <TopicList
          title={t("advocacy.sections.alliance.topicList.title")}
          list={allianceList}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.endowment.title")}
        partnerImg={[Images.Logos.UspLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
        subtitle={t("advocacy.sections.endowment.subtitle")}
        partnerName={"Endowment: Fundo USP Diversa"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.endowment.block1.p1' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.endowment.block1.p2' />
                  </p>
                  <strong>
                    <Trans i18nKey='advocacy.sections.endowment.block1.p3' />
                  </strong>
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
                    <Trans i18nKey='advocacy.sections.endowment.block1.p4' />
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
                    <Trans i18nKey='advocacy.sections.endowment.block2.0' />
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
                    <Trans i18nKey='advocacy.sections.endowment.block2.1' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.endowment.block2.2' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.serenas.title")}
        partnerImg={[Images.Logos.SerenasLogo]}
        subCards={[Images.Secoes.JusticaRacial, Images.Secoes.EquidadeGenero]}
        subtitle={t("advocacy.sections.serenas.subtitle")}
        partnerName={"Serenas"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.serenas.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.serenas.block1.1' />
                  </p>
                  <p>
                    <Trans i18nKey='advocacy.sections.serenas.block1.2' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <TopicList
          title={t("advocacy.sections.serenas.topicList.title")}
          list={serenasList}
        />

        <GoldenQuote
          text={t("advocacy.sections.serenas.cite1.text")}
          autor={t("advocacy.sections.serenas.cite1.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.serenas.block2.0' />
                  </p>

                  <strong>
                    <Trans i18nKey='advocacy.sections.serenas.block2.1' />
                  </strong>

                  <p>
                    <Trans i18nKey='advocacy.sections.serenas.block2.2' />
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
                    <Trans i18nKey='advocacy.sections.serenas.block2.3' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.serenas.block2.4' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.serenas.cite2.text")}
          autor={t("advocacy.sections.serenas.cite2.author")}
        />

        <PinkBox>
          <p>
            <Trans i18nKey='advocacy.sections.serenas.block3.0' />
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.ponte.title")}
        partnerImg={[Images.Logos.PonteLogo]}
        subCards={[Images.Secoes.PelaDemocracia2, Images.Secoes.EquidadeGenero]}
        subtitle={"Vigência - 2024 - 2027"}
        partnerName={"A Ponte"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.ponte.block1.1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.ponte.cite1.text")}
          autor={t("advocacy.sections.ponte.cite1.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block2.0' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block2.1' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block2.2' />
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
                    <Trans i18nKey='advocacy.sections.ponte.block2.3' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block2.4' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block2.5' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.ponte.cite2.text")}
          autor={t("advocacy.sections.ponte.cite2.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.ponte.block3.0' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.ponte.cite3.text")}
          autor={t("advocacy.sections.ponte.cite3.author")}
        />

        <PinkBox>
          <p>
            <Trans i18nKey='advocacy.sections.ponte.block4.0' />
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.pactoContraFome.title")}
        partnerImg={[Images.Logos.PactoContraFomeLogo]}
        subCards={[Images.Secoes.JusticaRacial]}
        subtitle={t("advocacy.sections.pactoContraFome.subtitle")}
        partnerName={"Pacto contra a Fome"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.pactoContraFome.block1.0' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.pactoContraFome.block1.1' />
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
                    <Trans i18nKey='advocacy.sections.pactoContraFome.block1.2' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.pactoContraFome.cite1.text")}
          autor={t("advocacy.sections.pactoContraFome.cite1.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.pactoContraFome.block2.0' />
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
                    <Trans i18nKey='advocacy.sections.pactoContraFome.block2.1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.pactoContraFome.cite2.text")}
          autor={t("advocacy.sections.pactoContraFome.cite2.author")}
        />

        <div className='flex w-full gap-5 max-[880px]:gap-2 max-md:flex-col max-md:items-end'>
          <img
            src={Images.Secoes.FomeZeroAdvocacy}
            className='shrink-0 size-25 max-[880px]:size-20'
          />

          <PinkBox>
            <p>
              <Trans i18nKey='advocacy.sections.pactoContraFome.block3.0' />
            </p>

            <p>
              <Trans i18nKey='advocacy.sections.pactoContraFome.block3.1' />
            </p>
          </PinkBox>
        </div>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.pactoPelaDemocracia.title")}
        partnerImg={[Images.Secoes.PelaDemocracia]}
        subCards={[Images.Secoes.PelaDemocracia2]}
        subtitle={t("advocacy.sections.pactoPelaDemocracia.subtitle")}
        partnerName={"Pacto pela Democracia"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block1.1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.pactoPelaDemocracia.cite1.text")}
          autor={t("advocacy.sections.pactoPelaDemocracia.cite1.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block2.0' />
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
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block2.1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <ExternalLinkContainer
          title={t("advocacy.sections.pactoPelaDemocracia.externalLink.title")}
          subtitle={t(
            "advocacy.sections.pactoPelaDemocracia.externalLink.subtitle",
          )}
          link={"https://relatorio20212022.pactopelademocracia.org.br/"}
        />

        <GoldenQuote
          text={t("advocacy.sections.pactoPelaDemocracia.cite2.text")}
          autor={t("advocacy.sections.pactoPelaDemocracia.cite2.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans
                      i18nKey='advocacy.sections.pactoPelaDemocracia.block3.0'
                      components={[
                        <a
                          href='https://www.democraciaforte.org.br/'
                          key='link'
                          target='_blank'
                          rel='noopener noreferrer'
                          className='underline font-bold'
                        />,
                      ]}
                    />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block3.1' />
                  </p>

                  <p>
                    <Trans
                      i18nKey='advocacy.sections.pactoPelaDemocracia.block3.2'
                      components={[
                        <a
                          key='link1'
                          href='https://worldjusticeproject.org/world-justice-challenge/protect-democracy-safeguarding-integrity-and-rule-law-brazils-2022-election'
                          target='_blank'
                          className='underline font-bold'
                        />,
                        <a
                          key='link2'
                          href='https://www.semmemorianaohafuturo.org/'
                          target='_blank'
                          className='underline font-bold'
                        />,
                        <a
                          key='link3'
                          href='https://guias.pactopelademocracia.org.br/'
                          target='_blank'
                          className='underline font-bold'
                        />,
                      ]}
                    />
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
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block3.3' />
                  </p>

                  <p>
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block3.4' />
                  </p>

                  <img
                    src={Images.Secoes.PazJusticaImage}
                    alt={t("advocacy.sections.pactoPelaDemocracia.image.alt")}
                    className='size-40 max-lg:size-32 max-sm:size-20'
                  />
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.pactoPelaDemocracia.cite3.text")}
          autor={t("advocacy.sections.pactoPelaDemocracia.cite3.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block4.0' />
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
                    <Trans i18nKey='advocacy.sections.pactoPelaDemocracia.block4.1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.icci.title")}
        partnerImg={[Images.Logos.IcciLogo]}
        subCards={[Images.Secoes.PelaDemocracia2, Images.Secoes.JusticaRacial]}
        subtitle={t("advocacy.sections.icci.subtitle")}
        partnerName={"Instituto Cultura, Comunicação e Incidência (ICCI)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.icci.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.icci.block2.0' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.gife.title")}
        partnerImg={[Images.Logos.GifeLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={t("advocacy.sections.gife.subtitle")}
        partnerName={"Grupo de Institutos Fundações e Empresas (GIFE)"}
      >
        <GoldenQuote
          text={t("advocacy.sections.gife.cite1.text")}
          autor={t("advocacy.sections.gife.cite1.author")}
        />

        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.gife.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.gife.block1.1' />
                  </p>
                </>
              ),
            },
          ]}
        />

        <GoldenQuote
          text={t("advocacy.sections.gife.cite2.text")}
          autor={t("advocacy.sections.gife.cite2.author")}
        />

        <PinkBox>
          <p>
            <Trans i18nKey='advocacy.sections.gife.block2.0' />
          </p>
        </PinkBox>
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.latimpacto.title")}
        partnerImg={[Images.Logos.LatimImpactoLogo]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={t("advocacy.sections.latimpacto.subtitle")}
        partnerName={"Latimpacto"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.latimpacto.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.latimpacto.block1.1' />
                  </p>
                </>
              ),
            },
          ]}
        />
      </PartnerSection>

      <PartnerSection
        section={"Advocacy"}
        sectionImg={Images.Ilustracoes.ProudHand}
        sectionImgStyle={{ w: 18, maxW: 52, h: 30, maxH: 82 }}
        title={t("advocacy.sections.mcd.title")}
        partnerImg={[Images.Secoes.MovimentoDoacao]}
        subCards={[Images.Secoes.FilantropiaSubCard]}
        subtitle={t("advocacy.sections.mcd.subtitle")}
        partnerName={"Movimento por uma Cultura de Doação (MCD)"}
      >
        <TextBlock
          firstBlock={[
            {
              key: "first-0",
              content: (
                <>
                  <p>
                    <Trans i18nKey='advocacy.sections.mcd.block1.0' />
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
                    <Trans i18nKey='advocacy.sections.mcd.block1.' />
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

export default AdvocacySection;
