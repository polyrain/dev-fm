<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DueDate from './components/DueDate.vue';
import LanguageForm from './components/LanguageForm.vue';
import SpotifyButton from './components/SpotifyButton.vue';

import { changeText, captureUserInput } from './js/input';
import { initSpotify } from './js/spotify';

//console.log(import.meta.env.VITE_OPENAI_API_KEY);
const text = changeText();
const inputs = captureUserInput();
initSpotify(); // Provide the list of stuff 
//await testSpotify();
</script>

<template>
    <h1 class="text-3xl font-bold">
    Hello World! Text is: {{ text.label }}
    </h1>
    <DueDate></DueDate>
    <LanguageForm/>
    <SpotifyButton/>
</template>