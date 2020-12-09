exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('videos')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {
          id: 1,
          video_name: 'authentication',
          video_link: 'https://www.youtube.com/watch?v=j3d5NdG6c6k',
          video_category: 'auth',
          cat_id: 1
        },
        {
          id: 2,
          video_name: 'intro to react',
          video_link: 'https://www.youtube.com/watch?v=RYPcPEmZ4Ts&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=4',
          video_category: 'react',
          cat_id: 2
        },
        {
          id: 3,
          video_name: 'server side router',
          video_link: 'https://www.youtube.com/watch?v=JeH7l8fUps4&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=2',
          video_category: 'express',
          cat_id: 3
        },
        {
          id: 4,
          video_name: 'intro to node.js',
          video_link: 'https://www.youtube.com/watch?v=JeH7l8fUps4&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=2',
          video_category: 'express',
          cat_id: 3
        },
        {
          id: 5,
          video_name: 'intro to npm',
          video_link: 'https://www.youtube.com/watch?v=CI9Bxf7Y9JM&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=7',
          video_category: 'express',
          cat_id: 3
        },
        {
          id: 6,
          video_name: 'about Redux',
          video_link: 'https://www.youtube.com/watch?v=FDx1B0QBrd4&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=13',
          video_category: 'react',
          cat_id: 3
        }
      ])
    })
}
