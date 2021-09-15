module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use "@/assets/styles" as *;`,
      },
    },
  },
};
