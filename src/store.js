import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    questions: [],
    random: 0,
    phase: "NOT_LOADED" // NOT_LOADED | ERROR_LOADING | ALL_LOADED | GAME_STARTED | GAME_ENDED
  },
  getters: {
    hasQuestions(state) {
      return state.questions.length;
    },
    getQuestion(state) {
      return state.questions[state.random];
    }
  },
  actions: {
    loadQuestions({ commit }) {
      axios
        .get("https://sampleapis.com/futurama/questions")
        .then(resp => {
          // TODO: Catch errors and handle accordingly
          commit("SET_DATA", resp.data);
          commit("UPDATE_PHASE", "ALL_LOADED");
        })
        .catch(error => console.log(error));
    },
    startQuiz({ commit }) {
      // TODO: Get random first question
      commit("UPDATE_PHASE", "GAME_STARTED");
    },
    endQuiz({ commit }) {
      commit("UPDATE_PHASE", "ALL_LOADED");
    }
  },
  mutations: {
    SET_DATA(state, questions) {
      state.questions = questions;
    },
    UPDATE_PHASE(state, phase) {
      state.phase = phase;
    }
  }
});
