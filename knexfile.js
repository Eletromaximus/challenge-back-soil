/* eslint-disable node/no-path-concat */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'dplqnvapxjylbr',
      database: 'd3mqkbj9lib09m',
      password: '6d3cc1ceb0ea408da56fb8088643bacac0b0588920d1fa04bcf91c8756e79abf'
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

}
