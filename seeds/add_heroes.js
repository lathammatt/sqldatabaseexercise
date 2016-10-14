'use strict';

const Hero = require('../models/Hero')

module.exports.seed = (knex, Promise) =>
  new Hero({
    name: 'Link',
    weapon: 'sword',
    armor: 'sheild',
    special_move: 'power sword',
    strength: 'weak',
    health: 'three hearts',
    weakness: 'everything'
  }).save()
