exports.up = function (knex) {
  return knex.schema.createTable('videos', table => {
    table.increments('id')
    table.string('video_name')
    table.string('video_link')
    table.string('video_category')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('videos')
}
