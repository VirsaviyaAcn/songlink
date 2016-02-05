module.exports = function () {
  var mongoose = require('mongoose');
  var url = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/songlink';
  mongoose.connect(url);
}
