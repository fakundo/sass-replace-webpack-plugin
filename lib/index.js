var webpack = require('webpack');
var SassReplaceWebpackResolverPlugin = require('./resolverPlugin');

function SassReplaceWebpackPlugin(regexp, replacer) {
  this.regexp = regexp;
  this.replacer = replacer;
}

SassReplaceWebpackPlugin.prototype.apply = function(compiler) {
  var resolverPlugin = new webpack.ResolverPlugin([
    new SassReplaceWebpackResolverPlugin(this.regexp, this.replacer)
  ]);
  resolverPlugin.apply(compiler);
};

module.exports = SassReplaceWebpackPlugin;
module.exports.SassReplaceWebpackResolverPlugin = SassReplaceWebpackResolverPlugin;
