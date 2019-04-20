'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Contact Info',
  summary: 'It is always important to have the most information of your contacts, our component provides it.',
  import: '',
  withStyles: true,
  extractProps: ['icon', 'info'],
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<ContactInfo\n    showBorder\n    showIcons\n    lat={26.5}\n    lng={-80.2}\n    locationApiKey="AIzaSyCnbxTadExb8UYwzkBkQ_ITf5gFL_3jaAc"\n    address="9728 Birchwood St. Navarre, FL 32566"\n    email="contact@front10.com"\n    phone="+001 3521 4587"\n    mobile="+001 3521 4587"\n    fax="208-658744"\n    website="www.front10.com"\n/>',
    tabsActive: ['code']
  }]
};