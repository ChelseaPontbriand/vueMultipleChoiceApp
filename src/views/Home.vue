<template>
  <div id="flashcard-app" class="container">
    <h1>Quiz App</h1>
    <Form/>
    <QuizCard/>

    <FlashCard/>
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
    QuizCard,
    Form,
    FlashCard
  },
  data: function() {
    return {
      message: "QuizApp",
      newFront: "",
      newBack: "",
      error: false
    };
  },
  computed: {
    ...mapState(["cards"]),
    ...mapGetters([])
  },
  methods: {
    ...mapActions(["addCard"])
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

