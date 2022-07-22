/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('steps').del()
  await knex('steps').insert([
    {id: 1, step_instructions: 'Put cups of water in pot', step_number: 1, recipe_id: 1},
    {id: 2, step_instructions: 'Put eggs in water', step_number: 2, recipe_id: 1},
    {id: 3, step_instructions: 'Bring water to a boil', step_number: 3, recipe_id: 1},
    {id: 4, step_instructions: 'Strain eggs and rinse with cold water', step_number: 4, recipe_id: 1},
    {id: 5, step_instructions: 'Peel eggs and enjoy!', step_number: 5, recipe_id: 1},
    {id: 6, step_instructions: 'Put bread in toaster', step_number: 1, recipe_id: 2},
    {id: 7, step_instructions: 'Pull lever to begin toasting', step_number: 2, recipe_id: 2},
    {id: 8, step_instructions: 'When toast pops up, spread butter onto toast and enjoy!', step_number: 3, recipe_id: 2},
    {id: 9, step_instructions: 'Put bacon in microwave to defrost', step_number: 1, recipe_id: 3},
    {id: 10, step_instructions: 'Put small amount of oil on pan/skillet', step_number: 2, recipe_id: 3},
    {id: 11, step_instructions: 'Put bacon on pan/skillet', step_number: 3, recipe_id: 3},
    {id: 12, step_instructions: 'Remove bacon once browned to taste', step_number: 4, recipe_id: 3}
  ]);
};
