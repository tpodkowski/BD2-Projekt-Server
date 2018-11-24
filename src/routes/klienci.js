import Knex from '../knex';

const klienci = '/api/klienci';

const routes = [{
  path: `${klienci}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex('klienci').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${klienci}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('klienci')
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
  path: `${klienci}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('klienci')
      .where({ id })
      .del()
      .then(() => Knex('klienci')
        .select()
        .then(list => list));
  }
}, {
  path: `${klienci}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('klienci')
      .insert(Object.assign(payload))
      .then(() =>
        Knex('klienci')
          .select()
          .then(list => list)
      )
      .catch(error => error);
  }
}];

export default routes;
