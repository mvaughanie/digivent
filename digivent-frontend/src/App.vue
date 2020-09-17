<template>
  <div id="app">
    <router-view></router-view>
    <nav></nav>
  </div>
</template>

<script>
import MyNavbar from "./components/MyNavbar.vue";

export default {
  name: 'App',

  components: {
    "nav": MyNavbar
  }
}
</script>

<style lang="scss">
@import "@/style/_variables.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
