'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Hero = require('./Hero');

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Hero', function () {
  var props = void 0;
  var mounted = void 0;
  var hero = function hero() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Hero2.default, props));
    }
    return mounted;
  };
  describe('Hero', function () {
    beforeEach(function () {
      props = {
        isFixed: true,
        isCentered: true,
        particles: true,
        opacity: 0,
        parallaxOffset: 0,
        image: '',
        overlayColor: '#fff',
        header: 'AAAAAAAAAAAAAAA',
        subHeader: 'BBBBBBBBBB',
        subHeaderPosition: 'bottom',
        minHeight: '100vh',
        backgroundColor: 'transparent',
        buttons: [],
        particlesParams: {},
        children: null
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Hero2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = hero().find('div');

      expect(divs.length).toBeGreaterThan(0);
    });
  });
});