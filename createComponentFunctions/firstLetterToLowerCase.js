const firstLetterToLowerCase = (componentName) => {
  const characters = componentName.split('');

  const newArray = characters.map((character, index) => {
    if (index === 0) return character.toLowerCase();
    if (index !== 0) return character;
  });

  const modifiedString = newArray.join('');

  return modifiedString;
};

export default firstLetterToLowerCase;