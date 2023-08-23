<template>
  <div class="bg-gray-100 dark:bg-main-dark min-h-screen">
    <div class="px-20 xl:px-40 lg:px-28 py-14">
      <router-link to="/" class="flex justify-center md:justify-start">
        <button
          class="shadow-md border-secondary-dark hover:shadow-black text-header-dark dark:bg-header-dark dark:text-primary-dark bg-gray-50 py-2 rounded px-12 font-medium"
        >
          Back
        </button>
      </router-link>
      <div
        class="grid sm:grid-cols-12 grid-cols-1 gap-x-8 gap-y-0 sm:gap-y-4 mt-9"
      >
        <div class="col-span-6 ">
          <img
            class="h-5/6 lg:h-full w-full object-cover"
            :src="country_info?.imgUrl"
            v-if="country_info?.imgUrl"
          />
        </div>
        <div class="col-span-6">
          <div class="flex flex-row justify-between w-11/12 mx-auto">
            <div class="">
              <!-- TITLE -->
              <div class="font-bold text-black md:text-3xl text-sm sm:text-lg">
                {{ country_info?.countryName }}
              </div>
              <!-- CONTENT -->
              <div
                class="font-medium text-sm sm:text-md md:text-xl text-dark mt-10"
              >
                Navite Name : <span class="text-gray-600 font-regular text-sm sm:text-md md:text-xl">{{ country_info?.nativeName }}</span>
              </div>
            </div>
            <div class="">frf</div>
          </div>
          <div class="">fdf</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      country_info: {
        imgUrl: "",
        countryName: "",
        nativeName: "",
      },
    };
  },
  methods: {
    async getCountry(country_name) {
      try {
        const httpResponse = await axios.get(
          `https://restcountries.com/v3.1/name/${country_name}?fullText=true`
        );
        console.log(httpResponse);
        if (httpResponse.data.length) {
          this.country_info = {
            imgUrl: httpResponse.data[0]?.flags?.png,
            countryName: httpResponse.data[0]?.name?.common,
            nativeName: httpResponse.data[0]?.name?.official,
          };
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    const { country_name } = this.$route.params;
    this.getCountry(country_name);
  },
};
</script>
