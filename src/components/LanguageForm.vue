<script setup>
    import MultiSelect from 'primevue/multiselect';
    import { ref, inject } from 'vue';
    const langOpts = Object.keys(inject('LANGUAGES'));
    const text = inject("LABEL_TEXT");
    const userInputsCtx = inject('USER_INPUT');
</script>
<template>
<MultiSelect v-model="userInputsCtx.input.langs" :options="langOpts"
    placeholder="Pick your poison..." display="chip"/>
</template>