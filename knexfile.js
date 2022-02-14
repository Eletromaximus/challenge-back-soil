/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: {
    user: process.env.USER_NAME,
    database: process.env.DATABASE_URL || 'max',
    password: '48273#Xz'
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
