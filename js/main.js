//Функция, возвращающая случайное целое число из переданного диапазона включительно

const randomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

randomNumber(5, 42);

//Функция для проверки максимальной длины строки

const stringLength = (testString, maxLength) => testString < maxLength;
stringLength('4',52);
