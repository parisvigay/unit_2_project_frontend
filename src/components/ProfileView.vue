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
                       {{ getFavourite.song }}
                    </p>
                    <p id="favArtist" class="favourites toolTip">Favourite Artist:
                        <span class="toolTipText">Let others know your favourite Artist!</span>
                        {{ getFavourite.artist }}
                    </p>
                    <p id="favAlbum" class="favourites toolTip">Favourite Album:
                        <span class="toolTipText">Let others know your favourite Album!</span>
                        {{ getFavourite.album }}
                    </p>
                </div>
                <!-- <div id="answer" class="infoCard">
                    <div id="answerSongContainer" class="answerContainer">
                    <p id="answerSong" class="answers">User fav song</p>
                    <button class="editBtn" @click="addSong">Edit</button>
                    </div>
                    <input id="songInput" class="inputs" type="text" v-model="favouriteSong.song" name="song" placeholder="Favourite song" required>
                    <div id="answerArtistContainer" class="answerContainer">
                    <p id="answerArtist" class="answers">User fav artist</p>
                    <button class="editBtn" @click="addArtist">Edit</button>
                    </div>
                    <input id="artistInput" class="inputs" type="text" v-model="favouriteArtist.artist" name="artist" placeholder="Favourite artist" required>
                    <div id="answerAlbumContainer" class="answerContainer">
                    <p id="answerAlbum" class="answers">User fav album</p>
                    <button class="editBtn" @click="addAlbum">Edit</button>
                    </div>
                    <input id="albumInput" class="inputs" type="text" v-model="favouriteAlbum.album" name="album" placeholder="Favourite album" required>
                -->
                <div id="addFavs" class="addAFav">Favourite
                    <svg id="uploadBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" @click="addAlbum">
                    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                    </svg>
                    <form id="submitFavs">
                    <section id="inputs">
                        <div id="closeAndSubmit">
                        <svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" @click="closeAlbum">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        <button id="submitBtn" type="submit" @click="submitFav">Submit</button>  
                        </div>
                        <input id="input" type="text" v-model="favourite.song" name="song" placeholder="Song" required>
                        <input id="input" type="text" v-model="favourite.artist" name="artist" placeholder="Artist" required>
                        <input id="input" type="text" v-model="favourite.album" name="album" placeholder="Album" required>
                    </section>
                </form>
            </div>
                </div>
            </div>
        </div>
    <!-- </div> -->
</template>

<script>
import { decodeCredential } from 'vue3-google-login'

// const inputRegex = /\w\s*/;    

    export default {
  name: 'ProfileView',
  data: () => ({
      isInit: false,
      isLoggedIn: false,
      userName: '',
      emailAddress: '',
      favourite: {
        artist: '',
        song: '',
        album: ''
      },
      getFavourite: {}
    }),
    mounted() {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true
        const userData = decodeCredential(this.$cookies.get('user_session'))
        this.userName = userData.given_name
        this.emailAddress = userData.email
      }
      fetch ('http://localhost:4000/favourites')
      .then(res => res.json())
      .then(result => {
        console.log(result[0]);
        this.getFavourite=result[0]
      })
    },
    methods: {
        toHome: function() {
        this.$router.push('/home');
        },
        addFav: function() {
            document.getElementById('answerSongContainer').style.opacity=('0')
            document.getElementById('songInput').style.display=('block')
        },
      submitFav: function (e) {
                e.preventDefault()
                console.log('submitting favourite', this.favourite);
                fetch('http://localhost:4000/add/favourite', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        song: this.favourite.song,
                        artist: this.favourite.artist,
                        album: this.favourite.album,
                        emailAddress: this.emailAddress
                    })
                })
                 .then(res => console.log(`status: ${res.status}`))
                // this.closeFav();
                // const contentH1 = document.getElementById('addContentTitle');
                // contentH1.innerHTML = "You've shared an artist!";
                // setTimeout(() => {
                //     contentH1.innerHTML = "Recommend others some music!";
                // }, 4000);
                // this.resetForm();
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

.favourites {
    font-size: 2.5vmin;
}

.answers {
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

.editBtn {
    height: 3vmin;
    width: 4.5vmin;
    font-size: 1.5vmin;
    margin-top: 10vmin;
    background-color: seashell;
    position: absolute;
}

.editBtn:hover {
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

.inputs {
    width: 20vmin;
    height: 5vmin;
    text-align: center;
    font-size: 2.5vmin;
    display: none;
    position: absolute;
}

#songInput {
    top: 42.75vmin;
}

#artistInput {
    top: 60.25vmin;
}

#albumInput {
    top: 77.75vmin;
}
</style>