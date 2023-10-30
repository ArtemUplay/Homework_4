import { BasicAgent } from './basicAgent.js';

export class FetchAgent extends BasicAgent {
  constructor(_baseUrl) {
    super(_baseUrl);
  }

  async getTask(taskId) {
    try {
      const task = await this.sendRequestByFetch(`/tasks/${taskId}`);

      return task;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getTasks() {
    try {
      const tasks = await this.sendRequestByFetch(`/tasks`);

      return tasks;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async createTask(task) {
    try {
      const createdTask = await this.sendRequestByFetch(`/tasks`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      return createdTask;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async updateTask(taskId, task) {
    try {
      const updatedTask = await this.sendRequestByFetch(`/tasks/${taskId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      return updatedTask;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async deleteTask(taskId) {
    try {
      await this.sendRequestByFetch(`/tasks/${taskId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }
}

const fetchAgent = new FetchAgent('http://37.220.80.108');

// GET запрос таски по указаному id
// fetchAgent.getTask(300).then((task) => {
//   console.log(task);
// });

// GET запрос всех тасок
// fetchAgent.getTasks().then((tasks) => {
//   console.log(tasks);
// });

// POST запрос для создания таски
// fetchAgent
//   .createTask({
//     name: 'hello',
//     info: 'helloworld',
//     isImportant: false,
//   })
//   .then((task) => console.log(task));

// PATCH запрос для обновления таски
// fetchAgent
//   .updateTask(300, { name: 'value123' })
//   .then((updatedTask) => console.log(updatedTask));

// DELETE запрос для обновления таски
// fetchAgent.deleteTask(300).then((deletedTask) => {
//   console.log(deletedTask);
// });
