<template>
  <div class="monitor">
    <display></display>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Display from "@/components/Home/Monitor/Display.vue";

export default defineComponent({
  name: "Monitor",
  components: {
    Display,
  },
});
</script>

<style lang="scss">
.monitor {
  height: 100%;
}
</style>
