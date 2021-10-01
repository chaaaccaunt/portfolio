<template>
  <button @click="copyToBuffer"><slot></slot></button>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    link: {
      type: String as PropType<string>,
      default() {
        return "";
      },
    },
  },
  name: "myButton",
  methods: {
    copyToBuffer() {
      navigator.clipboard.writeText(this.link);
    },
  },
});
</script>

<style lang="scss"></style>
