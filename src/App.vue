<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DueDate from './components/DueDate.vue';
import LanguageForm from './components/LanguageForm.vue';
import { changeText, captureUserInput } from './js/input';
const text = changeText();
const inputs = captureUserInput();
</script>

<template>
    <h1 class="text-3xl font-bold">
    Hello World! Text is: {{ text.label }}
    </h1>
    <DueDate></DueDate>
    <LanguageForm/>
</template>