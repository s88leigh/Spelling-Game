 <template>
  <!--Row of Letters-->
  <b-div class="alpha-container">
    <b-button class="button-card">
      <b-card class="alpha-card" text-align="center">a</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">b</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">c</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">d</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">e</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">f</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">g</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">h</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">i</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">j</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">k</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">l</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">m</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">n</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">o</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">p</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">q</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">r</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">s</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">t</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">u</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">v</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">w</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">x</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">y</b-card>
    </b-button>
    <b-button class="button-card">
      <b-card class="alpha-card">z</b-card>
    </b-button>
  </div>
</template>
    
    <script>
export default {};
</script>
    
    <style>
* {
  box-sizing: border-box;
}
/* letter container */
.alpha-container {
  display: flex;
  width: 100%;
  margin-top: 0px;
  margin-left: 60px;
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
</style>