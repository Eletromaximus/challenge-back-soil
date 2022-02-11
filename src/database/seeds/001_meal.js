/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('meals').del()
    .then(function () {
      // Inserts seed entries
      return knex('meals').insert([
        {
          name: 'giselda',
          email: 'rowValue1',
          data: '01 Jan 1970 00:00:00 GMT'
        }
      ])
    })
}
