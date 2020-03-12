<template>
  <div>
    <h3>Choose a Category</h3>

    <div class="category-container">
      <label class="cat-label">
        Fruits
        <div @click="category('fruits')">
          <img src="..\assets\img\fruits.png" img-alt="bowl of fruits" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Vegetables
        <div @click="category('vegetables')">
          <img src="..\assets\img\veg.png" img-alt="vegetables" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Animals
        <div @click="category('animals')">
          <img src="..\assets\img\animals.png" img-alt="animals" class="image" />
        </div>
      </label>
      <label class="cat-label">
        Furniture
        <div @click="category('furniture')">
          <img src="..\assets\img\furniture.png" img-alt="furniture" class="image" />
        </div>
      </label>

      <label class="cat-label">
        Colors
        <div @click="category('colors')">
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
    return {
      category: 0
    };
  },
  methods: {
    category: function(category) {
      this.$emit("change-category", category);
    },
    categoryClick() {
      //increase number of category cliked
      if (this.currentCategory.fruit !== null) {
        this.category += 1;
      }
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

.category-container {
  display: flex;
  margin-left: 80px;
  margin-top: 50px;
  height: 300px;
  width: 1100px;
  padding-top: 20px;
  justify-content: center;
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.image {
  float: left;
  margin-left: 12px;
  margin-right: 12px;
  width: 175px;
  height: 175px;
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
