exports.up = function (knex, Promise) {
  return knex
    .schema
    .createTable('Klienci', clientTable => {
      // Primary Key
      clientTable.increments('idKlienta');

      // Data
      clientTable.string('imie', 25).notNullable();
      clientTable.string('nazwisko', 25).notNullable();
      clientTable.string('nip', 10).notNullable();
      clientTable.string('ulica', 36).notNullable();
      clientTable.string('kodPocztowy', 6).notNullable();
      clientTable.string('miejscowosc', 12).notNullable();
    })

    .createTable('Kategorie', categoryTable => {
      categoryTable.increments('idKategorii');
      categoryTable.string('nazwaKategorii', 25).notNullable();
    })

    .createTable('Produkty', produktyTable => {
      produktyTable.increments('idProduktu');
      produktyTable.string('nazwa', 25).notNullable();
      produktyTable.integer('cena', 10).notNullable();
      produktyTable.integer('idKategorii').unsigned().notNullable();

      produktyTable.foreign('idKategorii').references('idKategorii').inTable('Kategorie');

    })

    .createTable('Zamowienia', zamowieniaTable => {
      zamowieniaTable.increments('idZamowienia');
      zamowieniaTable.integer('idKlienta').unsigned().notNullable();
      zamowieniaTable.date('data', 10).notNullable();

      zamowieniaTable.foreign('idKlienta').references('idKlienta').inTable('Klienci');
    })

    .createTable('SzczegolyZamowienia', detailsTable => {
      detailsTable.increments('idSzczegolyZamowienia');
      detailsTable.integer('idProduktu').unsigned().notNullable();
      detailsTable.integer('idZamowienia').unsigned().notNullable();
      detailsTable.integer('ilosc', 10).notNullable();
      detailsTable.integer('Rabat', 10).notNullable();

      detailsTable.foreign('idProduktu').references('idProduktu').inTable('Produkty');
      detailsTable.foreign('idZamowienia').references('idZamowienia').inTable('Zamowienia');
    });
  };

exports.down = function (knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('SzczegolyZamowienia')
    .dropTableIfExists('Zamowienia')
    .dropTableIfExists('Kategorie')
    .dropTableIfExists('Produkty')
    .dropTableIfExists('Klienci');
};
