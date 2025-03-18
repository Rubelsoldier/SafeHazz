<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png';

const isOpen = ref(false);
const route = useRoute();

const isActiveLink = (routePath) => {
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500 py-6 md:py-0 relative">
    <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-20 w-auto" :src="logo" alt="logo" />
          </RouterLink>
          <!-- Desktop Menu -->
          <div class="hidden md:flex md:ml-auto space-x-2 flex-wrap">
            <RouterLink to="/" :class="[
              isActiveLink('/')
                ? 'bg-green-900'
                : 'hover:bg-gray-900 hover:text-white',
              'text-white',
              'px-3',
              'py-2',
              'rounded-md',
            ]">
              Home
            </RouterLink>
            <RouterLink to="/about" :class="[
    isActiveLink('/about')
      ? 'bg-green-900'
      : 'hover:bg-gray-900 hover:text-white',
    'text-white',
    'px-3',
    'py-2',
    'rounded-md',
  ]">
    About
  </RouterLink>
  <RouterLink to="/programs" :class="[
    isActiveLink('/programs')
      ? 'bg-green-900'
      : 'hover:bg-gray-900 hover:text-white',
    'text-white',
    'px-3',
    'py-2',
    'rounded-md',
  ]">
    Programs
  </RouterLink>
  <RouterLink to="/community" :class="[
    isActiveLink('/community')
      ? 'bg-green-900'
      : 'hover:bg-gray-900 hover:text-white',
    'text-white',
    'px-3',
    'py-2',
    'rounded-md',
  ]">
    Community
  </RouterLink>
            <!-- Repeat for other links -->
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-green-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            <div class="space-y-1.5">
              <span
                class="block h-0.5 w-6 bg-white transition-transform duration-300"
                :class="{ 'translate-y-2 rotate-45': isOpen }"
              ></span>
              <span
                class="block h-0.5 w-6 bg-white transition-opacity duration-300"
                :class="{ 'opacity-0': isOpen }"
              ></span>
              <span
                class="block h-0.5 w-6 bg-white transition-transform duration-300"
                :class="{ '-translate-y-2 -rotate-45': isOpen }"
              ></span>
            </div>
          </button>
        </div>
      </div>
      <!-- Mobile Menu Dropdown -->
      <div v-if="isOpen" class="md:hidden absolute top-full left-0 right-0 bg-green-700 z-10">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <RouterLink
            to="/"
            @click="isOpen = false"
            :class="[
              isActiveLink('/')
                ? 'bg-green-900'
                : 'hover:bg-gray-900',
              'block px-3 py-2 rounded-md text-white',
            ]"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            @click="isOpen = false"
            :class="[
              isActiveLink('/about')
                ? 'bg-green-900'
                : 'hover:bg-gray-900',
              'block px-3 py-2 rounded-md text-white',
            ]"
          >
            About
          </RouterLink>
          <RouterLink
            to="/programs"
            @click="isOpen = false"
            :class="[
              isActiveLink('/programs')
                ? 'bg-green-900'
                : 'hover:bg-gray-900',
              'block px-3 py-2 rounded-md text-white',
            ]"
          >
            Programs
          </RouterLink>
          <RouterLink
            to="/community"
            @click="isOpen = false"
            :class="[
              isActiveLink('/community')
                ? 'bg-green-900'
                : 'hover:bg-gray-900',
              'block px-3 py-2 rounded-md text-white',
            ]"
          >
            Community
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>