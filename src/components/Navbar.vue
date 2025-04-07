<script setup>
    import {
        ref,
        onMounted
    } from 'vue';
    import {
        RouterLink,
        useRoute
    } from 'vue-router';
    import logo from '@/assets/logo.png';
    import emitter from '@/eventBus'

    const isOpen = ref(false);
    const showSelect = ref(false)

    const route = useRoute();

    const isActiveLink = (routePath) => {
        return route.path === routePath;
    };

    // Try to get the selected country from localStorage
    const selectedCountry = ref(localStorage.getItem('selectedCountry') || '')

    // Update localStorage whenever a new country is selected
    const sendCountry = () => {
        localStorage.setItem('selectedCountry', selectedCountry.value)
        emitter.emit('country-selected', selectedCountry.value)
    }

    // If there's a country saved in localStorage, send it to ComponentB
    onMounted(() => {
        if (selectedCountry.value) {
            emitter.emit('country-selected', selectedCountry.value)
        }
    })
</script>

<template>
    <nav class="bg-green-700 border-b border-green-500 py-6 md:py-0 relative">
        <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
            <div class="flex h-20 items-center justify-between">
                <div class="flex flex-1 items-center justify-center md:justify-start">
                    <!-- Logo -->
                    <RouterLink class="flex flex-shrink-0 items-left mr-4" to="/">
                        <img class="h-20 w-auto" :src="logo" alt="logo" />                     
                    </RouterLink>
                    

                        <!-- global -->
                        <div class="relative flex items-center space-x-2">
                            <!-- Desktop Menu -->
                            <!-- Global Icon -->
                            <span @click="showSelect = !showSelect" class="cursor-pointer text-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="size-6" style="color: white;">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>

                            </span>

                            <!-- Country list dropdown -->
                            <div v-if="showSelect"
                                class="absolute mt-2 w-36 bg-white shadow-md rounded-md z-10 max-h-60 overflow-y-auto"
                                style="margin-left: 40px;">
                                <select v-model="selectedCountry" @change="sendCountry"
                                    class="w-full border border-gray-300 rounded-md bg-gray-800 text-white py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                    <option disabled value="">Country</option>
                                    <option value="India">India</option>
                                    <option value="Egypt">Egypt</option>
                                    <option value="Japan">Japan</option>
                                    <option value="Nigeria">Nigeria</option>
                                </select>
                            </div>
                        </div>
                        <!-- global ends -->    
                    <div class="hidden md:flex md:ml-auto space-x-2 flex-wrap">

                        <RouterLink to="/"
                            :class="[
                                isActiveLink('/') ?
                                'bg-green-900' :
                                'hover:bg-gray-900 hover:text-white',
                                'text-white',
                                'px-3',
                                'py-2',
                                'rounded-md',
                            ]">
                            Home
                        </RouterLink>
                        <RouterLink to="/about"
                            :class="[
                                isActiveLink('/about') ?
                                'bg-green-900' :
                                'hover:bg-gray-900 hover:text-white',
                                'text-white',
                                'px-3',
                                'py-2',
                                'rounded-md',
                            ]">
                            About
                        </RouterLink>
                        <RouterLink to="/programs"
                            :class="[
                                isActiveLink('/programs') ?
                                'bg-green-900' :
                                'hover:bg-gray-900 hover:text-white',
                                'text-white',
                                'px-3',
                                'py-2',
                                'rounded-md',
                            ]">
                            Programs
                        </RouterLink>
                        <RouterLink to="/community"
                            :class="[
                                isActiveLink('/community') ?
                                'bg-green-900' :
                                'hover:bg-gray-900 hover:text-white',
                                'text-white',
                                'px-3',
                                'py-2',
                                'rounded-md',
                            ]">
                            Community
                        </RouterLink>
                    </div>
                    <!-- Repeat for other links -->
                </div>
            </div>
            <!-- Mobile Menu Button -->
            <div class="md:hidden flex justify-center">
                <button @click="isOpen = !isOpen"
                    class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-900 focus:outline-none"
                    aria-label="Toggle menu">
                    <div class="space-y-1.5">
                        <span class="block h-0.5 w-6 bg-white transition-transform duration-300"
                            :class="{ 'translate-y-2 rotate-45': isOpen }"></span>
                        <span class="block h-0.5 w-6 bg-white transition-opacity duration-300"
                            :class="{ 'opacity-0': isOpen }"></span>
                        <span class="block h-0.5 w-6 bg-white transition-transform duration-300"
                            :class="{ '-translate-y-2 -rotate-45': isOpen }"></span>
                    </div>
                </button>
            </div>
        </div>
        <!-- Mobile Menu Dropdown -->
        <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-green-700 z-10">
            <div class="px-2 pt-2 pb-3 space-y-1">

                <RouterLink to="/" @click="isOpen = false"
                    :class="[
                        isActiveLink('/') ?
                        'bg-green-900' :
                        'hover:bg-gray-900',
                        'block px-3 py-2 rounded-md text-white',
                    ]">
                    Home
                </RouterLink>
                <RouterLink to="/about" @click="isOpen = false"
                    :class="[
                        isActiveLink('/about') ?
                        'bg-green-900' :
                        'hover:bg-gray-900',
                        'block px-3 py-2 rounded-md text-white',
                    ]">
                    About
                </RouterLink>
                <RouterLink to="/programs" @click="isOpen = false"
                    :class="[
                        isActiveLink('/programs') ?
                        'bg-green-900' :
                        'hover:bg-gray-900',
                        'block px-3 py-2 rounded-md text-white',
                    ]">
                    Programs
                </RouterLink>
                <RouterLink to="/community" @click="isOpen = false"
                    :class="[
                        isActiveLink('/community') ?
                        'bg-green-900' :
                        'hover:bg-gray-900',
                        'block px-3 py-2 rounded-md text-white',
                    ]">
                    Community
                </RouterLink>
            </div>
        </div>
    </nav>
</template>
