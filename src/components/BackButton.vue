<template>
    <button
      @click="onBackClick"
      class="flex items-center px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L4.414 9H18a1 1 0 110 2H4.414l3.293 3.293a1 1 0 010 1.414z" clip-rule="evenodd" />
      </svg>
      Back
    </button>
  </template>
  
  <script setup>
  import { defineEmits } from 'vue';
  
  // Define an emit to trigger the back action in the parent component
  const emit = defineEmits(['backClick']);
  
  // Emit 'backClick' when the button is clicked
  const onBackClick = () => {
    emit('backClick');
  };
  </script>
  