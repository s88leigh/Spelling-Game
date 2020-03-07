<template>
  <!--Row of Letters-->
  <div class="alpha-container">
    <div @click="letterClick('a')" class="letter-card">a</div>
    <div @click="letterClick('b')" class="letter-card">b</div>
    <div @click="letterClick('c')" class="letter-card">c</div>
    <div @click="letterClick('d')" class="letter-card">d</div>
    <div @click="letterClick('e')" class="letter-card">e</div>
    <div @click="letterClick('f')" class="letter-card">f</div>
    <div @click="letterClick('g')" class="letter-card">g</div>
    <div @click="letterClick('h')" class="letter-card">h</div>
    <div @click="letterClick('i')" class="letter-card">i</div>
    <div @click="letterClick('j')" class="letter-card">j</div>
    <div @click="letterClick('k')" class="letter-card">k</div>
    <div @click="letterClick('l')" class="letter-card">l</div>
    <div @click="letterClick('m')" class="letter-card">m</div>
    <div @click="letterClick('n')" class="letter-card">n</div>
    <div @click="letterClick('o')" class="letter-card">o</div>
    <div @click="letterClick('p')" class="letter-card">p</div>
    <div @click="letterClick('q')" class="letter-card">q</div>
    <div @click="letterClick('r')" class="letter-card">r</div>
    <div @click="letterClick('s')" class="letter-card">s</div>
    <div @click="letterClick('t')" class="letter-card">t</div>
    <div @click="letterClick('u')" class="letter-card">u</div>
    <div @click="letterClick('v')" class="letter-card">v</div>
    <div @click="letterClick('w')" class="letter-card">w</div>
    <div @click="letterClick('x')" class="letter-card">x</div>
    <div @click="letterClick('y')" class="letter-card">y</div>
    <div @click="letterClick('z')" class="letter-card">z</div>
  </div>
</template>

<script>
export default {
  name: "keyboard",

  methods: {
    letterClick: function(letter) {
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
  width: 100%;
  margin-top: 350px;
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
