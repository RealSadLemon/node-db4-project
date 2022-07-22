/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
        tbl.increments()
        tbl.varchar('recipe_name').notNullable()
        tbl.datetime('created_at', { precision: 6 }).defaultTo(knex.fn.now())
    })
    .createTable('steps', tbl => {
        tbl.increments()
        tbl.string('step_instructions').notNullable()
        tbl.integer('step_number').notNullable()
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
    })
    .createTable('ingredients', tbl => {
        tbl.increments()
        tbl.varchar('ingredient_name', 80).notNullable().unique()
    })
    .createTable('ingredients_per_step', tbl => {
        tbl.increments()
        tbl.integer('step_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('steps')
        tbl.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
        tbl.decimal('quantity').notNullable()
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('ingredients_per_step')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('steps')
    .dropTableIfExists('recipes')
};
