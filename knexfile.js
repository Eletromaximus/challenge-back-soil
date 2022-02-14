/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: {
    database: 'd3mqkbj9lib09m' || 'max',
    user: 'dplqnvapxjylbr',
    password: '6d3cc1ceb0ea408da56fb8088643bacac0b0588920d1fa04bcf91c8756e79abf',
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
