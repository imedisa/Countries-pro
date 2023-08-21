<template>
  <div>
    <header class="flex justify-between items-center bg-header-dark font-semibold text-sm sm:text-lg md:text-xl xl:px-40 lg:px-28 shadow px-20 py-4">
      <div >Where in the world?</div>
      <div>
        <label class="switch scale-75">
            <input type="checkbox"/>
          <span class="slider"></span>
        </label>
      </div>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {};
</script>

<style></style>
