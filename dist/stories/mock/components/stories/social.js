'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  name: 'Social',
  summary: 'Websites and applications that enable users to create and share content or to participate in social networking. Allow your users to share the content of your website in their social networks.',
  import: '',
  withStyles: true,
  stories: [{
    name: 'Basic',
    summary: '',
    code: '<Social cssFilter="grayscale(100%)" type="facebook" rounded url="https://front10.com" directLink={false} />',
    tabsActive: ['code']
  }, {
    name: 'All',
    summary: '',
    code: '<>\n    <Social type="email" rounded url="https://front10.com" />\n    <Social type="facebook" rounded url="https://front10.com" />\n    <Social type="google" rounded url="https://front10.com" />\n    <Social type="linkedin" rounded url="https://front10.com" />\n    <Social type="livejournal" rounded url="https://front10.com" />\n    <Social type="ok" rounded url="https://front10.com" />\n    <Social type="pinterest" rounded url="https://front10.com" />\n    <Social type="reddit" rounded url="https://front10.com" />\n    <Social type="telegram" rounded url="https://front10.com" />\n    <Social type="tumblr" rounded url="https://front10.com" />\n    <Social type="twitter" rounded url="https://front10.com" />\n    <Social type="viber" rounded url="https://front10.com" />\n    <Social type="vk" rounded url="https://front10.com" />\n    <Social type="whatsapp" rounded url="https://front10.com" />\n</>',
    tabsActive: []
  }]
};