<template>
  <v-container>
    <v-row justify="center">
      <v-card>
        <v-img
          :src="infoRecipe.image"
          class="white--text align-end cursor"
          gradient="to bottom, rgba(0,0,0,.3), rgba(0,0,0,.7)"
          width="900px"
          height="350px">
            <v-card-title>
              {{infoRecipe.title}}
            </v-card-title>
        </v-img>
      </v-card>
    </v-row>

    <v-row align="center"
           justify="center"
           class="mt-3">
      <v-col cols="3">
        <h3 class="text-center">
          <v-icon large class="mr-2">
            mdi-alarm
          </v-icon>
          {{infoRecipe.readyInMinutes}} Minute
        </h3>
      </v-col>
      <v-divider vertical/>

      <v-col cols="3" class="d-inline-flex justify-center align-center " >
        <v-avatar class="mr-5">
          <img src="../assets/usuario.png" alt="Carla García" />
        </v-avatar>
        <h3 class="justify-center">{{infoRecipe.sourceName}}</h3>
      </v-col>
      <v-divider vertical/>
      <v-col cols="3" class="align-center d-inline-flex justify-center">
        <h3>Add to Favorites</h3>
        <v-btn
          class="mx-2"
          dark
          icon
          large
          @click="active ? removeFavRecipe() : addFavRecipe()"
          color="red">
          <v-icon>
            {{ active ? 'mdi-heart' : 'mdi-heart-outline'}}
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-divider class="my-3" inset />
    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>Ingredients</v-card-title>
        <v-list shaped>
          <v-list-item v-for="(ingredients, i) in ingredients" :key="i">
            <v-list-item-content>
              <v-list-item-title class="space"
                                 dark
                                 style="text-transform: capitalize;">
                {{ingredients.name}}
              </v-list-item-title>
              <v-divider></v-divider>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
    <v-divider inset class="my-2" />
    <v-row class="margin">
      <v-card elevation="0">
        <v-card-title>
          Steps
        </v-card-title>
        <v-list shaped>
          <v-list-item v-for="(ingredients, j) in ingredients" :key="j">
            <v-list-item-content>
              <v-list-item-title class="space" style="text-transform: capitalize;">{{ingredients.original}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </v-row>
    <v-divider inset class="my-2"/>
    <v-row justify="center" class="mt-5">
      <v-avatar size="100">
        <img src="../assets/usuario.png" alt="usuario" />
      </v-avatar>
    </v-row>
    <p class="text-center mt-3">Published By</p>
    <h3 class="text-center mt-n2">{{infoRecipe.sourceName}}</h3>
  </v-container>
</template>

<script>
import { mapState } from "vuex"
import recipesService from "@/services/recipesServices"
export default {

  name: 'Recipe',
  computed: {
    ...mapState(['recipes', 'userRecipes'])
  },
  data: () => ({
    active: false,
    item: 1,
    recipeId: '',
    infoRecipe:{},
    ingredients:[]
  }),
  methods:{
    async getRecipfyInfo() {
      this.recipeId = this.$route.params.id
      this.infoRecipe = await recipesService.getRecipeById(this.recipeId)
      this.ingredients = this.infoRecipe.extendedIngredients
    },
    async addFavRecipe() {
      this.active = true
      const data = {
        user: this.$store.getters.getUserId,
        recipe: this.recipeId
      }
      let newRecipes = [...this.userRecipes]
      newRecipes.push(this.recipeId)
      this.$store.commit('SET_USER_RECIPES', newRecipes)
      await this.$store.dispatch('addUserRecipe', data)
    },
    async removeFavRecipe() {
      this.active = false
      const data = {
        user: this.$store.getters.getUserId,
        recipe: this.recipeId
      }
      let newRecipes = [...this.userRecipes]
      newRecipes = newRecipes.filter(item => item !== this.recipeId)
      this.$store.commit('SET_USER_RECIPES', newRecipes)
      await this.$store.dispatch('removeUserRecipe', data)
    }
  },
  created(){
    this.getRecipfyInfo()
    const isFav = this.userRecipes.find(item => this.recipeId === item)
    if (isFav) {
      this.active = true
    }
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
