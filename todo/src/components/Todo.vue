<template>
<el-container >
  <el-header>{{date}}</el-header>
  <el-main>
    <div
      class="box-card"
      v-for="item in filterTodo"
      :key="item.id"
      @click="handleClick(item.id)"
      @touchstart="gotouchstart(item)"
      @touchmove="gotouchmove"
      @touchend="gotouchend"
      >
      <div class="label"></div>
      <i class="el-icon-alarm-clock"></i>
      <div class="deadline">{{item.deadline}}</div>
      <ul class="operate" v-show="item.operateVisible">
        <li @click.stop="deleteTodo(item)">删除</li>
        <li @click.stop="item.operateVisible = false">取消</li>
      </ul>
      <div class="text item">
        <span class="capital">{{item.capital}}</span>
        <span class="description">{{item.description}}</span>
        <div class="checkbox" @click.stop><el-checkbox v-model="item.completed" ></el-checkbox></div>
      </div>
    </div>
    <router-link to="/edit">
      <div class="add"><i class="el-icon-circle-plus"></i></div>
    </router-link>
  </el-main>
  <el-footer>
    <el-button type="info" plain  @click="filter = 0">全部</el-button>
    <el-button type="info" plain @click="filter = 1">已完成</el-button>
    <el-button type="info" plain  @click="filter = 2">未完成</el-button>
  </el-footer>
</el-container>
</template>

<script>
import { getTodoList,deleteTodoList } from '../utils/axios'
import store from '../store'

var timeOutEvent = 0
export default {
  name: 'Todo',
  data () {
    return {
      todo: [],
      filter: 0, // 0代表全部 1代表未完成 2代表已完成
      date: '123',
    }
  },
  created () {
    this.getDate()
    this.getTodo()
    var query = this.$route.query
    console.log(query)
  },
  computed: {
    // 筛选toto
    filterTodo: function () {
      let mode = this.filter
      let todos = this.todo
      if (mode) {
        todos = todos.filter(item => {
          if (mode === 1) {
            return item.completed
          } else {
            return !item.completed
          }
        })
      }
      return todos
    }
  },
  methods: {
    // 获取当前日期
    getDate () {
      let m = new Date().getMonth() + 1
      m = m < 10 ? '0' + m : m
      let d = new Date().getDate()
      d = d < 10 ? '0' + d : d
      let day = new Date().getDay()
      day = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'][day]
      let date = m + '/' + d + ' ' + day
      this.date = date
    },
    // 获取todo列表
    getTodo () {
      // getTodoList('/getTodo').then(res => {
      //   this.todo = res.todo
      // })
      this.todo = store.state.todos;
    },
    handleClick (id) {
      this.$router.push({path: '/edit', query: {todoid: id}})
    },
    gotouchstart (item) {
      clearTimeout(timeOutEvent) // 清除定时器
      timeOutEvent = 0
      timeOutEvent = setTimeout(function () {
      // 执行长按要执行的内容
        item.operateVisible = true
      }, 600)
    },
    gotouchend () {
      clearTimeout(timeOutEvent)
      if (timeOutEvent !== 0) {
        // 这里写要执行的内容（尤如onclick事件）
      }
    },
    gotouchmove () {
      clearTimeout(timeOutEvent) // 清除定时器
      timeOutEvent = 0
    },
    deleteTodo (item) {
      item.operateVisible = false
      // 删除数据
      deleteTodoList('/delete', {id: item.id})
      // 重新获取数据
      this.getTodo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html, body{
  margin: 0;
  padding: 0;
}
.el-container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding: 0;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 5px 10px;
}

.el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.box-card {
  position: relative;
  background-color: #fff;
  border-radius: 5px;
  margin: 10px;
  max-height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.label{
  height: 50px;
  border-radius: 5px 0px 0px 5px;
  width: 10px;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #B3C0D1;
}

.el-icon-alarm-clock {
  position: absolute;
  left: 10px;
  color:rgba(179, 192, 209, 0.486);
  font-size: 30px;
}

.deadline {
  font-size: 8px;
  height: 50px;
  width: 70px;
  line-height: 50px;
  text-align: center;
  position: absolute;
  top: 0;
  left: 10px;
}

.capital{
  font-size: 16px;
}

.description {
  font-size: 12px;
  color: #888;
}

.checkbox {
  z-index: 2;
  position: absolute;
  right: 10px;
}

.text {
    font-size: 14px;
}

.item {
  margin: 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.add {
  font-size: 50px;
  color: #B3C0D1;
  position: absolute;
  right: 10px;
  bottom: 70px;
}

.el-message-box {
  width: '';
}

.el-message-box__wrapper{
  width: 600px;
  display: flex;
}

.operate {
  list-style: none;
  margin: 0;
  display: flex;
  align-items: center;
  height: 50px;
  position:absolute;
  top: 0;
  z-index: 3;
  font-size: 12px;
  right: 0;
  animation: fade 1s;
}

.operate li {
  line-height: 50px;
  padding: 10px;
  height: 50px;
}

.operate li:first-child{
  background-color: #F56C6C;
}

.operate li:last-child{
  background-color: #C0C4CC;
}

@keyframes fade {
  from {
    right: -60px;
  }
  to {
    right: 0;
  }
}
</style>
