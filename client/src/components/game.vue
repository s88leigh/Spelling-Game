<template>
  <!-- <div class="fruits">

<div v-if="selected.type">
    <span v-for="(item, i) in selected.list" :key="i">
      <h3 @click="select(i)">{{item.img}}</h3>
      <img :src="item.img"/>
      
    </span>
</div>
<div v-if="selected.type">
    <span v-for="(item, i) in selected.list" :key="i">
      <button @click="select(i)">{{item.img}}</button>
<img :src="item.img"/>
    </span>
</div>
    <span v-for="(item, i) in options" :key="i">
      <h3 @click="select(i)">{{item.type}}</h3>
    </span>

    

  </div> -->
  <div>
    <div
      v-for="word in currentWords"
      :key="word.word"
      @click="changeWord(word.word)"
    >
      <img :src="word.img" :alt="word.word" />
    </div>
  </div>
</template>

<script>
// import letters from "./components/letters.vue";
// import img from "./components/img.vue";
import appleImg from "../assets/img/apple.png";
import bananaImg from "../assets/img/banana.png";
import beetsImg from "../assets/img/beets.png";
import asparagusImg from "../assets/img/asparagus.png";
import bedImg from "../assets/img/bed.png";
import bird2Img from "../assets/img/bird.png";
import bird3Img from "../assets/img/bird2.png";
import blackImg from "../assets/img/black.png";
import blueImg from "../assets/img/blue.png";
import blueberry from "../assets/img/blueberry.png";
import blueberry2 from "../assets/img/blueberry2.png";
import broc1Img from "../assets/img/broc1.png";
import broc2Img from "../assets/img/broc2.png";
import cabbageImg from "../assets/img/cabbage.png";
import camel from "../assets/img/camel.png";
import carrot from "../assets/img/carrot.png";
import catImg from "../assets/img/cat.png";
import cat2Img from "../assets/img/cat2.png";
import chairImg from "../assets/img/chair.png";
import cherry from "../assets/img/cherry.png";
import chicken from "../assets/img/chicken.png";
import colorOrangeImg from "../assets/img/colorOrange.png";
import colors from "../assets/img/colors.png";
import corn from "../assets/img/colors.png";
import cow from "../assets/img/cow.png";
import cucumber from "../assets/img/cucumber";
import deer from "../assets/img/deer.png";
import dog from "../assets/img/dog.png";
import dolphin from "../assets/img/dolphin.png";
import duck from "../assets/img/duck.png";
import duck1 from "../assets/img/duck1.png";
import duckling from "../assets/img/duckling.png";
import elephant from "../assets/img/elephant.png";
import girrafe from "../assets/img/girrafe.png";
import goat from "../assets/img/goat.png";
import grapes from "../assets/img/grapes.png";
import greenImg from "../assets/img/green.png";
import horse from "../assets/img/horse.png";
import horse3 from "../assets/img/horse.png";
import horse4 from "../assets/img/horse4.png";
import kitten from "../assets/img/kitten.png";
import kiwi from "../assets/img/kiwi.png";
import lamp from "../assets/img/lamp.png";
import lavender from "../assets/img/lavender.png";
import lemon from "../assets/img/lemon.png";
import lettuce from "../assets/img/lettuce.png";
import lime from "../assets/img/lime.png";
import lion from "../assets/img/lion.png";
import mango from "../assets/img/mango.png";
import monkey from "../assets/img/monkey.png";
import onion from "../assets/img/onion.png";
import orange from "../assets/img/orange.png";
import orange2 from "../assets/img/orange2.png";
import papaya from "../assets/img/papaya.png";
import pear from "../assets/img/pear.png";
import pig from "../assets/img/pig.png";
import pineapple from "../assets/img/pineapple";
import pink from "../assets/img/pink.png";
import pink1 from "../assets/img/pink1.png";
import potatoe from "../assets/img/potatoe.png";
import pumpkin from "../assets/img/pumpkin.png";
import purpleImg from "../assets/img/purple.png";
import rabbit from "../assets/img/rabbit.png";
import ram from "../assets/img/ram.png";
import rasp from "../assets/img/rasp.png";
import raspberry from "../assets/img/raspberry.png";
import redImg from "../assets/img/red.png";
import rhino from "../assets/img/rhino.png";
import sofa from "../assets/img/sofa.png";
import squirrel from "../assets/img/squirrel.png";
import stool from "../assets/img/stool.png";
import strawberry from "../assets/img/strawberry.png";
import table from "../assets/img/table.png";
import tiger from "../assets/img/tiger.png";
import watermelon from "../assets/img/watermelon";
import yellowImg from "../assets/img/yellow";
import zebra from "../assets/img/zebra";

export default {
  name: "game",
  props: ["currentCategory"],
  data() {
    return {
      currentWord: null,
      numRightLetters: 0,
      words: {
        fruits: [
          {
            word: "apple",
            img: appleImg
          },
          {
            word: "banana",
            img: bananaImg
          },
          {
            word: "pear",
            img: pearImg
          },
          {
            word: "cherry",
            img: cherryImg
          },
          {
            word: "orange",
            img: orangeImg
          },
          {
            word: "grape",
            img: grapeImg
          },
          {
            word: "kiwi",
            img: kiwiImg
          },
          {
            word: "mango",
            img: mangoImg
          },
          {
            word: "papaya",
            img: papayaImg
          },
          {
            word: "pineapple",
            img: pineappleImg
          },
          {
            word: "raspberry",
            img: raspberryImg
          },
          {
            word: "strawberry",
            img: strawberryImg
          }
        ],
        vegetables: [
          {
            word: "beets",
            img: beetsImg
          },
          {
            word: "asparagus",
            img: asparagusImg
          },
          {
            word: "broccoli",
            img: broc2Img
          },
          {
            word: "broccoli",
            img: broc1Img
          },
          {
            word: "cabbage",
            img: cabbageImg
          },
          {
            word: "carrot",
            img: carrotImg
          },
          {
            word: "cucumber",
            img: cucumberImg
          },
          {
            word: "lettuce",
            img: lettuceImg
          },
          {
            word: "potatoe",
            img: potatoeImg
          },
          {
            word: "pumpkin",
            img: pumpkinImg
          }
        ],
        animals: [
          {
            word: "bird",
            img: bird2Img
          },
          {
            word: "bird",
            img: bird3Img
          },
          {
            word: "cat",
            img: catImg
          },
          {
            word: "cat",
            img: cat2Img
          }
        ],
        furniture: [
          {
            word: "bed",
            img: bedImg
          },
          {
            word: "chair",
            img: chairImg
          }
        ],
        colors: [
          {
            word: "red",
            img: redImg
          },
          {
            word: "yellow",
            img: yellowImg
          },
          {
            word: "blue",
            img: blueImg
          },
          {
            word: "black",
            img: blackImg
          },
          {
            word: "green",
            img: greenImg
          },
          {
            word: "purple",
            img: purpleImg
          },
          {
            word: "orange",
            img: colorOrangeImg
          }
        ]
      }
    };
  },
  computed: {
    currentWords: function() {
      return this.words[this.currentCategory];
    },
    renderWord: function() {
      if (this.currentWord === null) {
        return null;
      }
      return this.currentWord
        .split("")
        .map((letter, index) => {
          if (this.numRightLetters > index) {
            return letter;
          }
          return " _ ";
        })
        .join("");
    }
  },
  methods: {
    changeWord: function(word) {
      this.currentWord = word;
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
