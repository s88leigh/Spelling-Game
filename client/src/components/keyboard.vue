<template>
  <!--Row of Letters-->
  <div class="alpha-container">
    <div class="letter-card">a</div>
    <div class="letter-card">b</div>
    <div class="letter-card">c</div>
    <div class="letter-card">d</div>
    <div class="letter-card">e</div>
    <div class="letter-card">f</div>
    <div class="letter-card">g</div>
    <div class="letter-card">h</div>
    <div class="letter-card">i</div>
    <div class="letter-card">j</div>
    <div class="letter-card">k</div>
    <div class="letter-card">l</div>
    <div class="letter-card">m</div>
    <div class="letter-card">n</div>
    <div class="letter-card">o</div>
    <div class="letter-card">p</div>
    <div class="letter-card">q</div>
    <div class="letter-card">r</div>
    <div class="letter-card">s</div>
    <div class="letter-card">t</div>
    <div class="letter-card">u</div>
    <div class="letter-card">v</div>
    <div class="letter-card">w</div>
    <div class="letter-card">x</div>
    <div class="letter-card">y</div>
    <div class="letter-card">z</div>
  </div>
</template>

<script>
export default {
  name: "keyboard",

  methods: {
    letterClick: function(keyboard) {
      this.$emit("click-letter", keyboard);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
/* letter container */
.alpha-container {
  display: flex;
  width: 100%;
  margin-top: 0px;
  margin-left: 60px;
  /* grid-template-columns: repeat(26, auto); */
  padding: 10px;
  grid-gap: 3px;
  justify-content: center;
  border: 2px solid rgb(4, 4, 98);
}
/* letter cards */
.letter-card {
  margin: 1px;
  /* text-align: center; */
  float: left;
  margin-top: 0px;
  background: rgb(158, 215, 250);
  height: 65px;
  width: 45px;
  text-align: center;
  font-size: 40px;
  color: black;
  text-shadow: 0 0 25px #f2f4f7, 0 0 5px #313539;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
