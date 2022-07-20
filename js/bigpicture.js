import {closeUserModal} from './popap.js';
//import {imgUploadOverlay} from './form.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const COMMENT_WIDTH = 35;
const COMMENT_HEIGHT = 35;

const getComment = ({avatar, name, message}) => {
  const socialCommentElement = socialComment.cloneNode(true);
  socialCommentElement.querySelector('.social__picture').src = avatar;
  socialCommentElement.querySelector('.social__picture').alt = name;
  socialCommentElement.querySelector('.social__picture').width = COMMENT_WIDTH;
  socialCommentElement.querySelector('.social__picture').height = COMMENT_HEIGHT;
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
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
  bigPicture.querySelector('.social__caption').textContent = description;

  addComments(comments);

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');
  body.classList.add('modal-open');
};

cancelBigPicture.addEventListener('click', () => {
  closeUserModal ();
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
});

export {getBigPictureData, bigPicture};
