<template>
    <div id="socialMain">
        <h1 id="socialTitle">Interact with other users!</h1>
        <svg id="backToHome" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-left" viewBox="0 0 16 16" @click="toHome">
        <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0v2z"/>
        <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
        </svg>
        <div id="socialBtnContainer">
            <button id="toRecommendations" class="socialBtn" @click="toRecommendations">Recommendations</button>
            <button id="toUserProfiles" class="socialBtn" @click="toUserProfiles">User profiles</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SocialPage',
        methods: {
            toRecommendations: function() {
                this.$router.push('/home/social/recommendations');
            },
            toUserProfiles: function() {
                this.$router.push('/home/social/user-profiles');
            },
            toHome: function() {
            this.$router.push('/home');
        }
        }
    }
</script>

<style>
#socialMain {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;
}

#socialBtnContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    gap: 25vmin;
}

h1#socialTitle {
    color: #EADDCA;
    text-shadow: 0.5vmin 0.5vmin #2c3e50;
    font-size: 8vmin;
    /* position: absolute;
    top: 2.5vmin; */
}

.socialBtn{
    height: 10vmin;
    width: 20vmin;
    font-size: 2vmin;
    border-radius: 2.5%;
    background-color: #EADDCA;
}

.socialBtn:hover {
    background-color: #dec9ab;
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
</style>