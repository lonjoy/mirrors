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

var path = require('path');
var config = require('../config');

var names = [];
for (var key in config.categories) {
  var category = config.categories[key];
  names.push(category.name);
}
var title = names.join(', ') + ' Mirrors';

module.exports = function* () {
  var pathname = path.join(config.mount, this.path).replace(/\/+$/, '');
  yield this.render('home', {
    title: title,
    categories: config.categories,
    baseUrl: this.protocol + '://' + this.host + pathname,
  });
};
