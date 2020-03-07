<template>
  <div id="app">
    <h1>Spelling Game</h1>

    <categories
      v-if="currentCategory === null"
      @change-category="setCategory"
    />

    <game :currentCategory="currentCategory" />

    <!-- <b-container class="icon-container"> -->
    <!-- <div> -->
    <!-- <img src=".\assets\img\admin.png" class="admin-icon" alt="admin-icon" /> -->
    <!-- </div> -->
    <!-- </b-container> -->
  </div>
</template>

<script>
import categories from "./components/categories.vue";
import game from "./components/game.vue";

export default {
  name: "App",
  components: {
    categories,
    game
  },
  data() {
    return {
      title: "Spelling Game",
      currentCategory: null,

      words: []
    };
  },
  methods: {
    setCategory: function(category) {
      this.currentCategory = category;
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 720px;
  background: radial-gradient(azure, lightskyblue);
}
* {
  box-sizing: border-box;
}

h1 {
  text-align: center;
  font-size: 60px;
  margin-bottom: 20px;
  margin-top: 10px;
  color: rgba(3, 162, 171, 0.898);
  text-shadow: 2px 2px 4px #01172d;
}
/* .admin-icon {
  justify: center;
  width: 30px;
  height: 30px;
  border: 2px solid rgb(4, 4, 98);
} */
/* .icon-container {
  text-align: center;
  height: 40px;
  padding-bottom: 25px;
  margin-bottom: 0px;
  margin-top: 190px;
  border: 2px solid rgb(4, 4, 98);
} */
</style>
