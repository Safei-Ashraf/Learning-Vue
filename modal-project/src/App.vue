<template>
 <div>
   <h1>{{title}}</h1>
 <input type="text" ref="name">
 <button @click="handleClick">C</button>
 </div>
</template>

<script>

export default {
  name: 'App',
  data (){
    return{
      title: 'App title'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1{
  border-bottom: 2px solid red;
  padding-bottom: 10px;
  width: 200px;
  text-align: center;
  margin: auto;
}
</style>
