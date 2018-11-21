import klienci from './klienci';

const routes = [{
  path: '/',
  method: 'GET',
  handler: {
    file: 'index.html',
  },
}, {
    path: '/api',
    method: 'GET',
    handler: (request, h) => h.redirect('/api/klienci'),
  },
  ...klienci,
];

export default routes;
