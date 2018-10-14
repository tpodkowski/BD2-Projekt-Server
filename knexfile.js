require('dotenv').config()

module.exports = {
  development: {
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      tableName: './seeds'
    },
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      port: '8889',
      user: 'birdbase',
      password: 'birdbase',
      database: 'birdbase',
      charset: 'utf8',
    }
  }
};
