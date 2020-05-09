<template>
  <div id="app">
    <!-- <img src="./assets/t8.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: '123'
    }
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin: 0;
}
</style>
