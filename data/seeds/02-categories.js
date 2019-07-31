
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { id: 1, name: 'Full Stack Web Development' },
        { id: 2, name: 'Java Backend Development' },
        { id: 3, name: 'User Experience Design' },
        { id: 4, name: 'Data Science' },
        { id: 5, name: 'Android Development' },
        { id: 6, name: 'iOS Development' },
      ]);
    });
};
