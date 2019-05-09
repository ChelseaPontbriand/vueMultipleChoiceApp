<template>
  <div class="container questions hide">
    <div class="question">
      <h1 class="question__header">What is Fry's first name?</h1>
      <ol class="answers">
        <label for="ans1">
          <li>
            <input id="ans1" type="radio" name="ans" val="Fred">
            <span>Fred</span>
          </li>
        </label>
        <label for="ans2">
          <li>
            <input id="ans2" type="radio" name="ans" val="Philip">
            <span>Philip</span>
          </li>
        </label>
        <label for="ans3">
          <li>
            <input id="ans3" type="radio" name="ans" val="Will">
            <span>Will</span>
          </li>
        </label>
        <label for="ans4">
          <li>
            <input id="ans4" type="radio" name="ans" val="John">
            <span>John</span>
          </li>
        </label>
      </ol>
      <button id="btn__submit" class="btn submit">Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionCard",
  components: {},
  methods: {}
};
</script>
