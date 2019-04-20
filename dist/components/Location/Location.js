'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _googleMapReact = require('google-map-react');

var _googleMapReact2 = _interopRequireDefault(_googleMapReact);

var _LocationMarker = require('../LocationMarker');

var _LocationMarker2 = _interopRequireDefault(_LocationMarker);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Location = function (_Component) {
  _inherits(Location, _Component);

  function Location() {
    _classCallCheck(this, Location);

    return _possibleConstructorReturn(this, (Location.__proto__ || Object.getPrototypeOf(Location)).apply(this, arguments));
  }

  _createClass(Location, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          lat = _props.lat,
          lng = _props.lng,
          zoom = _props.zoom,
          apiKey = _props.apiKey,
          language = _props.language,
          markers = _props.markers,
          className = _props.className,
          height = _props.height;

      var bootstrapURLKeys = { key: apiKey, language: language };

      return _react2.default.createElement(
        'div',
        { className: className, style: { height: height } },
        _react2.default.createElement(
          _googleMapReact2.default,
          { center: { lat: lat, lng: lng }, zoom: zoom, bootstrapURLKeys: bootstrapURLKeys },
          markers.map(function (marker) {
            return _react2.default.createElement(_LocationMarker2.default, {
              key: marker.lat + '_' + marker.lng,
              lat: marker.lat,
              lng: marker.lng,
              textColor: marker.color,
              icon: marker.icon
            });
          })
        )
      );
    }
  }]);

  return Location;
}(_react.Component);

Location.propTypes = {
  /**
   * Latitude to initial center map.
   */
  lat: _propTypes2.default.number,
  /**
   * Longitude to initial center map.
   */
  lng: _propTypes2.default.number,
  /**
   * Zoom level of map.
   */
  zoom: _propTypes2.default.number,
  /**
   * Key of google maps project.
   */
  apiKey: _propTypes2.default.string,
  /**
   * Language of map.
   */
  language: _propTypes2.default.string,
  /**
   * Markers to shoe in the map.
   */
  markers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    icon: _propTypes2.default.string,
    color: _propTypes2.default.string,
    lat: _propTypes2.default.number,
    lng: _propTypes2.default.number
  })),
  /**
   * Class to apply.
   */
  className: _propTypes2.default.string,
  /**
   * Height of the map.
   */
  height: _propTypes2.default.string
};
Location.defaultProps = {
  lat: 0,
  lng: 0,
  zoom: 1,
  apiKey: '',
  language: 'en',
  markers: [],
  className: '',
  height: '50vh'
};

exports.default = (0, _WithStyles2.default)(Location);