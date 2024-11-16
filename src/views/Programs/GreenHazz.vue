<script setup>
import Image1 from "@/assets/img/green/1.jpg";
import Image2 from "@/assets/img/green/2.png";
import Image3 from "@/assets/img/green/3.png";
import Image4 from "@/assets/img/green/4.png";
import Image5 from "@/assets/img/green/5.png";
import Image6 from "@/assets/img/green/6.png";
import Image7 from "@/assets/img/green/7.png";


import { useRouter } from 'vue-router';
  import BackButton from '@/components/BackButton.vue';
    // back button 
    const router = useRouter();
    const goBack = () => {
    router.back();
};  
const steps = [
  {         
    img: Image1,
    title: "Reusable Water Bottle",
    description: "Carry a reusable water bottle and use refill stations to reduce plastic waste.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-blue-500'><path stroke-linecap='round' stroke-linejoin='round' d='M12 4.5v15m0 0-3-3m3 3 3-3m0-12.75v15M3 7.5h18m-4.5 0h-9M3 16.5h18'/></svg>",
    goal: "Reduce plastic waste",
    tip: "Refill at water stations instead of buying bottled water.",
    action: "Bring a durable, reusable water bottle."
  },
  {
    img: Image2,
    title: "Eco-Friendly Packing",
    description: "Pack essentials in biodegradable containers, avoiding single-use plastics.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-green-500'><path stroke-linecap='round' stroke-linejoin='round' d='M3.75 8.25v8.25m16.5-8.25v8.25m-8.25 0L12 20.25 3.75 18m12.75 0L12 20.25l8.25-2.25m0-12H6a1.5 1.5 0 0 0-1.5 1.5v9c0 .83.67 1.5 1.5 1.5h12a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5z'/></svg>",
    goal: "Reduce single-use plastic waste",
    tip: "Use cloth bags and biodegradable containers for packing.",
    action: "Pack essentials in reusable containers."
  },
  {
    img: Image3,    
    title: "Waste Disposal",
    description: "Dispose of waste responsibly in designated bins to keep sacred areas clean.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-gray-600'><path stroke-linecap='round' stroke-linejoin='round' d='M3 9.75h18m-5.25 0v10.5a1.5 1.5 0 0 1-1.5 1.5H8.25a1.5 1.5 0 0 1-1.5-1.5V9.75M14.25 4.5h-4.5a1.5 1.5 0 0 0-1.5 1.5v1.5h7.5V6a1.5 1.5 0 0 0-1.5-1.5z'/></svg>",
    goal: "Keep the area clean and respectful",
    tip: "Separate and dispose of recyclables and non-recyclables properly.",
    action: "Dispose of waste in designated bins."
  },
  {
    img: Image4,    
    title: "Shared Transport",
    description: "Use group transport options to reduce carbon emissions and traffic.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-yellow-500'><path stroke-linecap='round' stroke-linejoin='round' d='M3 6.75V18a2.25 2.25 0 0 0 2.25 2.25h13.5A2.25 2.25 0 0 0 21 18V6.75M4.5 9h15m-12.75 3h10.5m-7.5 3h4.5'/></svg>",
    goal: "Lower carbon emissions",
    tip: "Use buses or group rides to decrease traffic and pollution.",
    action: "Book group transport options."
  },
  {
    img: Image5,    
    title: "Sustainable Materials",
    description: "Use prayer mats and garments made from organic, sustainable materials.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-indigo-500'><path stroke-linecap='round' stroke-linejoin='round' d='M7.5 3v18m9-18v18M5.25 6h13.5a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H5.25A1.5 1.5 0 0 1 3.75 16.5v-9A1.5 1.5 0 0 1 5.25 6z'/></svg>",
    goal: "Use eco-friendly materials",
    tip: "Opt for organic cotton or recycled materials.",
    action: "Bring sustainably sourced items."
  },
  {
    img: Image6,    
    title: "Plant-Based Diet",
    description: "Opt for local, plant-based meals to reduce waste and promote health.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-red-500'><path stroke-linecap='round' stroke-linejoin='round' d='M10.5 18.75h3m-8.25-5.25a6.75 6.75 0 1 1 13.5 0c0 3.475-3.866 5.3-6.75 5.25m6.75-4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z'/></svg>",
    goal: "Reduce meat consumption",
    tip: "Choose plant-based foods to lower your environmental impact.",
    action: "Opt for local, plant-based meals."
  },
  {
    img: Image7,    
    title: "Encourage Others to Go Green",
    description: "Share your eco-friendly practices with fellow pilgrims to raise awareness.",
    icon: "<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='1.5' stroke='currentColor' class='w-8 h-8 text-red-500'><path stroke-linecap='round' stroke-linejoin='round' d='M10.5 18.75h3m-8.25-5.25a6.75 6.75 0 1 1 13.5 0c0 3.475-3.866 5.3-6.75 5.25m6.75-4.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 0 0-3 0z'/></svg>",
    goal: "Encouraging Others to Go Green",
    tip: "Be friendly with others and share your thoughts on benefits of using greed products",
    action: "Share your eco-friendly practices with fellow pilgrims to raise awareness."
  }
];
</script>

<template>
    <BackButton 
        @backClick="goBack" 
        class="mt-4 ml-3"
    />
  <div class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="(step, index) in steps" :key="index" class="bg-white border border-gray-200 rounded-lg shadow-md p-6 dark:bg-slate-800 dark:border-slate-700">
        <!-- Image Section -->
        <img :src="step.img" alt="Step Image" class="w-full h-40 object-cover mb-2">
        
        <!-- Title -->
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-200 mb-2">{{ step.title }}</h3>
        
        <!-- Description -->
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ step.description }}</p>

        <!-- Goal -->
        <div class="mb-2">
          <p class="text-sm font-semibold text-green-600 dark:text-green-400">Goal:</p>
          <p class="text-gray-600 dark:text-gray-400">{{ step.goal }}</p>
        </div>

        <!-- Tip -->
        <div class="mb-2">
          <p class="text-sm font-semibold text-blue-600 dark:text-blue-400">Tip:</p>
          <p class="text-gray-600 dark:text-gray-400">{{ step.tip }}</p>
        </div>

        <!-- Action -->
        <div>
          <p class="text-sm font-semibold text-purple-600 dark:text-purple-400">Action:</p>
          <p class="text-gray-600 dark:text-gray-400">{{ step.action }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

