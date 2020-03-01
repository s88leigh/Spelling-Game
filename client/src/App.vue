<template>
  <div id="app">
    <h1 class="game-title">Spelling Game</h1>
    <h3 class="choose">Choose a Category</h3>
    <Home />
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <b-col></b-col>
        <b-col cols="5">
          <a href="Admin.html">
            <img src="img\admin.png" class="admin-icon" alt="admin-icon" />
          </a>
        </b-col>
        <b-col></b-col>
      </b-row>
    </b-container>

    <!-- <LettersGrid /> -->
  </div>
</template>

<script>
import Home from "./components/Home.vue";
// import LettersGrid from "./components/LettersGrid.vue";

export default {
  name: "App",
  components: {
    Home
    // LettersGrid
  },
  data() {
    return {
      title: "Spelling Game",
      words: []
      // class: "letters"
    };
  },

  methods: {
    handleClick() {}
  }
};
</script>

<style >
#app {
  width: 100%;
  height: 800px;
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
  text-align: center;
  margin-bottom: 40px;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
</style>>

