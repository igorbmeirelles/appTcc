<template>
  <v-app>
    <v-app-bar
      v-if="this.$vuetify.breakpoint.xs && !showSplashScreen"
      flat
      app
      color="cyan"
      dark
    >
      <v-btn
        icon
        @click="$router.push('/')"
        v-if="$router.currentRoute.path.includes('about')"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3>Prev IST</h3>
    </v-app-bar>

    <v-main>
      <splash-screen v-if="showSplashScreen" />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";
export default {
  name: "App",
  components: { SplashScreen },
  data: () => ({
    timer: 4,
    showSplashScreen: true,
  }),
  created() {
    setTimeout(() => {
      this.showSplashScreen = false;
    }, this.timer * 1000);
  },
};
</script>

<style>
* {
  font-family: "Maven Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.v-main {
  background-color: whitesmoke !important;
}
</style>
