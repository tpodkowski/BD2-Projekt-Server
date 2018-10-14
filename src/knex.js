export default require('knex')({
  client: 'mysql',
  connection: {
    host: '127.0.0.1',
    port: '8889',
    user: 'birdbase',
    password: 'password',
    database: 'birdbase',
    charset: 'utf8',
  }
});
