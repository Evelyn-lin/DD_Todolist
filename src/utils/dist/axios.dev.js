"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTodoList = exports.deleteTodoList = exports.editTodoList = exports.addTodoList = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var addTodoList = function addTodoList(url, params) {
  return new Promise(function (resolve, reject) {
    var baseUrl = ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example';
    (0, _axios["default"])({
      method: 'get',
      url: baseUrl + url,
      param: params
    }).then(function (result) {
      if (result.status === 200) {
        resolve(result.data);
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.addTodoList = addTodoList;

var editTodoList = function editTodoList(url, params) {
  return new Promise(function (resolve, reject) {
    var baseUrl = ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example';
    (0, _axios["default"])({
      method: 'get',
      url: baseUrl + url,
      param: params
    }).then(function (result) {
      if (result.status === 200) {
        resolve(result.data);
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.editTodoList = editTodoList;

var deleteTodoList = function deleteTodoList(url, params) {
  return new Promise(function (resolve, reject) {
    var baseUrl = ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example';
    (0, _axios["default"])({
      method: 'post',
      url: baseUrl + url,
      param: params
    }).then(function (result) {
      if (result.status === 200) {
        resolve(result.data);
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.deleteTodoList = deleteTodoList;

var getTodoList = function getTodoList(url, params) {
  return new Promise(function (resolve, reject) {
    var baseUrl = ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example';
    (0, _axios["default"])({
      method: 'get',
      url: baseUrl + url,
      param: params
    }).then(function (result) {
      if (result.status === 200) {
        resolve(result.data);
      }
    })["catch"](function (err) {
      reject(err);
    });
  });
};

exports.getTodoList = getTodoList;