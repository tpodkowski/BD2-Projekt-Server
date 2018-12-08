exports.seed = function(knex, Promise) {
  var tableName = 'Produkty';

  var rows = [{
    nazwa: 'Rower1',
    cena: '1500',
	 idKategorii:'1'
  }, {
    nazwa: 'Rower2',
    cena: '1000',
	idKategorii:'2'
  },{
    nazwa: 'Rower3',
    cena: '3200',
	 idKategorii:'2'
  },{
    nazwa: 'Rower4',
    cena: '1230',
	 idKategorii:'1'
  },{
    nazwa: 'Rower5',
    cena: '500',
	 idKategorii:'3'
  },{
    nazwa: 'Rower6',
    cena: '8000',
	 idKategorii:'4'
  },{
    nazwa: 'Dzwonek',
    cena: '15',
	 idKategorii:'5'
  },{
    nazwa: 'Oswietlenie',
    cena: '100',
	 idKategorii:'5'
  },
];

  // Deletes ALL existing entries
  return knex(tableName)
    .del()
    .then(function () {
      // Inserts seed entries
      return knex(tableName).insert(rows);
    });
};
