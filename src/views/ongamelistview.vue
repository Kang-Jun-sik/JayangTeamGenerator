<template>
  <div class="ongamelistview">
    <!--<h1>{{ $route.query.playercount }}</h1> -->
    <button class="teamMakeRandomBtn" @click="executeRandomTeam">
      랜덤팀
      <!--<router-link :to="{path:'/teamviewer',query:{playercount:8}}">랜덤팀</router-link>-->
    </button>
    <button class="teamMakeRandomBtn">포지션별팀(개발중)</button>
    <button class="guestplusBtn">+게스트추가(개발중)</button>
    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th>
          <!--
          <label class="form-checkbox">
            <input type="checkbox" v-model="selectAll" @click="select">
            <i class="form-icon"></i>
          </label>
          -->
        </th>
        <th>멤버</th>
        <th>포지션</th>
      </tr>
      </thead>
      <tbody>

      <tr v-for="i in items" v-bind:key="i.name">
        <td>
          <label class="form-checkbox">
            <input type="checkbox" :value="i.name" @click="selectedcheck($event)">
            <!--<input type="checkbox" :value="i.name" v-model="selected" @click="selectedcheck($event)">-->
            <i class="form-icon"></i>
          </label>
        </td>
        <td>{{ i.name }}</td>
        <td>{{ i.position }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
//link https://codepen.io/nikitamarcius/pen/LQOaxd
export default {
  name: "ongamelistview",
  data: () => ({
    items: [
      {
        "name": "김지성",
        "position": 3
      },
      {
        "name": "강준식",
        "position": 1
      },
      {
        "name": "조성원",
        "position": 2
      },
      {
        "name": "이승한",
        "position": 3
      },
      {
        "name": "안연수",
        "position": 1
      },
      {
        "name": "오세혁",
        "position": 2
      },
      {
        "name": "정석재",
        "position": 4
      },
      {
        "name": "최종호",
        "position": 4
      },
      {
        "name": "장우식",
        "position": 2
      },
      {
        "name": "조재희",
        "position": 1
      },
      {
        "name": "김성태",
        "position": 2
      },
      {
        "name": "안환석",
        "position": 4
      },
      {
        "name": "이정훈",
        "position": 3
      },
      {
        "name": "최정훈",
        "position": 3
      },
      {
        "name": "어웅선",
        "position": 2
      },
      {
        "name": "유호연",
        "position": 4
      },
      {
        "name": "이준형",
        "position": 3
      }
    ],
    selected: [],
    selectAll: false,
    playercount : 0
  }),
  methods: {
    selectedcheck(e) {
      if(e.target.checked){
        this.playercount++;
        let addplayer = this.items.find(x=>x.name==e.target.value);
        this.selected.push(addplayer);
      }
      else{
        this.playercount--;
        let rmplayer = this.selected.find(x=>x.name==e.target.value);
        if(rmplayer){
          const idx = this.selected.findIndex(function (item){
            return item.name == rmplayer.name;
          })
          this.selected.splice(idx,1)
        }
      }
    },

    executeRandomTeam(){
      if(this.$route.query.playercount == this.playercount)
      {
          //<router-link :to="{path:'/teamviewer',query:{playercount:8}}">랜덤팀</router-link>
          this.$router.push({path:'/teamviewer',query:{player:this.selected}});
      }
      else
      {
        alert('팀원수를 맞춰주세요');
      }
    },

    select() {
      /*
      this.selected = [];
      if (!this.selectAll) {
        for (let i in this.items) {
          this.selected.push(this.items[i].name);
        }
      }
       */
    }
  }
}
</script>

<style scoped>
.teamMakeRandomBtn{
  background: pink;
  width: 130px;
  height: 30px;
  border: dotted;
  text-align: center;
  float: right;
}
.guestplusBtn{
  width: 130px;
  height: 30px;
  border: dotted;
  float: right;
  background: dodgerblue;
}
</style>
