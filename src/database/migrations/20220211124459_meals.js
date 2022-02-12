/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('meals', (table) => {
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.text('id').notNullable().primary().unique()
    table.foreign('email').references('email').inTable('users')
    table.text('data')
    table.text('carboidratos')
    table.text('proteinas')
    table.text('vegetais')
    table.float('gramsCarboidratos')
    table.float('gramsProteinas')
    table.float('gramsVegetais')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('meals')
}
