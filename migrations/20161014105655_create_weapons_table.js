'use strict';

module.exports.up = (knex, Promise) =>
  knex.schema.createTable('Weapons', table => {
    table.increments()
    table.string('heavy')
    table.string('light')
  })


module.exports.down = (knex, Promise) =>
  knex.schema.dropTable('Weapons')
