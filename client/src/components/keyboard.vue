<template>
  <!--Row of Letters-->
  <div class="alpha-container">
    <div @click="letterClick('a')" :class="['letter-card', {error: wrongLetter==='a'}]">a</div>
    <div @click="letterClick('b')" :class="['letter-card', {error: wrongLetter==='b'}]">b</div>
    <div @click="letterClick('c')" :class="['letter-card', {error: wrongLetter==='c'}]">c</div>
    <div @click="letterClick('d')" :class="['letter-card', {error: wrongLetter==='d'}]">d</div>
    <div @click="letterClick('e')" :class="['letter-card', {error: wrongLetter==='e'}]">e</div>
    <div @click="letterClick('f')" :class="['letter-card', {error: wrongLetter==='f'}]">f</div>
    <div @click="letterClick('g')" :class="['letter-card', {error: wrongLetter==='g'}]">g</div>
    <div @click="letterClick('h')" :class="['letter-card', {error: wrongLetter==='h'}]">h</div>
    <div @click="letterClick('i')" :class="['letter-card', {error: wrongLetter==='i'}]">i</div>
    <div @click="letterClick('j')" :class="['letter-card', {error: wrongLetter==='j'}]">j</div>
    <div @click="letterClick('k')" :class="['letter-card', {error: wrongLetter==='k'}]">k</div>
    <div @click="letterClick('l')" :class="['letter-card', {error: wrongLetter==='l'}]">l</div>
    <div @click="letterClick('m')" :class="['letter-card', {error: wrongLetter==='m'}]">m</div>
    <div @click="letterClick('n')" :class="['letter-card', {error: wrongLetter==='n'}]">n</div>
    <div @click="letterClick('o')" :class="['letter-card', {error: wrongLetter==='o'}]">o</div>
    <div @click="letterClick('p')" :class="['letter-card', {error: wrongLetter==='p'}]">p</div>
    <div @click="letterClick('q')" :class="['letter-card', {error: wrongLetter==='q'}]">q</div>
    <div @click="letterClick('r')" :class="['letter-card', {error: wrongLetter==='r'}]">r</div>
    <div @click="letterClick('s')" :class="['letter-card', {error: wrongLetter==='s'}]">s</div>
    <div @click="letterClick('t')" :class="['letter-card', {error: wrongLetter==='t'}]">t</div>
    <div @click="letterClick('u')" :class="['letter-card', {error: wrongLetter==='u'}]">u</div>
    <div @click="letterClick('v')" :class="['letter-card', {error: wrongLetter==='v'}]">v</div>
    <div @click="letterClick('w')" :class="['letter-card', {error: wrongLetter==='w'}]">w</div>
    <div @click="letterClick('x')" :class="['letter-card', {error: wrongLetter==='x'}]">x</div>
    <div @click="letterClick('y')" :class="['letter-card', {error: wrongLetter==='y'}]">y</div>
    <div @click="letterClick('z')" :class="['letter-card', {error: wrongLetter==='z'}]">z</div>
  </div>
</template>

<script>
export default {
  //export keyboard component to game.vue.
  name: "keyboard",
  props: ["wrongLetter"],
  methods: {
    letterClick: function(letter) {
      // sending click event to parent component which is the game component.
      this.$emit("click-letter", letter);
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
  height: 135px;
  width: 100%;
  padding-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  padding: 10px;
  justify-content: center;
}
/* letter cards */
.letter-card {
  margin: 1px;
  float: left;
  margin-top: 10px;
  background: rgb(158, 215, 250);
  height: 65px;
  width: 45px;
  text-align: center;
  font-size: 40px;
  color: black;
  text-shadow: 0 0 25px #f2f4f7, 0 0 5px #313539;
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.error {
  background: red;
}
</style>
