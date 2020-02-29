<template>
  <div id="app">
    <NavBar />
    <h1></h1>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  name: "App",
  components: {
    NavBar
  },
  data() {
    return {
      title: "Spelling Game",
      subTitle: "Choose a Category"
    };
  },

  methods: {}
};
</script>

<style>
#app {
}
</style>