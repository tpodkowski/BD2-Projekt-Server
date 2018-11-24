
exports.seed = function(knex, Promise) {
  var tableName = 'Klienci';

  var rows = [{
    imie: 'Tomasz',
    nazwisko: 'Podkowski',
    nip: '1234563218',
    ulica: 'Długa 30',
    kodPocztowy: '12-123',
	miejscowosc:'Poznań',
  },{
    imie: 'Jan',
    nazwisko: 'Nowak',
    nip: '0987654321',
    ulica: 'Krótka 2a',
    kodPocztowy: '32-523',
	miejscowosc:'Kamień',
  },{
    imie: 'Zygmunt',
    nazwisko: 'Waza',
    nip: '2233445566',
    ulica: 'Mostowa 5',
    kodPocztowy: '00-123',
	miejscowosc:'Wojciechowo',
  },{
    imie: 'Krzyszotf',
    nazwisko: 'Nowakowski',
    nip: '1212341230',
    ulica: 'Jarmarczna 1',
    kodPocztowy: '33-166',
	miejscowosc:'Częstochowa',
  }];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
