import {getRandomArrayElement, isEscapeKey} from './util.js';

const uploadFile = document.querySelector('#upload-file');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const body = document.querySelector('body');
const uploadCancel = document.querySelector('#upload-cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const hashtagsElement = imgUploadForm.querySelector('.text__hashtags');
const textDescriptionElement = imgUploadForm.querySelector('.text__description');
const MAX_AMOUNT_HASHTAGS = 5;
const MAX_AMOUNT_TEXT_DESCRIPTION = 140;

uploadFile.addEventListener('change', () => {
  imgUploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt) && document.activeElement !== textDescriptionElement) {
      evt.preventDefault();
      imgUploadOverlay.classList.add('hidden');
    }
  });
});

uploadCancel.addEventListener('click', () => {
  imgUploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
});

// не должно приводить к закрытию формы редактирования изображения.
hashtagsElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});
textDescriptionElement.addEventListener('keydown', (evt) => {
  evt.stopPropagation();
});

//комментарий не обязателен
const validateTextDescriptionNotRequired = (value) =>
  textDescriptionElement.value !== value;
//длина комментария не может составлять больше 140 символов;
const countLengthDescription = getRandomArrayElement(textDescriptionElement.value, MAX_AMOUNT_TEXT_DESCRIPTION);

//валидация поля с хэштегом
const validateHashtags = (value) => {
  const hashtags = value.split(' '); //валидация на пробелы между хэштегами
  const result = hashtags.filter(Boolean);
  return result;
};

const checkUniquesHashtags = (value) => {
  const hashtags = validateHashtags(value);
  const uniquesHashtags = new Set(hashtags); //валидация на уникальность
  return hashtags.length === uniquesHashtags.size;
};

const controlHashtagsSymbols = (value) => {
  const re = /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/;
  return validateHashtags(value).every((item) => re.test(item));
};

const controlHashtagsAmount = (value) => validateHashtags(value).length <= MAX_AMOUNT_HASHTAGS;

const pristine = new Pristine(imgUploadForm, {
  classTo: 'img-upload__field-wrapper', // Элемент, на который будут добавляться классы
  errorClass: 'img-upload__field-wrapper--invalid', // Класс, обозначающий невалидное поле
  successClass: 'img-upload__field-wrapper--valid', // Класс, обозначающий валидное поле
  errorTextParent: 'img-upload__field-wrapper', // Элемент, куда будет выводиться текст с ошибкой
  errorTextTag: 'p', // Тег, который будет обрамлять текст ошибки
  errorTextClass: 'img-upload__field-wrapper-error-message' // Класс для элемента с текстом ошибки
});

pristine.addValidator(hashtagsElement, controlHashtagsSymbols ,
  'хэш-тег начинается с символа #,' +
  ' строка после решётки должна состоять из букв и чисел,' +
  ' хеш-тег должен быть от 2 до 20 символов, ' +
  'хэш-теги нечувствительны к регистру');
pristine.addValidator(hashtagsElement, validateHashtags,
  'хэш-теги разделяются пробелами');
pristine.addValidator(hashtagsElement, checkUniquesHashtags,
  'один и тот же хэш-тег не может быть использован дважды');
pristine.addValidator(hashtagsElement, controlHashtagsAmount,
  'нельзя указать больше пяти хэш-тегов');
pristine.addValidator(textDescriptionElement, validateTextDescriptionNotRequired,
  'комментарий не обязателен');
pristine.addValidator(textDescriptionElement, countLengthDescription,
  'длина комментария не может составлять больше 140 символов');

imgUploadForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    imgUploadForm.submit();
  }
});
