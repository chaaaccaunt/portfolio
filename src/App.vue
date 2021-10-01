<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  height: 100%;
  color: #34373b;
  font-family: "Roboto-Regular", sans-serif;
}
</style>
