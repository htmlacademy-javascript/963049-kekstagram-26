import {postDesription} from './data.js';

const pictureBlock = document.querySelector('.picture');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const pictureData = postDesription();

const pictureFragment = document.createDocumentFragment();

pictureData.forEach(({url, comments, likes}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureFragment.append(pictureElement);
});

pictureBlock.append(pictureFragment);
