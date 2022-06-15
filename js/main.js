//Функция для проверки максимальной длины строки

const stringLength = (testString, maxLength) => testString < maxLength;
stringLength('4',52);

const IDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
const URLS = ['photos/1.jpg',
  'photos/2.jpg',
  'photos/3.jpg',
  'photos/4.jpg',
  'photos/5.jpg',
  'photos/6.jpg',
  'photos/7.jpg',
  'photos/8.jpg',
  'photos/9.jpg',
  'photos/10.jpg',
  'photos/11.jpg',
  'photos/12.jpg',
  'photos/13.jpg',
  'photos/14.jpg',
  'photos/15.jpg',
  'photos/16.jpg',
  'photos/17.jpg',
  'photos/18.jpg',
  'photos/19.jpg',
  'photos/20.jpg',
  'photos/21.jpg',
  'photos/22.jpg',
  'photos/23.jpg',
  'photos/24.jpg',
  'photos/25.jpg'
];
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
const LIKES = [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200];
const commentId = [30,31,32,33,34,35];
const commentAvatar = ['img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg'];
const commentMessage = [
  'Всё отлично!',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'В целом всё неплохо.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
  'В конце концов это просто непрофессионально.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.'
];
const commentName = ['Артём','Вася','Коля','Петя','Вова','Жора'];

const COMMENTS = [
  {
    id: commentId,
    avatar: commentAvatar,
    message: commentMessage,
    name: commentName
  }
];

const randomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

const getRandomArrayElement = (elements) => elements[randomNumber(0, elements.length - 1)];

const createDescription = () => ({
  objectId: getRandomArrayElement(IDS),
  objectUrl: getRandomArrayElement(URLS),
  objectDescription: getRandomArrayElement(DESCRIPTIONS),
  objectLikes: getRandomArrayElement(LIKES),
  objectComments: getRandomArrayElement(COMMENTS),
});


const similarDescription = Array.from({length: 25}, createDescription);
console.log(similarDescription);
