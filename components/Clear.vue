<template>
  <button v-if="seats.selected && seats.selected.length" @click="clear()">
    Clear
  </button>
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
      clear: "seats/clear",
    }),
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
}
</style>
