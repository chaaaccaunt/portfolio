<template>
  <div class="monitor-display">
    <canvas ref="mainCanvas" class="monitor-display-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { renderSolarSystem } from "@/components/Home/Monitor/Display/SolarSystem";

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
  &-canvas {
    width: 100%;
  }
}
</style>
