exports.seed = function(knex, Promise) {
  var tableName = 'Produkty';

  var rows = [{
    nazwa: 'Rower1',
    cena: '1500',
	 idKategoria:'1'
  }, {
    nazwa: 'Rower2',
    cena: '1000',
	idKategoria:'2'
  },{
    nazwa: 'Rower3',
    cena: '3200',
	 idKategoria:'2'
  },{
    nazwa: 'Rower4',
    cena: '1230',
	 idKategoria:'1'
  },{
    nazwa: 'Rower5',
    cena: '500',
	 idKategoria:'3'
  },{
    nazwa: 'Rower6',
    cena: '8000',
	 idKategoria:'4'
  },{
    nazwa: 'Dzwonek',
    cena: '15',
	 idKategoria:'5'
  },{
    nazwa: 'Oswietlenie',
    cena: '100',
	 idKategoria:'5'
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
