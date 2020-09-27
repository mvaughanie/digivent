<template>
  <div class="navbar">
    <img src="@/assets/logo-icon.svg/" class="logo" alt="logo" />

    <router-link class="text" v-bind:to="'/events'">Home</router-link>
    <router-link class="text" :to="'/'">Questions</router-link>
    <router-link class="text" :to="'/my-events'">My Events</router-link>
    <router-link class="text" :to="'/profile'">Profile</router-link>
    <router-link class="text" v-if="loggedIn === 'no'" v-bind:to="'/login'"
      >Login</router-link
    >
    <a class="text" v-if="loggedIn === 'yes'" @click.prevent="setLoggedOut" href
      >Log Out</a
    >
  </div>
</template>

<script>
import EventBus from "../eventBus";
export default {
  name: "MyNavbar",
  data: function() {
    return {
      loggedIn: "no",
      userName: "",
    };
  },
  methods: {
    setLoggedOut: function() {
      localStorage.loggedIn = "no";
      localStorage.removeItem("userName");
      localStorage.removeItem("userId");
      localStorage.removeItem("speakerName");
      localStorage.removeItem("speakerId");
      EventBus.$emit("$loggedIn");
      // redirect to login page
      this.$router.push({ path: "/login" });
    },
    setLoggedIn: function() {
      console.log("login");
      localStorage.loggedIn = "yes";
      this.loggedIn = localStorage.loggedIn;
      this.userName = localStorage.userName;
    },
  },
  mounted() {
    this.loggedIn = localStorage.getItem("loggedIn");
    this.userName = localStorage.getItem("userName");
    EventBus.$on("$loggedIn", this.setLoggedIn);
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";
.navbar {
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: $primary;
  a {
    color: $natural-light;
  }
}
.router-link-active {
  color: red;
}
.text {
  color: white;
}

.logo {
  width: 50px;
}
</style>
