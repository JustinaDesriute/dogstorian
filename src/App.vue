<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/GenericComponents/Footer'

export default {
  name: 'App',
  components: {
    'Navigation': Navigation,
    'Footer': Footer,
  }
}
</script>

<style>

body {
  width: 100vw;
  height: 100vh;
  background-color: #e5ceb7;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  height: 100%;
}

.footer {
  bottom: 0;
  color: 	#FFFACD;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
