<template>
  <div class="block" @click="stop">
      Click me 🐱‍👓
      {{delay}}
  </div>
</template>

<script>
export default {
    props:['delay',],
    methods:{
        stop(){
            this.$emit('stop')

        }
    }

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