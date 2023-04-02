import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import languageDetector from "i18next-browser-languagedetector"
import en from "../public/locales/en/common.json"
import pt from "../public/locales/pt/common.json"
i18next
  .use(initReactI18next)
  .init({
    lng:"pt",
    fallbackLng: "pt",
    resources: {
      en: {
        translation: en
      },
      pt: {
        translation: pt
      }
    },
    debug: true,
  })
export default i18next