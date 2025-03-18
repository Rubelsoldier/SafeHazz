<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 justify-items-center">


      <!-- Physical  -->
      <RouterLink to="/programs/physical" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Physical preparation</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Pre Workout and suggestions</span>
      </RouterLink>

      <!-- Spiritual  -->
      <RouterLink to="/programs/spiritual" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Spiritual preparation</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Meditation, Quran recition, Knowing prophets
          lifestyles</span>
      </RouterLink>

      <!-- Ritual  -->
      <RouterLink to="/programs/ritual" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Ritual Guide</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Pre Workout and suggestions</span>
      </RouterLink>

      <!-- Cultural etiquette  -->
      <RouterLink to="/programs/etiquette" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Cultural Etiquette</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Cultural Sensitivity and Reminders</span>
      </RouterLink>

      <!-- Green Hajj  -->
      <RouterLink to="/programs/green" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Green Hajj</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Tracker for Eco-Conscious Pilgrims</span>
      </RouterLink>

      <!-- Behave outside  -->
      <RouterLink to="/programs/behavior" :class="[ 
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>

        <div class="flex flex-col items-center relative z-10">
          <p class="text-xl text-green-400 mb-3">Behavioral outside etiquette</p>
        </div>
        <span class="text-sm text-green-200 relative z-10">Behavioral outside etiquette during hajj period</span>
      </RouterLink>

      <RouterLink to="/programs/localized" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Localized Announcements</p>
        </div>
        <span class="text-sm text-green-200">Weather Hazard Alerts</span>
      </RouterLink>
      <RouterLink to="/programs/pace" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Pace Yourself</p>
        </div>
        <span class="text-sm text-green-200">Walking and Rest Suggestions Based on Weather and Distance</span>
      </RouterLink>
      <RouterLink to="/programs/volunteer" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Volunteer Match</p>
        </div>
        <span class="text-sm text-green-200">Assistance and Support</span>
      </RouterLink>

      <RouterLink to="/programs/calmzones" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Calm and Reflect Zones</p>
        </div>
        <span class="text-sm text-green-200">A map of quiet zones and calm spaces designated for meditation, rest, and
          prayer.</span>
      </RouterLink>

      <RouterLink to="/programs/community-support" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Pilgrim Community Support Groups</p>
        </div>
        <span class="text-sm text-green-200">Builds a supportive network where pilgrims can ask for advice and share
          tips</span>
      </RouterLink>
      <RouterLink to="/programs" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Pilgrim FAQ'S</p>
        </div>
        <span class="text-sm text-green-200">With Visual Aids and Interactive Chatbot in real-time</span>
      </RouterLink>
      <RouterLink to="/programs" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Personal Schedule and Journal</p>
        </div>
        <span class="text-sm text-green-200">Allows users to create a personalized schedule for each day</span>
      </RouterLink>

      <!-- <RouterLink
        to="/programs"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-full',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400 mb-3">Arabic Pronunciation Helper for Common Phrases</p>
        </div>
        <span class="text-sm text-green-200">Visual Aids and Interactive Chatbot</span>
      </RouterLink> -->

      <RouterLink to="/programs" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3 mb-3">Daily Spiritual Reflection Prompts</p>
        </div>
        <span class="text-sm text-green-200">Visual Aids and Interactive Chatbot</span>
      </RouterLink>
      <RouterLink to="/programs/virtual" :class="[
        'backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-30',
        'border border-gray-600 border-opacity-50',
        'shadow-lg shadow-green-900/20',
        'text-white rounded-lg hover:bg-opacity-40 hover:border-gray-500',
        'p-4',
        'w-full',
        'text-center',
        'transition duration-300',
        'relative overflow-hidden'
      ]">
        <!-- Add a subtle highlight to create depth -->
        <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400 mb-3">Virtual Reality</p>
        </div>
        <span class="text-sm text-green-200">Hajj Practice Tour </span>
      </RouterLink>      

    </div>
    <!-- Go to Top Button -->
    <GoToTop />
  </div>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from 'vue-router';
import GoToTop from "./GoToTop.vue";

const showButton = ref(false);
</script>

<style>
body {
  background-color: black;
}
</style>