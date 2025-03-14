<script setup>
import { RouterLink, useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
// back button 
const router = useRouter();
const goBack = () => {
    router.back();
};

</script>

<template>
    <div class="container mx-auto xl:max-w-screen-xl px-4">
        <BackButton @backClick="goBack" class="mt-4" />
        <h1 class="text-center text-2xl mt-4">Spiritual Preparation </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
            <!-- Card 1 -->
            <RouterLink to="/spiritual/increase-prayer" :class="[
                'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
                'border border-gray-600 border-opacity-50',
                'shadow-lg shadow-green-900/20',
                'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
                'p-4',
                'transition duration-300',
                'relative overflow-hidden',
                'nav-link'
            ]">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Increase in Prayer and Supplication (Dua)
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/increase-prayer.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>



            <RouterLink to="/spiritual/repentence" :class="[
                'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
                'border border-gray-600 border-opacity-50',
                'shadow-lg shadow-green-900/20',
                'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
                'p-4',
                'transition duration-300',
                'relative overflow-hidden',
                'nav-link'
            ]">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Repentance and Seeking Forgiveness
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/forgiveness.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>



            <RouterLink to="/spiritual/charity" :class="[
                'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
                'border border-gray-600 border-opacity-50',
                'shadow-lg shadow-green-900/20',
                'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
                'p-4',
                'transition duration-300',
                'relative overflow-hidden',
                'nav-link'
            ]">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Practice Gratitude and Charity
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/charity.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>




            <RouterLink to="/spiritual/supplication" :class="[
                'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
                'border border-gray-600 border-opacity-50',
                'shadow-lg shadow-green-900/20',
                'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
                'p-4',
                'transition duration-300',
                'relative overflow-hidden',
                'nav-link'
            ]">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Memorize and Practice Hajj-Related Duas and Quranic Verses
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/recite quran.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </RouterLink>




            <div class="backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30 
         border border-gray-600 border-opacity-50 
         shadow-lg shadow-green-900/20 
         text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500 
         p-4 transition duration-300 relative overflow-hidden">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Engage in Fasting and Extra Worship
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/extra-prayers.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>




            <div class="backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30 
         border border-gray-600 border-opacity-50 
         shadow-lg shadow-green-900/20 
         text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500 
         p-4 transition duration-300 relative overflow-hidden">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Reflect on the Purpose of Hajj and Set Intentions
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/purposeofhazz.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>

            <div class="backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30 
         border border-gray-600 border-opacity-50 
         shadow-lg shadow-green-900/20 
         text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500 
         p-4 transition duration-300 relative overflow-hidden">
                <!-- Subtle highlight for depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="relative z-10">
                    <h3 class="text-lg font-semibold text-gray-200">
                        Study the Life of Prophet Muhammad (PBUH)
                    </h3>
                </div>

                <div class="relative h-40 w-full mt-4 z-10">
                    <img src="@/assets/img/spiritual/prophet.jpg" alt="gif image"
                        class="w-full h-full object-cover rounded-lg" />
                </div>
            </div>
            
            

            <!-- Repeat similar structure for other cards -->
        </div>
    </div>
</template>

<style scoped>
.nav-link h3 {
    text-decoration: underline;
    font-weight: bold;
}

.nav-link:hover h3 {
    color: #73d573;
}
</style>