# React Component Quick Build by amcgunagle

One method to help you quickly create a new directory with two files - one with a template for a new React component, the other a file for the component's accompanying CSS module.

## Installation

npm i react-component-quick-build --save-dev

## generateNewComponent method

Creates a new directory with two files - one with a template for a new React component, the other a file for the component's accompanying CSS module.

### generateNewComponent method parameters

#### template

An object with `componentName` and, optionally, `firstElementType` and `firstElementClassName`. Additional details regarding the template parameter's properties can be found below in the [template parameter properties](#template-parameter-properties) section below.

```javascript
reactComponentGenerator.generateNewComponent({
  componentName: 'MyNewComponent',
  firstElementType: 'div',
  firstElementClassName: true,
});
```

## template parameter properties

- `template.componentName`: The name of the new component. This will also be the name of the new directory and the name of the CSS module file.

- `template.firstElementType`: Optional parameter specifying the type of the first element returned by the new component. For example, if you want the component template to contain a div element, this property would be set to `div`

- `template.firstElementClassName`: Optional parameter specifying the className of the first element returned by the new component. If this property is a string, the classname will be in the format of `className={style.yourStringHere}`. If this property is set to true, the classname will be in the format of `className={style.componentNameWrapper}`.

## Example output

Let's say we have the following in **reactComponentGenerator.js**:

```javascript
import reactComponentGenerator from 'react-component-quick-build';

reactComponentGenerator.generateNewComponent({
  componentName: 'MyNewComponent',
  firstElementType: 'div',
  firstElementClassName: true,
});
```

Running `node reactComponentGenerator.js` would create a new directory named **MyNewComponent** with a file named **MyNewComponent.jsx** containing the following:

```jsx
import React from 'react';
import styles from './MyNewComponent.module.css';

export default function MyNewComponent() {
  return <div className={styles.myNewComponentWrapper}></div>;
}
```

Running `node reactComponentGenerator.js` would also produce a blank CSS module file named **MyNewComponent.module.css** linked to the new component file.

## ES modules

If you get an error using the import-export syntax for ES modules in the examples above, add the following to your package.json file:

```json
{
  "type": "module"
}
```
