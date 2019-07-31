
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subcategories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('subcategories').insert([
        { id: 1, name: 'User Interface and Git', cat_id: 1 },
        { id: 2, name: 'Advanced CSS', cat_id: 1 },
        { id: 3, name: 'JavaScript Fundamentals', cat_id: 1 },
        { id: 4, name: 'WEB Java Fundamentals', cat_id: 2 },
        { id: 5, name: 'RDBMS and API Introduction', cat_id: 2 },
        { id: 6, name: 'Java Frameworks', cat_id: 2 },
        { id: 7, name: 'UX Fundamentals', cat_id: 3 },
        { id: 8, name: 'Introduction to Design Theory', cat_id: 3 },
        { id: 9, name: 'UI Fundamentals', cat_id: 3 },
        { id: 10, name: 'Dealing with Data', cat_id: 4 },
        { id: 11, name: 'Data Wrangling and Storytelling', cat_id: 4 },
        { id: 12, name: 'Statistical Tests and Experiments', cat_id: 4 },
        { id: 13, name: 'Linear Algebra', cat_id: 4 },
        { id: 14, name: 'Android Fundamentals I', cat_id: 5 },
        { id: 15, name: 'Android Fundamentals II', cat_id: 5 },
        { id: 16, name: 'Android Networking', cat_id: 5 },
        { id: 17, name: 'Android User Interface', cat_id: 5 },
        { id: 18, name: 'SWIFT Fundamentals', cat_id: 6 },
        { id: 19, name: 'iOS Fundamentals I', cat_id: 6 },
        { id: 20, name: 'iOS Fundamentals II', cat_id: 6 },
      ]);
    });
};
