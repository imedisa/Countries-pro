<template>
  <div class="flex-col">
    <div class="text-center">
      <img class="rounded-t w-full h-44 object-cover" :src="country_info.flags.png" alt="" />
    </div>
    <div
      class="bg-header-dark shadow-md dark:bg-gray-50 rounded-b items-center md:text-left px-3 py-6 md:px-5 flex-col"
    >
      <div class="font-bold text-center lg:text-left text-sm md:text-lg text-primary-dark dark:text-black">
        {{ country_info.name.common }}
      </div>
      <div
        class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
      >
        <div class="font-semibold text-primary-dark dark:text-dark">
          population:
        </div>
        <div class="text-zinc-400 font-medium">
          <!-- {{ country_info.countryName }} -->
        </div>
      </div>
      <div
        class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
      >
        <div class="font-semibold text-primary-dark dark:text-dark">Region:</div>
        <div class="text-zinc-400 font-medium">
          <!-- {{ country_info.region }} -->
        </div>
      </div>
      <div
        class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
      >
        <div class="font-semibold text-primary-dark dark:text-dark">Capital:</div>
        <div class="text-zinc-400 font-medium">
          <!-- {{ country_info.capital }} -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    country_info: {
      type: Object,
      default: () => {},
    },
  },
};
</script>
