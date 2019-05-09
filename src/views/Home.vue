<template>
  <div class="container home">
    <header class="home__header">
      <h1>Futurama Quiz</h1>
    </header>
    <div class="body" v-if="this.hasQuestions">
      <div
        class="question hide"
        v-for="(question, index) in Questions"
        :key="index"
      >{{ question.question }}</div>
      <!-- maybe use v-show instead of hide class -->
      <button class="btn startBtn" v-on:click="startQuiz('Hello')">Start Quiz</button>
      <button class="btn endBtn hide">End Quiz</button>
    </div>

    <div class="body" v-else>
      <h2>Loading Questions...</h2>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import QuestionCard from "@/components/QuestionCard";
import QuestionCardCorrect from "@/components/QuestionCardCorrect";
import QuestionCardWrong from "@/components/QuestionCardWrong";
import ScoreCard from "@/components/ScoreCard";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    QuestionCard,
    QuestionCardCorrect,
    QuestionCardWrong,
    ScoreCard
  },
  created() {
    if (!this.hasQuestions) {
      this.$store.dispatch("loadQuestions");
    }
  },
  methods: {
    ...mapActions(["startQuiz"])
  },
  computed: {
    ...mapState(["Questions"]),
    ...mapGetters(["hasQuestions"])
  }
};
</script>


<style lang="scss">
.hide {
  display: none;
}
</style>

