const sayHello = (string) => {
  return `Hello, ${string}!`;
};

const uppercase = string => {
  return string.toUpperCase();
};

const lowercase = string => {
  return string.toLowerCase();
};

const countCharacters = string => {
  return string.length;
};

const firstCharacter = string => {
  return string[0];
};

function firstCharacters (string, n) {
  // your code here
};

module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
