/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients_per_step').del()
  await knex('ingredients_per_step').insert([
    {id: 1, step_id: 1, ingredient_id: 1, quantity: 2},
    {id: 2, step_id: 2, ingredient_id: 2, quantity: 3},
    {id: 3, step_id: 4, ingredient_id: 1, quantity: 10},
    {id: 4, step_id: 6, ingredient_id: 3, quantity: 2},
    {id: 5, step_id: 8, ingredient_id: 4, quantity: 0.125},
    {id: 6, step_id: 9, ingredient_id: 6, quantity: 4},
    {id: 7, step_id: 10, ingredient_id: 5, quantity: 0.125},
    {id: 8, step_id: 11, ingredient_id: 6, quantity: 4},
    {id: 9, step_id: 1, ingredient_id: 7, quantity: 1}
  ]);
};
