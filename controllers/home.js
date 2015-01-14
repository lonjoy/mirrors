/**!
 * mirrors - controllers/home.js
 *
 * Authors:
 *   dead_horse <dead_horse@qq.com> (https://github.com/dead-horse)
 */

'use strict';

/**
 * Module dependencies.
 */

var debug = require('debug')('mirrors:controllers:home');
var config = require('../config');

module.exports = function* () {
  yield this.render('home', {
    categories: config.categories
  });
};