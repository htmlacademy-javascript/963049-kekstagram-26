import {closePopap} from './bigpicture.js';

const escCloseDown = () => {
  window.addEventListener('keydown', (evt) => {
    if (evt.key === 'esc') {
      evt.preventDefault();
      closePopap();
    }
  });
};
export {escCloseDown};
