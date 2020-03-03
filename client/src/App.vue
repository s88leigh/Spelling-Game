<template>
  <div id="app">
    <router-view>
      <categories />
      <fruits />
      <vegetables />
      <animals />
      <furniture />
      <colors />
      <addWords />
    </router-view>

    <router-link to="/">home</router-link>

    <router-link to="/fruits">fruits</router-link>

    <router-link to="/vegetables">vegetables</router-link>

    <router-link to="/animals">animals</router-link>

    <router-link to="/furniture">furniture</router-link>

    <router-link to="/colors">colors</router-link>
    <router-link to="/addWords">addWords</router-link>
  </div>
</template>

<script>
import categories from "./components/categories.vue";
// import Fruits from "./components/Fruits.vue";
// import furniture from "./components/furniture.vue";
// import Letters from "./components/Letters.vue";
// import addWords from "./components/addWords.vue";

export default {
  name: "App",
  components: {
    categories
    // addWords
    // Fruits
  },
  data() {
    return {
      title: "Spelling Game",
      words: []
      // class: "fruits"
      // class: "furniture",
      // class: "lettersGrid"
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
  height: 750px;
  background: radial-gradient(azure, lightskyblue);
}
</style>>

