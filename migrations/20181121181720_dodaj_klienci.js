
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('klienci', function (birdsTable) {
      // Primary Key
      birdsTable.increments();

      // Data
      birdsTable.string('imie', 250).notNullable();
      birdsTable.string('nazwisko', 250).notNullable();
      birdsTable.string('nip', 250).notNullable();
      birdsTable.string('adres', 36).notNullable().unique();
      birdsTable.integer('rabat').notNullable().defaultTo(0);

      birdsTable.timestamp('created_at').notNullable();
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('klienci');
};
