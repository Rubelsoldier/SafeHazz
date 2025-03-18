<template>
    <div class="container mx-auto xl:max-w-screen-xl">
        <BackButton 
        @backClick="goBack" 
        class="mt-4 text-gray-200"
        />
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 justify-items-center">

            <!-- Eyes  -->
            <RouterLink to="/accessibility/eyes" :class="[
                'backdrop-filter backdrop-blur-md bg-amber-800 bg-opacity-30',
                'border border-amber-800 border-opacity-50',
                'shadow-lg shadow-amber-900/20',
                'rounded-lg hover:bg-opacity-40 hover:border-amber-800',
                'p-4',
                'w-full',
                'text-center',
                'transition duration-300',
                'relative overflow-hidden'
            ]">
                <!-- Add a subtle highlight to create depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="flex flex-col items-center relative z-10">
                    <p class="text-xl text-slate-200 mb-3">Eyes</p>
                    <BeakerIcon  class="text-slate-100"></BeakerIcon>
                </div>
                <span class="text-sm text-slate-300 relative z-10">See like your own eyes</span>
            </RouterLink>

            <!-- Vr  -->
            <RouterLink to="/accessibility/vr" :class="[
                'backdrop-filter backdrop-blur-md bg-amber-800 bg-opacity-30',
                'border border-amber-800 border-opacity-50',
                'shadow-lg shadow-amber-900/20',
                'rounded-lg hover:bg-opacity-40 hover:border-amber-800',
                'p-4',
                'w-full',
                'text-center',
                'transition duration-300',
                'relative overflow-hidden'
            ]">
                <!-- Add a subtle highlight to create depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="flex flex-col items-center relative z-10">
                    <p class="text-xl text-slate-200 mb-3">Virtual Reality</p>
                    <BeakerIcon  class="text-slate-100"></BeakerIcon>
                </div>
                <span class="text-sm text-slate-300 relative z-10">See that place history</span>
            </RouterLink>

            <!-- Lost/found  -->
            <RouterLink to="/accessibility/lost" :class="[
                'backdrop-filter backdrop-blur-md bg-amber-800 bg-opacity-30',
                'border border-amber-800 border-opacity-50',
                'shadow-lg shadow-amber-900/20',
                'rounded-lg hover:bg-opacity-40 hover:border-amber-800',
                'p-4',
                'w-full',
                'text-center',
                'transition duration-300',
                'relative overflow-hidden'
            ]">
                <!-- Add a subtle highlight to create depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="flex flex-col items-center relative z-10">
                    <p class="text-xl text-slate-200 mb-3">Lost Found</p>
                    <BeakerIcon  class="text-slate-100"></BeakerIcon>
                </div>
                <span class="text-sm text-slate-300 relative z-10">Be found what you lost</span>
            </RouterLink>

            <!-- Global Conversation  -->
            <RouterLink to="/accessibility/translator" :class="[
                'backdrop-filter backdrop-blur-md bg-amber-800 bg-opacity-30',
                'border border-amber-800 border-opacity-50',
                'shadow-lg shadow-amber-900/20',
                'rounded-lg hover:bg-opacity-40 hover:border-amber-800',
                'p-4',
                'w-full',
                'text-center',
                'transition duration-300',
                'relative overflow-hidden'
            ]">
                <!-- Add a subtle highlight to create depth -->
                <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

                <div class="flex flex-col items-center relative z-10">
                    <p class="text-xl text-slate-200 mb-3">Global Translator</p>
                    <BeakerIcon  class="text-slate-100"></BeakerIcon>
                </div>
                <span class="text-sm text-slate-300 relative z-10">Break language barrier</span>
            </RouterLink>

        </div>
    </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
  router.back();
};
</script>