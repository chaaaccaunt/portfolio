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
  background-color: transparent;
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
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .mbutton {
    padding: 1vw;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .mbutton {
    padding: 1.8vw;
    border-radius: 1vw;
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .mbutton {
    padding: 2vw;
    border-radius: 1.5vw;
  }
}
</style>
