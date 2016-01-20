module.exports = function () {
  var mongoose = require('mongoose');
  var url = process.env.NODE_ENV === 'production' ? 'mongodb://db/songlink' : 'mongodb://localhost/songlink';
  mongoose.connect(url);
}
