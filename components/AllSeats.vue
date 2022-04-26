<template>
  <div class="all-seats">
    <seat-item />
    <selected-seats />
    <clear />
  </div>
</template>

<script>
import Clear from "./Clear.vue";
import SeatItem from "./SeatItem.vue";
import SelectedSeats from "./SelectedSeats.vue";

export default {
  components: { SeatItem, Clear },
};
</script>

<style scoped>
.all-seats {
  position: relative;
  max-width: 420px;
  border: 1px solid #ddd;
  padding: 1em;
  border-radius: 4px;
  margin: 0 auto;
}
</style>
