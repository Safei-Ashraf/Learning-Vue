<template>
  <div class="result">
      <p>Your Score is {{score}} ms</p>
      <p >{{rank}}</p>
  </div>
</template>

<script>
export default {
props:['score'],
data(){
    return{
        rank: null,
    }
},
mounted(){
    if(this.score < 250){
        this.rank = "Speedi Ninja Boi 🐱‍👤";
    }else if(this.score < 450){
        this.rank = "Nice Reflexes 🧐"
    }
  else{
      this.rank = "Are you okeh grandma 😛"
  }
}
}
</script>

<style>
.result{
    color: rgb(12, 167, 167);
    text-shadow: 2px 1px 2px rgba(255,255,255,0.5);
    letter-spacing:3px;
    font-size: 2rem;
}
</style>