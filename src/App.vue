<template>
  <v-app>
    <!-- v-if="this.$vuetify.breakpoint.xs && !showSplashScreen" -->
    <v-app-bar v-if="!showSplashScreen" flat color="white" app>
      <v-btn
        icon
        @click="$router.push('/')"
        v-if="$router.currentRoute.path != '/'"
      >
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="this.$vuetify.breakpoint.xs && $router.currentRoute.path == '/'"
      ></v-app-bar-nav-icon>
      <h2 class="header-text">Prev-IST</h2>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.xs">
        <v-btn text class="links" @click="$router.push('/')">Início</v-btn>
        <v-btn text class="links" @click="$router.push('/quemsomos')">
          Quem somos
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-title>Início</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/quemsomos')">
          <v-list-item-title>Quem Somos</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

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
    drawer: false,
    group: "",
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
