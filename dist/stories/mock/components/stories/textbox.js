'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Textbox',
  summary: 'The <TextBox> tag defines a multi-line text input control. A TextBox can hold an unlimited number of characters, and the text renders in a fixed-width font (usually Courier). The size of a TextBox can be specified by the cols and rows attributes, or even better; through CSS height and width properties.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<TextBox\n    title="Get many resources in a single request"\n    text={`GraphQL queries access not just the properties of one resource but also smoothly\n    follow references between them. While typical REST APIs require loading from multiple URLs, \n    GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be \n    quick even on slow mobile network connections.`}\n/>',
    tabsActive: ['code']
  }]
};