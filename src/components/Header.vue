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
          name: "About",
          url: "/about",
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
  & nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 1em 0;
  }
  & a {
    display: block;
    margin: 0 0.4em;
    padding: 0.2em 0.4em;
    text-decoration: none;
    border: 0.1em solid #34373b;
    border-radius: 1rem;
    color: #34373b;
    -webkit-tap-highlight-color: transparent;
  }
  & &__exact-active {
    background-color: rgb(125, 162, 209);
    border-color: rgb(125, 162, 209);
    color: #fff;
  }
}
</style>
