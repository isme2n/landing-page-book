'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Container = require('../../Container/Container');

var _Container2 = _interopRequireDefault(_Container);

var _Button = require('../../Button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Header = require('../../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Image = require('../../Image/Image');

var _Image2 = _interopRequireDefault(_Image);

var _GithubButton = require('../../GithubButton/GithubButton');

var _GithubButton2 = _interopRequireDefault(_GithubButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StarMeUpTemplate = function (_Component) {
  _inherits(StarMeUpTemplate, _Component);

  function StarMeUpTemplate() {
    _classCallCheck(this, StarMeUpTemplate);

    return _possibleConstructorReturn(this, (StarMeUpTemplate.__proto__ || Object.getPrototypeOf(StarMeUpTemplate)).apply(this, arguments));
  }

  _createClass(StarMeUpTemplate, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          repository = _props.repository,
          username = _props.username,
          header = _props.header,
          subHeader = _props.subHeader,
          callToAction = _props.callToAction,
          productImage = _props.productImage;

      return _react2.default.createElement(
        _Container2.default,
        null,
        _react2.default.createElement(_Image2.default, {
          src: productImage.src,
          rounded: true,
          width: '160',
          alt: productImage.alt,
          className: 'main-logo'
        }),
        _react2.default.createElement(
          _Header2.default,
          { className: 'text-warning' },
          header
        ),
        _react2.default.createElement(
          _Header2.default,
          { type: 'h5', className: 'text-warning' },
          subHeader
        ),
        _react2.default.createElement(
          'div',
          { className: 'mt-5' },
          _react2.default.createElement(
            _Button2.default,
            null,
            callToAction.text
          ),
          _react2.default.createElement(_GithubButton2.default, {
            btnType: 'star',
            btnText: 'Stars',
            username: username,
            repository: repository
          })
        )
      );
    }
  }]);

  return StarMeUpTemplate;
}(_react.Component);

StarMeUpTemplate.propTypes = {
  repository: _propTypes2.default.string,
  username: _propTypes2.default.string,
  header: _propTypes2.default.string,
  subHeader: _propTypes2.default.string,
  callToAction: _propTypes2.default.shape({
    text: _propTypes2.default.string,
    link: _propTypes2.default.func,
    styles: _propTypes2.default.object
  }),
  productImage: _propTypes2.default.shape({
    src: _propTypes2.default.string,
    alt: _propTypes2.default.func
  })
};

StarMeUpTemplate.defaultProps = {
  repository: 'landing-page-book',
  username: 'front10',
  header: 'Landing Page Book',
  subHeader: 'React components to build!',
  callToAction: {
    text: 'Explore',
    link: 'https://front10.com'
  },
  productImage: {
    src: 'images/logo/front10.png',
    alt: 'Front10 logo'
  }
};

exports.default = StarMeUpTemplate;