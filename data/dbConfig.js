const knex = require("knex");
const knexConfig = require("../knexfile.js");
const env =  "development";
module.exports = knex(knexConfig[env]);