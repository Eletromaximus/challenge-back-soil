/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: {
    host: 'host',
    database: process.env.DATABASE,
    user: process.env.USER_NAME,
    password: process.env.USER_PASSWORD || '48273#Xz',
    port: 5432
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/src/database/migrations`
  },
  seeds: {
    directory: `${__dirname}/src/database/seeds`
  },
  pool: {
    min: 2,
    max: 10
  }
}
