<template>
  <div v-if="seats.selected && seats.selected.length">
    <p>Selected seats:</p>

    <ul class="selected-seats-list">
      <li :key="selected" v-for="selected in seats.selected">{{ selected }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    seats() {
      return this.$store.state.seats;
    },
  },
};
</script>

<style scoped lang="scss">
.selected-seats-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 1em 0;

  > li {
    margin: 0 0.5em;
    border: 1px solid blue;
    padding: 0.5em;

    &:first-of-type {
      margin-left: 0;
    }
  }
}
</style>
