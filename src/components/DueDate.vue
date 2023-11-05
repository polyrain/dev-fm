<script setup>
  import Calendar from 'primevue/calendar';
  import { ref, inject } from 'vue';
  const userInputsCtx = inject('USER_INPUT');
</script>

<template>
  <Calendar v-model="userInputsCtx.input.date" showIcon/>
</template>