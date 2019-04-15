import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    Questions: [
      {
        question: "What is Fry's first name?",
        possibleAnswers: ["Fred", "Philip", "Will", "John"],
        correctAnswer: "Philip"
      },
      {
        question: "What is Benders middle and last name?",
        possibleAnswers: ["E Smithie", "Flam Flexo", "Lobster Squid", "Bending Rodriguez", "Steven Martin"],
        correctAnswer: "Bending Rodriguez"
      },
      {
        question: "What is Ziodberg?",
        possibleAnswers: ["Lobster", "Alien", "Muntant", "Robot"],
        correctAnswer: "Lobster"
      },
      {
        question: "Which of the following is not a member of the Ultimate Robot Fighting League?",
        possibleAnswers: [
          "The Clearcutter",
          "Millionaire Bot",
          "Sergeant Feces Processor",
          "The Chain Smoker",
          "The Gender Bender"
        ],
        correctAnswer: "Millionaire Bot"
      }
    ]
  },
  getters: {
    getQuestions: state => state.Questions
  },
  actions: {
    loadData({ commit }) {
      axios
        .get("https://sampleapis.com/futurama/questions")
        .then(data => {
          console.log(data.data);
          let questions = data.data;
          commit("SET_POSTS", questions);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mutations: {
    SET_DATA(state, questions) {
      state.Questions = questions;
    }
  }
});
