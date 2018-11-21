import Hapi from 'hapi';
import routes from './routes/routes';
import Path from 'path';
import Inert from 'inert';

const server = Hapi.server({
  port: 3000,
  host: 'localhost',
  routes: {
    files: {
      relativeTo: Path.join(__dirname, 'public'),
    },
  },
});

const init = async () => {

  await server.register(Inert);
  routes.forEach(route => server.route(route));
  await server.start();

  console.log(`Server started at ${ server.info.uri }`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
