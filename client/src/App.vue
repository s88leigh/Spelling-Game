<template>
  <div id="app">
    <router-view>
      <categories />
      <fruits />
      <vegetables />
      <animals />
      <furniture />
      <colors />
    </router-view>
    <ul>
      <li>
        <router-link to="/fruits">fruits</router-link>
      </li>
      <li>
        <router-link to="/vegetables">vegetables</router-link>
      </li>
      <li>
        <router-link to="/animals">animals</router-link>
      </li>
      <li>
        <router-link to="/furniture">furniture</router-link>
      </li>
      <li>
        <router-link to="/colors">colors</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import categories from "./components/categories.vue";
// import Fruits from "./components/Fruits.vue";
// import furniture from "./components/furniture.vue";
// import Letters from "./components/Letters.vue";

export default {
  name: "App",
  components: {
    categories
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
/* .icon-container {
  margin-bottom: 0px;
  margin-top: 300px;
}
.admin-icon {
  width: 40px;
  height: 40px;
} */
</style>>

