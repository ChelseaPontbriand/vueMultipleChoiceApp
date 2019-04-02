import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: [
      {
        front: 'The "First Computer Programmer"',
        back: "Ada Lovelace",
        flipped: false
      },
      {
        front: 'Invented the "Clarke Calculator"',
        back: "Edith Clarke",
        flipped: false
      },
      {
        front: "Famous World War II Enigma code breaker",
        back: "Alan Turing",
        flipped: false
      },
      {
        front: "Created satellite orbit analyzation software for NASA",
        back: "Dr. Evelyn Boyd Granville",
        flipped: false
      }
    ],
    newFront: null,
    newBack: null,
    error: false
  },
  getters: {},
  actions: {
    addCard({ commit, state }) {
      // This is the proper way of adding to state.
      // This allows for async code to call a db or something
      if (!state.newFront || !state.newBack) {
        commit("UPDATE_ERROR", true);
      } else {
        commit("ADD_CARD");
        if (state.error) {
          commit("UPDATE_ERROR", false);
        }
      }
    },
    updateThing({ commit }, target) {
      const newData = {
        name: target.name,
        value: target.value
      };
      commit("UPDATE_NEW_DATA", newData);
    }
  },
  mutations: {
    ADD_CARD(state) {
      state.cards.push({
        front: state.newFront,
        back: state.newBack,
        flipped: false
      });
    },
    UPDATE_ERROR(state, value) {
      state.error = value;
    },
    UPDATE_NEW_DATA(state, { name, value }) {
      state[name] = value;
    }
  }
});
