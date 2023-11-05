<script setup>
    import Button from 'primevue/button';
    import { ref, inject } from 'vue';
    import { makeSpotifyCall} from '../js/spotify';
    const userInputsCtx = inject('USER_INPUT');
</script>
<template>
    <Button @click="makeSpotifyCall(userInputsCtx.input)">Build me a playlist!</Button>
</template>