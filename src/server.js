import Hapi from 'hapi';
import routes from './routes/routes';

const server = Hapi.server({
  port: 3000,
  host: 'localhost'
});

const init = async () => {
  routes.forEach(route => server.route(route));

  await server.start();

  console.log(`Server started at ${ server.info.uri }`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
