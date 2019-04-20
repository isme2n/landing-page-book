'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Button',
  summary: '<code class="code">Buttons</code> is based on <code class="code">Bootstrap</code> buttons and includes several predefined button styles, \n  each serving its own <code class="code">semantic</code> purpose, with a few extras thrown in for more control.',
  import: 'import { ThemeSelector } from \'../../../addons/ThemeSwitcher\';\n    import DetailsComponent from \'../../../../storybook-utils/components/DetailsComponent\';\n    import { Navbar, Footer } from \'../../../components\';',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Button color="primary" tooltip="This is a tooltip">\n  <Icon icon="fa fa-home" /> Home\n</Button>',
    tabsActive: ['code']
  }, {
    name: 'Buttons',
    summary: '',
    code: '<div>\n  <Button marginRight="1" color="primary"> Primary </Button>\n  <Button marginRight="1" color="secondary"> Secondary </Button>\n  <Button marginRight="1" color="success"> Success </Button>\n  <Button marginRight="1" color="danger"> Danger </Button>\n  <Button marginRight="1" color="warning"> Warning </Button>\n  <Button marginRight="1" color="info"> Info </Button>\n  <Button marginRight="1" color="light"> Light </Button>\n  <Button marginRight="1" color="dark"> Dark </Button>\n  <Button marginRight="1" color="link"> Link </Button>\n</div>',
    tabsActive: []
  }, {
    name: 'Buttons Outline',
    summary: '',
    code: '<>\n  <Button marginRight="1" outline color="primary">Primary</Button>\n  <Button marginRight="1" outline color="secondary">Secondary</Button>\n  <Button marginRight="1" outline color="success">Success</Button>\n  <Button marginRight="1" outline color="danger">Danger</Button>\n  <Button marginRight="1" outline color="warning">Warning</Button>\n  <Button marginRight="1" outline color="info">Info</Button>\n  <Button marginRight="1" outline color="light">Light</Button>\n  <Button marginRight="1" outline color="dark">Dark</Button>\n  <Button marginRight="1" outline color="link">Link</Button>\n</>',
    tabsActive: []
  }, {
    name: 'Size (small)',
    summary: '',
    code: '<>\n  <Button marginRight="1" color="primary" size="sm">Small button</Button>\n  <Button marginRight="1" color="secondary" size="sm">Small button</Button>\n</>',
    tabsActive: []
  }, {
    name: 'Size (large)',
    summary: '',
    code: '<>\n  <Button marginRight="1" color="primary" size="lg">Large button</Button>\n  <Button marginRight="1" color="secondary" size="lg">Large button</Button>\n</>',
    tabsActive: []
  }, {
    name: 'Desactivate state',
    summary: '',
    code: '<>\n  <Button marginRight="1" color="primary" disabled>Disabled button</Button>\n  <Button marginRight="1" color="secondary" disabled>Disabled button</Button>\n</>',
    tabsActive: []
  }, {
    name: 'Active state',
    summary: '',
    code: '<>\n  <Button marginRight="1" color="primary" active>Active button</Button>\n  <Button marginRight="1" color="secondary" active>Active button</Button>\n</>',
    tabsActive: []
  }]
};