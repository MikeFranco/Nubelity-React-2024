import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';

import translationEN from './en/translations.json';
import translationES from './es/translations.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  es: {
    translation: translationES,
  },
};

i18n
  //@ts-ignore
  .use(reactI18nextModule)
  .init({
    resources,
    lng: 'es',

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
