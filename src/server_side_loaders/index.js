const sass = require('../loaders/sass');
const noSass = require('./no_sass');
const nullLoader = require('./null_loader');
const cssModules = require('./css_modules');

module.exports = {
  sass,
  noSass,
  nullLoader,
  cssModules,
};
