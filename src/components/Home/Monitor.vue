<template>
  <div class="monitor">
    <display></display>
    <div class="monitor-manufacture">Awesome144MHz</div>
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
  width: $mwidth;
  height: calc(#{$mwidth} / 1.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-manufacture {
    width: 100%;
    padding: 3px 0;
    display: grid;
    place-items: center;
    font-size: 0.8rem;
    text-align: center;
    background-color: rgb(39, 42, 44);
    color: rgb(172, 172, 172);
    text-shadow: 0.8px 0.8px 0.8px rgb(255, 200, 50);
    border-bottom: 5px solid rgb(39, 42, 44);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>
