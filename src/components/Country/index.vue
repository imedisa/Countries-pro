<template>
  <div class="flex-col">
    <div class="text-center">
      <img class="rounded-t" src="@/assets/images/USA.svg" alt="" />
    </div>
    <div
      class="bg-header-dark rounded-b items-center md:text-left px-3 py-6 md:px-5 flex-col"
    >
      <div class="font-bold text-center md:text-left text-sm md:text-md">
        {{ country_info.countryName }}
      </div>
      <div
        class="flex mt-2 flex-row text-xs md:text-sm justify-center md:justify-start"
      >
        <div class="font-semibold text-primary-dark">population:</div>
        <div class="text-secondary-dark">
          {{ country_info.population }}
        </div>
      </div>
      <div
        class="flex mt-2 flex-row text-xs md:text-sm justify-center md:justify-start"
      >
        <div class="font-semibold text-primary-dark">Region:</div>
        <div class="text-secondary-dark">
          {{ country_info.region }}
        </div>
      </div>
      <div
        class="flex mt-2 flex-row text-xs md:text-sm justify-center md:justify-start"
      >
        <div class="font-semibold text-primary-dark">Capital:</div>
        <div class="text-secondary-dark">
          {{ country_info.capital }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        country_info:{
            type:Object,
            default:()=>{

            }
        }
    }
};
</script>
