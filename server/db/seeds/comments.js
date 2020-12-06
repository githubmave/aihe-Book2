
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {id: 1, post_id: 111, date_posted: new Date(Date.now()), comment: 'Cool idea'},
        {id: 1, post_id: 112, date_posted: new Date(Date.now()), comment: 'Thanks for sharing Kienan'},
        {id: 1, post_id: 113, date_posted: new Date(Date.now()), comment: 'Missing hanging with you Jayden!'},
      ]);
    });
};
