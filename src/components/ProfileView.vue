<template>
    <div id="profileMain">
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
                    <p id="profileNameText">(User)</p>
                </div>
            </div>
            <div id="infoCardContainer">
                <div id="fav" class="infoCard">
                    <p id="favSong" class="favourites">Favourite Song:</p>
                    <p id="favArtist" class="favourites">Favourite Artist:</p>
                    <p id="favAlbum" class="favourites">Favourite Album:</p>
                </div>
                <div id="answer" class="infoCard">
                    <p id="answerSong" class="answers">(User fav song)</p>
                    <p id="answerArtist" class="answers">(User fav artist)</p>
                    <p id="answerAlbum" class="answers">(User fav album)</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    
    export default {
  name: 'ProfileView',
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Arimo:wght@500&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');

#profileCard {
    height: 93vmin;
    width: 62vmin;
    border-radius: 2.5%;
    border: 0.5vmin solid #4e3b1f;
    background-color: #EADDCA;
    box-shadow: 1.25vmin 1.25vmin #076154;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-family: Arimo;

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
    justify-content: space-between;
    align-items: center;
}

#fav {
    background-color: #e0cdb1;
    border-top: 0.5vmin solid #4e3b1f;
    border-left: 0.5vmin solid #4e3b1f;
    border-bottom: 0.5vmin solid #4e3b1f;
    border-top-left-radius: 2.5%;
    border-bottom-left-radius: 2.5%;
}

#answer {
    background-color: #e4d3ba;
    border-top: 0.5vmin solid #4e3b1f;
    border-right: 0.5vmin solid #4e3b1f;
    border-bottom: 0.5vmin solid #4e3b1f;
    border-top-right-radius: 2.5%;
    border-bottom-right-radius: 2.5%;
}

.favourites {
    font-size: 2.5vmin;
}

.answers {
    font-size: 2.5vmin;
}

#favSong {
    margin-top: 4vmin;
}

#favAlbum {
    margin-bottom: 4vmin;
}

#answerSong {
    margin-top: 4vmin;
}

#answerAlbum {
    margin-bottom: 4vmin;
}
</style>