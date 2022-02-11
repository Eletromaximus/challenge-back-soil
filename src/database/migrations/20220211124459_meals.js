/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('meals', (table) => {
    table.text('name').notNullable()
    table.text('email').notNullable()
    table.foreign('email').references('email').inTable('users')
    table.timestamp('data').primary()
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('meals')
}
