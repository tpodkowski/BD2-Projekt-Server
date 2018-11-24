import Knex from '../knex';

const zamowienia = '/api/zamowienia';

const routes = [{
  path: `${zamowienia}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex('Zamowienia').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${zamowienia}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Zamowienia')
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
  path: `${zamowienia}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Zamowienia')
      .where({ id })
      .del()
      .then(() => Knex('Zamowienia')
        .select()
        .then(list => list));
  }
}, {
  path: `${zamowienia}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('Zamowienia')
      .insert(Object.assign(payload))
      .then(() =>
        Knex('Zamowienia')
          .select()
          .then(list => list)
      )
      .catch(error => error);
  }
}];

export default routes;
