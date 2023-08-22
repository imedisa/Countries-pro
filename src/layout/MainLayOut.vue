<template>
  <div>
    <header
      class="dark:bg-purple-400 flex justify-between items-center z-100 border bg-gray-50 text-dark font-bold text-sm md:text-md lg:text-xl shadow-lg px-20 xl:px-40 lg:px-28 py-4"
    >
      <div>Where in the world?</div>
      <div>
        <label class="switch scale-75">
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
      console.log(parseIsDark)
      console.log(isDark)
    },
  },
  computed: {},
  mounted(){
    const isDark = localStorage && localStorage.getItem("isDark");
    console.log(typeof isDark)
    const parseIsDark = JSON.parse(isDark);
    
    console.log(isDark);
    if(!parseIsDark){
      localStorage.setItem('isDark','false');
    }

  }
};
</script>

<style></style>
