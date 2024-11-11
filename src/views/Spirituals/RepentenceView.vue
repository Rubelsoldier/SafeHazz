<script setup>
// back button 
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};

const repentanceDuas = [
  {
    title: "General Dua for Seeking Forgiveness",
    arabic: "أَسْتَغْفِرُ اللّٰهَ",
    transliteration: "Astaghfirullah",
    translation: "I seek forgiveness from Allah.",
    benefit: "A simple yet powerful way to ask Allah for forgiveness, this dua can be recited often throughout the day."
  },
  {
    title: "Dua for Repentance",
    arabic: "رَبِّ اغْفِرْ لِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ",
    transliteration: "Rabbi ighfir li wa tub 'alayya innaka Antat-Tawwabu Ar-Raheem.",
    translation: "My Lord, forgive me and accept my repentance. Truly, You are the Acceptor of Repentance, the Merciful.",
    benefit: "This dua expresses humility and trust in Allah’s mercy, asking specifically for acceptance of repentance."
  },
  {
    title: "Dua from Prophet Yunus (AS)",
    arabic: "لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَكَ إِنِّي كُنْتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa Anta, subhanaka inni kuntu minaz-zalimeen.",
    translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    benefit: "A profound dua acknowledging one’s shortcomings and seeking Allah’s mercy, inspired by Prophet Yunus (AS)."
  },
  {
    title: "Dua for Protection from Sin",
    arabic: "اللّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْخُبْثِ وَالْخَبَائِثِ",
    transliteration: "Allahumma inni a'udhu bika min al-khubthi wal-khaba'ith.",
    translation: "O Allah, I seek refuge in You from all evil and wickedness.",
    benefit: "A supplication asking for protection from sinful influences and harmful intentions."
  },
  {
    title: "Comprehensive Dua for Forgiveness",
    arabic: "اللَّهُمَّ اغْفِرْ لِي مَا قَدَّمْتُ وَمَا أَخَّرْتُ وَمَا أَعْلَنْتُ وَمَا أَسْرَرْتُ",
    transliteration: "Allahumma ighfir li ma qaddamtu wa ma akhartu wa ma a'lantu wa ma asrartu.",
    translation: "O Allah, forgive me for my past and future sins, what I have done openly and what I have done in secret.",
    benefit: "A comprehensive plea asking for forgiveness of all types of sins, past and future, public and private."
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
      <div v-for="(dua, index) in repentanceDuas" :key="index" class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700">
        <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-200">{{ dua.title }}</h3>
        
        <p class="text-xl text-indigo-500 font-bold mb-2">{{ dua.arabic }}</p>
        
        <p class="text-gray-700 dark:text-gray-300 italic mb-2">{{ dua.transliteration }}</p>
        
        <p class="text-gray-900 dark:text-gray-100 mb-4">{{ dua.translation }}</p>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 p-3 rounded">{{ dua.benefit }}</p>
      </div>
    </div>
  </div>
</template>
