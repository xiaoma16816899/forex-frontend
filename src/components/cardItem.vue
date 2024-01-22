<template>

    <button style="background: #1f2125;" type="button" class="block mt-5 dark:bg-gray-800 dark:border-gray-800 shadow-lg w-full cursor-pointer rounded-lg p-3 text-left transition duration-500 hover:bg-gray-800 hover:text-gray-700 focus:bg-gray-700 focus:text-neutral-500 focus:ring-0 dark:hover:bg-gray-700 dark:hover:text-neutral-200 dark:focus:bg-gray-700 dark:focus:text-neutral-200">
    <div class="flex justify-between">
        <span class="text-white">{{ currency }}</span>
        <span class="text-white">{{ price }}</span>
       </div>
       <div class="flex justify-between">
        <span class="text-white">%{{ percentage }}</span>
        <span class="text-white">Percentage</span>
       </div>
  </button>
</template>

<script setup>
import {  defineProps} from "vue";
  defineProps({
  currency: { type: String, default:'' },
  price: { type: Number, default:0 },
  percentage: { type: Number, default:0 },
})
</script>