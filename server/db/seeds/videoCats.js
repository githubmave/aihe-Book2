exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('videoCats').del()
    .then(function () {
      // Inserts seed entries
      return knex('videoCats').insert([
        { id: 1, cat_name: 'auth' },
        { id: 2, cat_name: 'react' },
        { id: 3, cat_name: 'express' }
      ])
    })
}
