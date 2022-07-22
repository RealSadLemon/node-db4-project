/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('recipes').del()
  await knex('recipes').insert([
    {id: 1, recipe_name: 'Boiled Eggs'},
    {id: 2, recipe_name: 'Buttered Toast'},
    {id: 3, recipe_name: 'Bacon'}
  ]);
};
