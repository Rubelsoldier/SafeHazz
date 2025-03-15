<script setup>
import { RouterLink, useRoute } from 'vue-router';
import logo from '@/assets/logo.png';

const isActiveLink = (routePath) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="bg-green-700 border-b border-green-500 py-6 md:py-0">
    <div class="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
      <div class="flex h-20 items-center justify-between">
        <div class="flex flex-1 items-center justify-center md:justify-start">
          <!-- Logo -->
          <RouterLink class="flex flex-shrink-0 items-center mr-4" to="/">
            <img class="h-20 w-auto" :src="logo" alt="logo" />
          </RouterLink>
          <div class="md:ml-auto flex space-x-2 flex-wrap">
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
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
