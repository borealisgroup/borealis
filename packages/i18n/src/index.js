export const loadI18n = async (projectId, apiKey, developmentMode) => {
  if (developmentMode) {
    const { buildDevelopmentConfig } = await import('i18n/developmentConfig');
    return buildDevelopmentConfig(projectId, apiKey);
  }
  const productionConfig = await import('i18n/productionConfig');
  return productionConfig;
};
