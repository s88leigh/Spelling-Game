<template>
  <!--Space for letters-->
  <div class="underscore-container">
    <div class="row justify-content-md-center">
      <div class="col col-lg-2"></div>
      <div class="col-md-auto" id="empty-div">{{ word }}</div>
      <div class="col col-lg-2"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "underscore",
  props: ["word"]
};
</script>

<style>
.underscore-container {
  height: 65px;
  margin-top: 50px;
  margin-bottom: 10px;
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
