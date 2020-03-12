<template>
  <div id="app">
    <div class="game-title">
      <span>Spelling Game</span>
    </div>

    <categories v-if="!currentCategory" @change-category="setCategory" />

    <game
      v-if="currentCategory"
      :currentCategory="currentCategory"
      @change-page="backToCategories"
    />

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
      categoriesClick: [],
      categoryClick: [],
      playerScores: []
    };
  },
  methods: {
    setCategory: function(category) {
      this.currentCategory = category;
    },
    backToCategories: function() {
      this.currentCategory = null;
    },
    addPlayerScore: function(PlayerScore) {
      this.playerScores.push(PlayerScore);
    },
    addCategoriesClick: function(categoriesClick) {
      this.categoriesClick.push(categoriesClick);
    },
    addCategoryClick: function(categoryClick) {
      this.categoryClick.push(categoryClick);
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
.game-title {
  text-align: center;
  width: 100%;
  height: 100px;
  /* border: 2px solid rgb(4, 4, 98); */
}
span {
  text-align: center;
  font-size: 60px;
  margin-bottom: 20px;
  margin-top: 20px;
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
