
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('kategorie').del()
    .then(function () {
      // Inserts seed entries
      return knex('kategorie').insert([
        { nazwaKategorii: 'Szosa' },
        { nazwaKategorii: 'MTB' },
        { nazwaKategorii: 'DH' },
      ]);
    });

};
