import Vue from 'vue'
import Router from 'vue-router'
import Todo from '@/components/Todo'
import Edit from '@/components/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Todo',
      component: Todo
    },
    {
      path: '/edit',
      name: 'Edit',
      component: Edit
    }
  ]
})
