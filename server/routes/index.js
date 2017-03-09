var path = require('path');

module.exports = function(app) {
  app.use('/api/product', require('../api/product'));

	// // catch 404 and forward to Angular
  // app.all('/*', function (req, res) {
  //   res.sendfile(__dirname + '/public/index.html');
  // });
};


// var express = require('express');
// var router = express.Router();
//
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
//
// module.exports = router;
