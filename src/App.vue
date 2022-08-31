<template>
  <v-app>
    <!-- v-if="this.$vuetify.breakpoint.xs && !showSplashScreen" -->
    <v-app-bar v-if="!showSplashScreen" flat color="white" app>
      <!-- <v-btn
        icon
        @click="$router.push('/')"
        v-if="$router.currentRoute.path.includes('about')"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn> -->
      <h2 class="header-text">Prev-IST</h2>
      <v-spacer></v-spacer>
      <v-btn text class="links" @click="$router.push('/')">Início</v-btn>
      <v-btn text class="links" @click="$router.push('/quemsomos')">Quem somos</v-btn>
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
  font-family: "Poppins", Roboto, sans-serif;
}
body {
  background-color: white;
}
</style>

<style scoped>
.header-text {
  background-image: linear-gradient(to bottom, #00b4db, #0083b0);
  background-clip: text;
  -webkit-background-clip: text; /* Alguns navegadores precisam do prefixo */
  -webkit-text-fill-color: transparent;
}
::v-deep .links {
  font-family: "Poppins" !important;
  text-transform: none;
}
</style>
