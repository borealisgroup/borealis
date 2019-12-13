import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-locize-backend';
import Editor from 'locize-editor';
import LastUsed from 'locize-lastused';

const buildDevelopmentConfig = (projectId, apiKey) => {
  const locizeOptions = {
    projectId,
    apiKey,
    referenceLng: 'en',
  };

  i18n
    .use(LanguageDetector)
    .use(Backend)
    .use(LastUsed)
    .use(Editor)
    .init({
      debug: true,
      saveMissing: true,
      backend: locizeOptions,
      locizeLastUsed: locizeOptions,
      fallbackLng: 'en',
      interpolation: {
        escapeValue: false,
      },
      editor: {
        ...locizeOptions,
        onEditorSaved: async (lng, ns) => {
          await i18n.reloadResources(lng, ns);
          i18n.emit('editorSaved');
        },
      },
      react: {
        bindI18n: 'languageChanged editorSaved',
      },
    });
  return i18n;
};

export default buildDevelopmentConfig;
