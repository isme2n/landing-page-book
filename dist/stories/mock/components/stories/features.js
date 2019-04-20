'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _features = require('../features');

var _features2 = _interopRequireDefault(_features);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'Features',
  summary: 'Features are distinctive attribute or aspect of a product or service. Use it to highlight the most valuable pieces of your project, product or service.',
  import: '',
  extractProps: ['feature', 'featureSubTitle', 'featureSummary', 'button'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Features\n    buttonColor="primary"\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>',
    tabsActive: ['code']
  }, {
    name: 'Image & title',
    summary: '',
    code: '<Features\n    showSubtitle={false}\n    showSummary={false}\n    showFooter={false}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>',
    tabsActive: []
  }, {
    name: 'With shadow',
    summary: '',
    code: '<Features\n    shadow\n    showSubtitle={false}\n    showFooter={false}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>',
    tabsActive: []
  }, {
    name: 'With image shadow',
    summary: '',
    code: '<Features\n      imageShadow\n      showSubtitle={false}\n      showFooter={false}\n      imageCircle={true}\n    features={' + JSON.stringify(_features2.default, null, 8) + '}\n/>',
    tabsActive: []
  }]
};