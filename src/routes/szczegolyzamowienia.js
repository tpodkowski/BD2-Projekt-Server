import Knex from '../knex';

const szczegolyzamowienia = '/api/szczegolyzamowienia';

const routes = [{
  path: `${szczegolyzamowienia}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex('SzczegolyZamowienia').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${szczegolyzamowienia}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('SzczegolyZamowienia')
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
  path: `${szczegolyzamowienia}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('SzczegolyZamowienia')
      .where({ id })
      .del()
      .then(() => Knex('SzczegolyZamowienia')
        .select()
        .then(list => list));
  }
}, {
  path: `${szczegolyzamowienia}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('SzczegolyZamowienia')
      .insert(Object.assign(payload))
      .then(() =>
        Knex('SzczegolyZamowienia')
          .select()
          .then(list => list)
      )
      .catch(error => error);
  }
}];

export default routes;
