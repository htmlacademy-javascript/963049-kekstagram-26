import {escCloseDown} from './popap.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const window = document.querySelector('body');
const closeButtonBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const SOCIAL_WIDTH = 35;
const SOCIAL_HEIGHT = 35;

export const closePopap = () => {
  bigPicture.classList.add('hidden');
  window.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
};

const getComment = ({avatar, name, message}) => {
  const socialCommentElement = socialComment.cloneNode(true);
  socialCommentElement.querySelector('.social__picture').src = avatar;
  socialCommentElement.querySelector('.social__picture').alt = name;
  socialCommentElement.querySelector('.social__picture').width = SOCIAL_WIDTH;
  socialCommentElement.querySelector('.social__picture').height = SOCIAL_HEIGHT;
  socialCommentElement.querySelector('.social__text').textContent = message;
  return socialCommentElement;
};

const addComments = (comments) => {
  const commentFragment = document.createDocumentFragment();
  comments.forEach(({avatar, name, message}) => {
    commentFragment.append(getComment ({avatar, name, message}));
  });

  socialCommentsList.innerHTML = '';
  socialCommentsList.append(commentFragment);
};

const getBigPictureData = ({url, likes, comments, description}) => {
  bigPicture.querySelector('.big-picture__img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  document.addEventListener('keydown', escCloseDown );
  addComments(comments);
  bigPicture.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
  window.classList.add('modal-open');
};

closeButtonBigPicture.addEventListener('click', () => {
  closePopap();
  document.removeEventListener('keydown',escCloseDown);
});

export {getBigPictureData};
