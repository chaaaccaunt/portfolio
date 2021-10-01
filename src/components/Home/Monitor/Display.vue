<template>
  <div class="monitor-display">
    <canvas ref="mainCanvas" class="monitor-display-canvas"></canvas>
    <rocket></rocket>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { renderSolarSystem } from "@/components/Home/Monitor/Display/SolarSystem";
import Rocket from "@/components/Home/Monitor/Display/Rocket.vue";

export default defineComponent({
  name: "Display",
  setup() {
    this;
  },
  methods: {
    renderSolar() {
      renderSolarSystem(this.$refs.mainCanvas as HTMLCanvasElement);
    },
  },
  components: { Rocket },
  mounted() {
    this.renderSolar();
    window.addEventListener("resize", this.renderSolar);
  },
});
</script>

<style lang="scss">
.monitor-display {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &-canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
