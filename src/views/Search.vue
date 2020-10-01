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
    <v-row>
      <v-card v-for="(item,index) in recipes"
              :key="index"
              cols ="4"
              class="mx-auto"
              style="margin: 10px"
              width="350">
        <v-img
          class="black--text align-end"
          height="200px"
          :src="item.image">
        </v-img>
        <v-card-title>{{item.title}}</v-card-title>

        <v-card-actions>
          <v-btn
            color="#00575A"
            text>
            See Details
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-row>


    <v-alert class="mt-5"
             type="error"
             v-if="error">
      {{error}}
    </v-alert>
  </v-container>
</template>

<script>
  import { mapState } from "vuex"
export default {
  computed: {
    ...mapState(['recipes'])
  },
  data() {
    return {
      chips: [],
      error: '',
      ingredients: []
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
        result = await this.$store.dispatch('getRecipes', this.ingredients)
        this.$store.commit('SET_RECIPES_STATE', result)
        if (this.recipes.length === 0) {
          this.error = 'No Recipes Found, Try Again!'
        }else this.error = null
      } catch (e) {
          this.error = e
      }
    }
  },
}
</script>

<style>
</style>
