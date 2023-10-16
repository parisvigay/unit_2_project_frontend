<template>
    <div id="contentMain">
        <svg id="backToHome" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toHome">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <h1 id="addContentTitle">Recommend others some music!</h1>
        <div id="contentContainer">
            <div id="addSong" class="addA">Song
                <svg id="uploadBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" @click="addSong">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <form id="submitSong">
                    <section id="inputs">
                        <div id="closeAndSubmit">
                            <svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" @click="closeSong">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                            </svg>
                            <button id="submitBtn" @click="submitSong">Submit</button>   
                        </div>
                        <input id="input" type="text" v-model="song.title" name="title" placeholder="Title" required>
                        <input id="input" type="text" v-model="song.artist" name="artist" placeholder="Artist" required>
                        <input id="input" type="text" v-model="song.year" name="year" placeholder="Year" required>
                        <input id="lastInput" type="text" v-model="song.genre" name="genre" placeholder="Genre/s" required>
                    </section>
                </form>
            </div>
            <div id="addArtist" class="addA">Artist/Band
                <svg id="uploadBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" @click="addArtist">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <form id="submitArtist">
                    <section id="inputs">
                        <div id="closeAndSubmit">
                        <svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" @click="closeArtist">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        <button id="submitBtn" @click="submitArtist">Submit</button>   
                        </div>
                        <input id="input" type="text" v-model="artist.name" name="title" placeholder="Name" required>
                        <input id="input" type="text" v-model="artist.genre" name="artist" placeholder="Genre/s" required>
                        <input id="input" type="text" v-model="artist.active" name="active" placeholder="Active? (Yes/No)" required>
                        <input id="lastInput" type="text" v-model="artist.image" name="image" placeholder="(Image URL)" required>
                    </section>
                </form>
            </div>
            <div id="addAlbum" class="addA">Album
                <svg id="uploadBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square" viewBox="0 0 16 16" @click="addAlbum">
                <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
                <form id="submitAlbum">
                    <section id="inputs">
                        <div id="closeAndSubmit">
                        <svg id="closeBtn" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16" @click="closeAlbum">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                        </svg>
                        <button id="submitBtn" @click="submitAlbum">Submit</button>  
                        </div>
                        <input id="input" type="text" v-model="album.title" name="title" placeholder="Title" required>
                        <input id="input" type="text" v-model="album.artist" name="artist" placeholder="Artist" required>
                        <input id="input" type="text" v-model="album.year" name="year" placeholder="Year" required>
                        <input id="lastInput" type="text" v-model="album.genre" name="genre" placeholder="Genre/s" required>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script>

const titleOrNameRegex = /\w\s*/;
const yearRegex = /\d{4,4}/;
const genreRegex = /^[A-Za-z\s,&]*$/;
const activeRegex = /[Yy]es|[Nn]o/;
// const imageRegex = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gmi

