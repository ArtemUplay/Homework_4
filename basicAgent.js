import { checkFetchResponse, checkXHRResponse } from './utils.js';

export class BasicAgent {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async sendRequestByFetch(url, config) {
    const response = await fetch(`${this._baseUrl}${url}`, config);
    const data = await checkFetchResponse(response);

    return data;
  }

  async sendRequestByXHR(url, config) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(config.method || 'GET', `${this._baseUrl}${url}`);
      xhr.setRequestHeader('Content-Type', 'application/json');

      xhr.onload = () => {
        try {
          const result = checkXHRResponse(xhr.status, xhr.response);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };

      xhr.onerror = () => reject(new Error('Произошла ошибка'));

      if (config.body) {
        xhr.send(JSON.stringify(config.body));
      } else {
        xhr.send();
      }
    });
  }
}
