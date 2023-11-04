<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DueDate from './components/DueDate.vue';
import LanguageForm from './components/LanguageForm.vue';
import SpotifyButton from './components/SpotifyButton.vue';

import { changeText, captureUserInput } from './js/input';
// FUCK ME THIS DIDNT WORK AAAAAAAAAA 
//import {setup, testGPT} from './js/gpt'


//console.log(import.meta.env.VITE_OPENAI_API_KEY);
const text = changeText();
const inputs = captureUserInput();
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