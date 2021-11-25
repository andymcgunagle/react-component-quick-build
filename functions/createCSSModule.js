import firstLetterToLowerCase from './firstLetterToLowerCase.js';

export const createCSSModule = (template) => {
  const { componentName, firstElementClassName } = template;

  if (firstElementClassName === true) {
    return (
      `.${firstLetterToLowerCase(componentName)}Wrapper {\n` +
      `  \n` +
      `}\n`
    );
  };

  return (
    ``
  );
};

export default createCSSModule;