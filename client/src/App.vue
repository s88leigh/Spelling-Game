<template>
  <div id="app">
    <NavBar v-bind:name="title" />
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: "Hello Vue with Components!"
    };
  }
};
</script>

<style>
#app {
  background-color: lightblue;
}
</style>