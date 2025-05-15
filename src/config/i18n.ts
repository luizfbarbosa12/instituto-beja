import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import advocacyPT from "../locales/pt/advocacy.json";
import advocacyEN from "../locales/en/advocacy.json";
import translationPT from "../locales/pt/translation.json";
import translationEN from "../locales/en/translation.json";
import bejaLabsPT from "../locales/pt/bejaLabs.json";
import bejaLabsEN from "../locales/en/bejaLabs.json";
import knowledgePT from "../locales/pt/knowledge.json";
import knowledgeEN from "../locales/en/knowledge.json";
import schedulePT from "../locales/pt/schedule.json";
import scheduleEN from "../locales/en/schedule.json";

const pt = {
  ...translationPT,
  ...advocacyPT,
  ...knowledgePT,
  ...bejaLabsPT,
  ...schedulePT,
};

const en = {
  ...translationEN,
  ...advocacyEN,
  ...knowledgeEN,
  ...bejaLabsEN,
  ...scheduleEN,
};

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
