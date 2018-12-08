import klienci from './klienci';
import kategorie from './kategorie';
import produkty from './produkty';
import szczegolyzamowienia from './szczegolyzamowienia';
import zamowienia from './zamowienia';
import Knex from '../knex';

const routes = [{
  path: '/',
  method: 'GET',
  handler: {
      file: 'index.html',
    },
  }, {
    path: '/{any*}',
    method: ['GET', 'POST'],
    handler: (request, h) => h.redirect('/'),
  }, {
    path: '/api',
    method: 'GET',
    handler: (request, h) => h.redirect('/api/klienci'),
  }, {
    path: '/api/{any*}',
    method: ['GET', 'POST', 'DELETE', 'PATCH'],
    handler: (request, h) => h.response({ error: 'Not found.' }).code(404),
  },
  ...klienci,
  ...kategorie,
  ...produkty,
  ...szczegolyzamowienia,
  ...zamowienia,
];

export default routes;
