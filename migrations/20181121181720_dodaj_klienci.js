
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('klienci', clientTable => {
      // Primary Key
      clientTable.increments();

      // Data
      clientTable.string('imie', 250).notNullable();
      clientTable.string('nazwisko', 250).notNullable();
      clientTable.string('nip', 250).notNullable();
      clientTable.string('adres', 36).notNullable().unique();
      clientTable.integer('rabat').notNullable().defaultTo(0);

      clientTable.timestamp('created_at').notNullable();
    })
    .createTable('kategorie', categoryTable => {
      categoryTable.increments();

      categoryTable.string('nazwaKategorii', 250).notNullable();
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('klienci');
};
