<template>
  <v-container>
    <v-row justify="center">
      <v-card>
        <v-img
          :src="infoRecipe.image"
          class="white--text align-end cursor"
          gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
          width="900px"
          height="350px"
        >
          <v-card-title>{{infoRecipe.title}}</v-card-title>
        </v-img>
      </v-card>
    </v-row>

    <v-row align="center" justify="center" class="mt-3">
      <v-col cols="5" lg="2">
        <div justify="end" align-content-center>
          <v-icon>mdi-alarm</v-icon>
          {{infoRecipe.readyInMinutes}} minutos
        </div>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col cols="5" lg="1">
        <v-avatar class="ml-9">
          <img src="../assets/usuario.png" alt="Carla García" />
        </v-avatar>
      </v-col>
      <v-col cols="5" lg="2">
        <div class="justify-center">{{infoRecipe.sourceName}}</div>
      </v-col>
    </v-row>
    <v-divider class="my-3" inset></v-divider>
    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Ingredientes</v-card-title>
        <v-list shaped>
          <v-list-item v-for="(ingredients, i) in ingredients" :key="i">
            <v-list-item-content>
              <v-list-item-title class="space" dark style="text-transform: capitalize;">{{ingredients.name}}</v-list-item-title>
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
          <v-list-item v-for="(ingredients, j) in ingredients" :key="j">
            <v-list-item-content>
              <v-list-item-title class="space" style="text-transform: capitalize;">{{ingredients.original}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
    <v-divider inset class="my-2"></v-divider>
    <v-row justify="center" class="mt-5">
      <v-avatar size="100">
        <img src="../assets/usuario.png" alt="usuario" />
      </v-avatar>
    </v-row>
    <p class="text-center mt-3">Publicado por</p>
    <h3 class="text-center mt-n2">{{infoRecipe.sourceName}}</h3>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
import recipesService from "@/services/recipesServices"
export default {

  name: 'Recipe',
  computed: {
    ...mapState(['recipes'])
  },
  data: () => ({
    item: 1,
    infoRecipe:{},
    ingredients:[]
  }),
  methods:{
    async getRecipfyInfo(){
      this.infoRecipe = await recipesService.getRecipeById(this.$route.params.id)
      this.ingredients=this.infoRecipe.extendedIngredients
    }
  },
  created(){
    this.getRecipfyInfo()
  }
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
