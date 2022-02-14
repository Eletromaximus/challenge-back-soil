/* eslint-disable node/no-path-concat */
module.exports = {
  client: 'pg',
  connection: 'postgres://dplqnvapxjylbr:6d3cc1ceb0ea408da56fb8088643bacac0b0588920d1fa04bcf91c8756e79abf@ec2-35-175-68-90.compute-1.amazonaws.com:5432/d3mqkbj9lib09m',
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
