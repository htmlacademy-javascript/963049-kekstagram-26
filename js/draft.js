/*
<li className="social__comment">
  <img
    className="social__picture"
    src="{{аватар}}"
    alt="{{имя комментатора}}"
    width="35" height="35">
    <p className="social__text">{{текст комментария}}</p>
</li>

const socialCommentsList = document.querySelector('.social__comments');
const socialComment = document.querySelector('.social__comment');

socialCommentsList.innerHTML = '';
const pictureFragment = document.createDocumentFragment();

socialCommentsList.forEach(({avatar},{name},{COMMENT_WIDTH},{COMMENT_HEIGHT},{message}) => {
  const socialCommentElement = socialComment.cloneNode(true);
  socialCommentElement.querySelector('.social__picture').src = avatar;
  socialCommentElement.querySelector('.social__picture').alt = name;
  socialCommentElement.querySelector('.social__picture').width = COMMENT_WIDTH;
  socialCommentElement.querySelector('.social__picture').height = COMMENT_HEIGHT;
  socialCommentElement.querySelector('.social__text').textContent = message;
  pictureFragment.append(socialCommentElement);
});
*/
