<template>
  <div>
    <h3>Choose a Category</h3>

    <div class="grid-5 container">
      <label class="cat-label">
        Fruits
        <div @click="handleClick('fruits')">
          <img src="..\assets\img\fruits.png" img-alt="bowl of fruits" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Vegetables
        <div @click="handleClick('vegetables')">
          <img src="..\assets\img\veg.png" img-alt="vegetables" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Animals
        <div @click="handleClick('animals')">
          <img src="..\assets\img\animals.png" img-alt="animals" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Furniture
        <div @click="handleClick('furniture')">
          <img src="..\assets\img\furniture.png" img-alt="furniture" class="image" />
        </div>
      </label>

      <label class="cat-label">
        Colors
        <div @click="handleClick('colors')">
          <img src="..\assets\img\colors.png" img-alt="colors" class="image" />
        </div>
      </label>
    </div>
  </div>
</template>

<script>
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

h3 {
  text-align: center;
  margin-bottom: 20px;
  margin-top: 30px;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}

.cat-label {
  font-size: 30px;
  text-align: center;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}

.grid-5 {
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 50px;
  height: 300px;
  width: 1200px;
  padding-top: 0px;
  padding-bottom: 10px;
  padding-left: 60px;
  /* padding-right: 30px; */
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image {
  float: left;
  /* justify-content: center; */
  margin-left: 30px;
  margin: 20px;
  width: 175px;
  height: 175px;
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* html {
  min-height: 100vh;
} */

.game-info {
  font-size: 1.5em;
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
