<template>
  <div class="container">
    <my-header />
    <main>
      <router-view />
    </main>
    <footer :error="error"></footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import myHeader from "@/components/Header.vue";

export default defineComponent({
  name: "MainLayout",
  components: {
    myHeader,
  },
  methods: {
    error(val: string) {
      console.log(val);
    },
  },
});
</script>

<style lang="scss">
#app {
  height: 100%;
  font-family: $mainfont;
}
li,
ul,
p {
  margin: 0.5em 0;
  padding: 0;
}
.title {
  margin: 0;
  padding: 0;
  text-align: center;
}
.container {
  height: 100%;
  display: grid;
  grid-template-rows: 1fr 90% 1fr;
  grid-template-columns: 1fr 80% 1fr;
  grid-template-areas: "header header header" ". main ." ". footer .";
}
.navbar {
  grid-area: header;
}
main {
  grid-area: main;
}

@media screen and (min-width: 769px) and (max-width: 1024px) {
  html {
    font-size: 2vw;
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  html {
    font-size: 3vw;
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  html {
    font-size: 3.5vw;
  }
}
</style>
