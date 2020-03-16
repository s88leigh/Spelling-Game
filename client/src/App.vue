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
  </div>
</template>

<script>
import categories from "./components/categories.vue";
import game from "./components/game.vue";

export default {
  name: "App",
  //export categories and game components to app.vue.
  components: {
    categories,
    game
  },
  data() {
    return {
      currentCategory: null,
      categoriesClick: [],
      categoryClick: [],
      playerScores: []
    };
  },
  methods: {
    //create a function that allows each of the categories to display.
    setCategory: function(category) {
      this.currentCategory = category;
      //when a category is clicked on, display that category.
      this.categoriesClick.push(category);
    },
    //creating a function that displays the Categories component when the 'choose another category' is clicked on.
    backToCategories: function() {
      //sets the current category to null.
      this.currentCategory = null;
    },
    //this function creates the instance of keeping score (for future iteration)
    addPlayerScore: function(PlayerScore) {
      this.playerScores.push(PlayerScore);
    },
    //this function creates the instance of keeping track of how many times a certain category is accessed (for future iteration)
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
