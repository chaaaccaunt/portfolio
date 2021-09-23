<template>
  <div class="monitor-display">
    <canvas ref="mainCanvas" class="monitor-display-canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { renderSolarSystem } from "@/components/Home/Monitor/renderSolarSystem";

export default defineComponent({
  name: "Display",
  setup() {
    this;
  },
  methods: {
    renderSolar() {
      const canvas = this.$refs.mainCanvas as HTMLCanvasElement;
      renderSolarSystem(canvas);
    },
  },
  mounted() {
    this.renderSolar();
  },
});
</script>

<style lang="scss">
.monitor-display {
  width: 100%;
  height: 100%;
  &-canvas {
    width: 100%;
    height: 100%;
  }
}
</style>
