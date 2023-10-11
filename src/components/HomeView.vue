<template>
    <div id="homeMain">
        <section id="homeTitle">
            <h1 id="homeTitle1">(User), it's time to</h1>
            <h1 id="homeTitle2">TuneIn</h1>
        </section>
        <div id="navBar">
            <svg id="navIcons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
            <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
            </svg>
            <svg id="navIcons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16" @click="toAddContent">
            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
            </svg>
            <svg id="navIcons" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16" @click="toProfile">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </div>
    </div>
   
</template>

<script>
    export default {
        name: 'HomeView',
        methods: {
            toAddContent() {
                this.$router.push('/home/add-content')
            },
            toProfile() {
            this.$router.push('/home/profile')
            }
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Arimo:wght@500&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Dela+Gothic+One&family=Kanit&family=Open+Sans:wght@300&family=Oswald:wght@500&family=Poiret+One&family=Poppins&display=swap');

div#homeMain {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
}

#homeTitle {
    display: flex;
    justify-content: center;
    margin-top: 12vmin;
    gap: 2vmin;
}

h1#homeTitle1 {
        color: #EADDCA;
        text-shadow: 0.5vmin 0.5vmin #2c3e50;
        font-size: 8vmin;
        font-family: Arimo;
        margin-top: 4.75vmin;
}

h1#homeTitle2 {
    font-size: 12vmin;
    font-family: Oswald;
    color: #dec9ab;
    text-shadow: 0.5vmin 0.5vmin #2c3e50;
}

svg#navIcons {
    height: 10vmin;
    width: 10vmin;
    color: #EADDCA;
    margin-top: 2vmin;
}

svg#navIcons:hover {
    color: #dec9ab;
    transform: scale(1.05);
}

div#navBar {
    display: flex;
    justify-content: space-evenly;
    border-top: #EADDCA  0.5vmin solid;
    justify-self: flex-end;
    height: 15vmin;
    width: 100vw;
    background-color: #076154
}
</style>