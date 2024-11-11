<script setup>
// back button 
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};

const duas = [
  {
    title: "Dua for Acceptance of Good Deeds",
    arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
    transliteration: "Rabbana taqabbal minna innaka Antas-Samee'ul-Aleem.",
    translation: "Our Lord, accept [this] from us. Indeed, You are the Hearing, the Knowing.",
    benefit: "This dua seeks Allah’s acceptance of all efforts during Hajj, asking for reward and blessing."
  },
  {
    title: "Dua for Seeking Forgiveness (Istighfar)",
    arabic: "أَسْتَغْفِرُ اللهَ رَبِّي مِنْ كُلِّ ذَنْبٍ وَأَتُوبُ إِلَيْهِ",
    transliteration: "Astaghfirullaha Rabbi min kulli dhambin wa atubu ilayh.",
    translation: "I seek forgiveness from Allah, my Lord, from every sin I committed, and I repent to Him.",
    benefit: "This dua purifies the soul and seeks forgiveness, encouraging sincerity and humility."
  },
  {
    title: "Dua for Protection and Guidance",
    arabic: "اللَّهُمَّ اهْدِنِي، وَيَسِّرْ لِي، وَثَبِّتْ قَلْبِي",
    transliteration: "Allahumma ahdini, wa yassir li, wa thabbit qalbi.",
    translation: "O Allah, guide me, make my task easy for me, and make my heart steadfast.",
    benefit: "This dua asks for Allah’s guidance and strength to navigate the physical and emotional demands of Hajj."
  },
  {
    title: "Dua for Safety and Health",
    arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَافِيَةَ",
    transliteration: "Allahumma inni as'aluka al-afiyah.",
    translation: "O Allah, I ask You for safety and well-being.",
    benefit: "This dua is for seeking Allah’s protection for health and safety during Hajj."
  },
  {
    title: "Dua for Goodness in This Life and the Hereafter",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina athab an-nar.",
    translation: "Our Lord, grant us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.",
    benefit: "This dua asks for well-being in both this life and the afterlife, focusing on holistic blessings and protection."
  }
];
</script>

<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <BackButton 
      @backClick="goBack" 
      class="mt-4"
    />
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 m-4 justify-items-center place-items-center">
      <!-- <BackButton @backClick="goBack" /> -->
      <div v-for="(dua, index) in duas" :key="index" class="w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700">
        <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-gray-200">{{ dua.title }}</h3>
        
        <p class="text-xl text-indigo-500 font-bold mb-2">{{ dua.arabic }}</p>
        
        <p class="text-gray-700 dark:text-gray-300 italic mb-2">{{ dua.transliteration }}</p>
        
        <p class="text-gray-900 dark:text-gray-100 mb-4">{{ dua.translation }}</p>
        
        <p class="text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-slate-700 p-3 rounded">{{ dua.benefit }}</p>
      </div>
    </div>
  </div>
</template>
