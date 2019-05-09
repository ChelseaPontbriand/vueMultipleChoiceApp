import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    Questions: [],
    random: 0
  },
  getters: {
    hasQuestions(state) {
      return state.Questions.length > 0;
    },
    getQuestion(state) {
      return state.Questions[state.random];
    }
  },
  actions: {
    loadQuestions({ commit }) {
      axios
        .get("https://sampleapis.com/futurama/questions")
        .then(data => {
          console.log(data.data);
          let questions = data.data;
          commit("SET_DATA", questions);
        })
        .catch(error => {
          console.log(error);
        });
    },
    startQuiz({ state, getters }) {
      state.random = Math.floor(Math.random() * state.Questions.length - 1);
      console.log(state.random);
      console.log(getters.getQuestion);

      const question = document.querySelector(".question");
      const startBtn = document.querySelector(".startBtn");
      const endBtn = document.querySelector(".endBtn");

      question.classList.remove("hide");
      endBtn.classList.remove("hide");
      startBtn.classList.add("hide");
    },
    retakeQuiz() {}
  },
  mutations: {
    SET_DATA(state, questions) {
      state.Questions = questions;
    }
  }
});
