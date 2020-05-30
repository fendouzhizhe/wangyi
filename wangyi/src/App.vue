<template>
  <div>
    <router-view></router-view>
    <Footer />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// 引入Header组件
// import Header from './components/Header'
// 引入Footer组件
import Footer from './components/Footer/Footer'
export default {
  name: 'App',
  components: {
    // HelloWorld
    // Header,
    Footer
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
// div{
//   /* font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px; */
//   height: 50px;
//   background: red;
//   color: #fff;
//   font-size: 12px;
// }
</style>
