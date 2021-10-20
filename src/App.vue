<template>
  <v-app>
    <v-app-bar v-if="this.$vuetify.breakpoint.smAndDown" flat app color="cyan" dark>
      <v-btn
        icon
        @click="$router.push('/')"
        v-if="$router.currentRoute.path.includes('about')"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <h3>nome do App</h3>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  font-family: "Maven Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
</style>
