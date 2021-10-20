<template>
 <div>
   <h1>{{title}}</h1>
 <Modal :header="header" :text="text" theme="sale"/>
 </div>
</template>

<script>
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {Modal},
  data (){
    return{
      title: 'App title',
      header:'Sign up now for free',
      text:' Grap one today for half price'
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name.value)
    }
  }
}
</script>

<style >
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
