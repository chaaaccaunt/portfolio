<template>
  <div class="monitor">
    <display></display>
    <rocket></rocket>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Display from "@/components/Home/Monitor/Display.vue";
import Rocket from "@/components/Home/Monitor/Rocket.vue";

export default defineComponent({
  name: "Monitor",
  components: {
    Display,
    Rocket,
  },
});
</script>

<style lang="scss">
.monitor {
  height: 100vh;
  position: relative;
}
</style>
