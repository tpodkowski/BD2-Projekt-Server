import Knex from '../knex';

const routes = [{
  path: '/birds',
  method: 'GET',
  handler: (request, h) => {
    return Knex('birds').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: '/birds/{id}',
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('birds')
      .where({ id })
      .select().then((results) => {
        if (results.length) {
          return results[0];
        } else {
          return {};
        }
      }).catch((err) => {
        return err;
      });
  }
}];

export default routes;
