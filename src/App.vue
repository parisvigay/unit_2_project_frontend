<template>
  <div id="app">
    <!-- Add the router-view element here to display routed components -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Arimo:wght@500&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');

#app {
  font-family: Arimo;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
