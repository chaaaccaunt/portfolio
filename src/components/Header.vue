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
  height: 80px;
  & nav {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px 0;
    margin-top: 10px;
  }
  & a {
    display: block;
    margin: 0 10px;
    padding: 5px 10px;
    text-decoration: none;
    border: 1px solid #34373b;
    border-radius: 4px;
    color: #34373b;
  }
  & &__exact-active {
    background-color: rgb(125, 162, 209);
    border-color: rgb(125, 162, 209);
    color: #fff;
  }
}

@media (max-aspect-ratio: 3/5) {
  .navbar {
    font-size: 0.6em;
  }
}
</style>
