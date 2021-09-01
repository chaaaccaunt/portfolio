<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("./assets/styles/normalize.css");
html {
  height: 100%;
}
body {
  display: flex;
  font-family: monospace;
  flex-direction: column;
  height: 100%;
}
#app {
  flex: 1 0 auto;
  background-color: rgba(214, 214, 214, 0.205);
}
</style>
