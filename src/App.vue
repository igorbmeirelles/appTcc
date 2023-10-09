<template>
  <v-app>
    <!-- v-if="this.$vuetify.breakpoint.xs && !showSplashScreen" -->
    <v-app-bar v-if="!showSplashScreen" flat color="cyan" app dark>
      <v-btn
        icon
        @click="$router.push('/')"
        v-if="$vuetify.breakpoint.xs && $router.currentRoute.path != '/'"
      >
        <v-icon> mdi-arrow-left </v-icon>
      </v-btn>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        v-if="this.$vuetify.breakpoint.xs && $router.currentRoute.path == '/'"
      ></v-app-bar-nav-icon>
      <h3>Prev-IST</h3>
      <v-spacer></v-spacer>
      <div v-if="!$vuetify.breakpoint.xs">
        <v-btn text class="links" @click="$router.push('/')">Início</v-btn>
        <v-btn text class="links" @click="$router.push('/quemsomos')">
          Quem somos
        </v-btn>
      </div>
      <v-btn depressed class="links" color="blue lighten-2" max-width="150">
        <a
          href="https://forms.gle/wwXZevP5VRK73j9a8"
          class="link d-block text-decoration-none white--text"
          target="_blank"
        >
          Dúvidas
        </a>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item @click="$router.push('/')">
          <v-list-item-title>Início</v-list-item-title>
        </v-list-item>

        <v-list-item @click="$router.push('/quemsomos')">
          <v-list-item-title>Quem Somos</v-list-item-title>
        </v-list-item>

        <v-list-item @click="navigateToForm">
          <v-list-item-title>Dúvidas</v-list-item-title>
        </v-list-item>

        <v-list-item @click="openModalRegister">
          <v-list-item-title>Cerificado de Registro</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <splash-screen v-if="showSplashScreen" />
      <router-view />
    </v-main>

    <v-footer v-if="!showSplashScreen && $route.path == '/'" color="cyan">
      <h5 class="font-weight-medium white--text">
        Certificado de Registro de Programa de Computador: BR512022002669-4
      </h5>
    </v-footer>

    <v-dialog class="register-dialog" v-model="modalRegister" max-width="600">
      <v-card style="position: relative">
        <v-btn
          tonal
          fab
          depressed
          color="blue-teal"
          dark
          style="position: absolute; top: 16px; left: 16px"
          x-small
        >
          <v-icon color="error" @click="modalRegister = false"
            >mdi-close</v-icon
          >
        </v-btn>
        <v-card-text class="pa-0">
          <img
            class="certificate"
            src="./assets/registro.png"
            style="display: block; height: 100%; width: 100%; margin: 0 auto"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
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
    modalRegister: false,
  }),
  methods: {
    navigateToForm() {
      window.open("https://forms.gle/wwXZevP5VRK73j9a8", "_blank");
    },
    openModalRegister() {
      this.modalRegister = true;
    },
  },
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

.v-dialog:has(.certificate) {
  margin: 0;
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
