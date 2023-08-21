<template>
  <div>
    <header class="flex justify-between items-center z-100 dark:border dark:bg-gray-50 dark:text-dark bg-header-dark font-bold text-sm md:text-md lg:text-xl shadow-lg  px-20 xl:px-40 lg:px-28 py-4">
      <div >Where in the world?</div>
      <div>
        <label class="switch  scale-75">
            <input  @click="toggleDark()" type="checkbox"/>
          <span class="slider"></span>
        </label>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style></style>
