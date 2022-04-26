<template>
  <ul v-if="seats.seats && seats.seats.length">
    <li class="seat-item" v-for="seat in seats.seats" :key="seat">
      <button type="button" @click="toggle(seat)">
        {{ seat }}
      </button>
    </li>
  </ul>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  computed: {
    seats() {
      return this.$store.state.seats;
    },
  },
  methods: {
    ...mapMutations({
      add: "seats/add",
      remove: "seats/remove",
      toggle: "seats/toggle",
    }),
  },
};
</script>

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

button {
  cursor: pointer;
}
</style>
