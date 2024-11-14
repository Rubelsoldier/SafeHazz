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
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/1-hajj-steps.jpg" alt="Ihram illustration" class="w-full h-40 cover">
            <div class="p-6">
                <!-- Icon for visual enhancement -->
                <div class="flex items-center mb-4">
                    <h3 class="text-2xl font-semibold text-indigo-800">1. Entering the State of Ihram</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">Purify your intention and begin the journey of devotion.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Ghusl</strong>: Perform a complete purification bath.</li>
                    <li><strong class="text-indigo-600">Wear Ihram Garments</strong>: Men wear two white cloths; women
                        wear modest clothing.</li>
                    <li><strong class="text-indigo-600">Recite Talbiyah</strong>: "Labbayk, Allahumma, Labbayk...".</li>
                </ul>
            </div>
        </div>

        <!-- Tawaf Card -->
        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/2-hajj-steps.jpg" alt="Tawaf illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">2. Tawaf (Circumambulation of the Kaaba)</h3>
                <p class="text-sm text-gray-600 mb-4">Circle the Kaaba to signify unity and devotion.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Start at the Black Stone</strong>: Touch or point toward it if
                        possible.</li>
                    <li><strong class="text-indigo-600">Complete Seven Circuits</strong>: Walk around the Kaaba seven
                        times.</li>
                    <li><strong class="text-indigo-600">Recite Supplications</strong>: Reflect and make dua throughout.
                    </li>
                </ul>
            </div>
        </div>

        <!-- Sa’i Card -->
        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/3-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">3. Sa’i (Walking between Safa and Marwah)</h3>
                <p class="text-sm text-gray-600 mb-4">Retrace Hajar’s steps between the two hills.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Begin at Safa</strong>: Face the Kaaba and make dua.</li>
                    <li><strong class="text-indigo-600">Walk to Marwah</strong>: Recite supplications along the way.
                    </li>
                    <li><strong class="text-indigo-600">Complete Seven Trips</strong>: This includes back and forth
                        seven times.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/4-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">4. Standing at Arafat (Wuquf)</h3>
                <p class="text-sm text-gray-600 mb-4">The pinnacle of Hajj, standing in prayer and reflection.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Reach Arafat by Noon</strong>: Spend the afternoon in prayer and
                        dua.</li>
                    <li><strong class="text-indigo-600">Make Dua</strong>: Ask for forgiveness, guidance, and blessings.
                    </li>
                    <li><strong class="text-indigo-600">Stay Until Sunset</strong>: Leaving before sunset invalidates
                        the Hajj.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/5-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">5. Muzdalifah – Collecting Pebbles</h3>
                <p class="text-sm text-gray-600 mb-4">Spend the night under the open sky and gather pebbles for the
                    Jamarat.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Pray Maghrib and Isha Combined</strong>: At Muzdalifah, combine
                        these prayers.</li>
                    <li><strong class="text-indigo-600">Rest Overnight</strong>: Sleep under the stars as a symbol of
                        equality.</li>
                    <li><strong class="text-indigo-600">Collect 49-70 Pebbles</strong>: These will be used for stoning
                        the pillars (Jamarat).</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/6-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">6. Rami al-Jamarat (Stoning the Pillars)</h3>
                <p class="text-sm text-gray-600 mb-4">Symbolic rejection of evil by throwing pebbles.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Throw 7 Pebbles</strong>: On the first day, throw seven pebbles at the largest pillar.
                    </li>
                    <li><strong class="text-indigo-600">Recite “Bismillah, Allahu Akbar”</strong>: Each time you throw a
                        pebble.</li>
                    <li><strong class="text-indigo-600">Repeat on Following Days</strong>: Each day, stone all three
                        pillars (7 pebbles each).</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/7-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">7. Sacrifice (Qurbani)</h3>
                <p class="text-sm text-gray-600 mb-4">Commemorating the sacrifice of Prophet Ibrahim (AS).</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Arrange for Sacrifice</strong>: This can be done personally or
                        via a Hajj service.</li>
                    <li><strong class="text-indigo-600">Meat Distribution</strong>: The meat is distributed to the needy
                        as charity.</li>
                    <li><strong class="text-indigo-600">Significance</strong>: This act symbolizes submission to Allah’s
                        will.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/8-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">8. Tawaf al-Ifadah (Main Tawaf)</h3>
                <p class="text-sm text-gray-600 mb-4">Symbolizes renewal and the completion of Hajj.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Return to the Kaaba</strong>: Perform a final Tawaf, similar to
                        the first.</li>
                    <li><strong class="text-indigo-600">Pray Behind Maqam Ibrahim</strong>: Recite two units of prayer
                        if possible.</li>
                    <li><strong class="text-indigo-600">Continue with Sa’i</strong>: If it wasn’t completed earlier.
                    </li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/4-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">9. Shaving or Trimming Hair (Tahalul)</h3>
                <p class="text-sm text-gray-600 mb-4">Represents purification and the beginning of a new chapter.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Men Shave or Trim Hair</strong>: Women cut a small portion of
                        hair.</li>
                    <li><strong class="text-indigo-600">Completion of Hajj</strong>: After this, pilgrims exit the state
                        of Ihram.</li>
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/ritual/2-hajj-steps.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">10. Farewell Tawaf (Tawaf al-Wada)</h3>
                <p class="text-sm text-gray-600 mb-4">A final farewell to the Holy Kaaba.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Complete Another Tawaf</strong>: This is a final act of Hajj
                        before departing Mecca.</li>
                    <li><strong class="text-indigo-600">Say Goodbye</strong>: Reflect and make dua for an accepted Hajj.
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>