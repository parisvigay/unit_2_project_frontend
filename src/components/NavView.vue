<template>
<div id="navMain">
    <h1 class="navTitle">
      <span class="titleWord titleWord1">Tune</span>
      <span class="titleWord titleWord2">In</span>
    </h1>
    <div id="logout" v-if="isLoggedIn">
      <h2 id="heyUser">Hey, {{ userName }}!</h2>
      <button id="logoutBtn" @click="handleLogout">Log out</button>
      <svg id="homeBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16" @click="toHome">
      <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"/>
      <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"/>
      </svg>
    </div>
    <div v-else>
      <div id="loginBtn" >
        <GoogleLogin :callback="callback" />
      </div>
    </div>
</div>
</template>

<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'

    export default {
    name: 'NavView',
    data: () => ({
      isInit: false,
      isLoggedIn: false,
      userName: '',
      emailAddress: ''
    }),
    mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true
        const userData = decodeCredential(this.$cookies.get('user_session'))
        this.userName = userData.given_name
      }
    },
    methods: {
      callback: function (response) {
        this.isLoggedIn = true
        const userData = decodeCredential(response.credential)
        console.log(userData);
        this.userName = userData.given_name
        this.emailAddress = userData.email
        this.$cookies.set('user_session', response.credential)
        fetch('http://localhost:4000/add/user', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            emailAddress: userData.email
          })
        })
      },
      handleLogout: function () {
        googleLogout()
        this.isLoggedIn = false
        this.$cookies.remove('user_session')
      },
      toHome: function() {
      this.$router.push('/home');
    }
    }
  };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');
h1.navTitle {
    font-size: 25vmin;
    text-shadow: 0.75vmin 0.75vmin #2c3e50;
    font-family: Oswald;
    }

@keyframes color-animation {
  0% {color: var(--color-1)}
  32% {color: var(--color-1)}
  33% {color: var(--color-2)}
  65% {color: var(--color-2)}
  66% {color: var(--color-3)}
  99% {color: var(--color-3)}
  100% {color: var(--color-1)}
}   

div#navMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    position: relative;
}

.titleWord {
  animation: color-animation 4s linear infinite;
}

.titleWord1 {
  --color-1: #DF8453;
  --color-2: #ACCFCB;
  --color-3: #E4A9A8;
}

.titleWord2 {
  --color-1: #DBAD4A;
  --color-2: #3D8DAE; 
  --color-3: #E97451; 
}

#loginBtn {
    align-self: flex-end;
    margin-right: 4vmin;
    position: absolute;
    top: 2.5vmin;
    right: -1.5vmin;
}

#logout {
  margin-top: 12vmin;
}

#logoutBtn {
  margin-top: 3vmin;  
  background-color: seashell;
  height: 4vmin;
  width: 8vmin;
  font-size: 1.5vmin;
}

#logoutBtn:hover {
  background-color: lightyellow;
  transform: scale(1.05);
}

#homeBtn {
  align-self: flex-end;
    margin-right: 4vmin;
    position: absolute;
    top: 2.5vmin;
    right: -1.5vmin;
    height: 7vmin;
    width: 7vmin;
    color: #EADDCA;
}

#homeBtn:hover {
  color: #dec9ab;
  transform: scale(1.05);
}

#heyUser {
  color: #EADDCA;
  text-shadow: 0.25vmin 0.25vmin #2c3e50;
  font-size: 4vmin;
}  
</style>