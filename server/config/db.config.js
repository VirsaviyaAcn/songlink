module.exports = function () {
  var mongoose = require('mongoose');
  var url = process.env.NODE_ENV === 'production' ? 'mongodb://mongodb/songlink' : 'mongodb://localhost/songlink';
  mongoose.connect(url);
}
