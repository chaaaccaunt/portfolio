module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use "@/assets/styles" as *;`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Портфолио Чыдым С. Б.";
      return args;
    });
  },
};
