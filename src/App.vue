<script setup>
import DueDate from './components/DueDate.vue';
import LanguageForm from './components/LanguageForm.vue';
import SpotifyButton from './components/SpotifyButton.vue';
import Image from 'primevue/image';
import { changeText, captureUserInput } from './js/input';
import { initSpotify } from './js/spotify';

const text = changeText();
const inputs = captureUserInput();
initSpotify(); // Provide the list of stuff 
</script>

<template>
    <div class="content-center">
    <h1 class="text-3xl font-bold">
    Dev-FM: Playlists perfectly suited for your sprint!
    </h1>

    <br/>
    <DueDate></DueDate>
    <LanguageForm/>
    <br/>
    <br/>
    <SpotifyButton/>
<br/>    
    <Image width="150" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Radio_svg_icon.svg"/>

    </div>
</template>