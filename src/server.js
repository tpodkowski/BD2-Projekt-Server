import Hapi from 'hapi';
import Knex from './knex';

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

server.route({
  path: '/',
  method: 'GET',
  handler: (request, h) => {
    return h.redirect('/birds');
  }
});

server.route({
  path: '/birds',
  method: 'GET',
  handler: (request, h) => {
    const birds = Knex('birds').where({
      isPublic: true
    }).select('name', 'species', 'picture_url').then((results) => {
      return results;
    }).catch((err) => {
      return 'server-side error';
    });

    return birds;
  }
});

const init = async () => {
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
