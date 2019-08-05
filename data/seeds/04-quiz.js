const uuid = require('uuid');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('quiz').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('quiz').insert([
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 1, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 1, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 2, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 2, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 3, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 3, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 4, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 4, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 14, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 14, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 15, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 15, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 19, published: true },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 19, published: false },
        { uuid: uuid(), cat_id: 1, subcat_id: 1, teamlead_id: 3, published: true }
      ]);
    });
};
