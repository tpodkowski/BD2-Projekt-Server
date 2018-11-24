import Knex from '../knex';

const tableName = 'kategorie';
const kategorie = '/api/kategorie';

const routes = [{
  path: `${kategorie}`,
  method: 'GET',
  handler: (request, h) => {
    return Knex(tableName).select()
      .then((results) => {
        return results;
    }).catch((err) => {
      return err;
    });
  }
}, {
  path: `${kategorie}/{id}`,
  method: 'GET',
  handler: (request) => {
    const { id } = request.params;

    return Knex(tableName)
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
  path: `${kategorie}/{id}`,
  method: 'DELETE',
  handler: (request) => {
    const { id } = request.params;

    return Knex(tableName)
      .where({ id })
      .del()
      .then(() => Knex(tableName)
        .select()
        .then(list => list));
  }
}, {
  path: `${kategorie}`,
  method: 'POST',
  handler: (request) => {
    const { payload } = request;

    return Knex(tableName)
      .insert(Object.assign(payload))
      .then( function (result) {
        return { success: true, message: 'ok' };
      })
      .catch(error => error);
  }
}];

export default routes;
