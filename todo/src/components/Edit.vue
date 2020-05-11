<template>
  <el-container class="edit">
  <el-header>
    <ul class="edit_header">
      <li><router-link to="/"><el-button type="primary"><i class="el-icon-arrow-left"></i></el-button></router-link></li>
      <li>代办</li>
      <li><router-link to="/"><el-button type="primary" @click="addTodo">保存</el-button></router-link></li>
    </ul>
  </el-header>
  <el-main>
    <!-- 输入标题 -->
    <el-input v-model="capital" placeholder="请输入标题"></el-input>
     <!-- 参与同事 -->
    <el-select
      v-model="colleagueValue"
      multiple
      filterable
      style="width: 100%"
      placeholder="参与同事">
    <el-option
      v-for="item in colleagues"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
   <!-- 选择日期 -->
    <el-date-picker
      v-model="dateValue"
      type="date"
      style="width: 50%"
      placeholder="截止日期">
    </el-date-picker>
    <!-- 紧急程度 -->
    <el-select v-model="importantValue" style="width: 50%;float:right" placeholder="紧急程度" >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
    <!-- 输入文本 -->
   <div class="textarea-box">
      <el-input
        type="textarea"
        :autosize="{ minRows: 6, maxRows: 8}"
        resize="none"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
   </div>
   <!-- 上传图片 -->
   <el-upload
    style="margin: 10px 0"
    action="https://jsonplaceholder.typicode.com/posts/"
    list-type="picture-card"
    :on-preview="handlePictureCardPreview"
    :on-remove="handleRemove">
    <i class="el-icon-plus"></i>
  </el-upload>
  <el-dialog :visible.sync="dialogVisible">
    <img width="100%" :src="dialogImageUrl" alt="">
  </el-dialog>
    <!-- 上传文件 -->
    <el-upload
      class="upload-demo"
      action="https://jsonplaceholder.typicode.com/posts/"
      :on-preview="handlePreview"
      :on-remove="handleRemove"
      :before-remove="beforeRemove"
      multiple
      :limit="3"
      :on-exceed="handleExceed"
      :file-list="fileList">
    <el-button size="small" type="primary">点击上传附件</el-button>
  </el-upload>
</el-main>
  <el-footer>
  </el-footer>
</el-container>
</template>

<script>
import {addTodoList} from '../utils/axios'
export default {
  name: 'Edit',
  data () {
    return {
      message: '代办',
      capital: '',
      colleagueValue: '',
      textarea: '',
      dateValue: '',
      importantValue: '',
      dialogImageUrl: '',
      dialogVisible: false,
      options: [{
        value: '选项1',
        label: '非常重要'
      }, {
        value: '选项2',
        label: '一般重要'
      }, {
        value: '选项3',
        label: '不急不急'
      }],
      colleagues: [{
        value: '选项1',
        label: '杨发杰'
      }, {
        value: '选项2',
        label: '杨慢慢'
      }, {
        value: '选项3',
        label: '沙老师'
      }],
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    }
  },
  created () {
  },
  beforeCreate () {
    var id = this.$route.query.todoid
    this.searchTodo(id)
  },
  methods: {
    searchTodo () {
      // seatchTodoList('/searchTodo', {id}).then(res => {
      //   this.todo = res.todo
      // })
    },
    // 新增Todo
    addTodo () {
      const todo = {}
      todo.id = new Date().getTime()
      todo.capital = this.capital
      todo.description = this.description
      todo.deadline = this.deadline
      todo.importantValue = this.importantValue
      todo.colleagueValue = this.colleagueValue
      addTodoList('/mock', todo)
    },
    handleRemove (file, fileList) {
      // console.log(file, fileList)
    },
    handleChange (file, fileList) {
      // this.fileList = fileList.slice(-3)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    handlePreview (file) {
      console.log(file)
    },
    handleExceed (files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`确定移除 $ { file.name }？`)
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

a,a:link,a:visited,a:active {
  text-decoration-line: none;
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

.el-footer {
  display: flex;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 5px 10px;
  position: relative;
}

.edit_header {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: space-between;
}

.edit_header li {
  float: left;
  width: 20%;
}

.textarea-box  .el-textarea__inner {
  flex-grow: 1;
  height: 300px;
}

input{
  margin-bottom: 5px;
}

.el-upload--picture-card,
.el-upload-list--picture-card .el-upload-list__item-thumbnail,
.el-upload-list--picture-card .el-upload-list__item{
  width: 100px;
  height: 100px;
}

.el-icon-plus {
  margin-top: -50px;
}
</style>
