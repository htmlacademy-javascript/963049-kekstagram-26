import {getRandomNumber} from './util.js';

const POSTS_START_INDEX = 0;
const RANDOM_PICTURES_COUNT = 10;
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const filtersElement = document.querySelector('.img-filters');

const getRandomPosts = (postsData) => {
  const pictureData = postsData.slice();
  let randomPicture;

  for (let i = pictureData.length - 1; i > POSTS_START_INDEX; i--) {
    randomPicture = getRandomNumber(POSTS_START_INDEX, i);
    [pictureData[i], pictureData[randomPicture]] = [pictureData[randomPicture], pictureData[i]];
  }

  return pictureData.slice(POSTS_START_INDEX, RANDOM_PICTURES_COUNT);
};

const getDiscussedPicture = (pictureData) => pictureData.slice().sort((currentPicture, nextPicture) => nextPicture.comments.length - currentPicture.comments.length);

const onFiltersClick = (pictureData, callback) => {
  filtersElement.classList.remove('img-filters--inactive');

  filtersElement.addEventListener('click', (evt) => {
    if (!evt.target.matches('.img-filters__button') || evt.target.classList.contains('img-filters__button--active')) {
      return;
    }

    const activeFilter = filtersElement.querySelector(`.${ACTIVE_FILTER_CLASS}`);
    activeFilter.classList.remove(`${ACTIVE_FILTER_CLASS}`);
    evt.target.classList.add(`${ACTIVE_FILTER_CLASS}`);

    const filter = evt.target.id;
    let sortedPicture = [];
    switch (filter) {
      case 'filter-default':
        sortedPicture = pictureData;
        break;
      case 'filter-random':
        sortedPicture = getRandomPosts(pictureData);
        break;
      case 'filter-discussed':
        sortedPicture = getDiscussedPicture(pictureData);
        break;
    }

    callback(sortedPicture);
  });
};

export {onFiltersClick};
