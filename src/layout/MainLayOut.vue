<template>
  <div>
    <header
      class=" w-full dark:bg-header-dark flex justify-between items-center z-100 border dark:border-none bg-gray-50 text-dark dark:text-white font-bold text-xs sm:text-md lg:text-xl shadow-lg px-20 xl:px-40 lg:px-28 py-4"
    >
      <router-link to="/">
        Where in the world?
      </router-link>
      <div>
        <label class="switch scale-50 sm:scale-75">
          <input  @click="toggleDark()" type="checkbox" />
          <span class="slider"></span>
        </label>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  methods: {
    toggleDark() {
      const isDark = localStorage && localStorage.getItem("isDark");
      const parseIsDark = JSON.parse(isDark);

      if (!parseIsDark ) {
        document.documentElement.classList.add("dark");
        localStorage.setItem('isDark','true');
      }
      else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('isDark','false');
      }
    },
  },
  computed: {},
  mounted(){
    const isDark = localStorage && localStorage.getItem("isDark");
    const parseIsDark = JSON.parse(isDark);

    if(!parseIsDark){
      localStorage.setItem('isDark','false');
    }

  }
};
</script>

<style></style>
