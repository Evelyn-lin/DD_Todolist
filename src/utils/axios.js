import axios from 'axios'

export const addTodoList = (url, params) => {
  return new Promise((resolve, reject) => {
    let baseUrl =
      ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example'
    axios({
      method: 'get',
      url: baseUrl + url,
      param: params
    })
      .then(result => {
        if (result.status === 200) {
          resolve(result.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const editTodoList = (url, params) => {
  return new Promise((resolve, reject) => {
    let baseUrl =
      ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example'
    axios({
      method: 'get',
      url: baseUrl + url,
      param: params
    })
      .then(result => {
        if (result.status === 200) {
          resolve(result.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const deleteTodoList = (url, params) => {
  return new Promise((resolve, reject) => {
    let baseUrl =
      ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example'
    axios({
      method: 'post',
      url: baseUrl + url,
      param: params
    })
      .then(result => {
        if (result.status === 200) {
          resolve(result.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}

export const getTodoList = (url, params) => {
  return new Promise((resolve, reject) => {
    let baseUrl = ' https://www.easy-mock.com/mock/5e757dcfcbc4ab22914227ba/example'
    axios({
      method: 'get',
      url: baseUrl + url,
      param: params
    })
      .then(result => {
        if (result.status === 200) {
          resolve(result.data)
        }
      })
      .catch(err => {
        reject(err)
      })
  })
}
