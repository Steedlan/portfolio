"use client";

import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import en from "../public/locales/en/common.json";
import fr from "../public/locales/fr/common.json";

if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      lng: "en",
      fallbackLng: "en",
      debug: process.env.NODE_ENV === "development",
      resources: {
        en: { translation: en },
        fr: { translation: fr },
      },
      interpolation: { escapeValue: false },
    });
}

export { i18n, I18nextProvider };