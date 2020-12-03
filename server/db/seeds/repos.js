exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('repos').del()
    .then(function () {
      // Inserts seed entries
      return knex('repos').insert([
        { id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' },
        { id: 2, repo_name: 'day-tripper', repo_link: 'https://github.com/aihe-2020/day-tripper' },
        { id: 3, repo_name: 'aihe-book', repo_link: 'https://github.com/aihe-2020/aihe-book' }
      ])
    })
}
