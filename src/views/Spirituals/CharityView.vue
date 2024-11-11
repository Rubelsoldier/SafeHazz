<script setup>
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};

const gratitudeCharityPoints = [
  {
    title: "Acknowledge Daily Blessings",
    subtitle: "Reflect and Appreciate",
    icon: 'gratitude',
    description: "Take a moment each day to list things you're grateful for, whether big or small. Reflecting on your blessings increases contentment and positivity."
  },
  {
    title: "Give to Those in Need",
    subtitle: "Spread Kindness",
    icon: 'heart',
    description: "Donate to the less fortunate, even in small amounts. This act of kindness brings spiritual reward and fosters compassion in your heart.Share what you have!"
  },
  {
    title: "Perform Acts of Kindness",
    subtitle: "Be a Helping Hand",
    icon: 'hands',
    description: "Small, thoughtful gestures—like helping someone in need or volunteering—are forms of charity that make a positive impact on those around you."
  },
  {
    title: "Be Grateful for Health",
    subtitle: "Value Well-Being",
    icon: 'health',
    description: "Health is a precious blessing. Show gratitude by taking care of your body through a balanced lifestyle, and thank Allah for well-being each day."
  },
  {
    title: "Give Thanks Through Prayer",
    subtitle: "Express Through Faith",
    icon: 'prayer',
    description: "Include gratitude in your prayers, thanking Allah for His guidance, mercy, and sustenance. This strengthens your connection with Him."
  }
];
</script>

<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <BackButton 
      @backClick="goBack" 
      class="mt-4"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 m-4 place-items-center">
      <div v-for="(point, index) in gratitudeCharityPoints" :key="index" class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800 dark:border-slate-700">
        
        <!-- SVG Icon -->
        <div class="w-12 h-12 text-indigo-500 mx-auto mb-3" v-html="getIcon(point.icon)"></div>
        
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200 text-center">{{ point.title }}</h3>
        <p class="text-sm text-gray-500 dark:text-gray-400 text-center mb-3">{{ point.subtitle }}</p>
        
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-center">{{ point.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getIcon(icon) {
      switch (icon) {
        case 'gratitude':
          return `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M6 18v-2a4 4 0 011.5-3m9 5v-2a4 4 0 00-1.5-3m3-4.5a4.5 4.5 0 10-7.5-3.5A4.5 4.5 0 105 9.5a4.5 4.5 0 001.5 3.5h11z" />
                  </svg>`;
        case 'heart':
          return `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6.5a5.5 5.5 0 0111 0c0 4.636-8.5 8.5-8.5 8.5S4 11.136 4 6.5z" />
                  </svg>`;
        case 'hands':
          return `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9.5a6 6 0 100 12 6 6 0 000-12z" />
                  </svg>`;
        case 'health':
          return `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 13H5m14-8a6 6 0 00-12 0v8a6 6 0 0012 0V5z" />
                  </svg>`;
        case 'prayer':
          return `<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                  </svg>`;
      }
    }
  }
}
</script>
