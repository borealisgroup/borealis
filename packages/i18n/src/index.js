import buildDevelopmentConfig from './developmentConfig';
import productionConfig from './productionConfig';

export default (projectId, apiKey, developmentMode) => {
  if (developmentMode) {
    return buildDevelopmentConfig(projectId, apiKey);
  }
  return productionConfig;
};
