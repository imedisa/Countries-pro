<template>
  <div class="px-10 py-4">
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
          placeholder="Search For A Country"
          type="search"
          class="text-white placeholder:text-secondary-dark rounded md:px-28 px-14 py-3 bg-header-dark"
        />
      </div>
      <!-- FILTER -->

      <div class="relative">
        <select
          class="block w-full shadow-md bg-header-dark border border-header-dark text-secondary-dark py-3 px-14 md:px-10 mt-4 md:mt-0 rounded focus:outline-none focus:bg-header-dark focus:border-gray-500"
          id="grid-state"
        >
          <option>Filter By Region</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
      </div>
    </div>
    <!-- CONTENT -->
    <div class="grid sm:grid-cols-4 grid-cols-2 gap-x-6 gap-y-3 mt-8">
      <div v-for="item in items" :key="item.id">
        <Country :country_info="item" />
      </div>
    </div>
  </div>
</template>

<script>
import Country from "@/components/Country/index.vue";
import axios from 'axios'
export default {
  components: {
    Country,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 2,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 3,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 4,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 5,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 6,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 7,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
        {
          id: 8,
          countryName: "United State",
          population: 120000000,
          region: "American",
          capital: "Washington",
        },
      ],
    };
  },
  mounted() {
    this.getCountries();
  },
  methods: {
    async getCountries() {
      try {
        console.log("s");
        const httpResponse = await axios.get('https://jsonplaceholder.typicode.com/todos');
        console.log(httpResponse)

      } catch (error) {}
    },
  },
};
</script>
