'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactShare = require('react-share');

var _WithStyles = require('../../helpers/WithStyles');

var _WithStyles2 = _interopRequireDefault(_WithStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var available = {
  facebook: [_reactShare.FacebookShareButton, _reactShare.FacebookIcon],
  google: [_reactShare.GooglePlusShareButton, _reactShare.GooglePlusIcon],
  linkedin: [_reactShare.LinkedinShareButton, _reactShare.LinkedinIcon],
  twitter: [_reactShare.TwitterShareButton, _reactShare.TwitterIcon],
  telegram: [_reactShare.TelegramShareButton, _reactShare.TelegramIcon],
  whatsapp: [_reactShare.WhatsappShareButton, _reactShare.WhatsappIcon],
  pinterest: [_reactShare.PinterestShareButton, _reactShare.PinterestIcon],
  vk: [_reactShare.VKShareButton, _reactShare.VKIcon],
  ok: [_reactShare.OKShareButton, _reactShare.OKIcon],
  tumblr: [_reactShare.TumblrShareButton, _reactShare.TumblrIcon],
  livejournal: [_reactShare.LivejournalShareButton, _reactShare.LivejournalIcon],
  viber: [_reactShare.ViberShareButton, _reactShare.ViberIcon],
  email: [_reactShare.EmailShareButton, _reactShare.EmailIcon],
  reddit: [_reactShare.RedditShareButton, _reactShare.RedditIcon]
};

var Social = function (_Component) {
  _inherits(Social, _Component);

  function Social() {
    _classCallCheck(this, Social);

    return _possibleConstructorReturn(this, (Social.__proto__ || Object.getPrototypeOf(Social)).apply(this, arguments));
  }

  _createClass(Social, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          url = _props.url,
          rounded = _props.rounded,
          type = _props.type,
          directLink = _props.directLink,
          className = _props.className,
          style = _props.style;

      return directLink ? _react2.default.createElement('a', {
        href: url,
        target: '_blank',
        className: className + ' SocialMediaShareButton',
        style: style
      }, _react2.default.createElement(available[type] ? available[type][1] : available.email[1], {
        round: rounded
      })) : _react2.default.createElement(available[type] ? available[type][0] : available.email[0], {
        className: '' + className,
        url: url,
        media: 'Share in Pinterest',
        style: style
      }, _react2.default.createElement(available[type] ? available[type][1] : available.email[1], {
        round: rounded
      }));
    }
  }]);

  return Social;
}(_react.Component);

Social.propTypes = {
  /**
   * Show buttons rounded or square.
   */
  rounded: _propTypes2.default.bool,
  /**
   * Type of button. Possibles values are: <code>'email'</code>, <code>'facebook'</code>, <code>'google'</code>, <code>'linkedin'</code>, <code>'twitter'</code>, <code>'telegram'</code>, <code>'whatsapp'</code>, <code>'pinterest'</code>, <code>'vk'</code>, <code>'ok'</code>, <code>'reddit'</code>, <code>'tumblr'</code>, <code>'livejournal'</code>, <code>'email'</code>, <code>'viber'</code>
   */
  type: _propTypes2.default.string,
  /**
   * Url to share.
   */
  url: _propTypes2.default.string,
  /**
   * Indicates if it is redirected to a link within the social network or a floating window is displayed to share the link using the social network.
   */
  directLink: _propTypes2.default.bool,
  /**
   * Class to apply.
   */
  className: _propTypes2.default.string,
  /**
   * Css style applied to the component
   */
  style: _propTypes2.default.objectOf(_propTypes2.default.any)
};
Social.defaultProps = {
  rounded: true,
  type: 'email',
  url: '',
  directLink: true,
  className: '',
  style: null
};

exports.default = (0, _WithStyles2.default)(Social);