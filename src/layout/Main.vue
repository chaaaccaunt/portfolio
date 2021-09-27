<template>
  <div class="container">
    <my-header />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myHeader from "@/components/Header.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    myHeader,
  },
});
</script>

<style lang="scss">
.container {
  width: 1440px;
  margin: 0 auto;
}
</style>
