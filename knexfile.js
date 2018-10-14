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
      host: 'locaholst',
      user: 'user',
      password: 'password',
      database: 'birdbase',
      charset: 'utf8',
    }
  }
};
