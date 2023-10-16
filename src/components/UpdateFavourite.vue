<template>
    <div id="UpdateMain">  
        <svg id="backToProfile" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toProfile">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <div id="pContainer">  
            <p id="favSongP">Favourite song</p>
            <p id="favArtistP">Favourite artist</p>
            <p id="favAlbumP">Favourite album</p>
        </div>    
        <div id="inputContainer">
            <input id="input" type="text" v-model="favourite.song" name="song" placeholder="Song" required>
            <input id="input" type="text" v-model="favourite.artist" name="artist" placeholder="Artist" required>
            <input id="input" type="text" v-model="favourite.album" name="album" placeholder="Album" required>
        </div>  
        <button id="updateSubmitBtn" type="submit" @click="editFav">Submit</button>
    </div>      
</template>

<script>
import { decodeCredential } from 'vue3-google-login'

    export default {
  name: 'UpdateFavourite',
  data: () => ({
      isInit: false,
      isLoggedIn: false,
      userName: '',
      emailAddress: '',
      favourite: {
        artist: '',
        song: '',
        album: '',
        id: ''
      },
    }),
    mounted() {
        if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true
        const userData = decodeCredential(this.$cookies.get('user_session'))
        this.userName = userData.given_name
        this.emailAddress = userData.email
      }
    fetch(`http://localhost:4000/favourites?emailAddress=${this.emailAddress}`)
        .then(result => result.json())
        .then(data => {
            if (data && data.length > 0) {
                this.favourite = {
                    artist: data[0].artist,
                    song: data[0].song,
                    album: data[0].album,
                    id: data[0]._id
                };
            }
        })
        .catch(err => console.error(err));
    },
    methods: {
        toProfile: function() {
        this.$router.push('/home/profile');
        },
        editFav() {
    if (this.favourite.id) {
        fetch(`${process.env.VUE_APP_BACKEND_URL}/favourites/${this.favourite.id}`, {  // A user submitting their favourites for the
            method: 'PUT',                                                            // first time = a POST request
            headers: {                                                                // From then, it is a PUT request
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                artist: this.favourite.artist,
                song: this.favourite.song,
                album: this.favourite.album
            })
        })
        .then(res => {
            console.log(`status: ${res.status}`);
            this.$router.replace({ path: '/home/profile' });
        })
        .catch(err => console.log(err));
    } else {
            fetch(`${process.env.VUE_APP_BACKEND_URL}/add/favourite`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                song: this.favourite.song,
                artist: this.favourite.artist,
                album: this.favourite.album,
                emailAddress: this.emailAddress
            })
        })
        .then(res => {
            console.log(`status: ${res.status}`);
            this.$router.replace({ path: '/home/profile' });
        })
        .catch(err => console.log(err));
    }
    
}
    } 
}
</script>

<style>
#UpdateMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#backToProfile {
    align-self: flex-end;
    margin-left: 4vmin;
    position: absolute;
    top: 2.5vmin;
    left: -1.5vmin;
    height: 7vmin;
    width: 7vmin;
    color: #EADDCA;
}

#backToProfile:hover {
    color: #dec9ab;
    transform: scale(1.05);
}

#inputContainer {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100vw;
}

#pContainer {
    display: flex;
    width: 75vw;
    justify-content: space-evenly;
}

#inputContainer input {
    height:7vmin;
    width: 40vmin;
    text-align: center;
}

#updateSubmitBtn {
    margin-top: 5vmin;
}
</style>