'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ROOT_API: '"https://localhost:5001/api"',
  DEBUG: 'true',
  API_KEY: '"test"',
  // BASE_URL: 'http://localhost:8080'
})

// local api: 
// ROOT_API: '"https://api.igprog.hr/api"', // '"https://localhost:5001/api"',
// API_KEY: '"471b95c5b6c24481a4df5317e01efc2f"', // '"test"'

// VUE_APP_I18N_SUPPORTED_LOCALE=en,hr
