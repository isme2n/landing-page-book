'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Sponsors',
  summary: 'A person or organization that provides funds for you project or activity, give them an acknowledgment.',
  import: '',
  withStyles: true,
  extractProps: ['image'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Sponsors\n    imageCssFilter="grayscale(100%)"\n    sponsors={[\n        { image: \'https://front10.com/landing-page-book/images/sponsors/facebook.png\' },\n        { image: \'https://front10.com/landing-page-book/images/sponsors/google.png\' },\n        { image: \'https://front10.com/landing-page-book/images/sponsors/twitter.png\' },\n        { image: \'https://front10.com/landing-page-book/images/sponsors/salesforce.png\' },\n        { image: \'https://front10.com/landing-page-book/images/sponsors/amazon.png\' }\n    ]}\n/>',
    tabsActive: ['code']
  }]
};