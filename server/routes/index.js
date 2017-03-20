var path = require('path');

module.exports = function(app) {
  app.use('/api/product', require('../api/product'));
  app.use('/auth', require('./auth-controller'));
};
