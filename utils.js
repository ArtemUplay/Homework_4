export const checkFetchResponse = (response) => {
  if (!response.ok) {
    return Promise.reject(`Произошла ошибка со статусом ${response.status}`);
  }

  return response.json();
};

export const checkXHRResponse = (status, response) => {
  if (!(status >= 200 && status < 300)) {
    return Promise.reject(`Произошла ошибка со статусом ${status}`);
  }

  return JSON.parse(response);
};
