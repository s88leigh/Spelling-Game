<template>
  <div class="fruits">
    <!--Back Arrow icon-->
    <b-row class="nav-container">
      <b-button class="back-arrow">
        <b-img href=".\src\assets\img\arrow.png" img-alt="back arrow icon" />Back to Categories
      </b-button>
    </b-row>

    <h1 class="game-title">Spelling Game</h1>
    <h3 class="subtitle">Choose a Category</h3>
    <!--Image cards-->
    <b-container class="grid-3">
      <b-card img-src="assets\img\blue.png" img-alt="color blue"></b-card>
      <b-card img-src="assets\img\colorOrange.png" img-alt="color orange"></b-card>
      <b-card img-src="assets\img\green.png" img-alt="color green"></b-card>
    </b-container>
    <!--Word containers-->
    <b-container class="grid-3-words">
      <b-col class="spelled-words">blue</b-col>
      <b-col class="spelled-words"></b-col>
      <b-col class="spelled-words"></b-col>
    </b-container>
    <!--Underscore container-->
    <b-container class="underscores-container">
      <b-row class="justify-content-md-center">
        <b-col col lg="2"></b-col>
        <b-col cols="12" md="auto">Content</b-col>
        <b-col col lg="2"></b-col>
      </b-row>
    </b-container>
    <!--Row of Letters-->
    <b-container class="alpha-container">
      <b-button class="button-card">
        <b-card class="alpha-card" text-align="center">a</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">b</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">c</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">d</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">e</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">f</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">g</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">h</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">i</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">j</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">k</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">l</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">m</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">n</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">o</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">p</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">q</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">r</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">s</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">t</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">u</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">v</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">w</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">x</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">y</b-card>
      </b-button>
      <b-button class="button-card">
        <b-card class="alpha-card">z</b-card>
      </b-button>
    </b-container>
    <Letters />
  </div>
</template>

<script>
// import letters from "./components/letters.vue";
// import img from "./components/img.vue";

export default {
  name: "fruits",

  data() {
    return {};
  }
};
</script>


<style scoped>
* {
  box-sizing: border-box;
}
.back-arrow {
  margin-left: 30px;
  width: 200px;
  height: 40px;
  border: 2px solid rgb(4, 4, 98);
}

.nav-container {
  padding-top: 20px;
  border: 2px solid rgb(4, 4, 98);
}

h1 {
  color: rgba(3, 162, 171, 0.898);
  text-shadow: 2px 2px 4px #01172d;
}

h3 {
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}

.game-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 15px;
  margin-top: 0px;
  border: 2px solid rgb(4, 4, 98);
}
.subtitle {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 0px;
  border: 2px solid rgb(4, 4, 98);
}
/* Card images */
img {
  height: 172px;
  width: 172px;
  object-fit: cover;
  align-self: auto;
}
/* 3 image card containers */
.grid-3 {
  margin-top: 60px;
  height: 200px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 260px;
  border: 2px solid rgb(4, 4, 98);
}
.card {
  float: left;
  margin-right: 40px;
  height: 176px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* Container for words to display under images */
.grid-3-words {
  margin-top: 0px;
  height: 65px;
  width: 100%;
  padding-left: 260px;
  padding-bottom: 0px;
  border: 2px solid rgb(4, 4, 98);
}
/* Words under images */
.spelled-words {
  float: left;
  margin-right: 40px;
  height: 60px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  padding-bottom: 2px;
  font-size: 40px;
  text-align: center;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
.underscores-container {
  height: 65px;
  margin-top: 25px;
  margin-bottom: 25px;
}
.col-md-auto {
  text-align: center;
  letter-spacing: 4px;
  font-size: 40px;
  color: black;
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
  border: 2px solid rgb(4, 4, 98);
}
/* letter container */
.alpha-container {
  display: flex;
  width: 100%;
  margin-top: 0px;
  margin-left: 60px;
  grid-template-columns: repeat(26, auto);
  padding: 10px;
  grid-gap: 3px;
  justify-content: center;
  border: 2px solid rgb(4, 4, 98);
}
/* letter cards */
.alpha-card {
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
