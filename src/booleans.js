const negate = a => {
  return !a;
};

const both = (a, b) => {
  if(a && b) {
    return true;
  } else {
    return false;
  }
};

const either = (a, b) => {
  return a || b ? true : false;
};

const none = (a, b) => {
  return !a && !b ? true : false;
};

const one = (a, b) => {
  return ((a && !b) || (!a && b)) ? true : false;
}

const truthiness = a => {
  return a ? true : false;
};

const isEqual = (a, b) => {
  return a === b ? true : false;
};

const isGreaterThan = (a, b) => {
  return a > b ? true : false;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b ? true : false;
};

const isOdd = a => {
  return a % 2 != 0 ? true : false;
};

const isEven = a => {
  return a % 2 === 0 ? true : false;
};

function isSquare(a) {
  // your code here
};

function startsWith(char, string) {
  // your code here
};

function containsVowels(string) {
  // your code here
};

function isLowerCase(string) {
  // your code here
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
