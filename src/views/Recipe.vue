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

    <v-row align="center" justify="center">
      <v-col cols="5" lg="2">
        <div justify="end" align-content-center>
          <v-icon>mdi-alarm</v-icon>
          30 minutos
        </div>
      </v-col>
      <v-col cols="5" lg="1">
        <v-avatar>
          <img src="../assets/Carla.jpg" alt="Carla García" />
        </v-avatar>
      </v-col>
      <v-col cols="5" lg="2">
        <div class="justify-center">Carla García</div>
      </v-col>
    </v-row>

    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Ingredientes</v-card-title>
        <v-list shaped>
          <v-list-item-group multiple color="#006159">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>

    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Pasos</v-card-title>
        <v-list shaped>
          <v-list-item-group multiple color="#006159">
            <v-list-item v-for="(item2, j) in items2" :key="j">
              <v-list-item-content>
                <v-list-item-title v-text="items2.texto"></v-list-item-title>
                <v-divider></v-divider>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-row>

    <v-row justify="center">
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
      { text: 'Chispas de chocolate para decorar' }],
    item2: 1,
    items2: [
      { texto: 'Mezclar la mantequilla con el azúcar hasta formar una crema sin grumos.' },
      { texto: 'Añadir los huevos (ideal que estén a temperatura ambiente), batir hasta que este espumosa.' },
      { texto: 'Añadir la vainilla y sal.' },
      { texto: 'Agregar la avena, la harina y los polvos de hornear, revolver hasta formar una mezcla pegajosa.' },
      { texto: 'Enmantequillar la lata del horno y poner círculos de la mezcla para galletas, procurar que queden separadas ya que en el horno se expanden, poner sobre cada galleta las chispas de chocolate a gusto.' },
      { texto: 'Meter al horno por 15 minutos a 200 grados y ya están listas para disfrutar.' }
    ],
  })

}

</script>

<style scoped>
.margin {
  margin-left: 150px;
  justify-content: flex-start;
}
</style>