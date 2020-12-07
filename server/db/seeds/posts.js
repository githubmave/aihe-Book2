exports.seed = (knex, Promise) => {
    // Deletes ALL existing entries
    return knex('Posts').del()
      .then(function () {
        // Inserts seed entries
        return knex('Posts').insert([
          {id: 1, title: 'The beginning of a forum', comment_count: 0, date_created: new Date(Date.now()), paragraphs: JSON.stringify([
            'this is a sample forum post, post something below'
          ])},
          {id: 2, title: 'Good News', comment_count: 1, date_created: new Date(Date.now()), paragraphs: JSON.stringify([
            'we got a forum'
          ])}
        ])
      })
  }
