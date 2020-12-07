
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, post_id: 1, date_posted: new Date(Date.now()), comment: 'Cool idea'},
        {id: 2, post_id: 2, date_posted: new Date(Date.now()), comment: 'Thanks for sharing Kienan'},
      ]);
    });
};
