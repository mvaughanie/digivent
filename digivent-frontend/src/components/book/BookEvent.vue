<template>
  <div>
    <h1>{{ event.name }}</h1>
    <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>

    <div class="flexbox">
      <img src="@/assets/pin.svg" alt="pin" />
      <h4>{{ event.address }}</h4>
    </div>
    <div class="flexbox">
      <img src="@/assets/dates.svg" alt="dates" />
      <h4>{{ event.date }}</h4>
    </div>
    <div class="flexbox">
      <img src="@/assets/time.svg" alt="time" />
      <h4>{{ event.time }}</h4>
    </div>
    <div>Qr code</div>
    <input type="button" value="Ask question" />
  </div>
</template>

<script>
export default {
  name: "book",
  data: function() {
    return {
      event: {
        speaker: {
          firstName: String,
          lastName: String,
          image: String,
        },
      },
    };
  },
  mounted: function() {
    this.event = this.$attrs.event;
  },
};
</script>

<style></style>
