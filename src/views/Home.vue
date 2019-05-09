<template>
  <div class="container home">
    <header class="home__header">
      <h1>Futurama Quiz</h1>
    </header>
    <div class="body" v-if="this.hasQuestions">
      <button v-if="phase == 'ALL_LOADED'" class="btn -start" @click="startQuiz('Hello')">Start Quiz</button>
      <button v-if="phase == 'GAME_STARTED'" class="btn -end" @click="endQuiz('Bye')">End Quiz</button>
    </div>
    <h2 v-else>Loading Questions...</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "home",
  components: {},
  created() {
    if (!this.hasQuestions) {
      this.$store.dispatch("loadQuestions");
    }
  },
  computed: {
    ...mapState(["questions", "phase"]),
    ...mapGetters(["hasQuestions"])
  },
  methods: {
    ...mapActions(["startQuiz", "endQuiz"])
  }
};
</script>


<style lang="scss">
.hide {
  display: none;
}
</style>

