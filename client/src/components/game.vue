<template>
  <div class="fruits">

<div v-if="selected.type">
    <span v-for="(word, i) in selected.list" :key="i">
      <h3 @click="select(i)">{{word.word}}</h3>
      <img :src="word.img"/>
    </span>
</div>

    <span v-for="(item, i) in options" :key="i">
      <h3 @click="select(i)">{{item.type}}</h3>
    </span>

    

  </div>
</template>

<script>
// import letters from "./components/letters.vue";
// import img from "./components/img.vue";

export default {
  name: "fruits",

  data() {
    return {
      options: [
        {
          type: "fruits",
          list: [{
              word: "apple",
              img: '/img/apple.jpeg'
              }, "bannana", "orange"]
        },
        {
          type: "furniture",
          list: ["chair", "table", "desk"]
        }
      ],
      selected: {}
    };
  },
  methods: {
    select: function(i) {
      this.selected = this.options[i];
    }
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
  padding-left: 265px;
  border: 2px solid rgb(4, 4, 98);
}
.card {
  float: left;
  padding-bottom: 0px;
  margin-right: 40px;
  height: 176px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* Container for words to display under images */
.grid-3-words {
  margin-top: 0px;
  padding-top: 0px;
  height: 60px;
  width: 100%;
  padding-left: 265px;
  border: 2px solid rgb(4, 4, 98);
}
/* Words under images */
.spelled-words {
  float: left;
  margin-right: 40px;
  height: 60px;
  width: 176px;
  border: 2px solid rgb(4, 4, 98);
  padding-bottom: 0px;
  font-size: 40px;
  text-align: center;
  color: rgb(34, 6, 96);
  text-shadow: 1px 1px 2px white, 0 0 25px #f2f4f7, 0 0 5px #313539;
}
.underscores-container {
  height: 65px;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-top: 0px;
}
.col-md-auto {
  text-align: center;
  margin-bottom: 25px;
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

/* .cat-info-container {
  grid-column: 1 / -1;
  display: flex;
  justify-content: space-between;
} */
</style>
