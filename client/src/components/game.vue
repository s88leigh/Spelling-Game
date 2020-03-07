<template>
  <div>
    <b-container class="image-container">
      <div
        v-for="word in currentWords"
        :key="word.word"
        @click="changeWord(word.word)"
      >
        <img :src="word.img" :alt="word.word" />
      </div>
    </b-container>
    <underscore :word="renderWord" />
    <keyboard @click-letter="checkLetter" />
  </div>
</template>

<script>
import keyboard from "./keyboard.vue";
import underscore from "./underscore.vue";

import appleImg from "../assets/img/apple.png";
import bananaImg from "../assets/img/banana.png";
import beetImg from "../assets/img/beet.png";
import asparagusImg from "../assets/img/asparagus.png";
import bedImg from "../assets/img/bed.png";
import benchImg from "../assets/img/bench.png";
import bench1Img from "../assets/img/bench1.png";
import bench4Img from "../assets/img/bench4.png";
import bird2Img from "../assets/img/bird.png";
import bird3Img from "../assets/img/bird2.png";
import blackImg from "../assets/img/black.png";
import blueImg from "../assets/img/blue.png";
import blueberryImg from "../assets/img/blueberry.png";
import blueberry2Img from "../assets/img/blueberry2.png";
import broc1Img from "../assets/img/broc1.png";
import broc2Img from "../assets/img/broc2.png";
import cabbageImg from "../assets/img/cabbage.png";
import camelImg from "../assets/img/camel.png";
import carrotImg from "../assets/img/carrot.png";
import catImg from "../assets/img/cat.png";
import cat2Img from "../assets/img/cat2.png";
import chairImg from "../assets/img/chair.png";
import cherryImg from "../assets/img/cherry.png";
import chickenImg from "../assets/img/chicken.png";
import chicken2Img from "../assets/img/chicken2.png";
import colorOrangeImg from "../assets/img/colorOrange.png";
import cornImg from "../assets/img/corn.png";
import cowImg from "../assets/img/cow.png";
import cucumberImg from "../assets/img/cucumber.png";
import deskImg from "../assets/img/desk.png";
import dresserImg from "../assets/img/dresser.png";
import deerImg from "../assets/img/deer.png";
import dogImg from "../assets/img/dog.png";
import dog1Img from "../assets/img/dog1.png";
import dolphinImg from "../assets/img/dolphin.png";
import duckImg from "../assets/img/duck.png";
import duck1Img from "../assets/img/duck1.png";
import ducklingImg from "../assets/img/duckling.png";
import elephantImg from "../assets/img/elephant.png";
import girrafeImg from "../assets/img/girrafe.png";
import goatImg from "../assets/img/goat.png";
import grayImg from "../assets/img/gray.png";
import gray1Img from "../assets/img/gray1.png";
import grapeImg from "../assets/img/grape.png";
import greenImg from "../assets/img/green.png";
import horseImg from "../assets/img/horse.png";
import horse2Img from "../assets/img/horse2.png";
import horse3Img from "../assets/img/horse3.png";
import horse4Img from "../assets/img/horse4.png";
import kittenImg from "../assets/img/kitten.png";
import kiwiImg from "../assets/img/kiwi.png";
import lampImg from "../assets/img/lamp.png";
import lavenderImg from "../assets/img/lavender.png";
import lemonImg from "../assets/img/lemon.png";
import lettuceImg from "../assets/img/lettuce.png";
import limeImg from "../assets/img/lime.png";
import lionImg from "../assets/img/lion.png";
import mangoImg from "../assets/img/mango.png";
import monkeyImg from "../assets/img/monkey.png";
import monkey1Img from "../assets/img/monkey1.png";
import mirrorImg from "../assets/img/mirror.png";
import onionImg from "../assets/img/onion.png";
import orangeImg from "../assets/img/orange.png";
import orange2Img from "../assets/img/orange2.png";
import papayaImg from "../assets/img/papaya.png";
import pearImg from "../assets/img/pear.png";
import pigImg from "../assets/img/pig.png";
import pineappleImg from "../assets/img/pineapple.png";
import pinkImg from "../assets/img/pink.png";
import pink1Img from "../assets/img/pink1.png";
import potatoeImg from "../assets/img/potatoe.png";
import pumpkinImg from "../assets/img/pumpkin.png";
import purpleImg from "../assets/img/purple.png";
import rabbitImg from "../assets/img/rabbit.png";
import ramImg from "../assets/img/ram.png";
import raspImg from "../assets/img/rasp.png";
import raspberryImg from "../assets/img/raspberry.png";
import redImg from "../assets/img/red.png";
import rhinoImg from "../assets/img/rhino.png";
import sofaImg from "../assets/img/sofa.png";
import squirrelImg from "../assets/img/squirrel.png";
import stoolImg from "../assets/img/stool.png";
import strawberryImg from "../assets/img/strawberry.png";
import tableImg from "../assets/img/table.png";
import tigerImg from "../assets/img/tiger.png";
import watermelonImg from "../assets/img/watermelon.png";
import whiteImg from "../assets/img/white.png";
import yellowImg from "../assets/img/yellow.png";
import zebraImg from "../assets/img/zebra.png";

