<template>
  <div class="container">
    <input
      type="text"
      class="word-input"
      placeholder="Add New Word"
      v-model="newWord"
      @keyup.enter="addWord"
    />
    <h4>New Spelling Words</h4>
    <div v-for="word in wordList" :key="word.id" class="word-list">{{word.name}}</div>
  </div>
</template>

<script>
export default {
  name: "addWords",
  data() {
    return {
      newWord: "",
      idForWord: 3,
      wordList: [
        {
          id: 1,
          name: "apple"
        },
        {
          id: 2,
          name: "banana"
        }
      ]
    };
  },
  methods: {
    addWord() {
      this.wordList.push({
        id: this.idForWord,
        name: this.newWord
      });
      this.newWord = "";
      this.idForWord++;
    }
  }
};
</script>

<style >
* {
  box-sizing: border-box;
}
.container {
  padding-top: 50px;
  align-self: auto;
  max-width: 500px;
  max-height: 500px;
  border: 2px solid rgb(4, 4, 98);
}
</style>

