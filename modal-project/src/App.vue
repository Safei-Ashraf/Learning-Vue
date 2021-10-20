<template>
<div>
<h1>Ninja Reaction Timer 🐱‍👤</h1>
<button @click="startGame" :disabled="isPlaying">Play</button>
<Block v-show="isPlaying" :delay="delay" @stop="stopGame"/>
</div>
</template>

<script>
import Block from './components/Block.vue';
export default {
  name: 'App',
  components:{Block},
  data(){
    return{
          isPlaying: false,
          delay: null,
    }
},
  methods:{
    startGame(){
      this.delay = 2000 + Math.random()*5000;
      this.isPlaying = true;
      //      calculate time different between now and started
      //      display result
    },
    stopGame(){
      this.isPlaying = false;
      console.log('stopping from app')
    }
  }
}
</script>

<style >
:root {
  --text-color: hsla(210, 50%, 85%, 1);
  --shadow-color: hsla(210, 40%, 52%, .4);
  --btn-color: hsl(20, 80%, 42%);
  --bg-color: #141218;
}
#app {
  font-family:fantasy;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #999;
  margin-top: 60px;
}
h1{
  border-bottom: 2px solid #658264;
  padding-bottom: 10px;
  width: 200px;
  text-align: center;
  margin: auto;
}
button {
  position:relative;
  padding: 10px 20px;  
  border: none;
  background: none;
  cursor: pointer;
  
  font-family: "Source Code Pro";
  font-weight: 900;
  text-transform: uppercase;
  font-size: 30px;  
  color: var(--text-color);
  
  background-color: var(--btn-color);
  box-shadow: var(--shadow-color) 2px 2px 22px;
  border-radius: 4px; 
  z-index: 0;  
  overflow: hidden;   
}
button:focus {
  outline-color: transparent;
  box-shadow: var(--btn-color) 2px 2px 22px;
}

.right::after, button::after {
  content: var(--content);
  display: block;
  position: absolute;
  white-space: nowrap;
  padding: 40px 40px;
  pointer-events:none;
}

button::after{
  font-weight: 200;
  top: -30px;
  left: -20px;
} 

.right, .left {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}
.right {
  left: 66%;
}
.left {
  right: 66%;
}
.right::after {
  top: -30px;
  left: calc(-66% - 20px);
  
  background-color: var(--bg-color);
  color:transparent;
  transition: transform .4s ease-out;
  transform: translate(0, -90%) rotate(0deg)
}

button:hover .right::after {
  transform: translate(0, -47%) rotate(0deg)
}

button .right:hover::after {
  transform: translate(0, -50%) rotate(-7deg)
}

button .left:hover ~ .right::after {
  transform: translate(0, -50%) rotate(7deg)
}

/* bubbles */
button::before {
  content: '';
  pointer-events: none;
  opacity: .6;
  background:
    radial-gradient(circle at 20% 35%,  transparent 0,  transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
    radial-gradient(circle at 75% 44%, transparent 0,  transparent 2px, var(--text-color) 3px, var(--text-color) 4px, transparent 4px),
    radial-gradient(circle at 46% 52%, transparent 0, transparent 4px, var(--text-color) 5px, var(--text-color) 6px, transparent 6px);

  width: 100%;
  height: 300%;
  top: 0;
  left: 0;
  position: absolute;
  animation: bubbles 5s linear infinite both;
}
button:disabled{
  background-color: grey;
  color: #196231;
  cursor: not-allowed;

}

@keyframes bubbles {
  from {
    transform: translate();
  }
  to {
    transform: translate(0, -66.666%);
  }
}

</style>
