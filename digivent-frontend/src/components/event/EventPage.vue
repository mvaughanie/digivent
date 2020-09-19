<template>
  <div>
    <div class="contents">
      <div class="contents__box" v-for="(event, i) in events" :key="i">
        <div class="contents__img">
          <img :src="event.image" />
        </div>
        <h4>{{ event.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "event",
  data: function() {
    return {
      events: [],
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
    this.getEvents();
  },
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
