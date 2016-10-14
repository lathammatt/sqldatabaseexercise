'use strict';

module.exports.up = (knex, Promise) =>
  knex.schema.createTable('Battlefields', table => {
    table.increments()
    table.string('good')
    table.string('evil')
  })


module.exports.down = (knex, Promise) =>
  knex.schema.dropTable('Battlefields')
