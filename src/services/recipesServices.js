import axios from 'axios'
const appKey = 'ad989c58cfe941d8a4db3f8d72e28d39'
const recipes = {}
recipes.getRecipesByIngredients = async (ingredients) => {
  let ingredientsQuery = ''
  try {
   await ingredients.forEach(item => ingredientsQuery = ingredientsQuery + item + ', ' )
    ingredientsQuery = ingredientsQuery.replace(/, $/,"")
    const request = {
      method: 'GET',
      params: {
        apiKey: appKey,
        ingredients: ingredientsQuery
      },
      url: `https://api.spoonacular.com/recipes/findByIngredients`
    }

    const response = await axios(request)
    return response.data
  } catch (e) {
    const message = e.response
    if (!message) throw new Error(e.message)
    else throw new Error(message.data.error)
  }
}
//En este método se hace la obtención de la información de la receta por medio del id, se toma el parametro includeNutrition en false
recipes.getRecipeById = async (recipeId) => {
  let ingredientsQuery = ''
  try {
    const request = {
      method: 'GET',
      params: {
        apiKey: appKey,
        includeNutrition: false
      },
      url: `https://api.spoonacular.com/recipes/${recipeId}/information`
    }

    const response = await axios(request)
    return response.data
  } catch (e) {
    const message = e.response
    if (!message) throw new Error(e.message)
    else throw new Error(message.data.error)
  }
}
export default recipes