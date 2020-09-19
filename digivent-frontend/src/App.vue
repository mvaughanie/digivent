<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import MyNavbar from "./components/MyNavbar.vue";

export default {
  name: "App",

  components: {
    navbar: MyNavbar,
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
</style>
