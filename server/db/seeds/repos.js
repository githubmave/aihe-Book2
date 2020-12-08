exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('repos').del()
    .then(function () {
      // Inserts seed entries
      return knex('repos').insert([
        { id: 1, repo_name: 'dog-tinder', repo_link: 'https://github.com/aihe-2020/dog-tinder' },
        { id: 2, repo_name: 'day-tripper', repo_link: 'https://github.com/aihe-2020/day-tripper' },
        { id: 3, repo_name: 'aihe-book', repo_link: 'https://github.com/aihe-2020/aihe-book' },
        { id: 4, repo_name: 'jv-jokes', repo_link: 'https://github.com/aihe-2020/jv-jokes' },
        { id: 5, repo_name: 'boilerplate-fullstack', repo_link: 'https://github.com/aihe-2020/boilerplate-fullstack' },
        { id: 6, repo_name: 'todo-full-stack', repo_link: 'https://github.com/aihe-2020/todo-full-stack' },
        { id: 7, repo_name: 'knex-joins-stories', repo_link: 'https://github.com/aihe-2020/knex-joins-stories' },
        { id: 8, repo_name: 'pupparazzi', repo_link: 'https://github.com/aihe-2020/pupparazzi' },
        { id: 9, repo_name: 'jwt-auth', repo_link: 'https://github.com/aihe-2020/jwt-auth' },
        { id: 10, repo_name: 'charlottes-web-log-api', repo_link: 'https://github.com/aihe-2020/charlottes-web-log-api' },
        { id: 11, repo_name: 'GitLit', repo_link: 'https://github.com/aihe-2020/GitLit' },
        { id: 12, repo_name: 'TheButton', repo_link: 'https://github.com/aihe-2020/TheButton' },
        { id: 13, repo_name: 'code-from-class', repo_link: 'https://github.com/aihe-2020/code-from-class' },
        { id: 14, repo_name: 'React-App-Project', repo_link: 'https://github.com/aihe-2020/React-App-Project' }
      ])
    })
}
