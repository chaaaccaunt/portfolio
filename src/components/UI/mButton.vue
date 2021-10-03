<template>
  <button class="mbutton" @click="copyToBuffer"><slot></slot></button>
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
    async copyToBuffer() {
      try {
        await navigator.clipboard.writeText(this.link);
        this.$root.$data.handler.push({ state: true, message: "Скопирован в буфер", type: "message" });
      } catch (error) {
        this.$root.$data.handler.push({ state: true, message: error.message, type: "error" });
      }
    },
  },
});
</script>

<style lang="scss">
.mbutton {
  padding: 0.3vw 1vw;
  line-height: 1vw;
  border: 0.1vw solid rgb(125, 162, 209);
  border-radius: 0.5vw;
  cursor: pointer;
  transition: background-position 1s;
  background-size: 400%;
  background-position: right;
  background-repeat: no-repeat;
  background-image: linear-gradient(to right, transparent, transparent, rgb(125, 162, 209), transparent, transparent);
  animation: bground 2s ease-in forwards;
}
@keyframes bground {
  to {
    background-position: left;
  }
}
@keyframes tcolor {
}
</style>
