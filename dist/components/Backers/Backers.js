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

var _ImageList = require('../ImageList/ImageList');

var _ImageList2 = _interopRequireDefault(_ImageList);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Backers = function (_Component) {
  _inherits(Backers, _Component);

  function Backers(props) {
    _classCallCheck(this, Backers);

    var _this = _possibleConstructorReturn(this, (Backers.__proto__ || Object.getPrototypeOf(Backers)).call(this, props));

    _this.state = {};
    _this.formatData = _this.formatData.bind(_this);
    return _this;
  }

  _createClass(Backers, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.formatData(this.props);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var backers = this.props.backers;

      if (prevProps.backers !== backers) {
        this.formatData(this.props);
      }
    }
  }, {
    key: 'formatData',
    value: function formatData(_ref) {
      var backers = _ref.backers;

      var back = backers.map(function (backer) {
        return {
          image: backer.image,
          tooltip: '$' + backer.contributionAmount + ' by ' + backer.name,
          url: backer.profile
        };
      });
      this.setState({ backers: back });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          imageRounded = _props.imageRounded,
          imageBordered = _props.imageBordered,
          className = _props.className,
          style = _props.style;
      var backers = this.state.backers;

      return _react2.default.createElement(
        'div',
        { className: 'Backers' },
        _react2.default.createElement(_ImageList2.default, _extends({
          imageRounded: imageRounded,
          images: backers,
          imageBordered: imageBordered,
          className: className,
          style: style
        }, (0, _ExtractProps2.default)('backer', this.props)))
      );
    }
  }]);

  return Backers;
}(_react.Component);

Backers.propTypes = {
  /**
   * CSS class name for custom styles
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any),
  /**
   * If true the image will be rounded as a circle
   */
  imageRounded: _propTypes2.default.bool,
  /**
   * If true the image will have a solid border
   */
  imageBordered: _propTypes2.default.bool,
  /**
   * List of backers
   */
  backers: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string,
    profile: _propTypes2.default.string,
    image: _propTypes2.default.string,
    contributionAmount: _propTypes2.default.number
  }))
};
Backers.defaultProps = {
  className: '',
  style: null,
  imageRounded: true,
  imageBordered: true,
  backers: []
};

exports.default = (0, _WithStyles2.default)(Backers);