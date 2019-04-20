'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Image List',
  summary: 'Easy way to show an image list on your website.',
  import: '',
  withStyles: true,
  extractProps: ['image'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<ImageList \n    imageCssFilter="grayscale(100%)"\n    images={[\n        {image: \'https://front10.com/landing-page-book/images/image-list/react.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/graphql.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/apollo.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/storybook.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/angularjs.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/bootstrap.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/browserstack.png\'},\n        {image: \'https://front10.com/landing-page-book/images/image-list/jest.png\'}\n    ]}\n/>',
    tabsActive: ['code']
  }]
};