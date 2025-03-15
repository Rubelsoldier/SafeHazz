<template>
    <button 
      v-show="showButton"
      @click="scrollToTop" 
      class="fixed bottom-6 right-2 text-white p-1 rounded-full shadow-lg hover:bg-blue-700 transition"
    >
      ⬆️
    </button>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  
  const showButton = ref(false);
  
  // Detect Scroll
  const handleScroll = () => {
    showButton.value = window.scrollY > 300;
  };
  
  // Scroll to Top Function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  
  // Attach event listener
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });
  
  // Cleanup event listener
  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
  </script>
  