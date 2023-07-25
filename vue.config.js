module.exports = {
  lintOnSave: false,
  transpileDependencies: ["vuetify"],
  pwa: {
    name: "Prev-IST",
    start_url: ".",
    short_name: "Prev-IST",
    themeColor: "#00bcd4",
    msTileColor: "#00bcd4",
    background_color: "#00bcd4",
    appleMobileWebAppStatusBarStyle: "#00bcd4",
    manifestOptions: {
      background_color: "#00bcd4",
    },
    display: "standalone",
    lang: "pt",
    orientation: "portrait",
    display_override: [
      "browser",
      "fullscreen",
      "minimal-ui",
      "standalone",
      "window-controls-overlay",
    ],
    categories: ["education", "health", "medical"],
  },
};
