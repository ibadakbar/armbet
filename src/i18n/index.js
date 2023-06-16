import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en";
import fr from "./locales/fr";
import de from "./locales/de";
import es from "./locales/es";
import hi from "./locales/hi";
import it from "./locales/it";
import ka from "./locales/ka";
import pt from "./locales/pt";
import ru from "./locales/ru";
import sv from "./locales/sv";
import tr from "./locales/tr";
import uk from "./locales/uk";

i18next.use(LanguageDetector).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translations: en
    },
    fr: {
      translations: fr
    },
    de: {
      translations: de
    },
    es: {
      translations: es
    },
    hi: {
      translations: hi
    },
    it: {
      translations: it
    },
    ka: {
      translations: ka
    },
    pt: {
      translations: pt
    },
    ru: {
      translations: ru
    },
    sv: {
      translations: sv
    },
    tr: {
      translations: tr
    },
    uk: {
      translations: uk
    }
  },

  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false // react already safes from xss
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  react: {
      wait: true,
  },
});

export default i18next;
