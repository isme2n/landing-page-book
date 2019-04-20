"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var indexCodeExample = "\nimport bar from './bar';\n\nbar();\n";

var barCodeExample = "\nexport default function bar() {\n  //\n}\n";

var configCodeExample = "\nconst path = require('path');\n\nmodule.exports = {\n  entry: './src/index.js',\n  output: {\n    path: path.resolve(__dirname, 'dist'),\n    filename: 'bundle.js'\n  }\n};\n";

var pageCodeExample = "\n<!doctype html>\n<html>\n  <head>\n    ...\n  </head>\n  <body>\n    ...\n    <script src=\"dist/bundle.js\"></script>\n  </body>\n</html>\n";

exports.indexCodeExample = indexCodeExample;
exports.barCodeExample = barCodeExample;
exports.configCodeExample = configCodeExample;
exports.pageCodeExample = pageCodeExample;