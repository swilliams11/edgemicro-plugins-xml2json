var parser = require('xml2json');

function transform(data) {
   return new Buffer(parser.toJson(data));
 }

module.exports.init = function(config, logger, stats) {

 return {
   onend_response: function(req, res, data, next) {
     // transform accumulated data, if any
     next(null, data ? transform(data) : null);
   }
 };
}
