<script setup>
  import { useRouter } from 'vue-router';
  import BackButton from '@/components/BackButton.vue';
    // back button 
    const router = useRouter();
    const goBack = () => {
    router.back();
    };
</script>

<template>
    <BackButton 
        @backClick="goBack" 
        class="mt-4"
    />
    <h1 class="text-center text-2xl mt-4">Ritual Guide for Hajj</h1>
    <div class="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/1.png" alt="Ihram illustration" class="w-full  cover">
            <div class="p-6">
                <!-- Icon for visual enhancement -->
                <div class="flex items-center mb-4">
                    <h3 class="text-2xl font-semibold text-indigo-800">1. Entering the State of Ihram</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">Purify your intention and begin the journey of devotion.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Ghusl</strong>: Perform a complete purification bath.</li>
                    <li><strong class="text-green-400">Wear Ihram Garments</strong>: Men wear two white cloths; women
                        wear modest clothing.</li>
                    <li><strong class="text-green-400">Recite Talbiyah</strong>: "Labbayk, Allahumma, Labbayk...".</li>
                </ul>
            </div>
        </div>

        <!-- Tawaf Card -->
        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/2.png" alt="Tawaf illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">2. Tawaf (Circumambulation of the Kaaba)</h3>
                <p class="text-sm text-gray-600 mb-4">Circle the Kaaba to signify unity and devotion.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Start at the Black Stone</strong>: Touch or point toward it if
                        possible.</li>
                    <li><strong class="text-green-400">Complete Seven Circuits</strong>: Walk around the Kaaba seven
                        times.</li>
                    <li><strong class="text-green-400">Recite Supplications</strong>: Reflect and make dua throughout.
                    </li>
                </ul>
            </div>
        </div>

        <!-- Sa’i Card -->
        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/3.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">3. Sa’i (Walking between Safa and Marwah)</h3>
                <p class="text-sm text-gray-600 mb-4">Retrace Hajar’s steps between the two hills.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Begin at Safa</strong>: Face the Kaaba and make dua.</li>
                    <li><strong class="text-green-400">Walk to Marwah</strong>: Recite supplications along the way.
                    </li>
                    <li><strong class="text-green-400">Complete Seven Trips</strong>: This includes back and forth
                        seven times.</li>
                </ul>
            </div>
        </div>

        <!-- Mina overnight          -->
        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/4.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">4. Zulhijjah (Day of Tarwiyah):</h3>                
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Staying overnight</strong>: Many pilgrims move to Mina, where they will stay overnight.</li>                    
                </ul>
            </div>
        </div>

        <!-- Arafah  -->
        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/5.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">5. Zulhijjah (Day of Arafah):</h3>
                <p class="text-sm text-gray-600 mb-4">The pinnacle of Hajj, standing in prayer and reflection.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Reach Arafat by Noon</strong>: Spend the afternoon in prayer and
                        dua.</li>
                    <li><strong class="text-green-400">Make Dua</strong>: Ask for forgiveness, guidance, and blessings.
                    </li>
                    <li><strong class="text-green-400">Stay Until Sunset</strong>: Leaving before sunset invalidates
                        the Hajj.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/6.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">6. Muzdalifah – Collecting Pebbles</h3>
                <p class="text-sm text-gray-600 mb-4">Spend the night under the open sky and gather pebbles for the
                    Jamarat.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Pray Maghrib and Isha Combined</strong>: At Muzdalifah, combine
                        these prayers.</li>
                    <li><strong class="text-green-400">Rest Overnight</strong>: Sleep under the stars as a symbol of
                        equality.</li>
                    <li><strong class="text-green-400">Collect 49-70 Pebbles</strong>: These will be used for stoning
                        the pillars (Jamarat).</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/7.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">7. Rami al-Jamarat (Stoning the Pillars)</h3>
                <p class="text-sm text-gray-600 mb-4">Symbolic rejection of evil by throwing pebbles.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Throw 7 Pebbles</strong>: On the first day, throw seven pebbles at the largest pillar.
                    </li>
                    <li><strong class="text-green-400">Recite “Bismillah, Allahu Akbar”</strong>: Each time you throw a
                        pebble.</li>
                    <li><strong class="text-green-400">Repeat on Following Days</strong>: Each day, stone all three
                        pillars (7 pebbles each).</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/8.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">8. Sacrifice (Qurbani)</h3>
                <p class="text-sm text-gray-600 mb-4">Commemorating the sacrifice of Prophet Ibrahim (AS).</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Arrange for Sacrifice</strong>: This can be done personally or
                        via a Hajj service.</li>
                    <li><strong class="text-green-400">Meat Distribution</strong>: The meat is distributed to the needy
                        as charity.</li>
                    <li><strong class="text-green-400">Significance</strong>: This act symbolizes submission to Allah’s
                        will.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/9.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">9. Tawaf al-Ifadah (Main Tawaf)</h3>
                <p class="text-sm text-gray-600 mb-4">Symbolizes renewal and the completion of Hajj.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Return to the Kaaba</strong>: Perform a final Tawaf, similar to
                        the first.</li>
                    <li><strong class="text-green-400">Pray Behind Maqam Ibrahim</strong>: Recite two units of prayer
                        if possible.</li>
                    <li><strong class="text-green-400">Continue with Sa’i</strong>: If it wasn’t completed earlier.
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/10.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">10. Shaving or Trimming Hair (Tahalul)</h3>
                <p class="text-sm text-gray-600 mb-4">Represents purification and the beginning of a new chapter.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Men Shave or Trim Hair</strong>: Women cut a small portion of
                        hair.</li>
                    <li><strong class="text-green-400">Completion of Hajj</strong>: After this, pilgrims exit the state
                        of Ihram.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gray-800 from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/11.png" alt="Sa'i illustration" class="w-full  cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">11. Farewell Tawaf (Tawaf al-Wada)</h3>
                <p class="text-sm text-gray-600 mb-4">A final farewell to the Holy Kaaba.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-green-400">Complete Another Tawaf</strong>: This is a final act of Hajj
                        before departing Mecca.</li>
                    <li><strong class="text-green-400">Say Goodbye</strong>: Reflect and make dua for an accepted Hajj.
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<style scoped>
    h3,p,ul{
        color: rgb(232, 232, 232);
    }
</style>