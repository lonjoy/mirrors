/**!
 * mirrors - common/sequelize.js
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 *   dead_horse <dead_horse@qq.com> (https://github.com/dead-horse)
 */

'use strict';

/**
 * Module dependencies.
 */

var DataTypes = require('sequelize/lib/data-types');
var Sequelize = require('sequelize');
var config = require('../config');

var database = config.database;

// sync database before app start, defaul is false
database.syncFirst = false;

// add longtext for mysql
Sequelize.LONGTEXT = DataTypes.LONGTEXT = DataTypes.TEXT;
if (config.dialect === 'mysql') {
  Sequelize.LONGTEXT = DataTypes.LONGTEXT = 'LONGTEXT';
}

database.define = {
  timestamps: true,
  createdAt: 'gmt_create',
  updatedAt: 'gmt_modified',
  charset: 'utf8',
  collate: 'utf8_general_ci',
};

var sequelize = new Sequelize(database.db, database.username, database.password, database);

module.exports = sequelize;
