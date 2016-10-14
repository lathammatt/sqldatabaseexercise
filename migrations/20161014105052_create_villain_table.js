'use strict';

module.exports.up = (knex, Promise) =>
  knex.schema.createTable('Villains', table => {
    table.increments()
    table.string('name')
    table.string('weapon')
    table.string('armor')
    table.string('special move')
    table.string('strength')
    table.string('health')
    table.string('weakness')
  })


module.exports.down = (knex, Promise) =>
  knex.schema.dropTable('Villains')