<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import { RouterView } from "vue-router";

export default {
  name: "App",
  components: { RouterView },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
