'use strict';

const Battle = require('../models/Battlefields')

module.exports.seed = (knex, Promise) =>
  new Battle({
    good: 'legoland',
    evil: 'volcanic',
  }).save()
