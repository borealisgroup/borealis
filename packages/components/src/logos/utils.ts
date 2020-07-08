export const showComponent = (component: JSX.Element, condition: boolean) => {
  if (condition) {
    return component;
  }
  return null;
};
