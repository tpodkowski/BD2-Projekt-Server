
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Kategorie').del()
    .then(function () {
      // Inserts seed entries
      return knex('kategorie').insert([
        { nazwaKategorii: 'MTB'},
        { nazwaKategorii: 'Szosowy' },
        { nazwaKategorii: 'Miejski' },
        { nazwaKategorii: 'Fatbike'},
        { nazwaKategorii: 'Akcesoria' },
      ]);
    });

};
