import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ptBRTranslation from "./locales/pt-br";

const resources = {
  "pt-BR": ptBRTranslation,
};

i18n.use(initReactI18next).init({
  compatibilityJSON: "v3",
  resources,
  lng: "pt-BR",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
