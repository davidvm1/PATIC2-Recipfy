import Vue from 'vue'
import Vuex from 'vuex'
import recipesService from '@/services/recipesServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    recipes: []
  },
  mutations: {
    CHANGE_SESSION_STATE (state, value) {
      state.isLogged = value
    },
    SET_RECIPES_STATE (state, value) {
      state.recipes = value
    }
  },
  actions: {
    getRecipes(VuexContext, ingredients) {
      return recipesService.getRecipesByIngredients(ingredients)
    }
  },
  modules: {
  }
})
