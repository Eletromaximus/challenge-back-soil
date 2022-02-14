/* eslint-disable node/no-path-concat */
module.exports = {
  development: {
    client: 'pg',
    connection: {},
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

}
