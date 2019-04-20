'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Card = require('../Card/Card');

var _Card2 = _interopRequireDefault(_Card);

var _Location = require('../Location/Location');

var _Location2 = _interopRequireDefault(_Location);

var _Icon = require('../Icon/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _Label = require('../Label/Label');

var _Label2 = _interopRequireDefault(_Label);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactInfo = function (_Component) {
  _inherits(ContactInfo, _Component);

  function ContactInfo() {
    _classCallCheck(this, ContactInfo);

    return _possibleConstructorReturn(this, (ContactInfo.__proto__ || Object.getPrototypeOf(ContactInfo)).apply(this, arguments));
  }

  _createClass(ContactInfo, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          showBorder = _props.showBorder,
          lng = _props.lng,
          lat = _props.lat,
          locationApiKey = _props.locationApiKey,
          address = _props.address,
          email = _props.email,
          phone = _props.phone,
          mobile = _props.mobile,
          fax = _props.fax,
          website = _props.website,
          contentAlign = _props.contentAlign,
          showIcons = _props.showIcons,
          className = _props.className,
          mapHeight = _props.mapHeight;

      return _react2.default.createElement(
        _Card2.default,
        { showBorder: showBorder, contentAlign: contentAlign, className: className },
        lng && lat && locationApiKey && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Location mb-3' },
          _react2.default.createElement(_Location2.default, _extends({
            lng: lng,
            lat: lat,
            zoom: 12,
            markers: [{
              color: 'danger',
              lat: lat,
              lng: lng
            }],
            apiKey: locationApiKey,
            height: mapHeight
          }, (0, _ExtractProps2.default)('location', this.props)))
        ),
        address && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-map-marker' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: address }, (0, _ExtractProps2.default)('info', this.props)))
        ),
        email && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-envelope' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: email }, (0, _ExtractProps2.default)('info', this.props)))
        ),
        phone && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-phone' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: phone }, (0, _ExtractProps2.default)('info', this.props)))
        ),
        mobile && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-mobile' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: mobile }, (0, _ExtractProps2.default)('info', this.props)))
        ),
        fax && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-fax' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: fax }, (0, _ExtractProps2.default)('info', this.props)))
        ),
        website && _react2.default.createElement(
          'div',
          { className: 'ContactInfo__Information' },
          showIcons && _react2.default.createElement(_Icon2.default, _extends({ icon: 'fa fa-globe' }, (0, _ExtractProps2.default)('icon', this.props))),
          _react2.default.createElement(_Label2.default, _extends({ content: website }, (0, _ExtractProps2.default)('info', this.props)))
        )
      );
    }
  }]);

  return ContactInfo;
}(_react.Component);

ContactInfo.propTypes = {
  /**
   * Class to apply to icon
   */
  className: _propTypes2.default.string,
  /**
   * Show or hide card border
   */
  showBorder: _propTypes2.default.bool,
  /**
   * Show or hide icons in the information
   */
  showIcons: _propTypes2.default.bool,
  /**
   * Marker longitude
   */
  lng: _propTypes2.default.number,
  /**
   * Marker latitude
   */
  lat: _propTypes2.default.number,
  /**
   * Key of the map
   */
  locationApiKey: _propTypes2.default.string,
  /**
   *  Address info
   */
  address: _propTypes2.default.string,
  /**
   * Email contact info
   */
  email: _propTypes2.default.string,
  /**
   * Phone contact info
   */
  phone: _propTypes2.default.string,
  /**
   * Mobile contact info
   */
  mobile: _propTypes2.default.string,
  /**
   * Fax contact info
   */
  fax: _propTypes2.default.string,
  /**
   * Web contact info
   */
  website: _propTypes2.default.string,
  /**
   * Height of the map
   */
  mapHeight: _propTypes2.default.string,
  /**
   * Margin bottom of text
   */
  infoMarginBottom: _propTypes2.default.string
};
ContactInfo.defaultProps = {
  className: '',
  showBorder: true,
  showIcons: true,
  lng: 0,
  lat: 0,
  locationApiKey: '',
  address: '',
  email: '',
  phone: '',
  mobile: '',
  fax: '',
  website: '',
  mapHeight: '50vh',
  infoMarginBottom: '0'
};

exports.default = (0, _WithStyles2.default)(ContactInfo);