'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const checkUser = app.middleware.checkUser();
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/news', controller.news.list);
  router.get('/todos', controller.todos.list);
  router.post('/todos/insert', controller.todos.insertTodo);
  router.post('/todos/delete', controller.todos.deleteTodo);
  router.post('/todos/update', controller.todos.updateTodo);
};
