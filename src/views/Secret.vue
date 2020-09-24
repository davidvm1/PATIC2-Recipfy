<template>
  <div>BIENVENIDO A RECIPFY
  <v-container fluid>
    <v-row>
      <v-col cols="6" sm="4">
          <v-card>
            <v-img
              src="https://d36fw6y2wq3bat.cloudfront.net/assets/images/cache/recipes/galletas-de-avena-platano-y-chocolate/900/galletas-de-avena-platano-y-chocolate.jpg"
              class="white--text align-end cursor"
              gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
              height="200px"
              @click="$router.push({path: '/Recipe'})"
            >
              <v-card-title>Galletas de avena con chips de chocolate</v-card-title>
            </v-img>
          </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
</template>

<script>
export default {
  name: "Secret",
}
</script>

<style scoped>
  .cursor {
    cursor: pointer;
  }
</style>
