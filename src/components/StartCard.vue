<template>
  <div>
    <ul class="flashcard-list">
      <li v-for="(card, index) in cards" :key="index" @click="toggleCard(card)">
        <transition name="flip">
          <p v-bind:key="card.flipped" class="card">
            {{ card.flipped ? card.back : card.front }}
            <span
              v-on:click="cards.splice(index, 1)"
              class="delete-card"
            >X</span>
          </p>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "FlashCard",
  computed: {
    ...mapState(["cards"])
  },
  methods: {
    toggleCard: function(card) {
      card.flipped = !card.flipped;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: block;
  width: 150px;
  height: 175px;
  padding: 80px 50px;
  background-color: #51aae5;
  border-radius: 7px;
  margin: 5px;
  text-align: center;
  line-height: 27px;
  cursor: pointer;
  position: relative;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  -webkit-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  -moz-box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  box-shadow: 9px 10px 22px -8px rgba(209, 193, 209, 0.5);
  will-change: transform;
}

li:hover {
  transform: scale(1.1);
}

li:nth-child(-n + 3) .card {
  background-color: #e65f51;
}

li:nth-child(2n + 1) .card {
  background-color: #a17de9;
}

li:nth-child(4n) .card {
  background-color: #feca34;
}

li:nth-child(5n-2) .card {
  background-color: #51aae5;
}

li:nth-child(4n + 4) .card {
  background-color: #feca34;
}

li:nth-child(-7n + 7) .card {
  background-color: #e46055;
}

.delete-card {
  position: absolute;
  right: 0;
  top: 0;
  padding: 10px 15px;
  opacity: 0.4;
  transition: all 0.5s ease;
}

.delete-card:hover,
.error {
  opacity: 1;
  transform: rotate(360deg);
}

.flip-enter-active {
  transition: all 0.4s ease;
}

.flip-leave-active {
  display: none;
}

.flip-enter,
.flip-leave {
  transform: rotateY(180deg);
  opacity: 0;
}
</style>
