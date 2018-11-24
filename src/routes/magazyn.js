import Knex from '../knex';

const magazyn = '/api/magazyn';

const routes = [{
  path: `${magazyn}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex('Magazyn').select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${magazyn}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Magazyn')
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
  path: `${magazyn}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex('Magazyn')
      .where({ id })
      .del()
      .then(() => Knex('Magazyn')
        .select()
        .then(list => list));
  }
}, {
  path: `${magazyn}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex('Magazyn')
      .insert(Object.assign(payload))
      .then(() =>
        Knex('Magazyn')
          .select()
          .then(list => list)
      )
      .catch(error => error);
  }
}];

export default routes;
