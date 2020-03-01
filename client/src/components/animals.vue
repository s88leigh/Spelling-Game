<template>
  <div class="animals">
    <router-link to="/">home</router-link>

    <b-container>
      <b-row>
        <b-button
          img-href=".\components\img\arrow.png"
          img-alt="back arrow icon"
          img-start
        >Back to Categories</b-button>
      </b-row>
    </b-container>

    <h1 class="game-title">Spelling Game</h1>
    <h3 class="category">Choose a Category</h3>

    <b-container class="grid-3-img">
      <b-row align-v="center">
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="grid-3-word">
      <b-row align-v="center">
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
        <b-col>
          <b-card img-src="client\src\components\img\fruits.png" img-alt="bowl of fruits"></b-card>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="alpha-container">
      <b-button>
        <b-card class="alpha-card" text-align="center">a</b-card>
      </b-button>
      <b-card class="alpha-card">b</b-card>
      <b-card class="alpha-card">c</b-card>
      <b-card class="alpha-card">d</b-card>
      <b-card class="alpha-card">e</b-card>
      <b-card class="alpha-card">f</b-card>
      <b-card class="alpha-card">g</b-card>
      <b-card class="alpha-card">h</b-card>
      <b-card class="alpha-card">i</b-card>
      <b-card class="alpha-card">j</b-card>
      <b-card class="alpha-card">k</b-card>
      <b-card class="alpha-card">l</b-card>
      <b-card class="alpha-card">m</b-card>
      <b-card class="alpha-card">n</b-card>
      <b-card class="alpha-card">o</b-card>
      <b-card class="alpha-card">p</b-card>
      <b-card class="alpha-card">q</b-card>
      <b-card class="alpha-card">r</b-card>
      <b-card class="alpha-card">s</b-card>
      <b-card class="alpha-card">t</b-card>
      <b-card class="alpha-card">u</b-card>
      <b-card class="alpha-card">v</b-card>
      <b-card class="alpha-card">w</b-card>
      <b-card class="alpha-card">x</b-card>
      <b-card class="alpha-card">y</b-card>
      <b-button>
        <b-card class="alpha-card">z</b-card>
      </b-button>
    </b-container>
  </div>
</template>

<script>
// import letters from "./components/letters.vue";
// import img from "./components/img.vue";

export default {
  name: "animals",

  data() {
    return {};
  }
};
</script>


<style scoped>
html {
  min-height: 100vh;
}
* {
  box-sizing: border-box;
}
.nav-image {
  width: 30px;
  height: 30px;
}
.row {
  width: 100%;
  height: 30px;
  margin-left: 0px;
}
.row-title {
  height: 40px;
}
.nav-container {
  margin-top: 10px;
}

h1 {
  color: rgba(3, 162, 171, 0.898);
  text-shadow: 2px 2px 4px #01172d;
}

h3 {
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
.cat-title {
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}

.game-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 15px;
  margin-top: 0px;
}
.category {
  text-align: center;
  margin-bottom: 40px;
  margin-top: 0px;
}
.game-info {
  font-size: 1.5em;
}
.cat-info-container {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
}

/* 3 Image Boxes */
.grid-3-img {
  display: grid;
  display: flex;
  grid-template-columns: repeat(3, auto);
  margin: 60px 60px 0px, 60px;
  justify-content: center;
  grid-gap: 10px;
  padding-top: 10px;
  /* margin-left: 40px; */
}

/* Empty boxes for spelled words */
.grid-3-word {
  display: grid;
  display: flex;
  margin-top: 40px;
  height: 40px;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 40px;
}
.card-underscores {
  font-size: 40px;

  text-align: center;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
  height: 60px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
}
.cat-title {
  text-align: center;
  font-size: 30px;
}

.card {
  height: 176px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

img {
  height: 172px;
  width: 172px;
  object-fit: cover;
  align-self: auto;
}

/* alphabets */
.alpha-container {
  display: grid;
  grid-template-columns: repeat(26, auto);
  margin-left: 60px;
  grid-gap: 3px;
  justify-content: center;
}
.alpha-card {
  margin-top: 30px;
  background: rgb(158, 215, 250);
  height: 65px;
  width: 45px;
  text-justify: center;
  font-size: 40px;
  color: black;
  text-shadow: 0 0 25px #f2f4f7, 0 0 5px #313539;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.spelling-container {
  height: 65px;
  margin-top: 50px;
  margin-bottom: 40px;
}

.col-md-auto {
  text-align: center;
  letter-spacing: 14px;
  font-size: 50px;
  color: black;
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
  border: 2px solid rgb(4, 4, 98);
}
</style>
