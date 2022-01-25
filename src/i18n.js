import { createI18n } from "vue3-i18n";

function getNavigatorLang() {
  if (localStorage.selectedLocale != undefined) {
    return localStorage.selectedLocale;
  }
  if (navigator.languages != undefined) {
    return navigator.languages[0];
  }

  return navigator.language;
}

const messages = {
  "en-US": {
    homeTitle1: "We transcend the borders between space",
    homeTitle2: "and time by creating immersive experiences",
    b2bTitle: "Professionals",
    b2cTitle: "Individuals",
    contactButton: "Contact - us  -  Contact - us  -  ",
    contactFormTitle: "Contact us",
    firstNameLabel: "First name",
    firstNamePlaceHolder: "Enter your first name",
    lastNameLabel: "Last name",
    lastNamePlaceHolder: "Enter your first last name",
    emailLabel: "Email Address",
    emailPlaceHolder: "Enter your email address",
    phoneLabel: "Phone number",
    phonePlaceHolder: "Enter your phone number",
    offersLabel: "Offers",
    messageLabel: "Message",
    messagePlaceHolder: "Describe your project here",
    errorPlaceHolder: "Please complete this field."
  },
  "fr-FR": {
    homeTitle1: "Nous abolissons les frontières de l'espace",
    homeTitle2: "et du temps en créant des experiences immersives",
    b2bTitle: "Professionnels",
    b2cTitle: "Particuliers",
    contactButton: "Contactez- nous   -   Contactez - nous    -   ",
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
var localeToSet = "en-US";

if (navigatorLocale.includes("fr")) {
  localeToSet = "fr-FR";
}

const i18n = createI18n({
  locale: localeToSet,
  messages: messages,
});

export default i18n;