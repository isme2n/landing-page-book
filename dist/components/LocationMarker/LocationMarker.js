'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationMarker = function (_Component) {
  _inherits(LocationMarker, _Component);

  function LocationMarker() {
    _classCallCheck(this, LocationMarker);

    return _possibleConstructorReturn(this, (LocationMarker.__proto__ || Object.getPrototypeOf(LocationMarker)).apply(this, arguments));
  }

  _createClass(LocationMarker, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          icon = _props.icon,
          className = _props.className,
          lat = _props.lat,
          lng = _props.lng;

      return _react2.default.createElement(_Icon2.default, { className: className, icon: icon, lat: lat, lng: lng });
    }
  }]);

  return LocationMarker;
}(_react.Component);

LocationMarker.propTypes = {
  /**
   * Class to apply.
   */
  className: _propTypes2.default.string,
  /**
   * Marker latitude.
   */
  lat: _propTypes2.default.number.isRequired,
  /**
   * Marker longitude.
   */
  lng: _propTypes2.default.number.isRequired,
  /**
   * Icon to show in the marker.
   */
  icon: _propTypes2.default.string
  // /**
  //  * Marker color. Default `"#d43131"`
  //  */
  // color: PropTypes.string
};
LocationMarker.defaultProps = {
  className: '',
  icon: 'fa fa-map-marker'
  // color: '#d43131'
};

exports.default = (0, _WithStyles2.default)(LocationMarker);