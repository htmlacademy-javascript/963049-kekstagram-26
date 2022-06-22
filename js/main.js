const PHOTO_AMOUNT = 25;

const DESCRIPTIONS = [
  'Песчанный план',
  'Указатель к пляжу',
  'Берег у моря',
  'Девушка',
  'Миски с супом',
  'Спорткар',
  'Фруктовый десерт',
  'Фруктовый сок',
  'Самолёт над пляжем',
  'Обувная полка',
  'Тропинка к пляжу',
  'Автомобиль ауди',
  'Овощное блюдо',
  'Суши-кот',
  'Домашная обувь',
  'Самолет в небе',
  'Хоровое пение',
  'Автомобиль Кадиллак',
  'Тапки с подсветкой',
  'Аллея пальм',
  'Экзотическое блюдо',
  'Закат на море',
  'Краб',
  'Большой концерт',
  'Внедорожник в воде'
];

const LIKES = {
  MIN: 15,
  MAX: 200,
};

// eslint-disable-next-line no-unused-vars
const AVATARS = {
  MIN: 1,
  MAX: 6,
};

const commentMessage = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В целом всё неплохо.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];

const commentName = ['Артём','Вася','Коля','Петя','Вова','Жора'];

const commentsValues = {
  MIN: 1,
  MAX: 3,
};

const stringLength = (testString, maxLength) => testString < maxLength;
stringLength();

const getRandomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

const getRandomArrayElement = (elements) => elements[getRandomNumber(0, elements.length - 1)];

let comment = 0;
const getCommentId = () => {
  comment ++;
  return comment;
};

const newComments = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${getRandomNumber(AVATARS.MIN,AVATARS.MAX)}.svg`,
  message: getRandomArrayElement(commentMessage),
  name: getRandomArrayElement(commentName),
});

const postDesription = () => Array.from({length: PHOTO_AMOUNT}, (item, index) => ({
  id: index + 1,
  url: `photos/${index + 1}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomArrayElement(LIKES),
  Comments: Array.from({length: getRandomNumber(commentsValues.MIN,commentsValues.MAX)},newComments),
}));


// eslint-disable-next-line no-console
console.log(postDesription());
