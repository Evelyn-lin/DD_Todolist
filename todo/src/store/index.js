import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      {id: 12345, completed: false, operateVisible: false, capital: '买牛sdasda奶', description: '待办事项', deadline: '2020-5-20', important: 0, person: 'lili', imgsrc: 'http://att3.citysbs.com/200x200/hangzhou/2020/04/15/11/dd6719bd4287d9efd49434c43563a032_v2_.jpg'},
      {id: 12545, completed: true, operateVisible: false, capital: '买牛奶', description: '待办事项', deadline: '2020-5-20', important: 0, person: 'lili', imgsrc: 'http://att3.citysbs.com/200x200/hangzhou/2020/04/15/11/dd6719bd4287d9efd49434c43563a032_v2_.jpg'}]
  }
})

export default store
