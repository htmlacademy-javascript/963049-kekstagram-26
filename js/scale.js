const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');
const scaleValueElement = imgUploadForm.querySelector('.scale__control--value');
const scaleElement = imgUploadForm.querySelector('.scale');

const Scale = {
  MIN: 25,
  MAX: 100,
  STEP: 25,
  DEFAULT: 100
};

let scaleValue = Scale.DEFAULT;

const setImageScale = (value) => {
  scaleValueElement.value = `${value}%`;
  imgUploadPreview.style.transform = `scale(${value / 100})`;
};

const resetImageScale = () => {
  scaleValue = Scale.DEFAULT;
  setImageScale(scaleValue);
};

const onScaleClick = (evt) => {
  if (evt.target.matches('.scale__control--smaller') && scaleValue > Scale.MIN) {
    scaleValue -= Scale.STEP;
    return setImageScale(scaleValue);
  }

  if (evt.target.matches('.scale__control--bigger') && scaleValue < Scale.MAX) {
    scaleValue += Scale.STEP;
    return setImageScale(scaleValue);
  }
};

setImageScale(scaleValue);

scaleElement.addEventListener('click', onScaleClick);

export { resetImageScale };
