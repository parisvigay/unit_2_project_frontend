<template>
    <div id="profileMain">
        <svg id="backToHome" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toHome">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <div id="profileCard">
            <div id="profileIcon">
                <div id="profileCircle">
                <svg id="profilePerson" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                </svg>
                </div>
            </div>
            <div id="profileName">
                <div id="profileNameCard">
                    <p id="profileNameText">{{ userName }}</p>
                </div>
            </div>
            <div id="infoCardContainer">
                <div id="fav" class="infoCard">
                    <p id="favSong" class="favourites toolTip">Favourite Song:
                       <span class="toolTipText">Let others know your favourite song!</span>
                    </p>
                    <p id="favArtist" class="favourites toolTip">Favourite Artist:
                        <span class="toolTipText">Let others know your favourite Artist!</span>
                    </p>
                    <p id="favAlbum" class="favourites toolTip">Favourite Album:
                        <span class="toolTipText">Let others know your favourite Album!</span>
                    </p>
                </div>
                <div id="answer" class="infoCard">
                    <p id="favSong">
                        {{ getFavourite.length > 0 ? getFavourite[0].song : '' }}
                    </p>
                    <p id="favArtist">
                        {{ getFavourite.length > 0 ? getFavourite[0].artist : '' }}
                    </p>
                    <p id="favAlbum">
                        {{ getFavourite.length > 0 ? getFavourite[0].album : '' }}
                    </p>
                </div>
            </div>
                <button id="editBtn" type="edit" @click="editFav">Edit</button>  
        </div>
    </div>
</template>

<script>
import { decodeCredential } from 'vue3-google-login';

export default {
  name: 'ProfileView',
  data: () => ({
    isLoggedIn: false,
    userName: '',
    emailAddress: '', 
    getFavourite: []
  }),
  mounted() {
    if (this.$cookies.isKey('user_session')) {
      this.isLoggedIn = true;
      const userData = decodeCredential(this.$cookies.get('user_session'));
      this.userName = userData.given_name;
      this.emailAddress = userData.email;
      fetch(`${process.env.VUE_APP_BACKEND_URL}/favourites?emailAddress=${this.emailAddress}`)
        .then((response) => response.json())
        .then((data) => {
        this.getFavourite = data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  },
  methods: {
    toHome: function() {
      this.$router.push('/home');
    },
    editFav: function() {
      this.$router.push('/home/update-favourite');
    }
  }
};
</script>


<style>

#profileCard {
    height: 93vmin;
    width: 62vmin;
    border-radius: 2.5%;
    border: 0.5vmin solid #2c3e50;
    background-color: #EADDCA;
    box-shadow: 1.25vmin 1.25vmin #076154;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

#profileName {
    margin-bottom: 6vmin;
}

#profileNameText {
    font-size: 2.5vmin;
    margin-top: 2vmin;
    text-align: center; 
}

#profileNameCard {
    height: 5vmin;
    width: 10vmin;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0.25vmin solid #C8C8C8;
    border-radius: 5%;
    box-shadow: 0.25vmin 0.25vmin #888888;
}

#profileMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#profileIcon {
   margin-bottom: 2vmin;
   margin-top: 2vmin;
}

#profilePerson {
    height: 15vmin;
    width: 15vmin;
    color: white;
    margin-top: 0.5vmin;
}

#profileCircle {
    height: 17vmin;
    width: 17vmin;
    border-radius: 50%;
    background-color: #E0E0E0;
    border: 0.5vmin solid silver;
}

#infoCardContainer {
    display: flex;
}

.infoCard {
    height: 53vmin;
    width: 22vmin;
    margin-bottom: 6vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

#fav {
    background-color: #e5d3bb;
    border-top: 0.5vmin solid #2c3e50;
    border-left: 0.5vmin solid #2c3e50;
    border-bottom: 0.5vmin solid #2c3e50;
    border-top-left-radius: 2.5%;
    border-bottom-left-radius: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

#answer {
    background-color: #e7d7c1;
    border-top: 0.5vmin solid #2c3e50;
    border-right: 0.5vmin solid #2c3e50;
    border-bottom: 0.5vmin solid #2c3e50;
    border-top-right-radius: 2.5%;
    border-bottom-right-radius: 2.5%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

p {
    font-size: 2.5vmin;
}

.toolTip {
  position: relative;
  display: inline-block;
}

.toolTip:hover .toolTipText {
  visibility: visible;
  opacity: 1;
}

.toolTip .toolTipText {
  visibility: hidden;
  width: 16vmin;
  height: 5vmin;
  font-size: 1.5vmin;
  background-color: lightyellow;
  color: black;
  text-align: center;
  border-radius: 6px;
  border: 0.25vmin solid #2c3e50;
  position: absolute;
  bottom: 125%;
  left: 50%;
  margin-left: -25vmin;
  opacity: 0;
  transition: opacity 0.3s;
}

.answerContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

#editBtn {
    height: 4vmin;
    width: 8vmin;
    font-size: 2vmin;
    border-radius: 5%;
    background-color: seashell;
    position: absolute;
    bottom: 5vmin;
}

#editBtn:hover {
    background-color: lightyellow;
    transform: scale(1.05);
}

#backToHome {
    align-self: flex-end;
    margin-left: 4vmin;
    position: absolute;
    top: 2.5vmin;
    left: -1.5vmin;
    height: 7vmin;
    width: 7vmin;
    color: #EADDCA;
}

#backToHome:hover {
    color: #dec9ab;
    transform: scale(1.05);
}
</style>