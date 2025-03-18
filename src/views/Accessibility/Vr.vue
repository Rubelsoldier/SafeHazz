<template>
    <div class="flex items-center justify-center min-h-screen py-10">
        <div class="text-center">
            <BackButton 
                @backClick="goBack" 
                class="mb-4 text-gray-200"
            />
            <img 
                src="/src/assets/img/accessibility/memories.gif" 
                alt="Eyes GIF" 
                class="max-w-full h-auto"
            />
        </div>
    </div>    
</template>



<script setup>
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>