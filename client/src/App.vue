<template>
  <div id="app">
    <b-container class="title-container">
      <h1 class="game-title">Spelling Game</h1>
    </b-container>
    <categories 
    v-if = "currentCategory === null"
    @change-category="setCategory"
    />

    <game 
      :currentCategory="currentCategory"
    />
    
    <!-- <router-view></router-view>

    <router-link to="/">home</router-link>

    <router-link to="/fruits">fruits</router-link>

    <router-link to="/vegetables">vegetables</router-link>

    <router-link to="/animals">animals</router-link>

    <router-link to="/furniture">furniture</router-link>

    <router-link to="/colors">colors</router-link>
    <router-link to="/addWords">addWords</router-link> -->

    <b-container class="icon-container">
      <b-button>
        <img src=".\assets\img\admin.png" class="admin-icon" alt="admin-icon" />
      </b-button>
    </b-container>
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
      this.currentCategory=category;
    }
    
  }
};
</script>

<style >
#app {
  width: 100%;
  height: 720px;
  background: radial-gradient(azure, lightskyblue);
}
* {
  box-sizing: border-box;
}
.title-container {
  padding: 20px;
  border: 2px solid rgb(4, 4, 98);
}
h1 {
  color: rgba(3, 162, 171, 0.898);
  text-shadow: 2px 2px 4px #01172d;
}
.admin-icon {
  width: 50px;
  height: 50px;
  border: 2px solid rgb(4, 4, 98);
}
.icon-container {
  text-align: center;
  height: 60px;
  padding: 10px;
  margin-bottom: 0px;
  margin-top: 180px;
  border: 2px solid rgb(4, 4, 98);
}
</style>>

