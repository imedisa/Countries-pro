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
        <div class="col-span-6 " >
          <img
            class="h-5/6 lg:h-full w-full object-cover"
            :src="country_info?.imgUrl"
            v-if="country_info?.imgUrl"
          />
        </div>
        <div class="col-span-6 ">
          <div class="flex flex-row items-center justify-between w-11/12 mx-auto">
            <div class="">
              <!-- TITLE -->
              <div class="font-bold dark:text-white text-black md:text-3xl text-sm sm:text-lg">
                {{ country_info?.countryName }}
              </div>
              <!-- CONTENT -->
              <!-- COL1 -->
              <div
                class="font-medium text-sm sm:text-md md:text-xl  dark:text-primary-dark text-dark mt-10"
              >
                Navite Name:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.nativeName }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Population:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.population }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Region:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.region }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Sub Region:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.subregion }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Capital:
                <span
                  class="text-gray-600 font-regular dark:text-secondary-dark text-sm sm:text-md md:text-xl"
                  >{{ country_info?.capital }}</span
                >
              </div>
            </div>
            <!-- COL2 -->

            <div class="">
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Top level domain:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.domain }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Currencies:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.currencies }}</span
                >
              </div>
              <div
                class="font-medium text-sm sm:text-md md:text-xl dark:text-primary-dark text-dark mt-2"
              >
                Language:
                <span
                  class="text-gray-600 dark:text-secondary-dark font-regular text-sm sm:text-md md:text-xl"
                  >{{ country_info?.language }}</span
                >
              </div>
            </div>
          </div>
          <div class="">
            <div class="font-medium dark:text-primary-dark text-sm sm:text-md md:text-xl items-center w-11/12  text-dark mt-2 mx-auto flex flex-row flex-wrap">
              Border Countries :
              <div class=" flex items-center gap-y-2 flex-wrap">
                <div
                  v-for="(country, index) in country_info.border"
                  :key="index"
                  class="mr-2 text-xs md:text-sm bg-white flex dark:text-secondary-dark text-gray-600 rounded px-3 dark:bg-header-dark shadow-md"
                >
                  {{ country }}
                </div>
              </div>
            </div>
          </div>
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
        population: "",
        region: "",
        subregion: "",
        capital: "",
        domain: "",
        currencies: "",
        language: "",
        //this is an array that i shoud organaise it 
        border: [],
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
            population: httpResponse.data[0]?.population,
            region: httpResponse.data[0]?.region,
            subregion: httpResponse.data[0]?.subregion,
            capital: httpResponse.data[0]?.capital[0],
            domain: httpResponse.data[0]?.tld[0],
            currencies: httpResponse.data[0]?.currencies?.ZAR?.name,
            // language: httpResponse.data[0]?.afr?.languages,
            border: httpResponse.data[0]?.borders,
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
