'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _Markdown = require('../../../../storybook-utils/components/Markdown');

var _Markdown2 = _interopRequireDefault(_Markdown);

var _theming = require('../../../../theming.md');

var _theming2 = _interopRequireDefault(_theming);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Markdown from 'wix-storybook-utils/Markdown';
(0, _react3.storiesOf)('Introduction', module).add('Theming', function () {
  return _react2.default.createElement(_Markdown2.default, { source: _theming2.default });
});