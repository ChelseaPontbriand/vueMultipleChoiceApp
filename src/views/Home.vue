<template>
  <div class="container home">
    <header class="home__header">
      <h1>Futurama Quiz</h1>
    </header>
    <button id="btn__start" class="btn">Start Quiz</button>
  </div>
</template>

<script>
// @ is an alias to /src
import Form from "@/components/Form";
import FlashCard from "@/components/FlashCard";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {
    QuestionCard,
    QuestionCardCorrect,
    QuestionCardWrong,
    ScoreCard
  },
  mounted() {
    this.$store.dispatch("loadQuestions");
  },
  computed: {
    ...mapState(["questions"])
  }
};
</script>


<style lang="scss">
body {
  font-family: "Montserrat", sans-serif;
  text-align: center;
}

ul {
  padding-left: 0;
  display: flex;
  flex-flow: row wrap;
}

li {
  list-style-type: none;
  padding: 10px 10px;
  transition: all 0.3s ease;
}

.container {
  max-width: 100%;
  padding: 2em;
}
</style>

