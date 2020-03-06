<template>
  <div>
    <h3 class="category">Choose a Category</h3>

    <b-container>
      <div @click="handleClick('fruits')" >
        <img src="..\assets\img\fruits.png" img-alt="bowl of fruits" class="image" />
      </div>
      <div @click="handleClick('vegetables')" >
         <img src="..\assets\img\veg.png" img-alt="vegetables" class="image" />
      </div>
    </b-container>

    <div class="grid-5">
      <label class="cat-label">
        Fruits
        <b-button class="card">
          <img src="..\assets\img\fruits.png" img-alt="bowl of fruits" class="image" />
        </b-button>
      </label>

      <label class="cat-label">
        Vegetables
        <b-button class="card">
          <img src="..\assets\img\veg.png" img-alt="vegetables" class="image" />
        </b-button>
      </label>

      <label class="cat-label">
        Animals
        <b-button class="card">
          <img src="..\assets\img\animals.png" img-alt="animals" class="image" />
        </b-button>
      </label>

      <label class="cat-label">
        Furniture
        <b-button class="card">
          <img src="..\assets\img\furniture.png" img-alt="furniture" class="image" />
        </b-button>
      </label>

      <label class="cat-label">
        Colors
        <b-button class="card">
          <img src="..\assets\img\colors.png" img-alt="colors" class="image" />
        </b-button>
      </label>
    </div>
  </div>
</template>

<script>
// import img from "./components/img.vue";
export default {
  name: "categories",
  data() {
    return {};
  },
  methods: {
    handleClick: function(category) {
      this.$emit("change-category", category);
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.title-container {
  padding: 20px;
  border: 2px solid rgb(4, 4, 98);
}
.cat-label {
  font-size: 30px;
  text-align: center;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
.category-title {
  margin-top: 80px;
  height: 200px;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid rgb(4, 4, 98);
}
.card-category-title {
  display: flex;
  height: 60px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
}
.grid-5 {
  margin-top: 80px;
  height: 240px;
  width: 100%;
  padding-top: 05px;
  padding-bottom: 10px;
  /* padding-left: 40px; */
  border: 2px solid rgb(4, 4, 98);
}
.card {
  /* padding: 20px; */
  justify-content: center;
  height: 176px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image {
  width: 175px;
  height: 175px;
  border: 2px solid rgb(4, 4, 98);
}
.card-body {
  padding: 0px;
}

/* html {
  min-height: 100vh;
} */
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

h3 {
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
.game-title {
  text-align: center;
  font-size: 3em;
  margin-bottom: 15px;
  margin-top: 10px;
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