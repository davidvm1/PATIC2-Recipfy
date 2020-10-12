import Vue from 'vue'
import Vuex from 'vuex'
import recipesService from '@/services/recipesServices'
import firebaseService from '@/services/firebaseServices'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLogged: false,
    recipes: [],
    user: {},
    userRecipes: []
  },
  mutations: {
    CHANGE_SESSION_STATE (state, value) {
      state.isLogged = value
    },
    SET_RECIPES_STATE (state, value) {
      state.recipes = value
    },
    SET_NEW_USER (state, value) {
      state.user = value
    },
    SET_USER_RECIPES (state, value) {
      state.userRecipes = value
    }
  },
  actions: {
    getRecipes(VuexContext, ingredients) {
      return recipesService.getRecipesByIngredients(ingredients)
    },
    getUserRecipes (VuexContext, userId) {
      return firebaseService.getUserRecipes(userId)
    },
    addUserRecipe (VuexContext, data) {
      return firebaseService.addUserRecipe(data)
    },
    removeUserRecipe (VuexContext, data) {
      return firebaseService.addUserRecipe(data)
    }
  },
  modules: {
  },
  getters: {
    getUserId (state) {
      return state.user.user.uid
    }
  }
})
