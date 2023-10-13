<template>
    <input id="input" type="text" v-model="favourite.song" name="song" placeholder="Song" required>
    <input id="input" type="text" v-model="favourite.artist" name="artist" placeholder="Artist" required>
    <input id="input" type="text" v-model="favourite.album" name="album" placeholder="Album" required>
    <button id="submitBtn" type="submit" @click="editFav">Submit</button>  
</template>

<script>
// import { useRoute } from 'vue-router';

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
        // const route = useRoute()
        fetch (`http://localhost:4000/favourites`)
        .then(result => result.json())
        .then(data => {
            this.favourite.artist=data[0].artist
            this.favourite.song=data[0].song
            this.favourite.album=data[0].album
            this.favourite.id=data[0]._id
        })
    },
    methods: {
        editFav() {
            console.log(`favourite edited ${this.favourite.artist} - ${this.favourite.song} - ${this.favourite.album}`);
            fetch(`http://localhost:4000/favourites/${this.favourite.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    artist:this.favourite.artist,
                    song:this.favourite.song,
                    album:this.favourite.album
                })
            })
            .then(res => {
                console.log(`status: ${res.status}`);
                this.$router.replace({ path: `/home/profile` })
            })
            .catch(err => console.log(err))
        }
    } 
}
</script>