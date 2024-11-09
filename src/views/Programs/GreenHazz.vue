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
        <h1 class="text-center text-2xl mt-4">Green Hazz</h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">            
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800"> Daily Green Goals</h3>
                    <p class="text-sm text-gray-600 mt-2">Start each day with small actions: carry a reusable bottle, avoid single-use plastics, and use designated bins for all waste. Let’s make Hajj cleaner, step by step.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Eco-Friendly Packing Guide</h3>
                    <p class="text-sm text-gray-600 mt-2">Pack smartly with eco-friendly items—biodegradable toiletries, reusable utensils, and solar chargers help reduce waste. Avoid excessive packaging and choose products that respect the environment.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Mindful Waste Tips</h3>
                    <p class="text-sm text-gray-600 mt-2"> Do not leave litter behind. Use waste and recycling bins only, and carry a small bag for your trash in crowded areas. A clean Hajj keeps sacred spaces beautiful for all.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Save Every Drop</h3>
                    <p class="text-sm text-gray-600 mt-2">Conserve water during wudu by using the right amount without excess. Avoid running water needlessly in public spaces. Saving water here means more resources for all.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Eco Score & Badges</h3>
                    <p class="text-sm text-gray-600 mt-2">Track every eco-friendly action—whether it’s recycling, reusing, or conserving. Each choice counts toward a greener Hajj, and badges celebrate your progress!
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
                    <h3 class="text-lg font-semibold  text-gray-800">Offset Your Carbon Footprint</h3>
                    <p class="text-sm text-gray-600 mt-2">Offset your travel emissions with options to plant trees or support renewable projects. Reducing our impact together makes a meaningful difference for our planet.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Community Eco-Impact</h3>
                    <p class="text-sm text-gray-600 mt-2">Join fellow pilgrims in reaching shared eco-milestones: fewer plastic bottles, reduced litter, more recycling. Together, let’s show the world a more sustainable Hajj.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Green Teachings & Reflections</h3>
                    <p class="text-sm text-gray-600 mt-2">Learn daily eco-tips inspired by Islamic teachings. Be a steward of the Earth by respecting resources and minimizing waste—it’s an essential part of our faith.
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
                    <h3 class="text-lg font-semibold  text-gray-800">Green Transport Choices</h3>
                    <p class="text-sm text-gray-600 mt-2">Choose shared or eco-friendly transport, and walk where possible to minimize emissions. Every sustainable travel choice helps preserve the environment for future pilgrims.
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