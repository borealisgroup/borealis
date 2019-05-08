import Backend from 'i18next-xhr-backend';
import i18n from './sharedConfig';

i18n.use(Backend).init({
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
});

export default i18n;
