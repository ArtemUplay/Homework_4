import { BasicAgent } from './basicAgent.js';

export class XHRAgent extends BasicAgent {
  constructor(_baseUrl) {
    super(_baseUrl);
  }

  async getTask(taskId) {
    try {
      const task = await this.sendRequestByXHR(`/tasks/${taskId}`, {
        method: 'GET',
      });

      return task;
    } catch (error) {
      console.error(error);

      return null;
    }
  }

  async getTasks() {
    try {
      const tasks = await this.sendRequestByXHR(`/tasks`, { method: 'GET' });

      return tasks;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createTask(task) {
    try {
      const createdTask = await this.sendRequestByXHR(`/tasks`, {
        method: 'POST',
        body: task,
      });

      return createdTask;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateTask(taskId, task) {
    try {
      const updatedTask = await this.sendRequestByXHR(`/tasks/${taskId}`, {
        method: 'PATCH',
        body: task,
      });

      return updatedTask;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteTask(taskId) {
    try {
      await this.sendRequestByXHR(`/tasks/${taskId}`, {
        method: 'DELETE',
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const xhrAgent = new XHRAgent('http://37.220.80.108');

// GET - запрос на получение таски
// xhrAgent.getTask(7).then((task) => console.log(task));

// GET - запрос на получение тасок
// xhrAgent.getTasks().then((tasks) => console.log(tasks));

// POST - запрос на создание таски
// xhrAgent
//   .createTask({ name: 'hi1', info: 'nothing', isImportant: true })
//   .then((task) => console.log(task));

// PATCH - запрос на обновление таски
// xhrAgent
//   .updateTask(7, {
//     name: 'приветик',
//   })
//   .then((task) => console.log(task));

// DELETE - запрос на удаление таски
// xhrAgent.deleteTask(7).then((task) => console.log(task));
