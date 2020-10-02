<template>
  <div>
    <MySearchbar v-model="search" type="text" id="search" />

    <div v-if="isSpeaker === 'yes'">
      <h3>Hi Host, {{ speaker.firstName }} {{ speaker.lastName }}</h3>
      <h4>Check <a href="">your events</a></h4>
      <div class="flexbox__thumb">
        <img :src="speaker.image" :alt="speaker.firstName" />
      </div>
    </div>

    <h1>Explore</h1>
    <h2>What’s upcoming events</h2>

    <router-link :to="{ name: 'edit' }">New event</router-link>
    <EventThumbList :events="filteredEvents" />
  </div>
</template>

<script>
import EventThumbList from "./EventThumbList";
import MySearchbar from "../MySearchbar";

export default {
  name: "event",
  components: {
    EventThumbList,
    MySearchbar,
  },
  data: function() {
    return {
      isSpeaker: "no",
      search: "",
      events: [],
      speaker: {},
    };
  },
  methods: {
    getEvents: function() {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}events`)
        .then(function(data) {
          this.events = data.body;
        });
    },
  },
  created: function() {
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
      const id = localStorage.speakerId;
      this.$http
        .get(`${process.env.VUE_APP_API_URL}speakers/${id}`)
        .then(function(data) {
          this.speaker = data.body;
        });
    }
    this.getEvents();
  },
  computed: {
    filteredEvents: function() {
      return this.events.filter((event) => {
        let byName =
          event.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        if (byName === true) {
          return byName;
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/style/_variables.scss";

.flexbox {
  display: flex;
  align-items: center;
  overflow: hidden;

  &__thumb {
    @include thumb-img;
  }
}  
</style>
