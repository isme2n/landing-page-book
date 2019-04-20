'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _enzymeAdapterReact = require('enzyme-adapter-react-16');

var _enzymeAdapterReact2 = _interopRequireDefault(_enzymeAdapterReact);

var _Social = require('./Social');

var _Social2 = _interopRequireDefault(_Social);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _enzyme.configure)({ adapter: new _enzymeAdapterReact2.default() });

describe('Social', function () {
  var props = void 0;
  var mounted = void 0;

  var social = function social() {
    if (!mounted) {
      mounted = (0, _enzyme.shallow)(_react2.default.createElement(_Social2.default, props));
    }
    return mounted;
  };
  describe('Social', function () {
    beforeEach(function () {
      props = {
        gray: false,
        rounded: true,
        type: 'email',
        url: 'https://front10.com',
        directLink: true
      };
      mounted = undefined;
    });

    it('should render', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_Social2.default, props))).toMatchSnapshot();
    });

    it('always renders a div', function () {
      var divs = social().find('a');

      expect(divs.length).toBeGreaterThan(0);
    });

    it('always renders a div', function () {
      props = {
        gray: false,
        rounded: true,
        type: 'email',
        url: 'https://front10.com',
        directLink: false
      };
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement('social', { props: true }));
      var divs = wrapper.find('div');

      expect(divs.length).toBe(0);
    });
  });
});