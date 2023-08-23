<template>
  <div class="bg-gray-100 dark:bg-main-dark min-h-screen">
    <div class="px-20 xl:px-40 lg:px-28 py-14">
      <router-link to="/" class="flex justify-start">
        <button
          class="shadow-md border-secondary-dark hover:shadow-black text-header-dark dark:bg-header-dark dark:text-primary-dark bg-gray-50 py-2 rounded px-12 font-medium"
        >
          Back
        </button>
      </router-link>
      <div>
        <img :src="country_info?.imgUrl" />
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
      },
    };
  },
  methods: {
    async getCountry(country_name) {
      try {
        const httpResponse = await axios.get(
          `https://restcountries.com/v3.1/name/${country_name}`
        );
        if (httpResponse.data.length) {
          this.country_info = {
            imgUrl: httpResponse.data[0]?.flags?.png,
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
