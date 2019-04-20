'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icons = require('../icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generateCode = '';
generateCode += '<Container>\n    <Link href="https://fontawesome.com/v4.7.0/icons/" tooltip="View all icons" target="_blank" className="btn btn-primary float-right m-3">View all icons</Link >\n    <div className="clearfix" />\n    <Row>';
// eslint-disable-next-line array-callback-return
_icons2.default.map(function (icon) {
  generateCode += '\n      <Column className="col col-xs-3 col-sm-2 text-center">\n          <div className="p-2 float-left">\n              <Icon icon=\'' + icon + '\' className=\'fa-2x\' />\n              <span style={{ fontSize: \'12px\' }} className=\'d-block\'>' + icon + '</span>\n          </div>\n      </Column>';
});
generateCode += '\n    </Row>\n</Container>';

exports.default = {
  name: 'Icon',
  summary: 'Icon element.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Icon icon="fa fa-cubes" className="fa-3x" />',
    tabsActive: ['code']
  }, {
    name: 'Differents sizes',
    summary: '',
    code: '<>\n    <Icon icon="fa fa-home" className="fa-1x" />\n    <Icon icon="fa fa-home" className="fa-2x" />\n    <Icon icon="fa fa-home" className="fa-3x" />\n    <Icon icon="fa fa-home" className="fa-4x" />\n    <Icon icon="fa fa-home" className="fa-5x" />\n</>',
    tabsActive: []
  }, {
    name: 'Differents colors',
    summary: '',
    code: '<>\n    <Icon icon="fa fa-home" className="fa-1x text-primary" />\n    <Icon icon="fa fa-home" className="fa-2x text-secondary" />\n    <Icon icon="fa fa-home" className="fa-3x text-success" />\n    <Icon icon="fa fa-home" className="fa-4x text-danger" />\n    <Icon icon="fa fa-home" className="fa-5x text-warning" />\n</>',
    tabsActive: []
  }, {
    name: 'All Icons',
    summary: '',
    code: generateCode,
    tabsActive: []
  }]
};