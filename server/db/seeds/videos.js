
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('videos').del()
    .then(function () {
      // Inserts seed entries
      return knex('videos').insert([
        {id:1, video_name: 'authentication', video_link:'https://www.youtube.com/watch?v=j3d5NdG6c6k', video_category:'auth'},
        {id:2, video_name: 'intro to react', video_link:'https://www.youtube.com/watch?v=rt43528rthh', video_category:'react'},
      ]);
    });
};
