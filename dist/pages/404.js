'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _main = require('../gatsby-layouts/main');

var _main2 = _interopRequireDefault(_main);

var _hero = require('../stories/mock/components/data/hero');

var _hero2 = _interopRequireDefault(_hero);

var _components = require('../components');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    _main2.default,
    null,
    _react2.default.createElement(
      'div',
      { className: 'container p-4 mt-5 page' },
      _react2.default.createElement(
        _components.Row,
        null,
        _react2.default.createElement(
          _components.Column,
          { className: 'col col-12 col-md-6 box-error d-md-none d-lg-block' },
          _react2.default.createElement(_hero2.default, null)
        ),
        _react2.default.createElement(
          _components.Column,
          { className: 'col col-12 col-lg-6' },
          _react2.default.createElement(
            'div',
            { className: 'text-404 text-left' },
            _react2.default.createElement(
              'div',
              null,
              _react2.default.createElement(
                'h1',
                null,
                'PAGE NOT FOUND'
              ),
              _react2.default.createElement(
                'p',
                null,
                'You just hit a route that doesn\'t exist... the sadness.'
              ),
              _react2.default.createElement(
                'p',
                null,
                'Return to our home page'
              ),
              _react2.default.createElement(
                'a',
                { href: '/', className: 'btn btn-primary' },
                'Home'
              )
            )
          )
        )
      )
    )
  );
};

exports.default = NotFoundPage;