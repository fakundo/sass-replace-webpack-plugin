#SASS Replace Webpack Plugin

[![npm](https://img.shields.io/npm/v/sass-replace-webpack-plugin.svg?maxAge=2592000)](https://www.npmjs.com/package/sass-replace-webpack-plugin)

Replaces SASS files like NormalModuleReplacementPlugin.

### Installation
```
npm install sass-replace-webpack-plugin
```

### Usage

webpack.config.js

```js
...
plugins: [
  new SassReplaceWebpackPlugin(regexp, replacer);
]
...
```

### Constructor parameters

- **`regexp`** `{RegExp}` - Regular expression to test path
- **`replacer`** `{String|Function}` - Path to the new resource. If new path is relative, it is relative to the previous resource.
