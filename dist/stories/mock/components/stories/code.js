'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Code',
  summary: 'Show code chunks can help to quickly explain the most complicated stuff ;)',
  import: '',
  extractProps: ['header', 'button', 'footer'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Code\n    languageCode="jsx"\n    collapsible\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code="<button>Button</button>"\n/>',
    tabsActive: ['code']
  }, {
    name: 'Code Simple',
    summary: '',
    code: '<Code\n    languageCode="jsx"\n    lineNumbers\n    showheader\n    collapsible={false}\n    showCopyButton={false}\n    showDeleteButton={false}\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code="<button>Button</button>"\n/>',
    tabsActive: ['code']
  }, {
    name: 'Code css',
    summary: '',
    code: '<Code\n    languageCode="css"\n    readOnly={false}\n    lineNumbers\n    showheader={false}\n    collapsible\n    showCopyButton\n    showDeleteButton\n    codeLink="https://codesandbox.io/s/pmjvk5wl27"\n    code=".my-css{color: red;}"\n/>',
    tabsActive: ['code']
  }]
};