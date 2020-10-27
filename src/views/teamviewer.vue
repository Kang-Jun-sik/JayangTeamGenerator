<template>
  <div class="teamviewer">
  <table class="table table-striped table-hover">
    <thead>
    <tr>
      <th>멤버</th>
      <th>포지션</th>
    </tr>
    </thead>
    <tbody>

    <h1>HOME</h1>
    <tr v-for="i in HomeTeam" v-bind:key="i.name">
      <td>{{ i.name }}</td>
      <td>{{ i.position }}</td>
    </tr>

    <h1>AWAY</h1>
    <tr v-for="i in AwayTeam" v-bind:key="i.name">
      <td>{{ i.name }}</td>
      <td>{{ i.position }}</td>
    </tr>
    </tbody>

  </table>
  </div>
</template>

<script>
export default {
  name: "teamviewer",
  data: () => ({
    HomeTeam: [],
    AwayTeam: []
  }),
  mounted() {
    this.makeTeam(JSON.parse(this.$route.query.player));
  },
  methods: {
    makeTeam(playerInfo) {
      switch (playerInfo.length) {
        case 6 :
          this.makeRandomTeam3on3(playerInfo);
          break;

        case 8 :
          this.makeRandomTeam4on4(playerInfo);
          break;
      }
    },
    makeRandomTeam3on3(playerinfo) {
      console.log(playerinfo);
      for(;;){
        if(this.HomeTeam.length == 3 && this.AwayTeam.length == 3){
          break;
        }
        else
        {
          let randomPlayer = playerinfo[Math.floor(Math.random()*playerinfo.length)];
          if(randomPlayer.assignTeam === undefined){
            randomPlayer.assignTeam = true;

            if(this.HomeTeam.length <= 2){
              this.HomeTeam.push(randomPlayer);
            }
            else if(this.AwayTeam.length <= 2){
              this.AwayTeam.push(randomPlayer);
            }
          }
        }
      }
      console.log(this.HomeTeam);
      console.log(this.AwayTeam);
    },

    makeRandomTeam4on4(playerinfo) {
      console.log(playerinfo);
      for(;;){
        if(this.HomeTeam.length == 4 && this.AwayTeam.length == 4){
          break;
        }
        else
        {
          let randomPlayer = playerinfo[Math.floor(Math.random()*playerinfo.length)];
          if(randomPlayer.assignTeam === undefined){
            randomPlayer.assignTeam = true;

            if(this.HomeTeam.length <= 3){
              this.HomeTeam.push(randomPlayer);
            }
            else if(this.AwayTeam.length <= 3){
              this.AwayTeam.push(randomPlayer);
            }
          }
        }
      }
      console.log(this.HomeTeam);
      console.log(this.AwayTeam);
    }
  }
}
</script>

<style scoped>

</style>
