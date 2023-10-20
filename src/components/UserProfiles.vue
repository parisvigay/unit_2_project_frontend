<template>
  <div id="userProfilesMain">
    <svg id="backToSocial" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toSocial">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
    </svg>
    <div id="profilesContainer">
          <div v-for="f in favourites" :key="f._id" id="favProfiles" class="infoCardAll">
              <p>User: <br>{{ f.user.emailAddress }}</p>
              <p id="favSong">Favourite Song: {{ f.song }}</p>
              <p id="favArtist">Favourite Artist: {{ f.artist }}</p>
              <p id="favAlbum">Favourite Album: {{ f.album }}</p>
          </div>
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
      fetch(`${process.env.VUE_APP_BACKEND_URL}/all-favourites`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        this.favourites = data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    methods: {
        toSocial: function() {
        this.$router.push('/home/social');
        }
    }  
}
</script>

<style>
#userProfilesMain{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

#profilesContainer {
    display: flex;
    align-items: flex-start;
    gap: 2vmin;
    overflow-x: auto;
    max-width: 98%;
}

.infoCardAll {
    height: 53vmin;
    width: 44vmin;
    margin-bottom: 6vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

#favProfiles {
    background-color: #EADDCA;
    border: 0.5vmin solid #2c3e50;
    border-radius: 2.5%;
    box-shadow: 1vmin 1vmin #076154;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
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
</style>