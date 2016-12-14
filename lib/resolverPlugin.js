var path = require('path');

function SassReplaceWebpackResolverPlugin(regexp, resolver) {
  this.regexp = regexp;
  this.resolver = resolver;
}

SassReplaceWebpackResolverPlugin.prototype.apply = function(resolver) {
  var self = this;
  resolver.plugin('result', function(request, callback) {
    // Test SASS file and match pattern
    if (isSassFile(request.path) && self.regexp.test(request.path)) {
      // Make new path
      var newPath = typeof self.resolver === 'function' ?
        self.resolver(request.path) :
        self.resolver.toString();
      // Make it relative
      newPath = path.resolve(path.dirname(request.path), newPath);
      // Make new resolve object
      var resolveObject = {
        request: newPath,
        path: request.path,
        query: request.query,
        directory: request.directory
      };
      // Resolve new file
      this.doResolve(['file'], resolveObject, callback);
    } else {
      callback();
    }
  });
};

function isSassFile(path) {
  return /\.(scss|sass)$/i.test(path);
}

module.exports = SassReplaceWebpackResolverPlugin;
