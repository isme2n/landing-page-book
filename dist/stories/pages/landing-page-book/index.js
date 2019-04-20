'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react3 = require('@storybook/react');

var _ThemeSwitcher = require('../../../addons/ThemeSwitcher');

var _GridComponents = require('../../../../storybook-utils/components/GridComponents');

var _GridComponents2 = _interopRequireDefault(_GridComponents);

var _components = require('../../../components');

var _data = require('./data/data');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { story, importCode } from './data/data';

// import SideBar from '../../../../storybook-utils/components/SideBar';
var stories = (0, _react3.storiesOf)('Pages', module);
// Import DATA


// import DetailsComponent from '../../../../storybook-utils/components/DetailsComponent';


stories.add('Landing Page Book', function () {
  return _react2.default.createElement(
    _ThemeSwitcher.ThemeSelector,
    null,
    _react2.default.createElement(
      'div',
      { className: 'ReactPage' },
      _react2.default.createElement(_components.Navbar, {
        transparent: false,
        fixed: true,
        brandName: 'Landing Page Book',
        brandLink: 'https://front10.com/landing-page-book/',
        brandLogo: 'images/logo/front10.png',
        expand: 'md',
        rightItems: _data.navbarData.rightItems,
        leftItems: _data.navbarData.leftItems
      }),
      _react2.default.createElement(_GridComponents2.default, { elements: _data.elements }),
      _react2.default.createElement(_components.Footer, {
        socialUrl: 'https://front10.com',
        copyright: 'Front10, LLC',
        socials: ['facebook', 'linkedin', 'google', 'twitter']
      })
    )
  );
});