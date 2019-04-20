'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _container = require('../../gatsby-layouts/container');

var _container2 = _interopRequireDefault(_container);

var _GridComponents = require('../../../storybook-utils/components/GridComponents');

var _GridComponents2 = _interopRequireDefault(_GridComponents);

var _index = require('../../stories/mock/components/stories/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ComponentList = function ComponentList() {
  return _react2.default.createElement(
    _container2.default,
    null,
    _react2.default.createElement(_GridComponents2.default, { components: _index2.default })
  );
};

exports.default = ComponentList;