// Generated by CoffeeScript 1.7.1
(function() {
  module.exports = function(app) {
    var picture;
    picture = require('../app/controller/picture');
    return app.get('/fileServ/picture/update', picture.update);
  };

}).call(this);
