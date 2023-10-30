import { XHRAgent } from './XHRAgent.js';
import { FetchAgent } from './fetchAgent.js';

// Контроллер
class Task {
  constructor(_baseUrl) {
    this._baseUrl = _baseUrl;
    this._service =
      'fetch' in window
        ? new FetchAgent(this._baseUrl)
        : new XHRAgent(this._baseUrl);
  }

  async getTask(taskId) {
    const response = await this._service.getTask(taskId);
    return response;
  }

  async getAllTask() {
    const response = await this._service.getTasks();
    return response;
  }

  async createTask(task) {
    const response = await this._service.createTask(task);
    return response;
  }

  async updateTask(taskId, updatedTask) {
    const response = await this._service.updateTask(taskId, updatedTask);
    return response;
  }

  async deleteTask(taskId) {
    const response = await this._service.deleteTask(taskId);
    return response;
  }
}

const task = new Task('http://37.220.80.108');

// Получение всех тасок
// task.getAllTask().then((data) => {
//   console.log(data);
// });

// Получение таски по id
// task.getTask(9).then((data) => {
//   console.log(data);
// });

// Создание таски
// task
//   .createTask({
//     name: 'Артем',
//     info: 'Хочу устроиться на работу в лигу',
//     isImportant: true,
//   })
//   .then((task) => {
//     console.log(task);
//   });

// Обновление таски
// task
//   .updateTask(9, {
//     name: 'Hello',
//     info: 'hello123',
//   })
//   .then((updatedTask) => {
//     console.log(updatedTask);
//   });

// Удаление таски
// task.deleteTask(9).then((deletedTask) => {
//   console.log(deletedTask);
// });
