export const createCSSModule = (template) => {
  const { componentName, firstElementClassName } = template;

  if (firstElementClassName === true) {
    return (
      `.${componentName}Wrapper {\n` +
      `  \n` +
      `}\n`
    );
  };

  return (
    ``
  );
};

export default createCSSModule;