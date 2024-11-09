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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Daily Etiquette Boost</h3>
                    <p class="text-sm text-gray-600 mt-2">Start each day with helpful reminders to stay respectful and mindful in every moment of Hajj.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Respectful Interactions Guide</h3>
                    <p class="text-sm text-gray-600 mt-2"> Learn the essentials of greeting others, respecting elders, and maintaining harmony with fellow pilgrims.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Embracing Diversity</h3>
                    <p class="text-sm text-gray-600 mt-2">Discover customs from around the world and tips for interacting with fellow pilgrims from diverse cultures.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Dress with Purpose</h3>
                    <p class="text-sm text-gray-600 mt-2">Step-by-step guidance on Hajj attire and how to wear it with reverence and ease.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Respecting Shared Spaces</h3>
                    <p class="text-sm text-gray-600 mt-2">Tips for keeping our sacred spaces clean, peaceful, and safe for everyone.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Navigating Crowds with Grace</h3>
                    <p class="text-sm text-gray-600 mt-2">Practical advice on staying patient, avoiding conflicts, and embracing a spirit of peace.
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
                    <h3 class="text-lg font-semibold  text-gray-800">On-the-Go Etiquette Alerts</h3>
                    <p class="text-sm text-gray-600 mt-2">Location-based tips and reminders to help you stay respectful at every site.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Instant Etiquette Help</h3>
                    <p class="text-sm text-gray-600 mt-2">Quick-access chat for real-time etiquette advice whenever you need it.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Begin with Kindness</h3>
                    <p class="text-sm text-gray-600 mt-2">Start each day with a personal pledge to be patient, respectful, and mindful of others.
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