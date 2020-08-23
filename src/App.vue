<template>
  <div id="app">
    <HelloWorld msg="Welcome to Dogstorian"/>
    <img alt="Vue logo" class="landing-page-image" src="./assets/vinni.jpg">
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
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

.landing-page-image {
  height: 80vh;
}
</style>
