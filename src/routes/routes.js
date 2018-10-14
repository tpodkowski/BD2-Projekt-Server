import birds from './birds';

const routes = [{
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      console.warn('Redirecting to /birds');
      return h.redirect('/birds');
    }
  },
  ...birds,
];

export default routes;
