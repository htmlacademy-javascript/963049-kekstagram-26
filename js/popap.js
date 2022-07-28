import {isEscapeKey} from './util.js';
import {bigPicture, resetCommentsCounts} from './bigpicture.js';

export const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

export function openUserModal () {
  bigPicture.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscKeydown);
}

export function closeUserModal () {
  bigPicture.classList.add('hidden');
  resetCommentsCounts();
  document.removeEventListener('keydown', onPopupEscKeydown);
}
