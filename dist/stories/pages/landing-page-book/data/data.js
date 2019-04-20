'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarData = {
  rightItems: [{ title: 'Services' }, { title: 'Contact' }],
  leftItems: [{
    title: 'Introduction',
    href: '/introduction',
    target: '_blank'
  }, {
    title: 'Components',
    href: '/components',
    target: '_blank'
  }]
};

var importCode = '\nimport { ThemeSelector } from \'../../../addons/ThemeSwitcher\';\nimport DetailsComponent from \'../../../../storybook-utils/components/DetailsComponent\';\nimport { Navbar, Footer } from \'../../../components\';\n';

var story = [{
  name: 'Basic',
  summary: 'Esta es la descripción de la story Basic',
  code: '<Button tooltip="Tis is a button tooltip">\n        <Icon icon="fa fa-home" /> Home\n    </Button>',
  tabsActive: ['code']
}, {
  name: 'Buttons',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n    <Button className="mr-1" color="primary"> Primary </Button>\n    <Button className="mr-1" color="secondary"> Secondary </Button>\n    <Button className="mr-1" color="success"> Success </Button>\n    <Button className="mr-1" color="danger"> Danger </Button>\n    <Button className="mr-1" color="warning"> Warning </Button>\n    <Button className="mr-1" color="info"> Info </Button>\n    <Button className="mr-1" color="light"> Light </Button>\n    <Button className="mr-1" color="dark"> Dark </Button>\n    <Button className="mr-1" color="link"> Link </Button>\n</React.Fragment>',
  tabsActive: []
}, {
  name: 'Buttons Outline',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n        <Button className="mr-1" outline color="primary">Primary</Button>\n        <Button className="mr-1" outline color="secondary">Secondary</Button>\n        <Button className="mr-1" outline color="success">Success</Button>\n        <Button className="mr-1" outline color="danger">Danger</Button>\n        <Button className="mr-1" outline color="warning">Warning</Button>\n        <Button className="mr-1" outline color="info">Info</Button>\n        <Button className="mr-1" outline color="light">Light</Button>\n        <Button className="mr-1" outline color="dark">Dark</Button>\n        <Button className="mr-1" outline color="link">Link</Button>\n    </React.Fragment>',
  tabsActive: []
}, {
  name: 'Size (small)',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n        <Button className="mr-1" color="primary" size="sm">Small button</Button>\n        <Button className="mr-1" color="secondary" size="sm">Small button</Button>\n    </React.Fragment>',
  tabsActive: []
}, {
  name: 'Size (large)',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n        <Button className="mr-1" color="primary" size="lg">Large button</Button>\n        <Button className="mr-1" color="secondary" size="lg">Large button</Button>\n    </React.Fragment>',
  tabsActive: []
}, {
  name: 'Desactivate state',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n        <Button className="mr-1" color="primary" disabled>Disabled button</Button>\n        <Button className="mr-1" color="secondary" disabled>Disabled button</Button>\n    </React.Fragment>',
  tabsActive: []
}, {
  name: 'Active state',
  summary: 'Esta es la descripción de la story Default',
  code: '<React.Fragment>\n        <Button className="mr-1" color="primary" active>Active button</Button>\n        <Button className="mr-1" color="secondary" active>Active button</Button>\n    </React.Fragment>',
  tabsActive: []
}];

var elements = [{
  image: 'images/features/components.png',
  title: '+40 Components',
  link: 'https://front10.com'
}, {
  image: 'images/features/speed.png',
  title: 'Easy & Fast',
  link: 'https://front10.com'
}, {
  image: 'images/features/themes.png',
  title: 'Theming',
  link: 'https://front10.com'
}, {
  image: 'images/features/integration.png',
  title: 'Integration',
  link: 'https://front10.com'
}];

exports.navbarData = navbarData;
exports.story = story;
exports.importCode = importCode;
exports.elements = elements;