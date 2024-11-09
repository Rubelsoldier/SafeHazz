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
        <h1 class="text-center text-2xl mt-4">Volunteer Match</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">            
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Pilgrim Request for Assistance</h3>
                    <p class="text-sm text-gray-600 mt-2">Request help for specific needs like navigation, medical support, or carrying belongings and get matched with nearby volunteers.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Real-Time Volunteer Matching and Notifications</h3>
                    <p class="text-sm text-gray-600 mt-2">Instantly connect with nearby volunteers, receive their location, and get timely support for your journey.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Assistance Categories and Filters</h3>
                    <p class="text-sm text-gray-600 mt-2"> Choose the type of support you need—whether medical, navigation, or general help—and find volunteers suited to your needs.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Language and Cultural Support</h3>
                    <p class="text-sm text-gray-600 mt-2">Get assistance in your language or from volunteers with cultural knowledge for improved comfort and communication.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Urgent Assistance Alert</h3>
                    <p class="text-sm text-gray-600 mt-2">Send an emergency alert for immediate support from qualified volunteers, prioritizing those with medical skills.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Feedback and Rating System</h3>
                    <p class="text-sm text-gray-600 mt-2">Rate your volunteer experience to improve service quality and support accountability within the app.
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