<template>
    <div id="infoCardContainer">
        <div v-for="f in favourites" :key="f._id" id="fav" class="infoCard">
            <p id="favSong">Favourite Song: </p>
            <p id="favArtist">Favourite Artist:</p>
            <p id="favAlbum">Favourite Album:</p>
        </div>
        <div v-for="f in favourites" :key="f._id"  id="answer" class="infoCard">
            <p>Song: {{ f.song }}</p>
            <p>Artist: {{ f.artist }}</p>
            <p>Album: {{ f.album }}</p>
            <p>User: {{ f.user }}</p>
        </div>
    </div>
   
   </template>
  

<script>
export default {
  name: 'UserProfiles',
  data: () => ({
    favourites: []
  }),
  mounted() {
      fetch('http://localhost:4000/all-favourites')
        .then((response) => response.json())
        .then((data) => {
        this.favourites = data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
</script>