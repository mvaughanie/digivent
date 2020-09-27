<template>
  <keep-alive>
    <div class="contents">
      <div class="contents__box" v-for="(event, i) in events" :key="i">
        <router-link
          v-bind:to="{
            name: 'details',
            params: { eventId: event._id },
          }"
        >
          <div class="contents__img">
            <img :src="event.image" :alt="event.name" />
          </div>
          <h2>{{ event.name }}</h2>
          <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
        </router-link>
      </div>
    </div>
  </keep-alive>
</template>

<script>
export default {
  name: "EventThumbList",
  props: ["events"],
};
</script>

<style>
.contents {
  white-space: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
}
</style>
