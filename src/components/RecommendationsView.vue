<template>
    <div id="recommendationsMain">
        <svg id="backToSocial" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toSocial">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <h1 id="recommendationsTitle" >See what others are recommending!</h1>
        <div id="recommendationsContainer">
            <div v-for="s in song" :key="s._id" id="songRecommendations" class="recommendations">
                <h3>Song</h3>
                <p>Title: {{ s.title }}</p>
                <p>Artist: {{ s.artist.name }}</p>    
                <p>Year: {{ s.year }}</p>    
                <p>Genre: {{ s.genre }}</p>   
                <p>Recommended by: {{ s.user.emailAddress }}</p>
                <button class="delete" @click="deleteSong(s)" :style="{ opacity: userTrueSong(s) ? 1 : 0 }">Delete</button>
            </div>
            <div v-for="a in artist" :key="a._id" id="artistRecommendations" class="recommendations">
                <h3 id="artistH3">Artist</h3>
                <p id="artistName">Name: {{ a.name }}</p>
                <img id="artistImg" :src="a.image" alt="Artist Image">
                <p>Genre: {{ a.genre }}</p>    
                <p>Active?: {{ a.active }}</p>     
                <p id="lastP">Recommended by: {{ a.user.emailAddress }}</p>
                <button id="artistDelete" class="delete" @click="deleteArtist(a)" :style="{ opacity: userTrueArtist(a) ? 1 : 0 }">Delete</button>
            </div>
            <div v-for="a in album" :key="a._id" id="albumRecommendations" class="recommendations">
                <h3>Album</h3>
                <p>Title: {{ a.title }}</p>
                <p>Artist: {{ a.artist.name }}</p>    
                <p>Year: {{ a.year }}</p>    
                <p>Genre: {{ a.genre }}</p>   
                <p>Recommended by: {{ a.user.emailAddress }}</p>
                <button class="delete" @click="deleteAlbum(a)" :style="{ opacity: userTrueAlbum(a) ? 1 : 0 }">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { decodeCredential } from 'vue3-google-login';

export default {
  name: 'RecommendationsView',
  data: () => ({
    error: '',
    song: [],
    artist: [],
    album: [],
    isLoggedIn: false,
    userName: '',
    emailAddress: '',
  }),
  async mounted() {
    try {
      if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true;
        const userSession = this.$cookies.get('user_session');
        const userData = decodeCredential(userSession);
        this.emailAddress = userData.email;

        // Fetch songs
        const songsResponse = await fetch(`${process.env.VUE_APP_BACKEND_URL}/songs`);
        const songs = await songsResponse.json();
        this.song = songs;

        // Fetch artists
        const artistsResponse = await fetch(`${process.env.VUE_APP_BACKEND_URL}/artists`);
        const artists = await artistsResponse.json();
        const filteredArtists = artists.filter(artist => artist.isArtist === true);
        this.artist = filteredArtists;

        // Fetch albums
        const albumsResponse = await fetch(`${process.env.VUE_APP_BACKEND_URL}/albums`);
        const albums = await albumsResponse.json();
        this.album = albums;
      }
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    toSocial: function() {
      this.$router.push('/home/social');
    },
    deleteSong(song) {
    fetch(`${process.env.VUE_APP_BACKEND_URL}/delete-song/${song._id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(res => {
        if (res.status === 204) {
            // If the item was deleted, remove it from the data array
            this.song = this.song.filter(item => item._id !== song._id);
        }
    })
    .catch(err => console.log(err));
    },

    deleteArtist(artist) {
        fetch(`${process.env.VUE_APP_BACKEND_URL}/delete-artist/${artist._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(res => {
            if (res.status === 204) {
                // If the item was deleted, remove it from the data array
                this.artist = this.artist.filter(item => item._id !== artist._id);
            }
        })
        .catch(err => console.log(err));
    },

    deleteAlbum(album) {
        fetch(`${process.env.VUE_APP_BACKEND_URL}/delete-album/${album._id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
         },
        })
        .then(res => {
        if (res.status === 204) {
            // If the item was deleted, remove it from the data array
            this.album = this.album.filter(item => item._id !== album._id);
        }
        })
        .catch(err => console.log(err));
    },

    userTrueSong(song) {
      return song.user.emailAddress === this.emailAddress;
    },
    userTrueArtist(artist) {
      return artist.user.emailAddress === this.emailAddress;
    },
    userTrueAlbum(album) {
      return album.user.emailAddress === this.emailAddress;
    },
  },
};
</script>


<style>
#recommendationsMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#recommendationsTitle {
    font-size: 6vmin;
    color: #EADDCA;
    text-shadow: 0.5vmin 0.5vmin #2c3e50;
    position: absolute;
    top: 10vmin;
}

#backToSocial {
    align-self: flex-end;
    margin-left: 4vmin;
    position: absolute;
    top: 2.5vmin;
    left: -1.5vmin;
    height: 7vmin;
    width: 7vmin;
    color: #EADDCA;
}

#backToSocial:hover {
    color: #dec9ab;
    transform: scale(1.05);
}

.recommendations {
    font-size: 2vmin;
    color: #097969;
    background-color: #EADDCA;
    min-height: 45vmin;
    height: 40vmin;
    min-width: 42vmin;
    border-radius: 2.5%;
    border: 0.5vmin solid #2c3e50;
    box-shadow: 1vmin 1vmin #076154;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
}

#recommendationsContainer {
    display: flex;
    align-items: flex-start;
    gap: 2vmin;
    overflow-x: auto;
    max-width: 98%;
}

#artistImg {
    height: 8vmin;
    width: 10vmin;
    margin-bottom: 2vmin;
}

#lastP {
    margin-bottom: 2.25vmin;
}

#artistName {
    margin-bottom: -0.25vmin;
}

#artistDelete {
    margin-bottom: 0.5vmin;
}

.delete {
    height: 4vmin;
    width: 8vmin;
    font-size: 2vmin;
    border-radius: 5%;
    background-color: seashell;
}

.delete:hover {
    background-color: lightyellow;
    transform: scale(1.05);
}
</style>