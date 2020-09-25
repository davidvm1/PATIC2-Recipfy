<template>
  <v-container>
    <v-row>
      <v-img src="../assets/logo.png" height="20vh" width="50%" contain></v-img>
    </v-row>
    <v-row align="center">
      <v-combobox
        v-model="ingredients"
        :items="ingredients"
        label="Ingresa tus ingredientes"
        clearable
        multiple
        chips
        deletable-chips
        persistent-hint>
        <template v-slot:no-data>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Preciona <kbd>enter</kbd> para agregar ingredientes
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-combobox>

    </v-row>

    <v-row justify="center">
      <v-btn class="ml-2"
             large
             @click="getRecipes">
        Buscar
      </v-btn>
    </v-row>

    <v-alert class="mt-5"
             type="error"
             v-if="error">
      {{error.message}}
    </v-alert>
  </v-container>
</template>

<script>
  import recipesService from '@/services/recipesServices'
export default {
  data() {
    return {
      chips: [],
      error: '',
      ingredients: [],
      recipes: []
    }
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    },
    async getRecipes () {
      let result
      try {
        result = await recipesService.getRecipesByIngredients(this.ingredients)
        console.log(result)
      } catch (e) {
          this.error = e
      }
    }
  },
}
</script>

<style>
</style>
