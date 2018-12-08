import Knex from '../knex';
import handlers from '../utils/handlers';
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
  handler: handlers.deleteHandler(tableName),
}, {
  path: `${kategorie}`,
  method: 'POST',
  handler: handlers.postHandler(tableName),
}];

export default routes;
