<template>
  <div>
    <div class="nav-container">
      <div class="row justify-content-md-center">
        <div class="col col-lg-2"></div>
        <div @click="backToCategories()" id="col-md-auto">
          <span id="choose">Choose Another Category</span>
        </div>
        <div @click="Score('categories')" class="col col-lg-2"></div>
      </div>
    </div>

    <!---image row --->
    <div class="image-row">
      <div class="row justify-content-md-center">
        <div class="col col-lg-4">
          <li
            v-for="(word,index) in spellingList.slice(0,5)"
            :key="index"
            id="spelling-list"
          >{{word}}</li>
        </div>
        <div id="col-md-auto">
          <img :src="currentWord.img" :alt="currentWord.word" class="image" />
        </div>
        <div @click="Score('categories')" class="col col-lg-4">
          <div id="empty-space">
            <!-- <span id="start-red">{{playerScore}}</span> -->
          </div>
        </div>
      </div>
    </div>

    <!---congrats row --->
    <div class="congrats">
      <h1>{{ congrats}}</h1>
    </div>

    <!---underscore row --->
    <underscore :word="renderWord" />

    <!---keyboard --->
    <keyboard @click-letter="checkLetter" :wrongLetter="wrongLetter" />
  </div>
</template>

<script>
import keyboard from "./keyboard.vue";
import underscore from "./underscore.vue";
import appleImg from "../assets/img/apple.png";
import bananaImg from "../assets/img/banana.png";
import beetImg from "../assets/img/beet.png";
import asparagusImg from "../assets/img/asparagus.png";
import batImg from "../assets/img/bat.png";
import bat1Img from "../assets/img/bat1.png";
import bedImg from "../assets/img/bed.png";
import bed1Img from "../assets/img/bed1.png";
import benchImg from "../assets/img/bench.png";
import bench1Img from "../assets/img/bench1.png";
import birdImg from "../assets/img/bird.png";
import bird2Img from "../assets/img/bird.png";
import bird3Img from "../assets/img/bird2.png";
import blackImg from "../assets/img/black.png";
import black1Img from "../assets/img/black1.png";
import blueImg from "../assets/img/blue.png";
import blueberryImg from "../assets/img/blueberry.png";
import broc1Img from "../assets/img/broc1.png";
import broc2Img from "../assets/img/broc2.png";
import brownImg from "../assets/img/brown.png";
import cabbageImg from "../assets/img/cabbage.png";
import camelImg from "../assets/img/camel.png";
import carrotImg from "../assets/img/carrot.png";
import catImg from "../assets/img/cat.png";
import cat3Img from "../assets/img/cat3.png";
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
import goat1Img from "../assets/img/goat1.png";
import gray1Img from "../assets/img/gray1.png";
import grapeImg from "../assets/img/grape.png";
import greenImg from "../assets/img/green.png";
import horseImg from "../assets/img/horse.png";
import horse2Img from "../assets/img/horse2.png";
import horse3Img from "../assets/img/horse3.png";
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
import papayaImg from "../assets/img/papaya.png";
import pearImg from "../assets/img/pear.png";
import pigImg from "../assets/img/pig.png";
import pineappleImg from "../assets/img/pineapple.png";
import pinkImg from "../assets/img/pink.png";
import pink1Img from "../assets/img/pink1.png";
import potatoImg from "../assets/img/potato.png";
import pumpkinImg from "../assets/img/pumpkin.png";
import purpleImg from "../assets/img/purple.png";
import rabbitImg from "../assets/img/rabbit.png";
import ramImg from "../assets/img/ram.png";
import raspberryImg from "../assets/img/raspberry.png";
import redImg from "../assets/img/red.png";
import rhinoImg from "../assets/img/rhino.png";
import sofaImg from "../assets/img/sofa.png";
import squirrelImg from "../assets/img/squirrel.png";
import squirrel1Img from "../assets/img/squirrel1.png";
import stoolImg from "../assets/img/stool.png";
import strawberryImg from "../assets/img/strawberry.png";
import tableImg from "../assets/img/table.png";
import tigerImg from "../assets/img/tiger.png";
import watermelonImg from "../assets/img/watermelon.png";
import whiteImg from "../assets/img/white.png";
import yellowImg from "../assets/img/yellow.png";
import zebraImg from "../assets/img/zebra.png";

// import wordJSON from "./words.json";
// console.log(wordJSON);

