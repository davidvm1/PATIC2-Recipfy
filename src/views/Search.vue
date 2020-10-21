<template>
  <v-container>
    <v-row>
      <v-img src="../assets/logo.png" height="20vh" width="50%" contain></v-img>
    </v-row>
    <v-row align="center">
      <v-combobox
        v-model="ingredients"
        :items="ingredients"
        label="Add ingredients"
        clearable
        multiple
        chips
        deletable-chips
        persistent-hint>
        <template>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>
                Press <kbd>enter</kbd> to add ingredients
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
        Search
      </v-btn>
    </v-row>
    <v-row>
      <v-card v-for="(item,index) in recipes"
              :key="index"
              cols ="4"
              class="mx-auto"
              style="margin: 10px; position: relative"
              width="350"
              height="365"
              >
        <v-img
          class="black--text align-end"
          height="200px"
          :src="item.image">
        </v-img>
        <v-card-title>{{item.title}}</v-card-title>

        <v-card-actions style="position: absolute; bottom: 5px">
          <v-btn
            color="#00575A"
            text
            @click="$router.push({path: `/Recipe/${item.id}`})">
            See Details
          </v-btn>
          <div class="d-inline-flex mr-2" style="margin-left: 150px">
            <v-icon color="red" class="mr-3">
              mdi-heart
            </v-icon>
            <span>{{item.likes}}</span>
          </div>
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
  }
}
</script>

<style>
  .v-application .primary--text {
    color: #00575A !important;
    caret-color: #00575A !important;
  }
</style>
