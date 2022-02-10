const { uuid } = require('uuidv4')

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { id: uuid(), name: 'rowValue1', password: 'çliajhsdifgj' },
        { id: uuid(), name: 'rowValue2', password: 'çliajhsdifgj' },
        { id: uuid(), name: 'rowValue3', password: 'çliajhsdifgj' }
      ])
    })
}
