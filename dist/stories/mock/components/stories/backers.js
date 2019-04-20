'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _backers = require('../backers');

var _backers2 = _interopRequireDefault(_backers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Backers',
  summary: 'A person, institution, or country that supports something, especially financially. Its important show the people who support your idea.',
  import: '',
  withStyles: true,
  extractProps: ['backer'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Backers\n    backers={' + JSON.stringify(_backers2.default, null, 8) + '}\n/>',
    tabsActive: ['code']
  }]
};