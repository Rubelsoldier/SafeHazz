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
    <div class="container mx-auto xl:max-w-screen-xl px-4">
        <BackButton 
            @backClick="goBack" 
            class="mt-4"
        />
        <h1 class="text-center text-2xl mt-4">Physical Preparation </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <!-- Card 1 -->
            <div class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Walking and Stamina-Building</h3>
                    <!-- <p class="text-sm text-gray-600 mt-2">Starts with light walks and increases intensity over time,
                        preparing muscles for long days of walking.
                    </p> -->
                </div>                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/physical/animated.gif" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Strength and Endurance Exercises</h3>
                    <!-- <p class="text-sm text-gray-600 mt-2"> Short, guided routines focused on leg and core strength
                        (e.g., squats, lunges, and core exercises) with low-impact variations for different fitness
                        levels.
                    </p> -->
                </div>
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/physical/squat-core-lungs.gif" alt="gif image" class="w-full h-full object-cover rounded-lg" />                    
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Sun Protection and Hydration Education</h3>
                    <!-- <p class="text-sm text-gray-600 mt-2">Interactive guides on hydration goals, choosing breathable
                        clothing, and timing activities to avoid peak sun hours.
                    </p> -->
                </div>
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/physical/hydration-sun-protection.gif" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Nutrition Tips for the Weeks Before Hajj</h3>
                    <!-- <p class="text-sm text-gray-600 mt-2">Suggestions on foods, hydration strategies, and tips for energy maintenance.
                    </p> -->
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/physical/nutrition.gif" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

            <!-- 
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Breathing Exercises for Stress Reduction</h3>
                    <p class="text-sm text-gray-600 mt-2">Simple, guided breathing exercises for relaxation, which can
                        also be done during Hajj.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Daily Spiritual Reflections and Intentions</h3>
                    <p class="text-sm text-gray-600 mt-2">Daily prompts encouraging self-reflection on themes like
                        gratitude, humility, or forgiveness.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Progress Milestones</h3>
                    <p class="text-sm text-gray-600 mt-2">Provides a sense of accomplishment and helps users feel Hajj-ready
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Heat Acclimatization</h3>
                    <p class="text-sm text-gray-600 mt-2"> Includes daily hydration tips, cooling techniques, and a
                        gradual progression of time spent in warmer environments.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Goal-Setting and Journaling</h3>
                    <p class="text-sm text-gray-600 mt-2">A digital journal space to write intentions and reflections
                        leading up to Hajj.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Consistency Reminders</h3>
                    <p class="text-sm text-gray-600 mt-2">Users can set reminders at preferred times to keep routines on track.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Adjustable Workouts and Plans:</h3>
                    <p class="text-sm text-gray-600 mt-2">Allows customization based on each individual’s physical abilities and current activity level.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
                    <h3 class="text-lg font-semibold  text-gray-800">Packing and Clothing Recommendations</h3>
                    <p class="text-sm text-gray-600 mt-2">Helps pilgrims pack wisely, avoiding overpacking and ensuring essential items are included.
                    </p>
                </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img :src="currentImage" alt="gif image" class="w-full h-full object-cover rounded-lg" />

                    
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
        -->


            <!-- Repeat similar structure for other cards -->
        </div>
    </div>
</template>