const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  return knex('users').del()
    .then(() => Promise.all([
      generateHash('mave'),
      generateHash('lukin'),
      generateHash('kienan'),
      generateHash('jayden')
    ]))
    .then(([maveHash, lukinHash, kienanHash, jaydenHash]) =>
      knex('users').insert([
        {
          id: 1,
          username: 'Mave',
          email: 'mave@email.com',
          password: maveHash
        },
        {
          id: 2,
          username: 'Lukin',
          email: 'lukin@email.com',
          password: lukinHash
        },
        {
          id: 3,
          username: 'Kienan',
          email: 'kienan@email.com',
          password: kienanHash
        },
        {
          id: 4,
          username: 'Jayden',
          email: 'jayden@email.com',
          password: jaydenHash
        }
      ])
    )
}
