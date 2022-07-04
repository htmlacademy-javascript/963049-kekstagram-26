const getRandomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

//правильный код
const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, getRandomArrayElement, isEscapeKey};
