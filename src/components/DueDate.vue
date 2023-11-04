<template>
    <Calendar v-model="date" showIcon/>
  </template>
  
  <script>
  import Calendar from 'primevue/calendar';
  
  export default {
    components: { Calendar },
    data() {
      return {
        date: null,
      };
    }
  }
  </script>