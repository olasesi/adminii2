<template>
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <div class="bg-blue-500 text-white p-4">
    This is a Tailwind CSS component!
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
