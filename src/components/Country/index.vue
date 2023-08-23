<template>
  <div class="">
    <router-link :to="`/country/${country_info.name.common}`">
      <div class="text-center">
        <img
          class="rounded-t w-full h-44 object-cover"
          :src="country_info.flags.png"
          alt=""
        />
      </div>
      <div
        class="shadow-md bg-gray-50  dark:bg-header-dark rounded-b items-center md:text-left px-3 py-6 md:px-5 flex-col"
      >
        <div
          class="font-bold text-center lg:text-left text-sm md:text-md lg:text-lg dark:text-white text-black"
        >
          {{ country_info.name.common }}
        </div>
        <div
          class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
        >
          <div class="font-semibold text-dark dark:text-primary-dark">population:</div>
          <div class="text-zinc-400 font-medium">
            {{ country_info.population.toLocaleString("en") }}
          </div>
        </div>
        <div
          class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
        >
          <div class="font-semibold text-dark dark:text-primary-dark">Region:</div>
          <div class="text-zinc-400 font-medium">
            {{ country_info.region }}
          </div>
        </div>
        <div
          class="flex mt-2 flex-row text-xs lg:text-sm justify-center lg:justify-start"
        >
          <div class="font-semibold text-dark dark:text-primary-dark">Capital:</div>
          <div class="text-zinc-400 font-medium">
            {{ country_info.capital.length && country_info.capital[0] }}
          </div>
        </div>
      </div>
    </router-link>
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
