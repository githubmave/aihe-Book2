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
          video_category: 'auth'
        },
        {
          id: 2,
          video_name: 'intro to react',
          video_link: 'https://www.youtube.com/watch?v=rt43528rthh',
          video_category: 'react'
        },
        {
          id: 3,
          video_name: 'Reducers from scratch',
          video_link: 'https://www.youtube.com/watch?v=MM3qkRtzF4k&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=57',
          video_category: 'react'
        },
        {
          id: 4,
          video_name: 'intro to node.js',
          video_link: 'https://www.youtube.com/watch?v=JeH7l8fUps4&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=2',
          video_category: 'express'
        },
        {
          id: 5,
          video_name: 'intro to express',
          video_link: 'https://www.youtube.com/watch?v=nu70KSwXhKE&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=12',
          video_category: 'express'
        },
        {
          id: 6,
          video_name: 'testing express',
          video_link: 'https://www.youtube.com/watch?v=FDx1B0QBrd4&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=13',
          video_category: 'express'
        },
        {
          id: 7,
          video_name: 'Express router, JSON parse and stringify',
          video_link: 'https://www.youtube.com/watch?v=Tck_VN56AUU&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=21',
          video_category: 'express'
        },
        {
          id: 8,
          video_name: 'express post route writing to json data file',
          video_link: 'https://www.youtube.com/watch?v=LmhicXTia8k&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=22',
          video_category: 'express'
        },
        {
          id: 9,
          video_name: 'Introduction to express',
          video_link: 'https://www.youtube.com/watch?v=nu70KSwXhKE&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=12',
          video_category: 'express'
        },
        {
          id: 10,
          video_name: 'React state and event handling, code along',
          video_link: 'https://www.youtube.com/watch?v=2kdZddWB-us&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=38',
          video_category: 'react'
        },
        {
          id: 11,
          video_name: 'Calling external apis',
          video_link: 'https://www.youtube.com/watch?v=oxcJRs0W1I0&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=54',
          video_category: 'react'
        },
        {
          id: 12,
          video_name: 'React Router introduction',
          video_link: 'https://www.youtube.com/watch?v=SXogIlZTHXQ&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=42',
          video_category: 'react'
        },
        {
          id: 13,
          video_name: 'react forms',
          video_link: 'https://www.youtube.com/watch?v=4Ef69jyJFDM&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=43',
          video_category: 'react'
        },
        {
          id: 14,
          video_name: 'introduction to apis',
          video_link: 'https://www.youtube.com/watch?v=bDERMth4bE0&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=48',
          video_category: 'react'
        },
        {
          id: 15,
          video_name: 'Calling Apis from React',
          video_link: 'https://www.youtube.com/watch?v=fFERBhMu8Qw&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=51',
          video_category: 'react'
        },
        {
          id: 16,
          video_name: 'Introduction to redux',
          video_link: 'https://www.youtube.com/watch?v=2d2xlYRuHmM&list=PL_AE4CqTqcwLc2Zuz0v50qrI5xFAoy8Ug&index=55',
          video_category: 'react'
        }
      ])
    })
}