import { decodeCredential } from 'vue3-google-login'

    export default {
        name: 'AddContent',
        data: () => ({
            error: '',
            song: {
                title: '',
                artist: '',
                year: '',
                genre: ''
            },
            artist: {
                name: '',
                genre: '',
                active: '',
                image: ''
            },
            album: {
                title: '',
                artist: '',
                year: '',
                genre: ''
            },
            emailAddress: ''
        }), 
        mounted() {
        if (this.$cookies.isKey('user_session')) {
        this.isLoggedIn = true
        const userData = decodeCredential(this.$cookies.get('user_session'))
        this.userName = userData.given_name
        this.emailAddress = userData.email
      }
    },
        methods: {
            addSong: function() {
                document.getElementById('submitSong').style.display=('block')
            },
            closeSong: function() {
                document.getElementById('submitSong').style.display=('none')
            },
            addArtist: function() {
                document.getElementById('submitArtist').style.display=('block')
            },
            closeArtist: function() {
                document.getElementById('submitArtist').style.display=('none')
            },
            addAlbum: function() {
                document.getElementById('submitAlbum').style.display=('block')
            },
            closeAlbum: function() {
                document.getElementById('submitAlbum').style.display=('none')
            },
            submitSong: function (e) {
                e.preventDefault()
                if (this.song.title==='' || this.song.artist==='' || this.song.year==='' || this.song.genre==='') {
                    alert("Please fill in all required fields.");
                    return;
                }
                if (!titleOrNameRegex.test(this.song.title)) {
                    alert("Please input a valid title");
                    return;
                }
                if (!titleOrNameRegex.test(this.song.artist)) {
                    alert("Please input a valid name");
                    return;
                }
                if (!yearRegex.test(this.song.year)) {
                    alert("Please input a valid year");
                    return;
                }
                if (!genreRegex.test(this.song.genre)) {
                    alert("Please input a valid genre");
                    return;
                }
                fetch(`${process.env.VUE_APP_BACKEND_URL}/add/song`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: this.song.title,
                        artist: this.song.artist,
                        year: this.song.year,
                        genre: this.song.genre,
                        emailAddress: this.emailAddress
                    })
                })
                this.closeSong();
                const contentH1 = document.getElementById('addContentTitle');
                contentH1.innerHTML = "You've shared a song!";
                setTimeout(() => {
                    contentH1.innerHTML = "Recommend others some music!";
                }, 4000);
                this.resetForm();
            },
            resetForm: function() {
                this.song = {
                    title: '',
                    artist: '',
                    year: '',
                    genre: '',
                };
                this.artist = {
                    name: '',
                    genre: '',
                    active: '',
                    image: '',
                };
                this.album = {
                    title: '',
                    artist: '',
                    year: '',
                    genre: '',
                };
            },
            submitArtist: function (e) {
                e.preventDefault()
                if (this.artist.name==='' || this.artist.genre==='' || this.artist.active==='' || this.artist.image==='') {
                    alert("Please fill in all required fields.");
                    return;
                }
                if (!titleOrNameRegex.test(this.artist.name)) {
                    alert("Please input a valid name");
                    return;
                }
                if (!genreRegex.test(this.artist.genre)) {
                    alert("Please input a valid genre");
                    return;
                }
                if (!activeRegex.test(this.artist.active)) {
                    alert("Please input a valid answer");
                    return;
                }
                // if (!imageRegex.test(this.artist.image)) {
                //     alert("Please input a valid image URL");
                //     return;
                // }
                fetch(`${process.env.VUE_APP_BACKEND_URL}/add/artist`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name: this.artist.name,
                        genre: this.artist.genre,
                        active: this.artist.active,
                        image: this.artist.image,
                        emailAddress: this.emailAddress
                    })
                })
                this.closeArtist();
                const contentH1 = document.getElementById('addContentTitle');
                contentH1.innerHTML = "You've shared an artist!";
                setTimeout(() => {
                    contentH1.innerHTML = "Recommend others some music!";
                }, 4000);
                this.resetForm();
            },
            submitAlbum: function (e) {
                e.preventDefault()
                if (this.album.title==='' || this.album.artist==='' || this.album.year==='' || this.album.genre==='') {
                    alert("Please fill in all required fields.");
                    return;
                }
                if (!titleOrNameRegex.test(this.album.title)) {
                    alert("Please input a valid title");
                    return;
                }
                if (!titleOrNameRegex.test(this.album.artist)) {
                    alert("Please input a valid name");
                    return;
                }
                if (!yearRegex.test(this.album.year)) {
                    alert("Please input a valid year");
                    return;
                }
                if (!genreRegex.test(this.album.genre)) {
                    alert("Please input a valid genre");
                    return;
                }
                fetch(`${process.env.VUE_APP_BACKEND_URL}/add/album`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        title: this.album.title,
                        artist: this.album.artist,
                        year: this.album.year,
                        genre: this.album.genre,
                        emailAddress: this.emailAddress
                    })
                })
                this.closeAlbum();
                const contentH1 = document.getElementById('addContentTitle');
                contentH1.innerHTML = "You've shared an album!";
                setTimeout(() => {
                    contentH1.innerHTML = "Recommend others some music!";
                }, 4000);
                this.resetForm();
            },
            toHome: function() {
            this.$router.push('/home');
        }
    }
}
        
</script>

<style>
h1#addContentTitle {
    font-size: 6vmin;
    color: #EADDCA;
    text-shadow: 0.5vmin 0.5vmin #2c3e50;
}
    
div#contentMain {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;    
}    
    
div#contentContainer {
    display: flex;
    gap: 2vmin;
}

.addA {
    font-size: 4vmin;
    color: #097969;
    background-color: #EADDCA;
    height: 32vmin;
    width: 30vmin;
    border-radius: 2.5%;
    border: 0.5vmin solid #2c3e50;
    box-shadow: 1vmin 1vmin #076154;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    /* text-shadow: 0.25vmin 0.25vmin seashell; */
}

#uploadBtn {    
    height: 6vmin;
    width: 6vmin;
    color: #097969;
}

#uploadBtn:hover {
    color: #076154;
    transform: scale(1.05);
}

#submitSong {
    display: none;
}

#submitArtist {
    display: none;
}

#submitAlbum {
    display: none;
}

input {
    height: 5.5vmin;
    width: 29.5vmin;
}

#closeBtn {
    height: 2.5vmin;
    width: 2.5vmin;
    color: red;
}

#closeBtn:hover {
    color: darkred;
    transform: scale(1.05);
}

#closeAndSubmit {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vmin;
    margin-top: 1vmin;
}

#submitBtn {
    height: 4vmin;
    width: 8vmin;
    background-color: seashell;
    font-size: 2vmin;
    border-radius: 5%;
}

#submitBtn:hover {
    background-color: lightyellow;
    transform: scale(1.05);
}

#input {
    font-size: 2.5vmin;
    width: 28vmin;
}

#lastInput {
    margin-bottom: 7vmin;
    font-size: 2.5vmin;
    width: 28vmin;
}

input::placeholder {
    font-size: 2.5vmin;
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