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
    <div v-for="(word, index) in wordList" :key="word.id" class="word-list">
      {{word.name}}
      <div class="remove-item" @click="removeWord(index)">&times;</div>
    </div>
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
      if (this.newWord.trim().length == 0) {
        return;
      }
      this.wordList.push({
        id: this.idForWord,
        name: this.newWord
      });
      this.newWord = "";
      this.idForWord++;
    },
    removeWord(index) {
      this.wordList.splice(index, 1);
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
.word-list {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}
</style>