export default {
  name: "game",
  components: {
    underscore,
    keyboard
  },

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
            word: "blueberry",
            img: blueberryImg
          },
          {
            word: "blueberry",
            img: blueberry2Img
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
            word: "lemon",
            img: lemonImg
          },
          {
            word: "lime",
            img: limeImg
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
            word: "orange",
            img: orange2Img
          },
          {
            word: "papaya",
            img: papayaImg
          },
          {
            word: "rasp",
            img: raspImg
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
          },
          {
            word: "watermelon",
            img: watermelonImg
          }
        ],
        vegetables: [
          {
            word: "beet",
            img: beetImg
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
            word: "corn",
            img: cornImg
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
            word: "onion",
            img: onionImg
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
            word: "camel",
            img: camelImg
          },
          {
            word: "cat",
            img: catImg
          },
          {
            word: "cat",
            img: cat2Img
          },
          {
            word: "dog",
            img: dogImg
          },
          {
            word: "dog",
            img: dog1Img
          },
          {
            word: "chicken",
            img: chickenImg
          },
          {
            word: "chicken2",
            img: chicken2Img
          },
          {
            word: "cow",
            img: cowImg
          },
          {
            word: "deer",
            img: deerImg
          },
          {
            word: "dolphin",
            img: dolphinImg
          },
          {
            word: "duck",
            img: duckImg
          },
          {
            word: "duck1",
            img: duck1Img
          },
          {
            word: "duckling",
            img: ducklingImg
          },
          {
            word: "elephant",
            img: elephantImg
          },
          {
            word: "girrafe",
            img: girrafeImg
          },
          {
            word: "goat",
            img: goatImg
          },
          {
            word: "horse",
            img: horseImg
          },
          {
            word: "horse",
            img: horse2Img
          },
          {
            word: "horse",
            img: horse3Img
          },
          {
            word: "horse",
            img: horse4Img
          },
          {
            word: "kitten",
            img: kittenImg
          },
          {
            word: "monkey",
            img: monkeyImg
          },
          {
            word: "monkey",
            img: monkey1Img
          },
          {
            word: "lion",
            img: lionImg
          },
          {
            word: "pig",
            img: pigImg
          },
          {
            word: "rabbit",
            img: rabbitImg
          },
          {
            word: "ram",
            img: ramImg
          },
          {
            word: "rhino",
            img: rhinoImg
          },
          {
            word: "squirrel",
            img: squirrelImg
          },
          {
            word: "tiger",
            img: tigerImg
          },
          {
            word: "zebra",
            img: zebraImg
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
          },
          {
            word: "table",
            img: tableImg
          },
          {
            word: "stool",
            img: stoolImg
          },
          {
            word: "sofa",
            img: sofaImg
          },
          {
            word: "lamp",
            img: lampImg
          },
          {
            word: "sofa",
            img: sofaImg
          },
          {
            word: "bench",
            img: benchImg
          },
          {
            word: "bench",
            img: bench1Img
          },
          {
            word: "bench",
            img: bench4Img
          },
          {
            word: "desk",
            img: deskImg
          },
          {
            word: "dresser",
            img: dresserImg
          },
          {
            word: "mirror",
            img: mirrorImg
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
            word: "lavender",
            img: lavenderImg
          },
          {
            word: "orange",
            img: colorOrangeImg
          },
          {
            word: "white",
            img: whiteImg
          },
          {
            word: "gray",
            img: grayImg
          },
          {
            word: "gray",
            img: gray1Img
          },
          {
            word: "pink",
            img: pinkImg
          },
          {
            word: "pink",
            img: pink1Img
          }
        ]
      }
    };
  },

  computed: {
    currentWords: function() {
      if (this.currentWord === null) {
        return this.words[this.currentCategory];
      }
      return this.words[this.currentCategory].filter(word => {
        return this.currentWord === word.word;
      });
    },
    currentWordArray: function() {
      if (this.currentWord === null) {
        return [];
      }
      return this.currentWord.split("");
    },
    renderWord: function() {
      if (this.currentWord === null) {
        return null;
      }
      return (
        this.currentWordArray
          //turns string into array of letters

          //loops over all the letters and returns a new array
          .map((letter, index) => {
            if (this.numRightLetters > index) {
              return letter;
            }
            return " _ ";
          })
          .join("")
      );
    }
  },
  methods: {
    changeWord: function(word) {
      this.currentWord = word;
    },
    setLetters: function(keyboard) {
      this.currentLetter = keyboard;
    },
    checkLetter: function(letter) {
      console.log(letter);
      if (this.currentWordArray[this.numRightLetters] === letter) {
        this.numRightLetters++;
      } else {
        //if guess is wrong
      }
      //   if guessed work is correct, then reset game state, setscore
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.image-container {
  align-content: center;
  max-width: 300px;
  max-height: 300px;
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
