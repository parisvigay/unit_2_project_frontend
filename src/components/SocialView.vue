<template>
    <div id="socialMain">
        <svg id="backToHome" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toHome">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <h1 id="socialTitle" >See what others are recommending!</h1>
        <div id="recommendationsContainer">
            <div v-for="s in song" :key="s._id" id="songRecommendations" class="recommendations">
                <h3>Song</h3>
                <p>Title: {{ s.title }}</p>
                <p>Artist: {{ s.artist.name }}</p>    
                <p>Year: {{ s.year }}</p>    
                <p>Genre: {{ s.genre }}</p>   
                <p>Recommended by: {{ s.user.emailAddress }}</p>
                <!-- <button class="delete" @click="delete">Delete</button>      -->
            </div>
            <div v-for="a in artist" :key="a._id" id="artistRecommendations" class="recommendations">
                <h3 id="artistH3">Artist</h3>
                <p id="artistName">Name: {{ a.name }}</p>
                <img id="artistImg" :src="a.image" alt="Artist Image">
                <p>Genre: {{ a.genre }}</p>    
                <p>Active?: {{ a.active }}</p>     
                <p id="lastP">Recommended by: {{ a.user.emailAddress }}</p>
                <!-- <button class="delete" @click="delete">Delete</button>      -->
            </div>
            <div v-for="a in album" :key="a._id" id="albumRecommendations" class="recommendations">
                <h3>Album</h3>
                <p>Title: {{ a.title }}</p>
                <p>Artist: {{ a.artist.name }}</p>    
                <p>Year: {{ a.year }}</p>    
                <p>Genre: {{ a.genre }}</p>   
                <p>Recommended by: {{ a.user.emailAddress }}</p>
                <!-- <button class="delete" @click="delete">Delete</button>      -->
            </div>
        </div>
    </div>
</template>

<script>
 export default {
        name: 'SocialView',
        data: () => ({
        error: '',
        song: [],
        artist: [],
        album: []
        }),
        async mounted() {
            try {
                const responseSongs = await fetch(`${process.env.VUE_APP_BACKEND_URL}/songs`)
                const songs = await responseSongs.json()
                this.song=songs
                console.log('songs', songs);
                const responseArtists = await fetch(`${process.env.VUE_APP_BACKEND_URL}/artists`)
                const artists = await responseArtists.json()
                const filteredArtists = artists.filter(artist => artist.isArtist ===true)
                this.artist = filteredArtists
                console.log('artists', artists);
                const responseAlbums = await fetch(`${process.env.VUE_APP_BACKEND_URL}/albums`)
                const albums = await responseAlbums.json()
                this.album=albums
                console.log('albums', albums);
            }
            catch (err) {
                console.log(err);
            }
        },
        methods: {
        toHome: function() {
            this.$router.push('/home');
        },
        delete() {
            fetch(`${process.env.VUE_APP_BACKEND_URL}/delete-song/${this.song._id}`)
        }
    }  
};
</script>

<style>
#socialMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#socialTitle {
    font-size: 6vmin;
    color: #EADDCA;
    text-shadow: 0.5vmin 0.5vmin #2c3e50;
    position: absolute;
    top: 10vmin;
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

.recommendations {
    font-size: 2vmin;
    color: #097969;
    background-color: #EADDCA;
    min-height: 40vmin;
    min-width: 40vmin;
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
</style>