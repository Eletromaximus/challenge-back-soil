/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: DATABASE_URL,
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  ssl: true,
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  },
  pool: {
    min: 2,
    max: 10
  }
}
