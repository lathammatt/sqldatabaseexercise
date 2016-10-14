'use strict';

module.exports.up = (knex, Promise) =>
  knex.schema.createTable('Hero_Villain', table => {
    table.increments()
    table.string('hero_id')
    table.string('villain_id')
  })


module.exports.down = (knex, Promise) =>
  knex.schema.dropTable('Hero_Villain')
