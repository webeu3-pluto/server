const knex = require('knex');

const configOptions = require('../knexfile');

const environment = process.env.DB_ENV || 'development';

module.exports = knex(configOptions[environment]);