const EFFECTS = {
  none: {
    filter: 'none',
    unit: '',
    min: 0,
    max: 100,
    step: 1,
  },
  chrome: {
    filter: 'grayscale',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  sepia: {
    filter: 'sepia',
    unit: '',
    min: 0,
    max: 1,
    step: 0.1,
  },
  marvin: {
    filter: 'invert',
    unit: '%',
    min: 0,
    max: 100,
    step: 1,
  },
  phobos: {
    filter: 'blur',
    unit: 'px',
    min: 0,
    max: 3,
    step: 0.1,
  },
  heat: {
    name: 'heat',
    filter: 'brightness',
    unit: '',
    min: 1,
    max: 3,
    step: 0.1,
  }
};

const DEFAULT_EFFECT = EFFECTS.none;

const imgUploadForm = document.querySelector('.img-upload__form');
const imgUploadPreview = imgUploadForm.querySelector('.img-upload__preview img');
const effectLevelValue = imgUploadForm.querySelector('.effect-level__value');
const effectLevelSlider = imgUploadForm.querySelector('.effect-level__slider');

let selectedEffect = DEFAULT_EFFECT;

const isDefault = () => selectedEffect === DEFAULT_EFFECT;

const updateEffect = () => {
  effectLevelSlider.noUiSlider.updateOptions({
    range: {
      min: selectedEffect.min,
      max: selectedEffect.max
    },
    start: selectedEffect.max,
    step: selectedEffect.step
  });

  imgUploadPreview.className = '';
  effectLevelSlider.classList.remove('hidden');
  if (isDefault()) {
    effectLevelSlider.classList.add('hidden');
    return;
  }
  imgUploadPreview.classList.add(`effects__preview--${selectedEffect.name}`);
};

const resetEffect = () => {
  selectedEffect = DEFAULT_EFFECT;
  updateEffect();
};

noUiSlider.create(effectLevelSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});

updateEffect();

const onFormChange = (evt) => {
  if (evt.target.closest('.effects__radio')) {
    selectedEffect = EFFECTS[evt.target.value];
    updateEffect();
  }
};

const onSliderUpdate = () => {
  imgUploadPreview.style.filter = 'none';
  if (isDefault()) {
    return;
  }
  const sliderValue = effectLevelSlider.noUiSlider.get();
  effectLevelValue.value = sliderValue;
  imgUploadPreview.style.filter = `${selectedEffect.filter}(${sliderValue}${selectedEffect.unit})`;
};

imgUploadForm.addEventListener('change', onFormChange);
effectLevelSlider.noUiSlider.on('update', onSliderUpdate);

export {resetEffect};
