<script setup>
  import { RouterLink,useRouter } from 'vue-router';
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
        <h1 class="text-center text-2xl mt-4">Spiritual Preparation </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <!-- Card 1 -->
            <RouterLink
                to="/spiritual/increase-prayer"
                class="bg-white rounded-lg shadow-lg p-4">                
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Increase in Prayer and Supplication (Dua)</h3>
                                    </div>                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/increase-prayer.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>
            <RouterLink 
                to="/spiritual/repentence"
                class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Repentance and Seeking Forgiveness</h3>
                </div>
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/forgiveness.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>
            <RouterLink 
                to="/spiritual/charity"
                class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Practice Gratitude and Charity</h3>
                                    </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/charity.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>
            <RouterLink 
                to="/spiritual/supplication"
                class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Memorize and Practice Hajj-Related Duas and Quranic Verses</h3>
                                    </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/recite quran.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Engage in Fasting and Extra Worship</h3>
                                    </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/extra-prayers.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Reflect on the Purpose of Hajj and Set Intentions</h3>
                                    </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/purposeofhazz.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            <div class="bg-white rounded-lg shadow-lg p-4">
                <div>
                    <h3 class="text-lg font-semibold  text-gray-800">Study the Life of Prophet Muhammad (PBUH)</h3>
                                    </div>
                
                <div class="relative h-40 w-full mt-4">
                    <img src="@/assets/img/spiritual/prophet.jpg" alt="gif image" class="w-full h-full object-cover rounded-lg" />
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