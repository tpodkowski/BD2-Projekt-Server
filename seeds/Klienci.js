
exports.seed = function(knex, Promise) {
  var tableName = 'klienci';

  var rows = [{
    imie: 'Tomasz',
    nazwisko: 'Podkowski',
    nip: '123-456-32-18',
    adres: 'ul. Długa 30',
    rabat: 0,
  }, {
    imie: 'Tomasz',
    nazwisko: 'Woźniak',
    nip: '876-543-21-10',
    adres: 'ul. Krótka 6',
    rabat: 0,
  }];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
