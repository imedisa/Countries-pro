<template>
  <div>
    <!-- {{ $route }} -->
    <component :is="$route.meta.layout"></component>
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route);
  }
};
</script>

<style></style>
