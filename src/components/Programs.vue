<script setup>
  import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 m-4 justify-items-center">

      <RouterLink
        to="/programs/physical"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400">Physical preparation</p>
        </div>
        <span class="text-sm text-green-200">Pre Workout and suggestions</span>
      </RouterLink>

      <RouterLink
        to="/programs/spiritual"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400">Spirutual preparation</p>
        </div>
        <span class="text-sm text-green-200">Meditation, Quran recition, Knowing prophets lifestyles</span>
      </RouterLink>
      
      <RouterLink
        to="/programs/ritual"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
          <p class="text-xl text-green-400">Ritual Guide</p>
        </div>
        <span class="text-sm text-green-200">Pre Workout and suggestions</span>
      </RouterLink>

      <RouterLink
        to="/programs/etiquette"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Cultural Etiquette</p>
        </div>
        <span class="text-sm text-green-200">Cultural Sensitivity and Reminders</span>
      </RouterLink>

      <RouterLink
        to="/programs/green"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Green Hajj</p>
        </div>
        <span class="text-sm text-green-200">Tracker for Eco-Conscious Pilgrims</span>
      </RouterLink>

      <RouterLink
        to="/programs/behavior"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Behavioral outside etiquette </p>
        </div>
        <span class="text-sm text-green-200">Behavioral outside etiquette during hajj period</span>
      </RouterLink>

      <RouterLink
        to="/programs/localized"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Localized Announcements</p>
        </div>
        <span class="text-sm text-green-200">Weather Hazard Alerts</span>
      </RouterLink>
      <RouterLink
        to="/programs/pace"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Pace Yourself</p>
        </div>
        <span class="text-sm text-green-200">Walking and Rest Suggestions Based on Weather and Distance</span>
      </RouterLink>
      <RouterLink
        to="/programs/volunteer"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Volunteer Match</p>
        </div>
        <span class="text-sm text-green-200">Assistance and Support</span>
      </RouterLink>
      
      <RouterLink
        to="/programs/calmzones"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Calm and Reflect Zones</p>
        </div>
        <span class="text-sm text-green-200">A map of quiet zones and calm spaces designated for meditation, rest, and prayer.</span>
      </RouterLink>
      
      <RouterLink
        to="/programs/community-support"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Pilgrim Community Support Groups</p>
        </div>
        <span class="text-sm text-green-200">Builds a supportive network where pilgrims can ask for advice and share tips</span>
      </RouterLink>
      <RouterLink
        to="/programs"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Pilgrim FAQ'S</p>
        </div>
        <span class="text-sm text-green-200">With Visual Aids and Interactive Chatbot in real-time</span>
      </RouterLink>
      <RouterLink
        to="/programs"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Personal Schedule and Journal</p>
        </div>
        <span class="text-sm text-green-200">Allows users to create a personalized schedule for each day</span>
      </RouterLink>

      <!-- <RouterLink
        to="/programs"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Arabic Pronunciation Helper for Common Phrases</p>
        </div>
        <span class="text-sm text-green-200">Visual Aids and Interactive Chatbot</span>
      </RouterLink> -->
      
      <RouterLink
        to="/programs"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
        <div class="flex flex-col items-center">
            <p class="text-xl text-green-400">Daily Spiritual Reflection Prompts</p>
        </div>
        <span class="text-sm text-green-200">Visual Aids and Interactive Chatbot</span>
      </RouterLink>
      <RouterLink
        to="/programs/virtual"
        :class="[
          'bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900',
          'p-4',
          'w-40',
          'text-center'
        ]"
      >
      <div class="flex flex-col items-center">
          <p class="text-xl text-green-400">Virtual Reality</p>
      </div>
        <span class="text-sm text-green-200">Hajj Practice Tour </span>
      </RouterLink>

    </div>
  </div>
</template>