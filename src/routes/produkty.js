import Knex from '../knex';

const produkty = '/api/produkty';

const routes = [{
  path: `${produkty}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex('Produkty').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${produkty}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Produkty')
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
  path: `${produkty}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Produkty')
      .where({ id })
      .del()
      .then(() => Knex('Produkty')
        .select()
        .then(list => list));
  }
}, {
  path: `${produkty}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('Produkty')
      .insert(Object.assign(payload))
      .then(() =>
        Knex('Produkty')
          .select()
          .then(list => list)
      )
      .catch(error => error);
  }
}];

export default routes;
