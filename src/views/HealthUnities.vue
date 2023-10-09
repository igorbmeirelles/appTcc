<template>
  <v-container></v-container>
</template>

<script>
export default {
  created() {
    if (process.env.NODE_ENV === "production") {
      this.$firebase.analytics().logEvent("screen_view", {
        screen_name: "Unidades de saúde",
      });
    }

    window.open(
      "https://www.google.com.br/maps/search/postos+de+sa%C3%BAde/@-22.8752041,-43.1097395,13z/data=!3m1!4b1?entry=ttu",
      "_blank"
    );

    this.$router.push("/");
  },
};
</script>
