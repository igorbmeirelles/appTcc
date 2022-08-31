<template>
  <v-container
    class="d-flex justify-center align-items-center blue lighten-5"
    fill-height
    fluid
  >
    <v-sheet
      class="flex-grow-1 elevation-1 height-90vh"
      v-if="$vuetify.breakpoint.smAndUp"
      max-width="800"
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

        <v-col class="col-9 px-4 py-3 overflow-auto">
          <template v-if="selectedItem != 7">
            <h2 class="mb-3">{{ itemExibido.titulo }}</h2>
            <div v-html="itemExibido.textoHtml"></div>
          </template>
          <template v-else>
            <h2 class="mb-3">Deixe sua opinião</h2>
            <v-textarea
              label="Diga o que achou do aplicativo"
              outlined
              auto-grow
            ></v-textarea>
          </template>
          <div class="d-flex px-4 mt-5">
            <v-btn
              v-if="selectedItem != 0"
              @click="selectedItem--"
              color="success"
              text
            >
              <v-icon>mdi-chevron-left </v-icon> Anterior
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn @click="selectedItem++" color="success" text
              >Próximo <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-sheet>
  </v-container>
</template>

<script>
import TopicosIST from "@/data/TopicosIST";
export default {
  name: "HelloWorld",
  computed: {
    itemExibido() {
      return this.items[this.selectedItem];
    },
  },
  data: () => ({
    selectedItem: 0,
    items: [...TopicosIST, { titulo: "Deixe sua opinião" }],
  }),
};
</script>

<style>
.height-90vh {
  height: 80vh;
}

.bg-gray {
  background-color: #f5f5f5;
}

.overflow-auto {
  max-height: 100%;
  overflow: auto;
}

.v-btn {
  text-transform: none;
}
</style>
