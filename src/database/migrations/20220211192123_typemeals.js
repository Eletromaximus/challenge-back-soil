/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('typemeals', (table) => {
    table.integer('grams').notNullable()
    table.text('type').notNullable()
    table.text('id').unique()
    table.text('id_meals')
    table.foreign('id_meals').references('id').inTable('meals')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

}
