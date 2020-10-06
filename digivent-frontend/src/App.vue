<template>
  <v-app>
        <Navbar />
    <router-view></router-view>

  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style lang="scss">
@import "@/style/_variables.scss";

* {
  // border: 1px solid red;
  text-decoration: none;
  font-weight: 300;
  margin: 0;
  box-sizing: border-box;
  color: black;
}
h1,
h2 {
  font-weight: 400;
}
#app {
  width: 100vw;
  height: 90vh;
}

.body {
  &-main {
    position: relative;
    @include desktop {
      margin-top: 100px;
    }
  }
}
</style>