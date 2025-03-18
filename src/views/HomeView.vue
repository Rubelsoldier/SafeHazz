<script setup>
  import Programs from '@/components/Programs.vue';
</script>

<template>  
  <!-- <Programs /> -->
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 justify-items-center">
      <!-- Programs  -->
      <RouterLink to="/programs/" :class="[
            'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
            'border border-gray-600 border-opacity-50',
            'shadow-lg shadow-green-900/20',
            'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
            'p-4',
            'w-40',
            'text-center',
            'transition duration-300',
            'relative overflow-hidden'
          ]">
            <!-- Add a subtle highlight to create depth -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div class="flex flex-col items-center relative z-10">
              <p class="text-xl text-green-400 mb-3">Programs</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0 1 20.25 6v12A2.25 2.25 0 0 1 18 20.25H6A2.25 2.25 0 0 1 3.75 18V6A2.25 2.25 0 0 1 6 3.75h1.5m9 0h-9" />
</svg>

            </div>
            <!-- <span class="text-sm text-green-200 relative z-10">Meditation, Quran recition, Knowing prophets
              lifestyles</span> -->
      </RouterLink>
      <!-- Programs  -->
      <RouterLink to="/accessibility/" :class="[
            'backdrop-filter backdrop-blur-md bg-orange-300 bg-opacity-30',
            'border border-gray-600 border-opacity-50',
            'shadow-lg shadow-green-900/20',
            'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
            'p-4',
            'w-40',
            'text-center',
            'transition duration-300',
            'relative overflow-hidden'
          ]">
            <!-- Add a subtle highlight to create depth -->
            <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

            <div class="flex flex-col items-center relative z-10">
              <p class="text-xl text-slate-100 mb-3">Accessibility</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

            </div>
      </RouterLink>
    </div>
  </div>
</template>
