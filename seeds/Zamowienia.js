exports.seed = function(knex, Promise) {
  var tableName = 'Zamowienia';

  var rows = [{
    idKlienta: '1',
    data: '2018-11-21',
  }, {
    idKlienta: '2',
    data: '2018-11-14',
  },{
    idKlienta: '1',
    data: '2018-11-21',
  },];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
