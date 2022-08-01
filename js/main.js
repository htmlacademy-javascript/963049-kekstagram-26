//import {postDesription} from './data.js';
import './picture.js';
import './bigpicture.js';
import './popap.js';
import './form.js';
import './scale.js';
import './slider.js';
import './api.js';
import './sort.js';
import { onFiltersClick } from './sort.js';
import {renderPictureList} from './picture.js';
import {setUserFormSubmit} from './form.js';
import {closeUserModal} from './popap.js';
import {getData} from './api.js';
import {showAlert, debounce} from './util.js';
// eslint-disable-next-line no-console
//console.log(postDesription());
const RERENDER_DELAY = 500;
getData(
  (pictureData) => {
    renderPictureList(pictureData);
    onFiltersClick(pictureData,
      debounce(
        (sortedPost) => {
          renderPictureList(sortedPost);
        },
        RERENDER_DELAY,
      ),
    );
  },
  (message) => {
    showAlert(message);
  },
);

setUserFormSubmit(closeUserModal);
