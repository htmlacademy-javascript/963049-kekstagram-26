import {postDesription} from './data.js';
import {openUserModal} from './popap.js';
import {getBigPictureData} from './bigpicture.js';

const pictureBlock = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture')
  .content.querySelector('.picture');

const pictureData = postDesription();

const pictureFragment = document.createDocumentFragment();

pictureData.forEach((photo) => {
  const {url, comments, likes} = photo;
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.addEventListener('click', () => {
    openUserModal();
    getBigPictureData(photo);
  });
  pictureFragment.append(pictureElement);
});

pictureBlock.append(pictureFragment);
export {pictureBlock};
