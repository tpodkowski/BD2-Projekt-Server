
exports.seed = function(knex, Promise) {
  var tableName = 'Magazyn';

  var rows = [{
    idProduktu: '1',
    ilosc: '5',
  }, {
    idProduktu: '2',
    ilosc: '5',
  }, {
    idProduktu: '3',
    ilosc: '5',
  },{
    idProduktu: '4',
    ilosc: '10',
  },{
    idProduktu: '5',
    ilosc: '10',
  }];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
