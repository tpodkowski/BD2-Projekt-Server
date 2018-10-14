import Knex from '../knex';

const BIRDS = '/birds';

const routes = [{
  path: `${BIRDS}`,
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
  path: `${BIRDS}/{id}`,
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
      }).catch(error => error);
  }
}, {
  path: `${BIRDS}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('birds')
      .where({ id })
      .del()
      .catch(error => error);
  }
}, {
  path: `${BIRDS}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('birds')
      .insert(Object.assign(payload))
      .then( function (result) {
        return { success: true, message: 'ok' };
      })
      .catch(error => error);
  }
}];

export default routes;
