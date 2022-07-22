const db = require('../../data/db-config');

async function getRecipeById(recipeId){
    const recipes = await db('recipes as rec')
        .select('rec.id as recipe_id', 'rec.recipe_name', 'rec.created_at', 'st.id as step_id', 'st.step_instructions', 'st.step_number', 'ing.id as ingredient_id', 'ing.ingredient_name', 'req_ing.quantity')
        .rightJoin('steps as st', 'rec.id', 'st.recipe_id')
        .leftJoin('ingredients_per_step as req_ing', 'st.id', 'req_ing.step_id')
        .leftJoin('ingredients as ing', 'req_ing.ingredient_id', 'ing.id')
        .where('rec.id', recipeId)
        .groupBy('st.id', 'req_ing.id')
        .orderBy('rec.id', 'asc');
        
    const recipe = {
        recipe_id: recipes[0].recipe_id,
        recipe_name: recipes[0].recipe_name,
        created_at: recipes[0].created_at,
        steps: recipes
            .map((step, stepIdx, steps) => {
                const ingredientsArr = [];
                if(stepIdx+1 !== steps.length && step.step_id !== steps[stepIdx+1].step_id || stepIdx+1 === steps.length){
                    steps
                        .filter(eachStep => eachStep.step_id === step.step_id)
                        .map(eachStep => {
                            if(eachStep.ingredient_id != null){
                                ingredientsArr.push({
                                    ingredient_id: eachStep.ingredient_id,
                                    ingredient_name: eachStep.ingredient_name,
                                    quantity: eachStep.quantity
                                })
                            }
                        })
                        
                    return ({
                        step_id: step.step_id,
                        step_instructions: step.step_instructions,
                        step_number: step.step_number,
                        ingredients: ingredientsArr,
                    })
                } else {
                    return;
                }
            })
            .filter(step => step != null)
    }
    return recipe;
}

module.exports = {
    getRecipeById,

}