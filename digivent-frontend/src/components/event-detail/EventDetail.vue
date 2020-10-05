<template>
  <div>
    <div class="flexbox">
      <img src="@/assets/chevron-left.svg" alt="chevron-left" />
    </div>

    <h2>Event details</h2>
    <div class="flexbox">
      <img class="flexbox__main" :src="event.image" :alt="event.name" />
    </div>

    <h1>{{ event.name }}</h1>
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

    <div class="flexbox">
      <div>
        <h3>Host</h3>
        <div class="thumb">
          <img :src="event.speaker.image" :alt="event.speaker.firstName" />
        </div>
        <h3>{{ event.speaker.firstName }} {{ event.speaker.lastName }}</h3>
      </div>
    </div>
    <div v-if="isSpeaker === 'yes'">
      <a href @click.prevent="checkSpeaker(event.speaker._id)">
        Edit event
      </a>
      <a href @click.prevent="deleteEvent(event._id, event.speaker._id)">
        Delete Event
      </a>

      <h4>Event description</h4>
      <p>{{ event.description }}</p>
    </div>

    <div v-else>
      <div class="flexbox">
        <router-link
          :to="{ name: 'speaker-detail', params: { speakerId: event.speaker } }"
        >
          <h6>About host</h6>
        </router-link>
        <router-link :to="{ name: 'question', params: { eventId: event._id } }"
          >View Questions
        </router-link>
      </div>
      <h4>Event description</h4>
      <p>{{ event.description }}</p>
      <div @click.prevent="bookEvent()">
        <router-link
          class="btn"
          :to="{ name: 'book', params: { event: event } }"
          >Book
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data: function() {
    return {
      event: {
        speaker: {
          firstName: String,
          lastName: String,
          image: String,
        },
      },
      isSpeaker: "no",
    };
  },
  mounted: function() {
    const id = this.$route.params.eventId;
    this.$http
      .get(`${process.env.VUE_APP_API_URL}events/${id}`)
      .then(function(data) {
        this.event = data.body;
      });
  },
  created: function() {
    if (localStorage.speakerId) {
      this.isSpeaker = "yes";
    }
  },
  methods: {
    deleteEvent: function(eventId, speakerId) {
      if (localStorage.speakerId !== speakerId) {
        alert("You don't have permission to do.");
      } else {
        const choice = confirm("Want to delete?");
        if (choice) {
          this.$http
            .delete(`${process.env.VUE_APP_API_URL}events/${eventId}`)
            .then(function() {
              this.$router.push({ path: "/events" });
            });
        }
      }
    },
    bookEvent: function() {
      const event = this.event;
      const id = localStorage.userId;
      this.$http
        .put(`${process.env.VUE_APP_API_URL}users/${id}/event`, event)
        .then(function() {
          alert("Booking confirmed!");
        });
    },

    checkSpeaker: function(speakerId) {
      if (localStorage.speakerId !== speakerId) {
        alert("You don't have permission to do.");
      } else {
        this.$router.push({
          name: "edit",
          params: { eventId: this.event._id },
        });
      }
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
  &__main {
    width: 100%;
    min-width: 600px;
    height: auto;
  }
}
.thumb {
  @include thumb-img;
}
.btn {
  @include buttonprimary;
}
</style>