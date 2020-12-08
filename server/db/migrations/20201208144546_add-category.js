
exports.up = function (knex) {
    return knex.schema.table('videos', function (table) {
      table.integer('cat_id')
    })
  }
  
  exports.down = function (knex) {
    return knex.schema.table('videos', function (table) {
      table.dropColumn('cat_id')
    })
  }
  