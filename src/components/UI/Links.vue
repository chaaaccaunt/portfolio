<template>
  <div class="contacts__links-link">
    <a :href="link" target="_blank" :style="{ 'background-image': `url(${require('../../assets/icons/' + image + '.png')})` }"
      ><span><slot></slot></span
    ></a>
    <my-button :link="link">copy</my-button>
  </div>
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
    image: {
      type: String as PropType<string>,
      default() {
        return "";
      },
    },
  },
  name: "Links",
});
</script>

<style lang="scss">
.contacts__links {
  &-link {
    & a {
      display: block;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      background-size: 100%;
      background-repeat: no-repeat;
      background-position: center;
      position: relative;
      background-color: #000;
      & span {
        position: absolute;
        bottom: -1.2rem;
        left: 50%;
        transform: translateX(-50%);
        text-decoration: none;
        color: #34373b;
      }
    }
    & button {
      margin-top: 1.5rem;
    }
  }
}
</style>
