'use strict';

async function checkUser(ctx, next) {
  const { username } = ctx.request.body;
  const rowData = await ctx.app.mysql.get('users', { username });
  if (rowData) {
    next();
  } else {
    // ctx.status = 403;

    // ctx.response.status = 403;
    // ctx.response.message = '请先登录后使用';
    // ctx.res.end();
  }
}

module.exports = () => checkUser;
