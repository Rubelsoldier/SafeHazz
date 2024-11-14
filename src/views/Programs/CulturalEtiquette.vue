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
    <h1 class="text-center text-2xl mt-4">Cultural Etiquette</h1>
    <div class="container mx-auto p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/1.jpg" alt="Ihram illustration" class="w-full h-40 cover">
            <div class="p-6">
                <!-- Icon for visual enhancement -->
                <div class="flex items-center mb-4">
                    <h3 class="text-2xl font-semibold text-indigo-800">1. Respectful Dress Code</h3>
                </div>
                <p class="text-sm text-gray-600 mb-4">Understand the appropriate dress code in public areas during Hajj, beyond Ihram.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Avoid Bright and Flashy Colors</strong>: Wear modest, simple clothing to blend with the environment.</li>
                    <li><strong class="text-indigo-600">Ensure Cleanliness</strong>: Maintain personal hygiene and keep clothing clean as part of Islamic etiquette.</li>                    
                </ul>
            </div>
        </div>
        
        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/2.jpg" alt="Tawaf illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">2. Personal Space Awareness</h3>
                <p class="text-sm text-gray-600 mb-4">Respect personal space, especially in crowded areas, while staying considerate of others’ comfort.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Avoid Physical Contact</strong>: Avoid unnecessary contact as people from different cultures have different norms regarding personal space.</li>
                    <li><strong class="text-indigo-600">Give Way When Possible</strong>: In congested areas, allow others to pass and avoid pushing.</li>                    
                </ul>
            </div>
        </div>
        
        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/3.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">3. Politeness in Verbal Communication</h3>
                <p class="text-sm text-gray-600 mb-4">Use polite language and avoid raising your voice, particularly in holy areas.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Greet Others with Salaam (Peace)</strong>: Begin with “Assalamu Alaikum” and speak softly.</li>
                    <li><strong class="text-indigo-600">Avoid Arguments</strong>: In cases of misunderstandings, keep calm, smile, and step back if needed to maintain the peace.
                    </li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/4.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">4. Mindful Photography</h3>
                <p class="text-sm text-gray-600 mb-4">Avoid taking photos of people without permission, especially in sacred areas.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Check Local Regulations</strong>: Certain areas may restrict photography.</li>
                    <li><strong class="text-indigo-600">Seek Permission When Required</strong>: Politely ask people if they’re comfortable before photographing them in sacred locations.
                    </li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/5.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">5. Environmental Consciousness</h3>
                <p class="text-sm text-gray-600 mb-4">Respect the cleanliness and sanctity of holy places by disposing of waste properly.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Use Provided Bins</strong>: Dispose of any trash in designated bins only.</li>
                    <li><strong class="text-indigo-600">Avoid Littering or Spitting</strong>: Maintain cleanliness as an act of respect and care for the environment.</li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/6.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">6. Language and Gestures</h3>
                <p class="text-sm text-gray-600 mb-4">Avoid gestures or actions that might be misinterpreted by pilgrims from different cultures.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Stick to Simple Words</strong>: Use basic Arabic greetings or polite English terms to connect respectfully.
                    </li>
                    <li><strong class="text-indigo-600">Be Mindful of Gestures</strong>: Avoid hand gestures or body language that may be offensive to others.</li>                    
                </ul>
            </div>
        </div>

        <div
            class="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 shadow-lg rounded-lg overflow-hidden">
            <img src="@/assets/img/etiquette/7.jpg" alt="Sa'i illustration" class="w-full h-40 cover">
            <div class="p-6">
                <h3 class="text-2xl font-semibold text-indigo-800">7. Adherence to Prayer Time Etiquette</h3>
                <p class="text-sm text-gray-600 mb-4">Respect prayer timings by stopping activities and joining the collective prayers whenever possible.</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong class="text-indigo-600">Prepare to Pause</strong>: Pause conversations or other activities during the call to prayer.</li>
                    <li><strong class="text-indigo-600">Join the Congregation</strong>: If near a mosque, participate in congregational prayers as a show of unity.</li>                    
                </ul>
            </div>
        </div>        

    </div>
</template>