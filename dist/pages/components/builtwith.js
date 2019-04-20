'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../../gatsby-layouts/main');

var _main2 = _interopRequireDefault(_main);

var _DetailsComponent = require('../../../storybook-utils/components/DetailsComponent');

var _DetailsComponent2 = _interopRequireDefault(_DetailsComponent);

var _builtwith = require('../../stories/mock/components/stories/builtwith');

var _builtwith2 = _interopRequireDefault(_builtwith);

var _map = require('../../components/BuiltWith/map.json');

var _map2 = _interopRequireDefault(_map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComponentView = function (_React$Component) {
  _inherits(ComponentView, _React$Component);

  function ComponentView() {
    _classCallCheck(this, ComponentView);

    return _possibleConstructorReturn(this, (ComponentView.__proto__ || Object.getPrototypeOf(ComponentView)).apply(this, arguments));
  }

  _createClass(ComponentView, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _main2.default,
        { pagePushedFunction: this.handlepushedPageLayout },
        _builtwith2.default && _react2.default.createElement(_DetailsComponent2.default, {
          name: _builtwith2.default.name,
          linkGithub: 'https://github.com/front10/landing-page-book/tree/master/src/components/BuiltWith',
          description: _builtwith2.default.summary,
          stories: _builtwith2.default.stories,
          importCode: _builtwith2.default.import,
          withStyles: _builtwith2.default.withStyles,
          extractProps: _builtwith2.default.extractProps,
          propsDescription: _map2.default.props
        })
      );
    }
  }]);

  return ComponentView;
}(_react2.default.Component);

exports.default = ComponentView;