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
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(131, 163, 163);
}
</style>
