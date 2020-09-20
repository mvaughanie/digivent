<template>
  <div>
    <input v-model="search" type="text" id="search" />

    <!-- <MySearchbar :events="events" /> -->
    <div class="contents">
      <div class="contents__box" v-for="(event, i) in events" :key="i">
        <div class="contents__img">
          <img :src="event.image" />
        </div>
        <h4>{{ event.name }}</h4>
        <router-link :to="{ name: 'edit', params: { eventId: event._id} }">edit</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import MySearchbar from "../../components/MySearchbar.vue";

export default {
  name: "event",
  // components: {
  //   MySearchbar,
  // },

  data: function () {
    return {
      events: [],
      search: "",
    };
  },
  methods: {
    getEvents: function () {
      this.$http
        .get(`${process.env.VUE_APP_API_URL}events`)
        .then(function (data) {
          this.events = data.body;
        });
    },
  },
  created() {
    this.getEvents();
  },
  // computed: {
  //   filteredEvents: function () {
  //     return this.events.filter((event) => {
  //       return event.name.match(this.search);
  //     });
  //   },
  // },
};
</script>

<style>
.contents {
  display: flex;
}
.contents__box {
  margin: 20px;
}
.contents__img {
  height: 400px;
  width: 300px;
  overflow: hidden;
}
img {
  height: 100%;
  width: auto;
}
</style>
