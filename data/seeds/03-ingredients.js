/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('ingredients').del()
  await knex('ingredients').insert([
    {id: 1, ingredient_name: 'water'},
    {id: 2, ingredient_name: 'eggs'},
    {id: 3, ingredient_name: 'bread'},
    {id: 4, ingredient_name: 'butter'},
    {id: 5, ingredient_name: 'olive oil'},
    {id: 6, ingredient_name: 'bacon strip(s)'},
    {id: 7, ingredient_name: 'the pot/pan'}
  ]);
};
