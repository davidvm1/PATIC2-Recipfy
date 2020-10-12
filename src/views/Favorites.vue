<template>
  <v-row>
    <v-col cols="4" class="text-center d-flex">
      <v-card width="400"
              height="450"
              class="ml-16 align-self-center justify-center text-center"
              outlined
              elevation="7">
        <div class="text-center">
          <v-avatar size="200">
            <img src="../assets/usuario.png" alt="usuario" />
          </v-avatar>
        </div>
          <v-card-title class="align-center justify-center text-center">{{user.user.email}}</v-card-title>
          <v-card-subtitle class="mb-8">
            Medellin, Colombia
          </v-card-subtitle>
        <v-btn class="mt-8"
               color="#00575A"
               text>
          Modify your information
        </v-btn>
      </v-card>
    </v-col>
    <v-col cols="8">
      <h2 class="mt-8">My Favorites Recipes</h2>
      <v-divider class="mb-8" />
      <v-row>
        <v-card v-for="(item,index) in recipes"
                v-if="userRecipes"
                :key="index"
                style="margin: 20px"
                class="mx-auto"
                width="300">
          <v-img
            class="black--text align-end"
            height="150px"
            :src="item.image">
          </v-img>
          <v-card-title>{{item.title}}</v-card-title>

          <v-card-actions>
            <v-btn
              color="#00575A"
              text
              @click="$router.push({path: `/Recipe/${item.id}`})">
              See Details
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
  import { mapState, mapGetters } from "vuex"
  import recipesService from "@/services/recipesServices"
  export default {
    name:'favorites',
    computed: {
      ...mapState(['user', 'userRecipes']),
      ...mapGetters(['getUserId'])
    },
    data () {
      return {
        recipes: []
      }
    },
    async created() {
      if(this.userRecipes) {
        this.recipes = await recipesService.getMultipleRecipesById(this.userRecipes)
      }
    }
  }
</script>

<style scoped>

</style>
