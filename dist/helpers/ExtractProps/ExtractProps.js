'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _WithStyles = require('../WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isAvailable = function isAvailable(prop) {
  /* eslint-disable react/forbid-foreign-prop-types */
  var stylesProps = (0, _WithStyles2.default)().propTypes;
  /* eslint-enable react/forbid-foreign-prop-types */
  return Object.keys(stylesProps).filter(function (item) {
    var patt = new RegExp('[a-z]+[a-z|A-Z]' + item.charAt(0).toUpperCase() + item.slice(1));
    return patt.test(prop);
  }).length > 0;
};

var extractProps = function extractProps(prefix, props) {
  var newProps = {};
  if (prefix) {
    var patt = new RegExp(prefix + '[A-Z]');
    Object.keys(props).map(function (prop) {
      if (patt.test(prop) && isAvailable(prop)) {
        var newProp = prop.substring(prefix.length);
        newProp = newProp.charAt(0).toLowerCase() + newProp.slice(1);
        newProps[newProp] = props[prop];
      }
      return prop;
    });
  }
  return newProps;
};

exports.default = extractProps;