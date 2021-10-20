<template>
  <div class="block" @click="stopTimer"  v-if="showBlock">
      Click me 🐱‍👓
      {{delay}}
  </div>
</template>

<script>
export default {
    props:['delay',],
    methods:{
        // stop(){
        //     this.$emit('stop')
        // },
        startTimer(){
            this.timer = setInterval(()=>{
                this.reactionTime += this.timeIntervalMs;
            }, this.timeIntervalMs)

        },
        stopTimer(){
            clearInterval(this.timer);
            console.log(this.reactionTime)

        },
    },
    data(){
        return{
            showBlock: false,
            timer: null,
            reactionTime:0,
            timeIntervalMs: 10,
        }
    },
mounted(){
    setTimeout(()=>{
        this.showBlock = true;
        this.startTimer();
    }, this.delay)
},
}
</script>

<style>
  .block {
    width: 60%;
    border-radius: 20px;
    background:  #0faf87;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
    font-size: 8vw;
    overflow: hidden;
    word-wrap: break-word; 
 }
</style>