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
    <div v-for="word in wordList" :key="word.id" class="word-list">{{word.category}}</div>
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
          category: "Fruits",
          completed: false
        },
        {
          id: 2,
          category: "Animals",
          completed: false
        }
      ]
    };
  },
  methods: {
    addWord() {
      this.wordList.push({
        id: this.idForWord,
        category: this.newWord,
        completed: false
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

