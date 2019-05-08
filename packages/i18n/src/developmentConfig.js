import Backend from 'i18next-locize-backend';
import LastUsed from 'locize-lastused';
import Editor from 'locize-editor';
import i18n from './sharedConfig';

export const buildDevelopmentConfig = (projectId, apiKey) => {
  const locizeOptions = {
    projectId,
    apiKey,
    referenceLng: 'en',
  };

  i18n
    .use(Backend)
    .use(LastUsed)
    .use(Editor)
    .init({
      debug: true,
      saveMissing: true,
      backend: locizeOptions,
      locizeLastUsed: locizeOptions,
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
};
