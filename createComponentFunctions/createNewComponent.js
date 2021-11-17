import fs from 'fs/promises';
import createComponentTemplate from './createComponentTemplate.js';
import createCSSModuleTemplate from './createCSSModuleTemplate.js';

/**
 * Creates a new dir with two files - one with a template for a new React component, the other a file for the component's accompanying CSS module. 
 * @param {Object} template - An object including the key `componentName` and, optionally, `firstElementType` and `firstElementClassName`.
 *
 * @param {string} template.componentName - The name of the new component.
 * @param {string} template.firstElementType - Optional parameter specifying the type of the first element returned by the new component. 
 * - For example, if you want the component template to contain a div element, this property would be set to `div`
 * @param {string|boolean} template.firstElementClassName - Optional parameter specifying the className of the first element returned by the new component. 
 * - If this property is a string, the classname will be in the format of `className={style.yourStringHere}`. 
 * - If this property is set to true, the classname will be in the format of `className={style.componentNameWrapper}`. 
 * @example 
 * createNewComponent({
 *   componentName: 'MyNewComponent',
 *   firstElementType: 'div',
 *   firstElementClassName: true,
 * });
 */
export const createNewComponent = async (template) => {

  const componentFileText = createComponentTemplate(template);

  const CSSModuleFileText = createCSSModuleTemplate(template);

  const { componentName } = template;

  try {
    // If dir doesn't exist, error will be thrown
    await fs.access(`./${componentName}`);
  } catch (error) {
    // Since error was thrown, new dir is made
    await fs.mkdir(`./${componentName}`);
  };

  try {
    await fs.writeFile(`./${componentName}/${componentName}.jsx`, componentFileText);
    await fs.writeFile(`./${componentName}/${componentName}.module.css`, CSSModuleFileText);
  } catch (error) {
    console.error(error);
  };
};

export default createNewComponent;