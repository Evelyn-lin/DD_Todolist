/* eslint valid-jsdoc: "off" */

'use strict';
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1589080344270_4097';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const newsConfig = {
    pageSize: 5,
    serverUrl: 'https://hacker-news.firebaseio.com/v0',
  };

  const mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: 'mingtianyihou201',
      database: 'todos',
    },
    app: true,
    agent: false,
  };
  return {
    ...config,
    ...userConfig,
    news: newsConfig,
    mysql,
  };
};

