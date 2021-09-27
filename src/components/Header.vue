<template>
  <header class="navbar">
    <nav>
      <router-link v-for="nav in navigation" :key="nav.name" :to="nav.url">
        {{ nav.name }}
      </router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Header",
  data() {
    return {
      navigation: [
        {
          name: "Space",
          url: "/",
        },
        {
          name: "Skills",
          url: "/skills",
        },
        {
          name: "Path to programming",
          url: "/path",
        },
        {
          name: "Contacts",
          url: "/contacts",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.navbar {
  width: 100%;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  & a {
    margin: 0 15px;
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid rgb(47, 110, 194);
    border-radius: 4px;
    color: #000;
  }
  & &__exact-active {
    background-color: rgb(47, 110, 194);
    color: #fff;
  }
}
</style>
