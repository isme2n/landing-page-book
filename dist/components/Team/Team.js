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

var _ExtractProps = require('../../helpers/ExtractProps');

var _ExtractProps2 = _interopRequireDefault(_ExtractProps);

var _Social = require('../Social');

var _Social2 = _interopRequireDefault(_Social);

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

var _Card = require('../Card');

var _Card2 = _interopRequireDefault(_Card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Team = function (_Component) {
  _inherits(Team, _Component);

  function Team() {
    _classCallCheck(this, Team);

    return _possibleConstructorReturn(this, (Team.__proto__ || Object.getPrototypeOf(Team)).apply(this, arguments));
  }

  _createClass(Team, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          showImage = _props.showImage,
          showName = _props.showName,
          showJob = _props.showJob,
          showSummary = _props.showSummary,
          socialGray = _props.socialGray,
          members = _props.members,
          imageCircle = _props.imageCircle,
          contentAlign = _props.contentAlign,
          imageBorder = _props.imageBorder,
          shadow = _props.shadow,
          topColor = _props.topColor,
          imageShadow = _props.imageShadow,
          columnClassName = _props.columnClassName;

      return _react2.default.createElement(
        'div',
        { className: 'Team row' },
        members.map(function (member) {
          return _react2.default.createElement(
            'div',
            {
              className: columnClassName + ' text-' + contentAlign + ' mb-4 Team--' + contentAlign,
              key: '' + member.name + member.job
            },
            _react2.default.createElement(
              'div',
              { className: 'Team__Color' },
              _react2.default.createElement('div', { className: 'Team__Color__Primary', style: { background: topColor } })
            ),
            _react2.default.createElement(
              _Card2.default,
              _extends({
                imageCircle: imageCircle,
                subTitle: showJob ? member.job : '',
                title: showName ? member.name : '',
                summary: showSummary ? member.summary : '',
                contentAlign: contentAlign,
                imageBorder: imageBorder,
                image: showImage ? member.image : '',
                shadow: shadow,
                imageShadow: imageShadow
              }, (0, _ExtractProps2.default)('member', _this2.props)),
              member.profile.map(function (item) {
                return _react2.default.createElement(_Social2.default, _extends({
                  key: item.social,
                  url: item.url,
                  type: item.social,
                  gray: socialGray
                }, (0, _ExtractProps2.default)('social', _this2.props)));
              })
            )
          );
        })
      );
    }
  }]);

  return Team;
}(_react.Component);

Team.propTypes = {
  /**
   * Show or hide image.
   */
  showImage: _propTypes2.default.bool,
  /**
   * Show or hide name.
   */
  showName: _propTypes2.default.bool,
  /**
   * Show or hide job.
   */
  showJob: _propTypes2.default.bool,
  /**
   * Show or hide summary.
   */
  showSummary: _propTypes2.default.bool,
  /**
   * Establishes if image is circled.
   */
  imageCircle: _propTypes2.default.bool,
  /**
   * Establishes if image is with border.
   */
  imageBorder: _propTypes2.default.bool,
  /**
   * Establishes if social icon is gray scale.
   */
  socialGray: _propTypes2.default.bool,
  /**
   * Establishes a shadow in each card.
   */
  shadow: _propTypes2.default.bool,
  /**
   * Establishes a shadow in user picture in each card.
   */
  imageShadow: _propTypes2.default.bool,
  /**
   * Color of each card.
   */
  topColor: _propTypes2.default.string,
  /**
   * Align of a component content. Can be <code>'center'</code>, <code>'left'</code> and <code>'right'</code> too
   */
  contentAlign: _propTypes2.default.string,
  /**
   * Class name of apply to the colums.
   */
  columnClassName: _propTypes2.default.string,
  /**
   * Array of members to show.
   */
  members: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    image: _propTypes2.default.string,
    name: _propTypes2.default.string,
    job: _propTypes2.default.string,
    summary: _propTypes2.default.string,
    profile: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      social: _propTypes2.default.string,
      url: _propTypes2.default.string
    }))
  }))
};
Team.defaultProps = {
  showImage: true,
  showName: true,
  showJob: true,
  showSummary: true,
  imageCircle: true,
  imageBorder: false,
  socialGray: false,
  shadow: false,
  imageShadow: false,
  topColor: 'transparent',
  contentAlign: 'center',
  columnClassName: 'col-12 col-sm- col-md',
  members: []
};

exports.default = (0, _WithStyles2.default)(Team);