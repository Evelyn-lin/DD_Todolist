'use strict';
const Controller = require('egg').Controller;

class TodosController extends Controller {
  async list() {
    // const dataList = [
    //   {
    //     id: 1,
    //     content: '学习',
    //     time: '1589086320130',
    //     isFinish: 0,
    //   },
    //   {
    //     id: 2,
    //     content: '和精灵吃饭',
    //     time: '1589086320130',
    //     isFinish: 0,
    //   },
    // ];

    const users = await this.ctx.service.todos.list(1);

    this.ctx.response.body = users;

  }

  async insertTodo() {
    const { app, ctx } = this;
    const body = ctx.request.body;
    const { content = 'kandinying', time = Date.now() } = body;
    const result = await app.mysql.insert('todos', { content, time, userId: 1 });

  }

  async deleteTodo() {
    const { ctx } = this;
    const { userId, id } = ctx.request.body;

  }

  async updateTodo() {
    const { ctx } = this;
    const { content, time, id, userId } = ctx.request.body;
  }
}

module.exports = TodosController;
