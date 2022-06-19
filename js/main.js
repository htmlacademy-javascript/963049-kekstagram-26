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
  MIN: 1, MAX: 3,
};

const stringLength = (testString, maxLength) => testString < maxLength;
stringLength();

const randomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

/*
{
   id: number,
   url: ‘photos/${id}.jpg’,
   description: string,
   likes: number,
   Comments: [
      id: number,
      avatar: string, // Тут должна быть одна из заранее созданных сслылок на аватарки, подробнее есть в домашке
      message: string,
      name: string,
   ],
}
*/
const getRandomArrayElement = (elements) => elements[randomNumber(0, elements.length - 1)];

let comment = 0;
const getCommentId = () => {
  comment ++;
  return comment;
};

const createRandomComments = () => ({
  id: getCommentId (),
  avatar: 'img/avatar-${randomNumber(AVATARS.MIN,AVATARS.MAX)}.svg',
  message: getRandomArrayElement(commentMessage),
  name: getRandomArrayElement(commentName),
});

const createDescription = () => Array.from({length: PHOTO_AMOUNT}, (item, index) => ({
  Id: index+1,
  Url: 'photos/${index+1}.jpg',
  Description: getRandomArrayElement(DESCRIPTIONS),
  Likes: getRandomArrayElement(randomNumber(LIKES.MIN,LIKES.MAX)),
  Comments: Array.from({length: randomNumber(commentsValues.MIN,commentsValues.MAX)}, createRandomComments),
}));

createDescription ();
console.log(createDescription);
