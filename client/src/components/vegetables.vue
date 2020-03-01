<template>
  <div class="vegetables">
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

    <b-container class="grid-3">
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

    <!-- <Letters /> -->
  </div>
</template>

<script>
// import letters from "./components/letters.vue";
// import img from "./components/img.vue";

export default {
  name: "vegetables",

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
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, auto);
  margin: 60px 60px 0px, 60px;
  justify-content: center;
  grid-gap: 40px;
  padding-top: 10px;
}

/* Empty boxes for spelled words */
.grid-word {
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  grid-gap: 40px;
}
.card-word {
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
  margin: 0;
  grid-gap: 3px;
  justify-content: center;
}
.alpha-card {
  margin-top: 30px;
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
