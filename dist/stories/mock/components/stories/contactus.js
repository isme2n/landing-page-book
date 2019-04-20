'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Contact Us',
  summary: 'Simple contact form, so that your users communicate easily through your website.',
  import: '',
  withStyles: true,
  extractProps: ['input', 'button'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<ContactUs\n    showText\n    showPlaceholder\n    apiUrl="https://maker.ifttt.com/trigger/front10_contactform/with/key/dFOibtTrDh8pCZ9laeYno"\n/>',
    tabsActive: ['code']
  }]
};