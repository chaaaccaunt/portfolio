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
  height: 100%;
  display: grid;
  grid-template-rows: 80px 90% 1fr;
  grid-template-columns: 1fr 80% 1fr;
  grid-template-areas: "header header header" ". main ." ". footer .";
}
.navbar {
  grid-area: header;
}
main {
  grid-area: main;
}
</style>
