<template>
  <div class="flex-container">
    <div>
      <router-link :to="{path:'/ongamelistview',query:{playercount:6}}">3:3</router-link>
    </div>
    <div>
      <router-link :to="{path:'/ongamelistview',query:{playercount:8}}">4:4</router-link>
    </div>
    <div>
      <router-link :to="{path:'/ongamelistview',query:{playercount:10}}">5:5</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWrapper",
  methods : {
    goto3on3game : function (e){
      e.preventDefault();
    }
  }
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: space-around;
  width: 80%;
  background-color: black;
}

.flex-container>div {
  background-color: DodgerBlue;
  color: white;
  width: 100px;
  margin: 10px;
  flex: 0 1 25%;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}

/* Responsive layout - makes the two columns stack on top of each other instead of next to each other */
@media (max-width: 2500px) {
  .flex-container>div {
    max-width: 100%;
    flex: 0 1 100%;
  }
}
</style>
