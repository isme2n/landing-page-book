'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Navbar', function () {
  var props = void 0;
  var mounted = void 0;
  var navbar = function navbar() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Navbar2.default, props));
    }
    return mounted;
  };
  describe('Navbar', function () {
    beforeEach(function () {
      props = {
        transparent: false,
        fixed: false,
        brandName: 'front10',
        brandLink: 'https://www.front10.com',
        brandLogo: '/assets/images/logo/front10.png',
        className: '',
        expand: '',
        leftItems: [],
        rightItems: [],
        children: null,
        onItemClick: function onItemClick() {}
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Navbar2.default, props))).toMatchSnapshot();
    });

    it('Should render', function () {
      var divs = navbar().find('nav');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('Collapse', function () {
      navbar().instance().toggleCollapse();

      expect(navbar().state('collapse')).toBeTruthy();
    });
  });
});