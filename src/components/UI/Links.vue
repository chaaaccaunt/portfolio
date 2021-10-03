<template>
  <div class="contacts__links">
    <a :href="link" target="_blank" class="contacts__links-link" :style="{ 'background-image': `url(${require('../../assets/icons/' + image)})` }"
      ><span><slot></slot></span
    ></a>
    <my-button :link="link">copy</my-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    link: {
      type: String,
      default() {
        return "";
      },
    },
    image: {
      type: String,
      default() {
        return "";
      },
    },
  },
  name: "myLinks",
});
</script>

<style lang="scss">
.contacts__links {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-link {
    width: 4vw;
    height: 4vw;
    display: block;
    border-radius: 50%;
    background-size: 105%;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    & span {
      position: absolute;
      bottom: -1.5vw;
      left: 50%;
      transform: translateX(-50%);
      text-decoration: none;
      color: #34373b;
    }
  }
  & button {
    margin-top: 2vw;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .contacts__links {
    & a {
      width: 6vw;
      height: 6vw;
    }
    & span {
      bottom: -2vw;
    }
    & button {
      margin-top: 2.5vw;
    }
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .contacts__links {
    & a {
      width: 8vw;
      height: 8vw;
    }
    & span {
      bottom: -3vw;
    }
    & button {
      margin-top: 5vw;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .contacts__links {
    & a {
      width: 10vw;
      height: 10vw;
    }
    & span {
      bottom: -5vw;
    }
    & button {
      margin-top: 8vw;
    }
  }
}
</style>
