<template>
  <component :is="layout">
    <router-view />
  </component>
  <messages v-for="(mes, index) in handler" :key="index" :status="mes.state" :type="mes.type">{{ mes.message }}</messages>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      handler: [],
    };
  },
  computed: {
    layout() {
      return (this.$route.meta.layout || "default") + "-layout";
    },
  },
  watch: {
    handler: {
      handler() {
        setTimeout(() => {
          if (this.handler.length) this.handler.pop();
        }, 3000);
      },
      deep: true,
    },
  },
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  color: $maincolor;
}
html {
  font-size: 1vw;
}
dd {
  margin-inline-start: 4em;
}
</style>
