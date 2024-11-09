<script setup>
import { ref, computed } from 'vue';

// Sample images array
const images = [
    'https://via.placeholder.com/150/1',
    'https://via.placeholder.com/150/2',
    'https://via.placeholder.com/150/3'
]

// Reactive state for the current slide index
const currentIndex = ref(0)

// Computed property to get the current image
const currentImage = computed(() => images[currentIndex.value])

// Method to go to the next slide
const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % images.length
}

// Method to go to the previous slide
const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
}

</script>

<template>
    <div class="container mx-auto xl:max-w-screen-xl px-4">
        <h1 class="text-center text-2xl mt-4">Calm Zones</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">            
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Locate Nearby Calm Zones</h3>
                    <p class="text-sm text-gray-600 mt-2">Find designated quiet areas for peaceful reflection, prayer, and rest during your journey.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Real-Time Crowd Density Alerts</h3>
                    <p class="text-sm text-gray-600 mt-2">Check crowd levels in each calm zone and choose the least crowded area for solitude and meditation.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Suggested Reflection Practices</h3>
                    <p class="text-sm text-gray-600 mt-2">Access calming prayers and suggested verses to enhance your moments of quiet reflection.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Calm Zone Etiquette and Guidelines</h3>
                    <p class="text-sm text-gray-600 mt-2">Follow simple etiquette reminders to help maintain a peaceful, respectful environment for all pilgrims.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Quiet Reminders for Reflection and Decompression</h3>
                    <p class="text-sm text-gray-600 mt-2">Receive gentle reminders to pause, reflect, and recharge in nearby calm zones after long walks or crowded activities.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">“My Reflection Moments” Journal</h3>
                    <p class="text-sm text-gray-600 mt-2">Keep a private journal of your reflections, capturing thoughts and spiritual insights from your journey.
                    </p>
                </div>
                <!-- Carousel -->
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="Carousel Image" class="w-full h-full object-cover rounded-lg" />

                    <!-- Navigation Buttons -->
                    <button @click="prevSlide"
                        class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ‹
                    </button>
                    <button @click="nextSlide"
                        class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-1 rounded-full">
                        ›
                    </button>
                </div>
            </div>            
        </div>
    </div>
</template>