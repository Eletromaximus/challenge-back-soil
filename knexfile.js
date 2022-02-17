/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  }
}
