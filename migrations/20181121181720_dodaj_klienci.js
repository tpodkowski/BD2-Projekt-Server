
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('Klienci', clientTable => {
      // Primary Key
      clientTable.increments();

      // Data
      clientTable.string('imie', 25).notNullable();
      clientTable.string('nazwisko', 25).notNullable();
      clientTable.string('nip', 10).notNullable();
      clientTable.string('ulica', 36).notNullable();
	  clientTable.string('kodPocztowy',6).notNullable();
	  clientTable.string('Miejscowosc',12).notNullable();

      clientTable.timestamp('created_at').notNullable();
    }
		
    .createTable('Kategorie', categoryTable => {
      categoryTable.increments();
		categoryTable.string('nazwaKategorii', 25).notNullable();
    })
		
	.createTable('Magazyn', magazynTable => {
      magazynTable.increments();
		magazynTable.int('idProduktu', 10).notNullable();
		magazynTable.int('ilosc',10).notNullable();
	})
		
	.createTable('Produkty', produktyTable => {
		produktyTable.increments();
			produktyTable.string('nazwa',25).notNullable();
			produktyTable.int('cena', 10).notNullable();
			produktyTable.int('idKategoria',10).notNullable();
	})
	
	.createTable('SzczegolyZamowienia', detailsTable => {
		detailsTable.increments();
			detailsTable.int('idProduktu',10).notNullable();
			detailsTable.int('idZamowienia', 10).notNullable();
			detailsTable.int('ilosc',10).notNullable();
			detailsTable.int('Rabat',10).notNullable();
	})
	
	.createTable('Zamowienia', zamowieniaTable => {
		zamowieniaTable.increments();
			zamowieniaTable.int('idKlienta',10).notNullable();
			zamowieniaTable.date('data', 10).notNullable();
	})


};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('Klienci')
	.dropTableIfExists('Kategorie')
	.dropTableIfExists('Magazyn')
	.dropTableIfExists('Produkty')
	.dropTableIfExists('SzczegolyZamowienia')
	.dropTableIfExists('Zamowienia')
};
