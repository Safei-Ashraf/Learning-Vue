<template>
 <div>
   <h1>{{title}}</h1>
 <div v-show="showModal">
   <Modal theme="sale" @close="handleCloseModal">
     <h1>Sign up now for free</h1>
     <p>Grap one today for half price</p>
       <template v-slot:links>
                   <a href="#">Sign up Now</a>
                   <a href="#">Login Now</a>
        </template>
   </Modal>
 </div>
 <button v-show="!showModal" @click="handleShowModal">Show Modal</button>
 <button v-show="showModal">Hide Modal</button>
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
      text:' Grap one today for half price',
      showModal: false,
    }
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name.value)
    },
    handleShowModal(){
      this.showModal = true;
    },
    handleCloseModal(){
      this.showModal = false;
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
