<template>
  <div id="app">
   <!-- <img src="./assets/logo.png">-->
    <a href="/">main</a>
    <router-view/>  <!-- 이하로 라우터 내용이 뿌려짐 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
