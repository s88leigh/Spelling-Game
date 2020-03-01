<template>
  <div id="app">
    <h1 class="game-title">Spelling Game</h1>
    <h3 class="category">Choose a Category</h3>
    <PostComponent />
  </div>
</template>

<script>
import PostComponent from "./components/PostComponent.vue";

export default {
  name: "App",
  components: {
    PostComponent
  },
  data() {
    return {
      title: "Spelling Game",
      words: []
    };
  },

  methods: {}
};
</script>

<style >
#app {
  width: 100%;
  height: 100%;
  background: radial-gradient(azure, lightskyblue);
}
.game-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 15px;
  margin-top: 0px;
}
h1 {
  color: rgba(3, 162, 171, 0.898);
  text-shadow: 2px 2px 4px #01172d;
}

h3 {
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
</style>>

