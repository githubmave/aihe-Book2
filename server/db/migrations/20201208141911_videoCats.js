exports.up = function (knex) {
  return knex.schema.createTable('videoCats', table => {
    table.increments('id')
    table.string('cat_name')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('videoCats')
}
