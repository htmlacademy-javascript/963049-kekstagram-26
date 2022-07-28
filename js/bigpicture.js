import {closeUserModal} from './popap.js';

const bigPicture = document.querySelector('.big-picture');
const commentsLoader = document.querySelector('.comments-loader');
const body = document.querySelector('body');
const cancelBigPicture = bigPicture.querySelector('.big-picture__cancel');
const socialCommentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');
const socialCommentCount = document.querySelector('.social__comment-count');
const commentsCountProminent = document.querySelector('.comments-count');
const shownCommentsCount = document.querySelector('.social__comment-count');

const COMMENT_WIDTH = 35;
const COMMENT_HEIGHT = 35;

const PROMINENT_COMMENTS = 5;

let commentsData = [];
let commentsStartIndex = 0;
let commentsShownCount = 0;


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
  comments.forEach((comment) => {
    commentFragment.append(getComment(comment));
  });

  commentsShownCount += comments.length;
  commentsCountProminent.textContent = commentsShownCount;
  shownCommentsCount.textContent = `${commentsShownCount} из ${commentsData.length} комментариев`;

  if (commentsShownCount >= commentsData.length) {
    commentsLoader.classList.add('hidden');
  }
  socialCommentsList.append(commentFragment);
};

const showComments = () => {
  const comments = commentsData.slice(commentsStartIndex, commentsStartIndex + PROMINENT_COMMENTS);
  commentsStartIndex += PROMINENT_COMMENTS;
  addComments(comments);
};

const getBigPictureData = ({url, likes, comments, description}) => {
  commentsData = comments;
  bigPicture.querySelector('.big-picture__img img').src = url;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.social__caption').textContent = description;
  socialCommentsList.innerHTML = '';
  commentsLoader.classList.remove('hidden');

  showComments();
  socialCommentCount.classList.remove('hidden');
  body.classList.add('modal-open');
};

const resetCommentsCounts = () => {
  commentsStartIndex = 0;
  commentsShownCount = 0;
};

cancelBigPicture.addEventListener('click', () => {
  closeUserModal ();
  body.classList.remove('modal-open');
  commentsLoader.classList.remove('hidden');
  commentsLoader.removeEventListener('click', showComments);
  resetCommentsCounts();
});

commentsLoader.addEventListener('click', showComments);

export {getBigPictureData, bigPicture, resetCommentsCounts};
