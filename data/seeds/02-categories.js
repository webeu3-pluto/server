
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        { name: 'Full Stack Web Development' },
        { name: 'Java Backend Development' },
        { name: 'User Experience Design' },
        { name: 'Data Science' },
        { name: 'Android Development' },
        { name: 'iOS Development' },
      ]);
    });
};
