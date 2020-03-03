<template>
  <div class="container">
    <input type="text" class="add-word" placeholder="Add New Word" v-model="newWord" />
    <h4>New Spelling Words</h4>
    <b-container
      v-for="newWord in newWordList"
      :key="newWord.id"
      class="newWord"
    >{{newWord.category}}</b-container>
  </div>
</template>

<script>
export default {
  name: "addWords",
  data() {
    return {
      newWord: "",
      newWordList: [
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
  }
};
</script>

<style >
* {
  box-sizing: border-box;
}
.container {
  max-width: 500px;
  max-height: 500px;
  border: 2px solid rgb(4, 4, 98);
}
</style>

