import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import advocacyPT from "../locales/pt/advocacy.json";
import advocacyEN from "../locales/en/advocacy.json";
import translationPT from "../locales/pt/translation.json";
import translationEN from "../locales/en/translation.json";

import knowledgePT from "../locales/pt/knowledge.json";
import knowledgeEN from "../locales/en/knowledge.json";

const pt = {
  ...translationPT,
  ...advocacyPT,
  ...knowledgePT,
};

const en = {
  ...translationEN,
  ...advocacyEN,
  ...knowledgeEN,
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
