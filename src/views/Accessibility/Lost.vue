<template>
    <div class="flex items-center justify-center min-h-screen py-10 px-4"> <!-- Added px-4 -->
        <div class="text-center w-full"> <!-- Added w-full -->
            <BackButton @backClick="goBack" class="mb-4 text-gray-200" />
            <div class="max-w-4xl mx-auto p-4 w-full"> <!-- Changed p-6 to p-4, added w-full -->

                <!-- Tabs Section - Fixed -->
                <div class="relative w-full">
                    <div class="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 pb-2">
                        <div class="flex border-b w-max min-w-full"> <!-- Changed min-w-max to min-w-full -->
                            <button v-for="tab in tabs" :key="tab" @click="activeTab = tab" :class="[
                                'py-2 px-4 font-semibold whitespace-nowrap',
                                'text-sm min-w-[50vw] md:min-w-0', // Mobile: 50% viewport width
                                activeTab === tab
                                    ? 'border-b-2 border-blue-500 text-gray-200'
                                    : 'text-gray-400'
                            ]">
                                {{ tab }}
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Table Section - Fixed -->
                <div class="bg-gray-800 shadow-lg rounded-lg mt-4 p-2 overflow-x-auto">
                    <table class="w-full border-collapse min-w-[600px]"> <!-- Minimum table width -->
                        <thead>
                            <tr class="bg-gray-600 sticky top-0"> <!-- Sticky header -->
                                <th class="p-3 text-gray-200 text-left min-w-[120px]">What</th>
                                <th class="p-3 text-gray-200 text-left min-w-[100px]">Image</th>
                                <th class="p-3 text-gray-200 text-left min-w-[200px]">Details</th>
                                <th class="p-3 text-gray-200 text-left min-w-[150px]">Place</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in filteredItems" :key="item.id" class="border-t">
                                <td class="p-3 text-gray-200 text-left">{{ item.name }}</td>
                                <td class="p-3 text-gray-200 text-left">
                                    <img :src="item.image" alt="Item Image" class="h-16 w-16 object-cover rounded">
                                </td>
                                <td class="p-3 w-64 line-clamp-3 text-gray-200 text-left">{{ item.details }}</td>
                                <td class="p-3 text-gray-200 text-left">{{ item.place }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Mobile optimization */
@media (max-width: 640px) {

    /* Force full-width scrolling */
    .max-w-4xl {
        max-width: 100% !important;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }

    /* Better scroll visibility */
    .scrollbar-thin::-webkit-scrollbar {
        height: 6px;
        background: #2d3748;
    }

    .scrollbar-thin::-webkit-scrollbar-thumb {
        background: #4a5568;
        border-radius: 4px;
    }

    /* Sticky table header */
    thead tr {
        position: sticky;
        top: 0;
        z-index: 10;
    }
}
</style>

<script setup>
import { useRouter } from 'vue-router';
import BackButton from '@/components/BackButton.vue';

const router = useRouter();
const goBack = () => {
    router.back();
};

import { ref, computed } from 'vue';

const tabs = ref(["Lost", "Found"]);
const activeTab = ref("Lost");

const items = ref([
    { id: 1, name: "Wallet", image: new URL("/src/assets/img/accessibility/mg.png", import.meta.url).href, details: "Black leather wallet", place: "Gate 60", type: "Lost" },
    { id: 2, name: "Phone", image: new URL("/src/assets/img/accessibility/iph.png", import.meta.url).href, details: "iPhone 12, white color", place: "Mina", type: "Found" },
    { id: 3, name: "Keys", image: new URL("/src/assets/img/accessibility/keys.png", import.meta.url).href, details: "Car keys with a red keychain ", place: "Arafah", type: "Lost" },

]);

const filteredItems = computed(() => items.value.filter(item => item.type === activeTab.value));
</script>