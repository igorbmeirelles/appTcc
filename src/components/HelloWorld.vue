<template>
  <v-container class="'d-flex justify-center align-items-center'" fill-height fluid>
    <v-sheet
      class="flex-grow-1 elevation-1 height-90vh"
      max-width="800"
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-row style="height: 100%" no-gutters>
        <v-col class="col-3 elevation-1">
          <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="primary">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-content>
                  <v-list-item-title v-text="item.titulo"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col class="col-9 px-4 py-3">
          <h3>titulo</h3>
          <div>video</div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita
            quos sapiente ipsam aliquid ad quis, alias reprehenderit. Mollitia saepe
            molestias, blanditiis accusantium cumque animi facilis rerum voluptatem ut
            aliquid?
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        titulo: "Apresentação",
      },
      {
        titulo: "O que é uma IST",
      },
      {
        titulo: "Sintomas",
      },
      {
        titulo: "Métodos contraceptivos",
      },
      {
        titulo: "Violência Sexual ",
      },
    ],
  }),
  created() {
    console.log(this.$vuetify.breakpoint);
  },
};
</script>

<style>
.height-90vh {
  height: 80vh;
}

.bg-gray {
  background-color: #f5f5f5;
}
</style>
