'use strict'

const Villain = require('../models/Villain')

module.exports.seed = (knex, Promise) => 
  new Villain({
    name: 'Ganon',
    weapon: 'trident',
    armor: 'plate armor',
    special_move: 'shapeshift',
    strength: 'magic',
    health: 'immortal',
    weakness: 'arrogance'
  }).save()


