const websiteUrl = 'https://intership-liga.ru/tasks';
const image = document.querySelector('.image');
const button = document.querySelector('.button');

function sendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
      if (!(xhr.status >= 200 && xhr.status < 300)) {
        reject(`Запрос не удался`);
      } else {
        resolve(xhr.response);
      }
    }

    xhr.onerror = () => {
      reject(xhr.response);
    }

    xhr.send(body);
  })
}

// Посылаем GET запрос
sendRequest(
  'GET',
  websiteUrl
)
  .then(data => console.log(JSON.parse(data)))
  .catch(error => console.error(error))

// Посылаем POST запрос
sendRequest(
  'POST',
  websiteUrl,
  JSON.stringify({
    name: 'Артем',
    info: "learning JavaScript",
    isImportant: true
  })
)
  .then(data => console.log(JSON.parse(data)))
  .catch(error => console.error(error))

// Посылаем PATCH запрос
sendRequest(
  'PATCH',
  `${websiteUrl}/762`,
  JSON.stringify({
    name: 'Кирилл'
  })
)
  .then(data => console.log(JSON.parse(data)))
  .catch(error => console.error(error))

// Посылаем PUT запрос
sendRequest(
  'PUT',
  `${websiteUrl}/762`,
  JSON.stringify({
    name: 'Евгений',
    info: "learning Python",
    isImportant: false
  })
)
  .then(data => console.log(JSON.parse(data)))
  .catch(error => console.error(error))

// Посылаем DELETE запрос
sendRequest(
  'DELETE',
  `${websiteUrl}/760`,
)
  .then(data => console.log(JSON.parse(data)))
  .catch(error => console.error(error))

function getRandomImage() {
  button.disabled = true;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random');

  xhr.responseType = 'json';

  xhr.onload = () => {
    if (!(xhr.status >= 200 && xhr.status < 300)) {
      console.log(`Запрос не удался`);
    } else {
      const data = xhr.response;
      image.src = data.message;
      button.disabled = false;
    }
  }

  xhr.onerror = () => {
    console.log(xhr.response);
  }

  xhr.send();
}

getRandomImage();

button.addEventListener('click', getRandomImage);