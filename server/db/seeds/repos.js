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
        { id: 15, repo_name: 'async-redux-stories', repo_link: 'https://github.com/aihe-2020/async-redux-stories' },
        { id: 16, repo_name: 'taxonomic-routing', repo_link: 'https://github.com/aihe-2020/taxonomic-routing' }
        { id: 17, repo_name: 'sweet-as-beers', repo_link: 'https://github.com/aihe-2020/sweet-as-beers' },
        { id: 18, repo_name: 'boilerplate-react-webpack', repo_link: 'https://github.com/aihe-2020/boilerplate-react-webpack' }
        { id: 19, repo_name: 'react-redux-stories', repo_link: 'https://github.com/aihe-2020/react-redux-stories' },
        { id: 20, repo_name: 'lightning-talks', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'redux-minimal', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'broken-kaleidoscope', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'donbot', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'surrendedAt13', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'You-Are-Fired', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'meme-generator', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'knex-todo-cli', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'Banksies-untiled-2020-project', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'soundboard-senpai', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'cursed-cursor', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'knex-relationships-stories', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'react-form-demo', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'ascii-art-reader', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'totally-legal-pokedex', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis ', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis ', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis ', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis ', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
        { id: 20, repo_name: 'consuming-external-apis ', repo_link: 'https://github.com/aihe-2020/lightning-talks' },
      ])
    })
}
