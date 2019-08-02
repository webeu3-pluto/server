
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('subcategories').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('subcategories').insert([
        { name: 'User Interface and Git', cat_id: 1 },
        { name: 'Advanced CSS', cat_id: 1 },
        { name: 'JavaScript Fundamentals', cat_id: 1 },
        { name: 'WEB Java Fundamentals', cat_id: 2 },
        { name: 'RDBMS and API Introduction', cat_id: 2 },
        { name: 'Java Frameworks', cat_id: 2 },
        { name: 'UX Fundamentals', cat_id: 3 },
        { name: 'Introduction to Design Theory', cat_id: 3 },
        { name: 'UI Fundamentals', cat_id: 3 },
        { name: 'Dealing with Data', cat_id: 4 },
        { name: 'Data Wrangling and Storytelling', cat_id: 4 },
        { name: 'Statistical Tests and Experiments', cat_id: 4 },
        { name: 'Linear Algebra', cat_id: 4 },
        { name: 'Android Fundamentals I', cat_id: 5 },
        { name: 'Android Fundamentals II', cat_id: 5 },
        { name: 'Android Networking', cat_id: 5 },
        { name: 'Android User Interface', cat_id: 5 },
        { name: 'SWIFT Fundamentals', cat_id: 6 },
        { name: 'iOS Fundamentals I', cat_id: 6 },
        { name: 'iOS Fundamentals II', cat_id: 6 },
      ]);
    });
};
