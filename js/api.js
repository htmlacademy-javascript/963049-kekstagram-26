const getData = (onSuccess) => {
  const API_URL = 'https://26.javascript.pages.academy/kekstagram';

  fetch(`${API_URL}/data`)
    .then((response) => response.json())
    .then((pictureData) => {
      onSuccess(pictureData);
    });
};

const sendData = (onSuccess, onError, body) => {
  fetch(
    'https://26.javascript.pages.academy/kekstagram/data',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onError('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export { getData, sendData };
