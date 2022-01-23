import { createI18n } from "vue3-i18n";
import { LOCALE_FR } from "./constants";

function getNavigatorLang() {
  if (navigator.languages != undefined)
    return navigator.languages[0];
  return navigator.language;
}

const messages = {
  en: {
    homeTitle1: "My title in english",
    homeTitle2: "My title in english",
  },
  fr: {
    homeTitle1: "Nous abolissons les frontières de l'espace",
    homeTitle2: "et du temps en créant des experiences immersives",
    b2bTitle: "Professionnels",
    b2cTitle: "Particuliers",
    contactButton: "Contactez-nous&#160;&#160;-&#160;&#160;Contactez-nous&#160;&#160;-&#160;&#160;",
    contactFormTitle: "Contactez-nous",
    firstNameLabel: "Prénom",
    firstNamePlaceHolder: "Saisir votre prénom",
    lastNameLabel: "Nom",
    lastNamePlaceHolder: "Saisir votre nom",
    emailLabel: "Adresse Email",
    emailPlaceHolder: "Saisir votre email",
    phoneLabel: "N° De Téléphone",
    phonePlaceHolder: "Saisir votre téléphone",
    offersLabel: "Offres",
    messageLabel: "Message",
    messagePlaceHolder: "Décrire votre projet ici",
    errorPlaceHolder: "Veuillez remplir ce champ."
  },
};

const navigatorLocale = getNavigatorLang();
var localeToSet = "en";

if (navigatorLocale.includes(LOCALE_FR)) {
  localeToSet = "fr";
}

const i18n = createI18n({
  locale: localeToSet,
  messages: messages,
});

export default i18n;