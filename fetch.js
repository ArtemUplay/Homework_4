const websiteUrl = 'https://intership-liga.ru/tasks';
const image = document.querySelector('.image');
const button = document.querySelector('.button');

const checkStatusResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
}

// GET запрос
fetch(`${websiteUrl}`, {
  headers: {
    'Content-Type': 'application/json'
  },
})
  .then(res => checkStatusResponse(res))
  .then(data => {
    console.log(`Данные, полученые при помощи метода GET`);
    console.log(data);
  });

// POST запрос
fetch(`${websiteUrl}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Артем',
    info: "learning JavaScript",
    isImportant: true
  })
})
  .then(res => checkStatusResponse(res))
  .then(data => {
    console.log(`Данные, отправленные при помощи метода POST`);
    console.log(data);
  });

// PATCH запрос
fetch(`${websiteUrl}/761`, {
  method: 'PATCH',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Кирилл'
  })
})
  .then(res => checkStatusResponse(res))
  .then(data => {
    console.log(`Данные, отправленные при помощи метода PATCH`);
    console.log(data);
  })

// PUT запрос
fetch(`${websiteUrl}/761`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'Евгений',
    info: "learning Python",
    isImportant: false
  })
})
  .then(res => checkStatusResponse(res))
  .then(data => {
    console.log(`Данные, отправленные при помощи метода PUT`);
    console.log(data);
  })

// DELETE запрос
fetch(`${websiteUrl}/758`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(res => checkStatusResponse(res))
  .then(data => {
    console.log(`Данные, удалённые при помощи метода DELETE`);
    console.log(data);
  })

function getRandomImage() {
  // Блокируем кнопку пока не пришёл ответ от сервера
  button.disabled = true;

  fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => {
      return checkStatusResponse(res)
    })
    .then(data => image.src = data.message)
    .finally(() => {
      // Когда придёт ответ от сервера разблокируем кнопку
      button.disabled = false;
    })
}

getRandomImage();

button.addEventListener('click', getRandomImage);