<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "my-button",
});
</script>

<style lang="scss" scoped>
.btn {
  background-color: transparent;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  cursor: pointer;
}
</style>
