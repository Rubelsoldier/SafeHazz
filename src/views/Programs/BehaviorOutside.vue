<script setup>
  import { useRouter } from 'vue-router';
  import BackButton from '@/components/BackButton.vue';
  import GoToTop from "@/components/GoToTop.vue";
  import { ref, onMounted, onUnmounted } from 'vue'
  import emitter from '@/eventBus'


    // back button 
    const router = useRouter();
    const goBack = () => {
    router.back();
    };

    // handling country selection 
    const receivedCountry = ref(localStorage.getItem('selectedCountry') || 'No country selected yet')

    const handleCountrySelected = (country) => {
        receivedCountry.value = country
        localStorage.setItem('selectedCountry', country) // Store the new country selection in localStorage
    }

    onMounted(() => {
      emitter.on('country-selected', handleCountrySelected)
    })

    onUnmounted(() => {
     emitter.off('country-selected', handleCountrySelected)
    })

</script>

<template>
    <BackButton 
        @backClick="goBack" 
        class="mt-4"
    />
    <h1 class="text-center text-2xl mt-4">Behavior Outside Etiquette</h1>
    <div class="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/1.png" alt="Ihram illustration" class="w-full  cover">
            <div class="p-6">
                <!-- Icon for visual enhancement -->
                <div class="flex items-center mb-4">
                    <h3 class="text-2xl font-semibold text-indigo-800">1. Respectful Water Usage</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">Embrace sustainability by using water sparingly while using water.                    
                </p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Do not waste water while performing wudu or ghusl.</strong>: Use only what is necessary and remember water is a blessing.</li>
                    <li><strong class="text-green-300">Share water facilities with patience</strong>: Avoid crowding or cutting in lines.</li>                    
                </ul>
            </div>
        </div>
        
        <div
            v-if="receivedCountry=='India'"
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/2.png" alt="Tawaf illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">2. Maintaining Cleanliness</h3>
                <p class="text-sm text-gray-600 mb-4">Maintaining Cleanliness and keepng the spirit of holy land and prayers.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Avoid littering in public spaces</strong>: Dispose of all waste in designated bins.</li>
                    <li><strong class="text-green-300">Do not spit in open areas</strong>: Use tissues or a handkerchief to maintain hygiene.</li>   
                    <li><strong class="text-green-300">Carry a small pouch for personal waste disposal</strong>: Helps you manage trash until you find a bin.</li>                    
                </ul>
            </div>
        </div>
        
        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/3.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">3. Hygiene and Health Etiquette</h3>
                <p class="text-sm text-gray-600 mb-4">Maintaining Hygiene and Health Etiquette everywhere</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Cough or sneeze into your elbow or a tissue</strong>: Prevent the spread of germs among fellow pilgrims.</li>
                    <li><strong class="text-green-300">Wash your hands regularly</strong>: IEspecially before eating or after using shared facilities. 
                    </li><li><strong class="text-green-300">Avoid close contact if you are unwell</strong>: Respect the health of others.
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/4.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">4. Politeness in Interactions</h3>
                <p class="text-sm text-gray-600 mb-4">Being polite in interactions with other in prayers and outside, prayer halls,shopping time or any types of interactions.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Speak softly and avoid shouting</strong>: Maintain a calm and respectful tone.</li>
                    <li><strong class="text-green-300">Be patient in crowds and queues</strong>: Everyone is there for the same purpose.  
                    </li>
                    <li><strong class="text-green-300">Offer your spot to elderly or disabled pilgrims when needed</strong>: Give space to elders or weak showing them respect and love.  
                    </li>
                </ul>
            </div>
        </div>

        <div
            v-if="receivedCountry == 'Nigeria'"
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/5.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">5. Reverence in Sacred Places</h3>
                <p class="text-sm text-gray-600 mb-4">Reverence in sacred places during Hajj fosters spiritual connection and devotion.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Avoid running or pushing during Tawaf or Sa’i</strong>: Move at a steady pace to ensure safety.  </li>
                    <li><strong class="text-green-300">Do not climb or lean against religious monuments</strong>: Show respect to holy sites.</li>                    
                </ul>
            </div>
        </div>

        <div
            v-if="receivedCountry=='Japan'"
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/6.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">6. Dress Modestly and Appropriately</h3>
                <p class="text-sm text-gray-600 mb-4">Dress modestly and appropriately during Hajj to honor sacred traditions.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Ensure your Ihram or other clothing complies with Islamic guidelines</strong>: Avoid wearing tight or flashy clothing.
                    </li>
                    <li><strong class="text-green-300">Keep your clothing clean and tidy throughout the pilgrimage</strong>: Wear clean dresses as cleanliness is half of religion.</li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/7.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">7. Environmental Care</h3>
                <p class="text-sm text-gray-600 mb-4">Care and behave well so that no one waste or damage environment.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Minimize the use of plastic items</strong>: Carry a reusable bottle, utensils, and bags. </li>
                    <li><strong class="text-green-300">Do not pluck plants or disturb animals</strong>: Preserve the natural environment of sacred areas.</li>                    
                </ul>
            </div>
        </div>
        
        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/8.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">8. Etiquette During Worship</h3>
                <p class="text-sm text-gray-600 mb-4">Maintaining etiquette during worship is very much important as there are thousands of pilgrims in a place.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Focus on your own supplications and prayers</strong>: Avoid loud recitations that disturb others. </li>
                    <li><strong class="text-green-300">Do not engage in unnecessary conversations in prayer areas</strong>: Keep the space serene for everyone.</li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/9.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">9. Responsibility in Group Settings</h3>
                <p class="text-sm text-gray-600 mb-4">Respecting groups shehedules, times and other choices.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Stick to the group’s schedule and avoid delays</strong>: Respect the guide and fellow pilgrims’ time.</li>
                    <li><strong class="text-green-300">Help fellow pilgrims who may need assistance</strong>: Offer support to those struggling with the physical demands.</li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/behavior/10.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">10. Gratitude and Positivity</h3>
                <p class="text-sm text-gray-600 mb-4">Be positive , spread positive and thankful.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-300">Be thankful to service providers and volunteers</strong>: A simple smile or ‘thank you’ goes a long way.</li>
                    <li><strong class="text-green-300">Spread positivity and avoid complaints</strong>: Focus on the spiritual rewards rather than inconveniences.</li>                    
                </ul>
            </div>
        </div>
        <!-- Go to Top Button -->
      <GoToTop />
    </div>
</template>


<style scoped>
    h3,p,ul{
        color: rgb(232, 232, 232);
    }
</style>