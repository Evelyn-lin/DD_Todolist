'use strict';

const Service = require('egg').Service;
class TodosService extends Service {
  // implement
  async list(userId) {
    if (!userId) return [];
    const ctx = this.ctx;
    const todosList = await ctx.app.mysql.select('todos', { userId });
    return todosList;
  }

  async insertTodo(params) {
    const { capital, description, deadline, important, person, imgsrc, } = params;
    // if (!content || !expectTime) {
    //   return false;
    // }

    const res = await this.ctx.app.mysql.insert('todos', { capital, description, deadline, important, person, imgsrc });
    console.log('>>>>>>>>>>>', res);
    return res;
  }

  async deleteTodo(userId, todosId) { 
    if (!userId) {
      return false;
    }

    const res = await this.ctx.app.mysql.delete('todos', { userId, todosId });
    return res;
  }

  async updateTodo(userId, todosId, content, expectTime) {
    if (!userId || !todosId || !content, !expectTime) {
      return false;
    }
    const row = {
      userId,
      todosId,
      content,
      expectTime,
    }
    const options = {
      where: {
        userId,
        todosId,
      }
    }
    const res = this.app.mysql.update('todos', row, options);
    return res;
  }
}
module.exports = TodosService;
