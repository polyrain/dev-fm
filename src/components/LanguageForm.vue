<script setup>
    import MultiSelect from 'primevue/multiselect';
    import { ref, inject } from 'vue';
    const langOpts = [
        'Rust', 'C', 'JS', 
        'TS', 'Ada', 'B', 
        'D', 'Python', 'Haskell',
        'Scala', 'Java'];
    const text = inject("LABEL_TEXT");
    const userInputsCtx = inject('USER_INPUT')
</script>
<template>
<MultiSelect v-model="userInputsCtx.input.langs" :options="langOpts"
    placeholder="Pick your poison..." display="chip"/>
    <button @click=userInputsCtx.log()>Build me a playlist!</button>
</template>