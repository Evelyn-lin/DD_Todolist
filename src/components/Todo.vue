<template>
<el-container >
  <el-header>{{date}}</el-header>
  <el-main>
    <el-card class="box-card" v-for="item in todo" :key="item.id">
      <div class="label"></div>
      <i class="el-icon-alarm-clock"></i>
      <div class="deadline">{{item.deadline}}</div>
      <div class="text item">
        <span class="capital">{{item.capital}}</span>
        <span class="description">{{item.description}}</span>
        <el-checkbox ></el-checkbox>
      </div>
    </el-card>
    <router-link to="/edit">
      <div class="add"><i class="el-icon-circle-plus"></i></div>
    </router-link>
  </el-main>
  <el-footer>
    <el-button type="info" plain>全部</el-button>
    <el-button type="info" plain>已完成</el-button>
    <el-button type="info" plain>未完成</el-button>
  </el-footer>
</el-container>
</template>

<script>
export default {
  name: 'Todo',
  data () {
    return {
      todo: [
        {id: 12345, capital: '买牛sdasda奶', description: '待办事项', deadline: '2020-5-20', important: 0, person: 'lili', imgsrc: 'http://att3.citysbs.com/200x200/hangzhou/2020/04/15/11/dd6719bd4287d9efd49434c43563a032_v2_.jpg'},
        {id: 12545, capital: '买牛奶', description: '待办事项', deadline: '2020-5-20', important: 0, person: 'lili', imgsrc: 'http://att3.citysbs.com/200x200/hangzhou/2020/04/15/11/dd6719bd4287d9efd49434c43563a032_v2_.jpg'}
      ],
      date: '123'
    }
  },
  created () {
    this.getDate()
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

.el-card {
  position: relative;
  margin: 10px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.label{
  height: 50px;
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

.el-checkbox:last-of-type {
  position: absolute;
  right: 10px;
}
.el-checkbox__inner {
  border: #B3C0D1 1px solid;
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

</style>
