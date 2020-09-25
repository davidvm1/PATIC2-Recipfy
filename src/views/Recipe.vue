<template>
  <v-container>
    <v-row justify="center">
      <v-card>
        <v-img
          src="../assets/galletas-de-avena-platano-y-chocolate.jpg"
          class="white--text align-end cursor"
          gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
          width="900px"
          height="350px"
        >
          <v-card-title>Galletas de avena con chips de chocolate</v-card-title>
        </v-img>
      </v-card>
    </v-row>

    <v-row align="center" justify="center" class="mt-3">
      <v-col cols="5" lg="2">
        <div justify="end" align-content-center>
          <v-icon>mdi-alarm</v-icon>
          30 minutos
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="5" lg="1">
        <v-avatar>
          <img src="../assets/Carla.jpg" alt="Carla García" />
        </v-avatar>
      </v-col>
      <v-col cols="5" lg="2">
        <div class="justify-center">Carla García</div>
      </v-col>
    </v-row>
    <v-divider class="my-3" inset></v-divider>
    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Ingredientes</v-card-title>
        <v-list shaped>
          <v-list-item v-for="(item, i) in items" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.text" class="space"></v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
    <v-divider inset class="my-2"></v-divider>
    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Pasos</v-card-title>
        <v-list shaped>
          <v-list-item v-for="(item2, j) in items2" :key="j">
            <v-list-item-content>
              <v-list-item-title v-text="item2.text" class="space"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
    <v-divider inset class="my-2"></v-divider>
    <v-row justify="center" class="mt-5">
      <v-avatar size="100">
        <img src="../assets/Carla.jpg" alt="Carla García" />
      </v-avatar>
    </v-row>
    <p class="text-center mt-3">Publicado por</p>
    <h3 class="text-center mt-n2">Carla García</h3>
  </v-container>
</template>

<script>
export default {
  name: 'Recipe',
  data: () => ({
    item: 1,
    items: [
      { text: '400 gramos avena multigrano' },
      { text: '200 gramos azúcar' },
      { text: '2 huevos' },
      { text: '100 gramos mantequilla' },
      { text: '1 cucharadita de vainilla' },
      { text: '1 cucharadita polvos de hornear' },
      { text: '1 pizca sal' },
      { text: '100 gramos harina' },
      { text: 'Chispas de chocolate para decorar' }
    ],
    item2: 1,
    items2: [
      { text: '1. Mezclar la mantequilla con el azúcar hasta formar una crema sin grumos.' },
      { text: '2. Añadir los huevos (ideal que estén a temperatura ambiente), batir hasta que este espumosa.' },
      { text: '3. Añadir la vainilla y sal.' },
      { text: '4. Agregar la avena, la harina y los polvos de hornear, revolver hasta formar una mezcla pegajosa.' },
      { text: '5. Enmantequillar la lata del horno y poner círculos de la mezcla para galletas, procurar que queden separadas ya que en el horno se expanden, poner sobre cada galleta las chispas de chocolate a gusto.' },
      { text: '6. Meter al horno por 15 minutos a 200 grados y ya están listas para disfrutar.' }
    ]
  })
};
</script>

<style scoped>
.margin {
  margin-left: 150px;
  justify-content: flex-start;
}
.space {
  white-space: normal;
}
</style>