export default {
  name: "game",
  //export underscore and keyboard to the app
  components: {
    underscore,
    keyboard
  },
  //props (or properties), are the way that we pass data from a parent component down to it's child components.
  props: ["currentCategory"],
  data() {
    return {
      messageList: [
        { message: "You did it!" },
        { message: "Awesome!" },
        { message: "Great Work!" },
        { message: "Awesome Job!" },
        { message: "That's Right!" },
        { message: "Amazing!" },
        { message: "Good Job!" },
        { message: "Brilliant" }
      ],
      //set wrong letter to null
      wrongLetter: null,
      //set current word to null
      currentWord: null,
      //set congrat messages to null
      congrats: null,
      playerScore: 0,
      //set num of right letter to 0
      numRightLetters: 0,
      //set spelling list to an empty array
      spellingList: [],
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
            word: "potato",
            img: potatoImg
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
            word: "eagle",
            img: birdImg
          },
          {
            word: "bat",
            img: batImg
          },
          {
            word: "bat",
            img: bat1Img
          },
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
            img: cat3Img
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
            word: "hen",
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
            word: "duck",
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
            word: "goat",
            img: goat1Img
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
            word: "squirrel",
            img: squirrel1Img
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
            word: "bed",
            img: bed1Img
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
            word: "black",
            img: black1Img
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
            img: gray1Img
          },
          {
            word: "pink",
            img: pinkImg
          },
          {
            word: "pink",
            img: pink1Img
          },
          {
            word: "brown",
            img: brownImg
          }
        ]
      }
    };
  },

  mounted: function() {
    //mount creates a random word virtual DOM into real DOM
    this.pickRandomWord();
  },

  computed: {
    //create a function  to tell the app that if this current word does not exist, return/show an array of words.
    currentWordArray: function() {
      //if the current word does not exist, return an array of word.
      if (this.currentWord === null) {
        return [];
      }
      //else, return the word and split between each character.
      return this.currentWord.word.split("");
    },
    renderWord: function() {
      //if the word does not exist, don't return anything.
      if (this.currentWord === null) {
        return null;
      }
      return (
        //turns string into array of letters
        this.currentWordArray
          //loops over all the letters and returns a new array
          .map((letter, index) => {
            //if the right letter is greater than the index return the letter
            if (this.numRightLetters > index) {
              return letter;
            }
            //otherwise return the underscores
            return " _ ";
          })
          //The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object),
          //separated by commas or a specified separator string.
          .join("")
      );
    }
  },
  methods: {
    addPlayerScore: function() {
      this.$emit("add-Player-Score", this.PlayerScore);
    },
    increaseScore() {
      //increase score if all the letters are guess correctly
      if (this.currentWord !== null) {
        this.playerScore += 1;
      }
    },

    backToCategories: function() {
      //$emit in Vue is primarily used for sending custom change-page event to parent components.
      this.$emit("change-page");
    },

    setLetters: function(keyboard) {
      //setting letters equal to keyboard.
      this.currentLetter = keyboard;
    },
    ShowRandomMessage: function() {
      //this function tells the app to pick a random message.
      this.congrats = this.messageList[
        //math.floor function returns the largest integer less than or equal to a given.
        //math.random function randomizes a message.
        Math.floor(Math.random() * this.messageList.length)
      ].message;
    },
    pickRandomWord: function() {
      //this function tells the app to pick a random word
      this.currentWord = this.words[this.currentCategory][
        //math.floor function returns the largest integer less than or equal to a given.
        //math.random function randomizes a word.
        Math.floor(Math.random() * this.words[this.currentCategory].length)
      ];
    },

    resetGame: function() {
      //In this resetGame function, the app will show a random congrats message after each spelling is completed.
      this.ShowRandomMessage();

      setTimeout(() => {
        //unshift adds a new word to the beginning of the array of spelling list.
        this.spellingList.unshift(this.currentWord.word);
        //the app will display an random word to be spelled next.
        this.pickRandomWord();
        //when a new word is chosen, the numbe of right guesses is set to 0.
        this.numRightLetters = 0;
        //a message of congrats appear for 2 seconds after each word has been spelled.
        this.congrats = null;
        this.increaseScore();
      }, 2000);
    },

    checkLetter: function(letter) {
      console.log(letter);
      //if the chosen letter in the array is equal to the correct letter,
      if (this.currentWordArray[this.numRightLetters] === letter) {
        //then add the letter.
        this.numRightLetters++;
        //the wrong letter set to "not exist"
        this.wrongLetter = null;
      } else {
        //if guess is wrong change background color to red.
        this.wrongLetter = letter;
      }
      //   if guessed work is correct, then reset game state.
      if (this.numRightLetters >= this.currentWordArray.length) {
        this.resetGame();
      }
    }
  }
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.nav-container {
  margin-top: 20px;
}
#choose {
  text-align: center;
  background: rgb(45, 136, 247);
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
#start-red {
  background: rgb(250, 48, 48);
  margin-right: 20px;
  margin-left: 75px;
}
span {
  padding: 10px;
  margin-left: 10px;
  font-size: 20px;
  color: black;
  text-shadow: 0 0 25px #f2f4f7, 0 0 5px #313539;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.image-row {
  margin-top: 30px;
  text-align: center;
  width: 100%;
  max-height: 300px;
  padding-top: 0px;
}
.image {
  margin-right: 5px;
  width: 400px;
  height: 258px;
  border: 2px solid rgb(4, 4, 98);
  border-radius: 5px;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.congrats {
  color: red;
  height: 60px;
  width: 100%;
  text-align: center;
}
h1 {
  text-align: center;
}
#spelling-list {
  list-style-type: none;
  font-size: 30px;
  text-align: center;
  margin-left: 40px;
}
</style>
