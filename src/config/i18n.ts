import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import advocacyPT from "../locales/pt/advocacy.json";
import advocacyEN from "../locales/en/advocacy.json";

const pt = {
  ...advocacyPT,
};

const en = {
  ...advocacyEN,
};

i18n.use(initReactI18next).init({
  resources: {
    pt: { translation: pt },
    en: { translation: en },
  },
  fallbackLng: "pt",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
