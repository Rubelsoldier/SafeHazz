<script setup>
// Import necessary components and back button functionality
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};

// List of Hajj-related Duas and Quranic Verses
const hajjDuas = [
  {
    title: "Talbiyah",
    arabic: "لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ",
    transliteration: "Labbayk Allahumma labbayk, labbayk laa shareeka laka labbayk. Inna al-hamda wan-ni'mata laka wal-mulk, laa shareeka lak.",
    translation: "Here I am, O Allah, here I am. Here I am, You have no partner, here I am. Verily all praise, grace, and dominion belong to You. You have no partner.",
    benefit: "This is the most famous declaration of the pilgrimage, showing devotion to Allah and affirming His Oneness."
  },
  {
    title: "Dua at the Station of Ibrahim",
    arabic: "وَاتَّخِذُوا مِنْ مَقَامِ إِبْرَاهِيمَ مُصَلًّى",
    transliteration: "Wattakhidhoo min maqaami Ibraaheema musallaa.",
    translation: "And take, [O believers], from the standing place of Abraham a place of prayer.",
    benefit: "Recited at the Station of Ibrahim, symbolizing a connection to the prophetic tradition."
  },
  {
    title: "Dua for Forgiveness at Arafah",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbanaa aatinaa fid-dunyaa hasanatan wa fil-aakhirati hasanatan waqinaa 'adhaaban naar.",
    translation: "Our Lord, give us good in this world and good in the Hereafter and save us from the punishment of the Fire.",
    benefit: "An essential dua asking for worldly good, hereafter success, and protection from hellfire."
  },
  {
    title: "Dua for Closeness to Allah",
    arabic: "اللَّهُمَّ اجْعَلْنِي أَقْرَبَ إِلَيْكَ",
    transliteration: "Allahumma aj'alni aqraba ilayka.",
    translation: "O Allah, make me closer to You.",
    benefit: "A simple but profound dua to seek proximity to Allah, emphasizing spiritual elevation during Hajj."
  },
  {
    title: "Dua at the Black Stone",
    arabic: "بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ",
    transliteration: "Bismillah wallahu akbar.",
    translation: "In the name of Allah, and Allah is the greatest.",
    benefit: "Recited when touching or pointing towards the Black Stone, acknowledging Allah's greatness."
  },
  {
    title: "Dua for Tawaf Completion",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ رِضَاكَ وَالْجَنَّةَ",
    transliteration: "Allahumma inni as'aluka ridaaka wal-jannah.",
    translation: "O Allah, I ask for Your pleasure and Paradise.",
    benefit: "Supplicated after completing Tawaf, seeking Allah’s satisfaction and paradise as the ultimate goal."
  },
];
</script>

<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <BackButton 
      @backClick="goBack" 
      class="mt-4"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 m-4 place-items-center">
      <div v-for="(dua, index) in hajjDuas" :key="index" class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow dark:bg-slate-800 dark:border-slate-700">
        
        <!-- Card Title -->
        <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-gray-200 text-center">{{ dua.title }}</h3>
        
        <!-- Arabic Text -->
        <p class="text-xl text-indigo-500 font-bold mb-2 text-center">{{ dua.arabic }}</p>
        
        <!-- Transliteration -->
        <p class="text-gray-700 dark:text-gray-300 italic mb-2 text-center">{{ dua.transliteration }}</p>
        
        <!-- Translation -->
        <p class="text-gray-900 dark:text-gray-100 mb-4 text-center">{{ dua.translation }}</p>
        
        <!-- Benefit Section -->
        <p class="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 p-3 rounded">{{ dua.benefit }}</p>
      </div>
    </div>
  </div>
</template>
