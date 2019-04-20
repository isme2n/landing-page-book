'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Built With',
  summary: 'Libraries or projects that you used to achieve your goals.',
  withStyles: true,
  extractProps: ['image'],
  import: '',
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<BuiltWith\n    imageCssFilter="grayscale(100%)"\n    companies={[\n        { image: \'https://front10.com/landing-page-book/images/buildwith/bootstrap.png\' },\n        { image: \'https://front10.com/landing-page-book/images/buildwith/browserstack.png\' },\n        { image: \'https://front10.com/landing-page-book/images/buildwith/jest.png\' },\n        { image: \'https://front10.com/landing-page-book/images/buildwith/react.png\' },\n        { image: \'https://front10.com/landing-page-book/images/buildwith/storybook.png\' }\n    ]}\n/>',
    tabsActive: ['code']
  }]
};