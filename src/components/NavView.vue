<template>
<div id="navMain">
    <h1 id="navTitle">TuneIn</h1>
    <!-- <button id="logIn" class="btn btn-primary" type="submit" @click="toHome">Log in</button> -->
    <svg id="logIn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-google" viewBox="0 0 16 16" @click="toHome">
  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"/>
</svg>
</div>
</template>

<script>
    export default {
    name: 'NavView',
    methods: {
      toHome() {
        this.$router.push('/home');
    }
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');
h1#navTitle {
    font-size: 25vmin;
    text-shadow: 5px 5px #355E3B;
    font-family: Oswald;
    animation: color-change 6s linear infinite;
    transition: color 0.5s ease;
    }

/* dark medium light dark medium dark */
@keyframes color-change {
    0% { color:	#90EE90; }
    20% { color: #AFE1AF; }
    40% { color: #ECFFDC; }
    60% { color: #90EE90; }
    80% { color: #AFE1AF; }
    100% { color: #90EE90; } 
}   

div#navMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
    background-image: 
    linear-gradient(to bottom,
    rgba(95, 133, 117, 0.91),
    rgba(9, 121, 105, 0.91)
  ), 
  url("/Users/parisvigay/Downloads/turntable-1109588_1280.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

svg#logIn {
    height: 5vmin;
    width: 10vmin;
    align-self: flex-end;
    margin-right: 4vmin;
    position: absolute;
    top: 20px;
    right: -20px;
    color: #EADDCA;
}

</style>