<script setup>
    import Button from 'primevue/button';
    import { ref, inject } from 'vue';
    import { makeSpotifyCall} from '../js/spotify';
</script>
<template>
    <button @click="makeSpotifyCall">Test Spotify</button>
</template>