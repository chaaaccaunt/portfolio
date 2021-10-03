<template>
  <dl class="about__block">
    <dt>{{ termin }}</dt>
    <dd>
      <ul type="circle" v-for="(l, index) in list" :key="index">
        <li>{{ l }}</li>
      </ul>
    </dd>
  </dl>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    termin: {
      type: String,
      default() {
        return "";
      },
    },
    list: {
      type: Array as PropType<string[]>,
    },
  },
  name: "DescriptionList",
});
</script>
