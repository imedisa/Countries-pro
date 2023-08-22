<template>
  <div class="bg-gray-100 h-screen">
    <div class="px-20 xl:px-40 lg:px-28 py-4">
      <div
        class="mt-5 md:mt-8 flex flex-col md:flex-row md:justify-between items-center"
      >
        <!-- SEARCH -->
        <div class="shadow-md rounded relative flex items-center">
          <svg class="icon" aria-hidden="true" viewBox="0 0 24 24">
            <g>
              <path
                class="absolute"
                d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
              ></path>
            </g>
          </svg>
          <input
            placeholder="Search For A Country ..."
            type="search"
            class="text-dark placeholder:text-secondary-dark rounded md:px-28 px-14 py-3 bg-gray-50 "
          />
        </div>
        <!-- FILTER -->

        <div class="relative">
          <select
            class="block w-full shadow-md bg-gray-50 border-gray-50 border   text-secondary-dark py-3 px-14 md:px-10 mt-4 md:mt-0 rounded focus:outline-none focus:bg-header-dark focus:border-gray-500"
            id="grid-state"
          >
            <option>Filter By Region</option>
            <option>Missouri</option>
            <option>Texas</option>
          </select>
        </div>
      </div>
      <!-- CONTENT -->
      <div
        class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-x-10 gap-y-12 mt-10"
      >
        <div v-for="item in items" :key="item.id">
          <Country :country_info="item" />
        </div>
      </div>
    </div>
    
</div>
</template>

<script>
import Country from "@/components/Country/index.vue";
import axios from "axios";
export default {
  components: {
    Country,
  },
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    async getCountries() {
      try {
        const httpResponse = await axios.get(
          "https://restcountries.com/v3.1/all"
        );
        const data = httpResponse?.data || [];
        this.items = data;
      } catch (error) {}
    },
  },
};
</script>
<style></style>
