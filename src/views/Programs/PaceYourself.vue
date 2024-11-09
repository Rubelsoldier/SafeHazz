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
        <h1 class="text-center text-2xl mt-4">Pace Yourself</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">            
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Smart Walking Recommendations</h3>
                    <p class="text-sm text-gray-600 mt-2">Get personalized walking suggestions based on weather, distance, and crowd density to ensure a safe and comfortable journey.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Rest Spot Notifications</h3>
                    <p class="text-sm text-gray-600 mt-2">Discover nearby shaded and indoor rest areas along your route to pause and recharge.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Distance and Pace Tracker</h3>
                    <p class="text-sm text-gray-600 mt-2">Track your progress and receive pacing tips to prevent overexertion and stay refreshed.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Heat and Humidity Warnings</h3>
                    <p class="text-sm text-gray-600 mt-2">Stay alert with warnings for high heat and humidity, and find nearby shaded spots to rest and rehydrate.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Customizable Rest and Walking Alerts</h3>
                    <p class="text-sm text-gray-600 mt-2">Set personalized reminders for rest breaks, hydration, and pace adjustments based on your needs.
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
                    <h3 class="text-lg font-semibold  text-gray-800">End-of-Day Physical Status Check</h3>
                    <p class="text-sm text-gray-600 mt-2">Reflect on your physical condition at the end of each day with tips for recovery and preparation for the next day’s journey.
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