<template>
  <div class="home">
    <monitor />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Monitor from "@/components/Home/Monitor.vue";

export default defineComponent({
  name: "Home",
  data() {
    return {
      keys: [],
    };
  },
  components: {
    Monitor,
  },
  mounted() {},
});
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex-grow: 1;
  background-color: rgb(131, 163, 163);
}
</style>
