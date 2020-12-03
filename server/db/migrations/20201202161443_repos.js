exports.up = function (knex) {
  return knex.schema.createTable('repos', table => {
    table.increments('id')
    table.string('repo_name')
    table.string('repo_link')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('repos')
}
