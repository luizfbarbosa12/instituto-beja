import { Trans } from "react-i18next";
import { Images } from "../assets/Index";
import { t } from "i18next";

const MapBiomasLogo = "/assets/MapBiomas.svg";
const SerenasLogo = "/assets/SerenasLogo.svg";
const DesenrolaLogo = "/assets/DesenrolaLogo.svg";

export const AEPIE = [
  {
    bgColor: "bg-white",
    text: t("cme.orchestrating.card1.text", {
      returnObjects: true,
    }),
    img: Images.CME.CmeMiniWheel1,
    titleColor: "text-cyan",
    titleName: <Trans i18nKey='cme.orchestrating.card1.title' />,
  },
  {
    bgColor: "bg-[#FFECFD]",
    text: t("cme.orchestrating.card2.text", {
      returnObjects: true,
    }),
    img: Images.CME.CmeMiniWheel2,
    titleColor: "text-[#E679E0]",
    titleName: <Trans i18nKey='cme.orchestrating.card2.title' />,
  },
  {
    bgColor: "bg-[#FFCBC4]",
    text: t("cme.orchestrating.card3.text", {
      returnObjects: true,
    }),
    img: Images.CME.CmeMiniWheel3,
    titleColor: "text-hot-coral",
    titleName: <Trans i18nKey='cme.orchestrating.card3.title' />,
  },
];

export const VTCME = [
  {
    bgColor: "bg-[#AAD5DC] ",
    title: <Trans i18nKey='cme.transformationVision.card1.title' />,
    text: <Trans i18nKey='cme.transformationVision.card1.text' />,
  },
  {
    bgColor: "bg-[#FFD793]",
    title: <Trans i18nKey='cme.transformationVision.card2.title' />,
    text: <Trans i18nKey='cme.transformationVision.card2.text' />,
  },
  {
    bgColor: "bg-[#FFCBC4]",
    title: <Trans i18nKey='cme.transformationVision.card3.title' />,
    text: <Trans i18nKey='cme.transformationVision.card3.text' />,
  },
  {
    bgColor: "bg-[#AAD5DC] ",
    title: <Trans i18nKey='cme.transformationVision.card4.title' />,
    text: <Trans i18nKey='cme.transformationVision.card4.text' />,
  },
];

export const CMEPartners = [
  {
    bgColor: "bg-[#FFCBC4]",
    img: DesenrolaLogo,
    title: {
      color: "text-hot-coral",
      name: <Trans i18nKey='cme.systemOrchestrating.cards.card1.title' />,
    },
    text: t("cme.systemOrchestrating.cards.card1.text", {
      returnObjects: true,
    }),
  },
  {
    bgColor: "bg-porcelain",
    img: MapBiomasLogo,
    title: {
      color: "text-cyan",
      name: <Trans i18nKey='cme.systemOrchestrating.cards.card2.title' />,
    },
    text: t("cme.systemOrchestrating.cards.card2.text", {
      returnObjects: true,
    }),
  },
  {
    bgColor: "bg-[#FFECFD]",
    img: SerenasLogo,
    title: {
      color: "text-[#E679E0]",
      name: <Trans i18nKey='cme.systemOrchestrating.cards.card3.title' />,
    },
    text: t("cme.systemOrchestrating.cards.card3.text", {
      returnObjects: true,
    }),
  },
];

export const cmeActionList = t("cme.list.list", {
  returnObjects: true,
});

export const OSList = [
  Images.Logos.MapBiomasLogo,
  Images.Logos.SerenasLogo,
  Images.Logos.DesenrolaLogo,
];
