import createFirstElement from './createFirstElement.js';

export const createComponent = (template) => {
  const {
    componentName,
    firstElementType
  } = template;

  return (
    `import React from 'react';\n` +
    `import styles from './${componentName}.module.css';\n\n` +
    `export default function ${componentName}() {\n` +
    `  return (\n` +
    `  ${firstElementType ? createFirstElement(template) : ''}` +
    `  );\n` +
    `};\n`
  );
};

export default createComponent;