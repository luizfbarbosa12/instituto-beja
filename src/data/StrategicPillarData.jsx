import { t } from "i18next";
import { Trans } from "react-i18next";

const Bush = "/assets/folhas.png";
const Clouds = "/assets/ilustracao-nuvens.png";
const ProudHand = "/assets/Ilustracao-4.png";

export const SPCardData = [
  {
    title: <Trans i18nKey='strategicPillar.card.card1.title' />,
    subtitle: <Trans i18nKey='strategicPillar.card.card1.subtitle' />,
    text: <Trans i18nKey='strategicPillar.card.card1.text' />,
    list: t("strategicPillar.card.card1.list", {
      returnObjects: true,
    }),
    img: ProudHand,
    bgColor: "#1E0301",
    textColor: "#f7f7f7",
    lineColor: "#b39567",
  },

  {
    title: <Trans i18nKey='strategicPillar.card.card2.title' />,
    subtitle: <Trans i18nKey='strategicPillar.card.card2.subtitle' />,
    text: <Trans i18nKey='strategicPillar.card.card2.text' />,
    list: t("strategicPillar.card.card2.list", {
      returnObjects: true,
    }),
    img: Clouds,
    bgColor: "#E8BCD3",
    textColor: "#1E0301",
    lineColor: "#f1f1f1",
  },

  {
    title: <Trans i18nKey='strategicPillar.card.card3.title' />,
    subtitle: <Trans i18nKey='strategicPillar.card.card3.subtitle' />,
    text: <Trans i18nKey='strategicPillar.card.card3.text' />,
    list: t("strategicPillar.card.card3.list", {
      returnObjects: true,
    }),
    img: Bush,
    bgColor: "#b39567",
    textColor: "#1E0301",
    lineColor: "#FFFFFF",
  },
];
