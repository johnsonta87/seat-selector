export const state = () => ({
  seats: [1, 2, 3, 4, 5, 6],
  selected: [],
});

export const mutations = {
  add(state, seatNum) {
    state.selected.push(seatNum);
  },
  remove(state, { seatNum }) {
    state.selected.splice(state.selected.indexOf(seatNum), 1);
  },
  toggle(state, seatNum) {
    if (state.selected.includes(seatNum)) {
      state.selected.splice(state.selected.indexOf(seatNum), 1);
    } else {
      state.selected.push(seatNum);
    }
  },
  clear(state) {
    if (state.selected.length) {
      state.selected = [];
    }
  },
};
