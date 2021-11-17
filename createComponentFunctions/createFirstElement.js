import firstLetterToLowerCase from './firstLetterToLowerCase.js';

export const createFirstElement = (template) => {
  const {
    componentName,
    firstElementType,
    firstElementClassName
  } = template;

  if (typeof firstElementClassName === 'string') {
    return (
      `  <${firstElementType} className={styles.${firstElementClassName}}></${firstElementType}>\n`
    );
  };

  if (typeof firstElementClassName === 'boolean') {
    const camelCasedComponentName = firstLetterToLowerCase(componentName);

    return (
      `  <${firstElementType} className={styles.${camelCasedComponentName}Wrapper}></${firstElementType}>\n`
    );
  };

  return (
    `  <${firstElementType}></${firstElementType}>\n`
  );
};

export default createFirstElement;